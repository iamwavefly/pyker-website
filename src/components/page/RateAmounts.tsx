import { coinDecimals, formatCoin, formatNgn, type Coin } from "../../data/coins";
import { NAIRA_AMOUNTS } from "../../content/coinRates";
import { useCoinRate } from "../../hooks/useMarketTicker";
import styles from "./Page.module.css";

/** Common amounts both ways, at today's rate. Pre-rendered, so the figures are indexable. */
export default function RateAmounts({ coin }: { coin: Coin }) {
  const rate = useCoinRate(coin.id);
  const decimals = rate ? coinDecimals(rate.price) : 2;

  return (
    <div className={styles.amountGrid}>
      <div>
        <h3 id={`${coin.slug}-to-ngn`} className={styles.amountTitle}>
          {coin.symbol} to naira
        </h3>
        <div className={styles.amountBox}>
          <table className={styles.amounts} aria-labelledby={`${coin.slug}-to-ngn`}>
            <thead>
              <tr>
                <th scope="col">{coin.symbol}</th>
                <th scope="col">Naira (NGN)</th>
              </tr>
            </thead>
            <tbody>
              {coin.amounts.map((amount) => (
                <tr key={amount}>
                  <th scope="row">
                    {formatCoin(amount)} {coin.symbol}
                  </th>
                  <td>{rate ? `₦${formatNgn(amount * rate.price)}` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 id={`ngn-to-${coin.slug}`} className={styles.amountTitle}>
          Naira to {coin.symbol}
        </h3>
        <div className={styles.amountBox}>
          <table className={styles.amounts} aria-labelledby={`ngn-to-${coin.slug}`}>
            <thead>
              <tr>
                <th scope="col">Naira (NGN)</th>
                <th scope="col">{coin.symbol}</th>
              </tr>
            </thead>
            <tbody>
              {NAIRA_AMOUNTS.map((amount) => (
                <tr key={amount}>
                  <th scope="row">₦{formatNgn(amount)}</th>
                  <td>{rate ? `${formatCoin(amount / rate.price, decimals)} ${coin.symbol}` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
