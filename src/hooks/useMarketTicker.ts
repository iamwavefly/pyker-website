import { useSyncExternalStore } from "react";
import { COINS, COIN_IDS } from "../data/coins";
import { PYKER_API_URL } from "../data/links";

export type TickerCoin = {
  id: string;
  symbol: string;
  price: number;
  change24h: number;
  sparkline: number[];
};

/** Pyker's own sell rates, by symbol (e.g. "USDT"), in naira per 1 unit. */
export type PykerRates = {
  rates: Record<string, number>;
  /** Naira per $1, as the app's "USD rate" row shows it. */
  usdRate: number | null;
  /** When Pyker last refreshed them, in epoch milliseconds. */
  updatedAt: number;
};

export type TickerState = {
  /** Market data from CoinGecko: price, 24h change and 7-day chart. */
  coins: TickerCoin[] | null;
  status: "loading" | "ready" | "error";
  /** When the market data was fetched, in epoch milliseconds. */
  updatedAt: number | null;
  /** Pyker's own rates, preferred over the market price wherever shown. */
  pyker: PykerRates | null;
};

/** The naira figure to show for a coin: Pyker's rate if known, else market. */
export type CoinRate = {
  price: number;
  source: "pyker" | "market";
  /** When `price` was last updated, in epoch milliseconds. */
  updatedAt: number | null;
  change24h: number | null;
  sparkline: number[];
};

declare global {
  interface Window {
    /** Prices fetched at build time and baked into pre-rendered pages. */
    __PYKER_TICKER__?: TickerState;
  }
}

const MARKET_ENDPOINT = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&ids=${COIN_IDS.join(
  ","
)}&sparkline=true&price_change_percentage=24h`;
const PYKER_ENDPOINT = `${PYKER_API_URL}/api/v1/rates`;

const MARKET_REFRESH_MS = 60_000;
// Pyker caches its rates for hours, so there's no point asking often.
const PYKER_REFRESH_MS = 15 * 60_000;

const EMPTY: TickerState = { coins: null, status: "loading", updatedAt: null, pyker: null };

function resample(points: number[], count: number) {
  if (points.length <= count) return points;
  const step = points.length / count;
  return Array.from({ length: count }, (_, i) => points[Math.floor(i * step)]);
}

async function fetchMarket(signal?: AbortSignal): Promise<TickerCoin[]> {
  const res = await fetch(MARKET_ENDPOINT, { signal });
  if (!res.ok) throw new Error("market data unavailable");
  const data: any[] = await res.json();
  return data.map((coin) => ({
    id: coin.id,
    symbol: (coin.symbol as string).toUpperCase(),
    price: coin.current_price,
    change24h: coin.price_change_percentage_24h ?? 0,
    sparkline: resample(coin.sparkline_in_7d?.price ?? [], 48),
  }));
}

async function fetchPykerRates(signal?: AbortSignal): Promise<PykerRates> {
  const res = await fetch(PYKER_ENDPOINT, { signal });
  if (!res.ok) throw new Error("pyker rates unavailable");
  const data: {
    rates: { asset: string; rate: number }[];
    usd_rate?: { rate: number };
    updated_at: string;
  } = await res.json();
  const rates: Record<string, number> = {};
  for (const rate of data.rates) rates[rate.asset.toUpperCase()] = rate.rate;
  if (Object.keys(rates).length === 0) throw new Error("no pyker rates");
  return { rates, usdRate: data.usd_rate?.rate ?? null, updatedAt: Date.parse(data.updated_at) || Date.now() };
}

/** Fetches both sources; either can fail without failing the other. */
export async function fetchTicker(signal?: AbortSignal): Promise<TickerState> {
  const [market, pyker] = await Promise.allSettled([fetchMarket(signal), fetchPykerRates(signal)]);
  if (market.status === "rejected" && pyker.status === "rejected") throw market.reason;
  return {
    coins: market.status === "fulfilled" ? market.value : null,
    status: market.status === "fulfilled" ? "ready" : "error",
    updatedAt: market.status === "fulfilled" ? Date.now() : null,
    pyker: pyker.status === "fulfilled" ? pyker.value : null,
  };
}

// One shared store for every widget on the page, so each source sees a
// single request per refresh no matter how many components read prices.
//
// `hydrationState` is what the server rendered with: primed by the
// pre-renderer, then read back from the page in the browser so the first
// client render matches the HTML exactly.
let hydrationState: TickerState =
  (typeof window !== "undefined" && window.__PYKER_TICKER__) || EMPTY;
let state: TickerState = hydrationState;
const listeners = new Set<() => void>();
let timers: ReturnType<typeof setInterval>[] = [];

export function primeTicker(snapshot: TickerState | null) {
  hydrationState = snapshot ?? EMPTY;
  state = hydrationState;
}

function emit(next: Partial<TickerState>) {
  state = { ...state, ...next };
  listeners.forEach((listener) => listener());
}

// Each source keeps its last good value if a refresh fails.
function loadMarket() {
  fetchMarket()
    .then((coins) => emit({ coins, status: "ready", updatedAt: Date.now() }))
    .catch(() => {
      if (!state.coins) emit({ status: "error" });
    });
}

function loadPyker() {
  fetchPykerRates()
    .then((pyker) => emit({ pyker }))
    .catch(() => {});
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (timers.length === 0) {
    loadMarket();
    loadPyker();
    timers = [setInterval(loadMarket, MARKET_REFRESH_MS), setInterval(loadPyker, PYKER_REFRESH_MS)];
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      timers.forEach(clearInterval);
      timers = [];
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

/** The rate to show for a coin: Pyker's own when available, else the market price. */
export function rateFor(state: TickerState, id: string): CoinRate | null {
  const market = state.coins?.find((coin) => coin.id === id) ?? null;
  const symbol = COINS.find((coin) => coin.id === id)?.symbol;
  // USDT shows the same value as the USD rate (Breet's direct $1 rate).
  const pykerRate =
    symbol === "USDT" && state.pyker?.usdRate ? state.pyker.usdRate : symbol ? state.pyker?.rates[symbol] : undefined;
  if (pykerRate) {
    return {
      price: pykerRate,
      source: "pyker",
      updatedAt: state.pyker?.updatedAt ?? null,
      change24h: market?.change24h ?? null,
      sparkline: market?.sparkline ?? [],
    };
  }
  if (!market) return null;
  return {
    price: market.price,
    source: "market",
    updatedAt: state.updatedAt,
    change24h: market.change24h,
    sparkline: market.sparkline,
  };
}

export function useCoinRate(id: string) {
  return rateFor(useMarketTicker(), id);
}

/** "14:05, 18 Oct" in Lagos time, formatted by hand so server and browser agree. */
export function formatLagosTime(epochMs: number) {
  const lagos = new Date(epochMs + 60 * 60 * 1000); // WAT is UTC+1 year-round
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const hh = String(lagos.getUTCHours()).padStart(2, "0");
  const mm = String(lagos.getUTCMinutes()).padStart(2, "0");
  return `${hh}:${mm}, ${lagos.getUTCDate()} ${months[lagos.getUTCMonth()]}`;
}
