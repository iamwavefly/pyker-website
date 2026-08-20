import { useMarketTicker } from "../../../hooks/useMarketTicker";
import TrendSparkline from "./TrendSparkline";
import styles from "./LiveRatePreview.module.css";

export default function LiveRatePreview() {
  const { coins, status } = useMarketTicker();
  const btc = status === "ready" ? coins?.find((coin) => coin.id === "bitcoin") : null;

  if (!btc) {
    return <span className={styles.loading}>Fetching live rate…</span>;
  }

  const positive = btc.change24h >= 0;

  return (
    <div className={styles.wrap}>
      <div className={styles.info}>
        <span className={styles.label}>BTC / NGN</span>
        <span className={styles.price}>₦{new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(btc.price)}</span>
      </div>
      <TrendSparkline points={btc.sparkline} positive={positive} />
      <span className={positive ? styles.up : styles.down}>
        {positive ? "▲" : "▼"} {Math.abs(btc.change24h).toFixed(1)}%
      </span>
    </div>
  );
}
