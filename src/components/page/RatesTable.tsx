import { Link } from "react-router-dom";
import { COINS, formatNgn, sellPath } from "../../data/coins";
import { formatLagosTime, rateFor, useMarketTicker } from "../../hooks/useMarketTicker";
import Sparkline from "./Sparkline";
import styles from "./Page.module.css";

export default function RatesTable() {
  const ticker = useMarketTicker();
  const pyker = ticker.pyker !== null;
  const asOf = pyker ? ticker.pyker!.updatedAt : ticker.updatedAt;

  return (
    <div className={styles.ratesWrap}>
      <table className={styles.rates}>
        <thead>
          <tr>
            <th scope="col">Coin</th>
            <th scope="col">{pyker ? "Pyker rate" : "Price in naira"}</th>
            <th scope="col">24h change</th>
            <th scope="col" className={styles.hideSm}>
              Last 7 days
            </th>
            <th scope="col" className={styles.hideSm}>
              <span className="sr-only">Sell</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {COINS.map((coin) => {
            const live = rateFor(ticker, coin.id);
            const up = (live?.change24h ?? 0) >= 0;
            return (
              <tr key={coin.id}>
                <th scope="row">
                  <Link to={sellPath(coin)} className={styles.rateCoin}>
                    <coin.Icon size={32} />
                    <span>
                      {coin.name}
                      <small>{coin.symbol}/NGN</small>
                    </span>
                  </Link>
                </th>
                <td className={styles.ratePrice}>{live ? `₦${formatNgn(live.price)}` : "—"}</td>
                <td className={up ? styles.up : styles.down}>
                  {live && live.change24h !== null ? `${up ? "+" : "−"}${Math.abs(live.change24h).toFixed(2)}%` : "—"}
                </td>
                <td className={styles.hideSm}>
                  <Sparkline points={live?.sparkline} up={up} className={styles.rateSpark} fill={false} />
                </td>
                <td className={`${styles.rateAction} ${styles.hideSm}`}>
                  <Link to={sellPath(coin)}>Sell {coin.symbol}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className={styles.ratesNote}>
        {pyker
          ? "What Pyker pays for 1 unit of each coin, for new accounts, updated every few hours"
          : "Market prices from CoinGecko"}
        {asOf ? `, as of ${formatLagosTime(asOf)} (Lagos time)` : ""}. 24h change and charts show the wider market. Your
        exact rate is shown in the app before you send.
      </p>
    </div>
  );
}
