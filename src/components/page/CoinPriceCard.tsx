import type { Coin } from "../../data/coins";
import { formatNgn } from "../../data/coins";
import { formatLagosTime, useCoinPrice, useMarketTicker } from "../../hooks/useMarketTicker";
import Sparkline from "./Sparkline";
import styles from "./Page.module.css";

export default function CoinPriceCard({ coin }: { coin: Coin }) {
  const live = useCoinPrice(coin.id);
  const { updatedAt } = useMarketTicker();
  const up = (live?.change24h ?? 0) >= 0;

  return (
    <div className={styles.priceCard}>
      <div className={styles.priceHead}>
        <span className={styles.priceCoin}>
          <coin.Icon size={36} />
          <span>
            <strong>{coin.name}</strong>
            <small>{coin.symbol} to NGN</small>
          </span>
        </span>
        <span className={styles.liveTag}>
          <i /> Live
        </span>
      </div>

      <div className={styles.priceValue}>
        <strong>{live ? `₦${formatNgn(live.price)}` : "₦ —"}</strong>
        {live && (
          <span className={up ? styles.up : styles.down}>
            {up ? "▲" : "▼"} {Math.abs(live.change24h).toFixed(2)}% (24h)
          </span>
        )}
      </div>

      <Sparkline points={live?.sparkline} up={up} className={styles.priceChart} />

      <p className={styles.priceNote}>
        Market price for 1 {coin.symbol}
        {updatedAt ? `, as of ${formatLagosTime(updatedAt)} (Lagos)` : ""}. Your exact rate is shown in the app
        before you send.
      </p>
    </div>
  );
}
