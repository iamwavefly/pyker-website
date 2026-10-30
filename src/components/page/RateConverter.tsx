import { useState } from "react";
import { coinDecimals, formatCoin, formatNgn, type Coin } from "../../data/coins";
import { useCoinRate } from "../../hooks/useMarketTicker";
import styles from "./Page.module.css";

type Side = "coin" | "ngn";

function parse(value: string) {
  const number = Number(value.replace(/,/g, ""));
  return Number.isFinite(number) && number >= 0 ? number : null;
}

/** Two linked fields: type in either the coin or the naira amount. */
export default function RateConverter({ coin, initial }: { coin: Coin; initial: number }) {
  const rate = useCoinRate(coin.id);
  const [edit, setEdit] = useState<{ side: Side; value: string }>({ side: "coin", value: String(initial) });

  const typed = parse(edit.value);
  let coinValue = edit.value;
  let ngnValue = edit.value;
  if (edit.side === "coin") {
    ngnValue = rate && typed !== null ? formatNgn(typed * rate.price) : "";
  } else {
    coinValue = rate && typed !== null ? formatCoin(typed / rate.price, coinDecimals(rate.price)) : "";
  }

  const field = (side: Side, label: string, unit: string, value: string) => (
    <label className={styles.convertField}>
      <span>{label}</span>
      <span className={styles.convertInput}>
        <input
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={value}
          onChange={(event) => setEdit({ side, value: event.target.value.replace(/[^\d.,]/g, "") })}
          onFocus={(event) => {
            if (edit.side !== side) setEdit({ side, value: value.replace(/,/g, "") });
            event.target.select();
          }}
        />
        <strong>{unit}</strong>
      </span>
    </label>
  );

  return (
    <div className={styles.converter}>
      {field("coin", "You sell", coin.symbol, coinValue)}
      <span className={styles.convertEquals} aria-hidden="true">
        =
      </span>
      {field("ngn", "You get about", "NGN", ngnValue)}
      <p className={styles.convertNote}>
        {rate
          ? `At ₦${formatNgn(rate.price)} per ${coin.symbol}. Your exact amount is shown in the app before you send.`
          : "Rates are loading. Your exact amount is shown in the app before you send."}
      </p>
    </div>
  );
}
