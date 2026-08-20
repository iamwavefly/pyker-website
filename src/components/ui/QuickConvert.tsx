import { useMemo, useState } from "react";
import { useLiveRates } from "../../hooks/useLiveRates";
import styles from "./QuickConvert.module.css";

const COINS = [
  { id: "bitcoin", symbol: "BTC" },
  { id: "ethereum", symbol: "ETH" },
  { id: "tether", symbol: "USDT" },
  { id: "solana", symbol: "SOL" },
] as const;

export default function QuickConvert({ className }: { className?: string }) {
  const { rates, status } = useLiveRates();
  const [amount, setAmount] = useState("0.01");
  const [coinId, setCoinId] = useState<(typeof COINS)[number]["id"]>("bitcoin");

  const ngnValue = useMemo(() => {
    const parsed = Number.parseFloat(amount);
    if (!rates || !rates[coinId] || Number.isNaN(parsed)) return null;
    return parsed * rates[coinId].ngn;
  }, [amount, coinId, rates]);

  if (status === "error") return null;

  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <span className={styles.label}>Quick convert</span>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="number"
          min="0"
          step="any"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          aria-label="Amount"
        />
        <select
          className={styles.select}
          value={coinId}
          onChange={(e) => setCoinId(e.target.value as (typeof COINS)[number]["id"])}
          aria-label="Asset"
        >
          {COINS.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.symbol}
            </option>
          ))}
        </select>
      </div>
      <span className={styles.result}>
        {status === "loading" && "Fetching live rate…"}
        {status === "ready" && ngnValue !== null && `≈ ₦${ngnValue.toLocaleString("en-NG", { maximumFractionDigits: 0 })}`}
      </span>
    </div>
  );
}
