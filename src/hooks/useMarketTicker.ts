import { useSyncExternalStore } from "react";
import { COIN_IDS } from "../data/coins";

export type TickerCoin = {
  id: string;
  symbol: string;
  price: number;
  change24h: number;
  sparkline: number[];
};

export type TickerState = {
  coins: TickerCoin[] | null;
  status: "loading" | "ready" | "error";
  /** When the prices were fetched, in epoch milliseconds. */
  updatedAt: number | null;
};

declare global {
  interface Window {
    /** Prices fetched at build time and baked into pre-rendered pages. */
    __PYKER_TICKER__?: TickerState;
  }
}

const ENDPOINT = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&ids=${COIN_IDS.join(
  ","
)}&sparkline=true&price_change_percentage=24h`;

const REFRESH_MS = 60_000;

const EMPTY: TickerState = { coins: null, status: "loading", updatedAt: null };

function resample(points: number[], count: number) {
  if (points.length <= count) return points;
  const step = points.length / count;
  return Array.from({ length: count }, (_, i) => points[Math.floor(i * step)]);
}

export async function fetchTicker(signal?: AbortSignal): Promise<TickerState> {
  const res = await fetch(ENDPOINT, { signal });
  if (!res.ok) throw new Error("market data unavailable");
  const data: any[] = await res.json();
  const coins: TickerCoin[] = data.map((coin) => ({
    id: coin.id,
    symbol: (coin.symbol as string).toUpperCase(),
    price: coin.current_price,
    change24h: coin.price_change_percentage_24h ?? 0,
    sparkline: resample(coin.sparkline_in_7d?.price ?? [], 48),
  }));
  return { coins, status: "ready", updatedAt: Date.now() };
}

// One shared poller for every widget on the page, so CoinGecko sees a single
// request per minute no matter how many components read prices.
//
// `hydrationState` is what the server rendered with: primed by the
// pre-renderer, then read back from the page in the browser so the first
// client render matches the HTML exactly.
let hydrationState: TickerState =
  (typeof window !== "undefined" && window.__PYKER_TICKER__) || EMPTY;
let state: TickerState = hydrationState;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;

export function primeTicker(snapshot: TickerState | null) {
  hydrationState = snapshot ?? EMPTY;
  state = hydrationState;
}

function emit(next: TickerState) {
  state = next;
  listeners.forEach((listener) => listener());
}

function load() {
  fetchTicker()
    .then(emit)
    .catch(() => {
      // Keep showing the last good prices if a refresh fails.
      if (!state.coins) emit({ coins: null, status: "error", updatedAt: null });
    });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!timer) {
    load();
    timer = setInterval(load, REFRESH_MS);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

export function useMarketTicker() {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => hydrationState
  );
}

export function useCoinPrice(id: string) {
  const { coins } = useMarketTicker();
  return coins?.find((coin) => coin.id === id) ?? null;
}

/** "14:05, 18 Oct" in Lagos time, formatted by hand so server and browser agree. */
export function formatLagosTime(epochMs: number) {
  const lagos = new Date(epochMs + 60 * 60 * 1000); // WAT is UTC+1 year-round
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const hh = String(lagos.getUTCHours()).padStart(2, "0");
  const mm = String(lagos.getUTCMinutes()).padStart(2, "0");
  return `${hh}:${mm}, ${lagos.getUTCDate()} ${months[lagos.getUTCMonth()]}`;
}
