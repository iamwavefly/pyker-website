import { useEffect, useState } from "react";

export type TickerCoin = {
  id: string;
  symbol: string;
  price: number;
  change24h: number;
  sparkline: number[];
};

const IDS = ["bitcoin", "ethereum", "tether", "solana"];
const ENDPOINT = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&ids=${IDS.join(
  ","
)}&sparkline=true&price_change_percentage=24h`;

function resample(points: number[], count: number) {
  if (points.length <= count) return points;
  const step = points.length / count;
  return Array.from({ length: count }, (_, i) => points[Math.floor(i * step)]);
}

export function useMarketTicker() {
  const [coins, setCoins] = useState<TickerCoin[] | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    function load() {
      fetch(ENDPOINT)
        .then((res) => {
          if (!res.ok) throw new Error("market data unavailable");
          return res.json();
        })
        .then((data: any[]) => {
          if (cancelled) return;
          const parsed: TickerCoin[] = data.map((coin) => ({
            id: coin.id,
            symbol: (coin.symbol as string).toUpperCase(),
            price: coin.current_price,
            change24h: coin.price_change_percentage_24h ?? 0,
            sparkline: resample(coin.sparkline_in_7d?.price ?? [], 24),
          }));
          setCoins(parsed);
          setStatus("ready");
        })
        .catch(() => {
          if (cancelled) return;
          setStatus("error");
        });
    }

    load();
    const interval = setInterval(load, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return { coins, status };
}
