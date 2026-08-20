import { useEffect, useState } from "react";

export type LiveRates = Record<string, { usd: number; ngn: number }>;

const COINS = ["bitcoin", "ethereum", "tether", "solana"] as const;
const ENDPOINT = `https://api.coingecko.com/api/v3/simple/price?ids=${COINS.join(",")}&vs_currencies=usd,ngn`;

export function useLiveRates() {
  const [rates, setRates] = useState<LiveRates | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    fetch(ENDPOINT)
      .then((res) => {
        if (!res.ok) throw new Error("rates unavailable");
        return res.json();
      })
      .then((data: LiveRates) => {
        if (cancelled) return;
        setRates(data);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { rates, status };
}
