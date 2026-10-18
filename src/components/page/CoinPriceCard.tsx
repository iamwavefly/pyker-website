import type { Coin } from "../../data/coins";
import { formatNgn } from "../../data/coins";
import { formatLagosTime, useCoinRate, useMarketTicker } from "../../hooks/useMarketTicker";
import Sparkline from "./Sparkline";
import styles from "./Page.module.css";

export default function CoinPriceCard({ coin }: { coin: Coin }) {
  const rate = useCoinRate(coin.id);
  const usdRate = useMarketTicker().pyker?.usdRate ?? null;
  const up = (rate?.change24h ?? 0) >= 0;
  const pyker = rate?.source === "pyker";

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
          <i /> {pyker ? "Conversion rate" : "Market"}
        </span>
      </div>

      <div className={styles.priceValue}>
        <strong>{rate ? `₦${formatNgn(rate.price)}` : "₦ —"}</strong>
        {rate && rate.change24h !== null && (
          <span className={up ? styles.up : styles.down}>
            {up ? "▲" : "▼"} {Math.abs(rate.change24h).toFixed(2)}% (24h)
          </span>
        )}
      </div>

      <Sparkline points={rate?.sparkline} up={up} className={styles.priceChart} />

      {usdRate && (
        <div className={styles.usdRow}>
          <span>USD rate</span>
          <strong>$1 = ₦{formatNgn(usdRate)}</strong>
        </div>
      )}

      <p className={styles.priceNote}>
        {pyker ? `What Pyker pays for 1 ${coin.symbol}` : `Market price for 1 ${coin.symbol}`}
        {rate?.updatedAt ? `, as of ${formatLagosTime(rate.updatedAt)} (Lagos)` : ""}. Your exact rate is shown in
        the app before you send.
      </p>
    </div>
  );
}
