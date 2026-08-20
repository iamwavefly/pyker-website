import { useMemo, useState } from "react";
import { useLiveRates } from "../../hooks/useLiveRates";
import { SwapIcon } from "../icons";
import styles from "./QuickConvert.module.css";

const COINS = [
  { id: "bitcoin", symbol: "BTC" },
  { id: "ethereum", symbol: "ETH" },
  { id: "tether", symbol: "USDT" },
  { id: "solana", symbol: "SOL" },
] as const;

type Direction = "crypto" | "ngn";

export default function QuickConvert({ className }: { className?: string }) {
  const { rates, status } = useLiveRates();
  const [amount, setAmount] = useState("0.01");
  const [coinId, setCoinId] = useState<(typeof COINS)[number]["id"]>("bitcoin");
  const [direction, setDirection] = useState<Direction>("crypto");

  const symbol = COINS.find((coin) => coin.id === coinId)?.symbol ?? "";
  const inputUnit = direction === "crypto" ? symbol : "NGN";
  const resultUnit = direction === "crypto" ? "NGN" : symbol;

  const result = useMemo(() => {
    const parsed = Number.parseFloat(amount);
    if (!rates || !rates[coinId] || Number.isNaN(parsed)) return null;
    const rate = rates[coinId].ngn;
    return direction === "crypto" ? parsed * rate : parsed / rate;
  }, [amount, coinId, rates, direction]);

  function toggleDirection() {
    if (result !== null) {
      setAmount(direction === "crypto" ? result.toFixed(0) : result.toFixed(6));
    }
    setDirection((d) => (d === "crypto" ? "ngn" : "crypto"));
  }

  if (status === "error") return null;

  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.header}>
        <span className={styles.label}>Quick convert</span>
        <select
          className={styles.assetSelect}
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
        <span className={styles.unit}>{inputUnit}</span>
      </div>

      <button
        type="button"
        className={styles.toggle}
        onClick={toggleDirection}
        aria-label="Swap conversion direction"
      >
        <SwapIcon width={13} height={13} />
      </button>

      <span className={styles.result}>
        {status === "loading" && "Fetching live rate…"}
        {status === "ready" &&
          result !== null &&
          `≈ ${result.toLocaleString("en-NG", {
            maximumFractionDigits: direction === "crypto" ? 0 : 6,
          })} ${resultUnit}`}
      </span>
    </div>
  );
}
