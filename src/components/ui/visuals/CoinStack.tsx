import { BtcIcon, EthIcon, SolIcon, UsdtIcon } from "../../icons/crypto";
import styles from "./CoinStack.module.css";

const COINS = [
  { key: "btc", Icon: BtcIcon },
  { key: "eth", Icon: EthIcon },
  { key: "usdt", Icon: UsdtIcon },
  { key: "sol", Icon: SolIcon },
];

export default function CoinStack() {
  return (
    <div className={styles.stack} aria-hidden="true">
      {COINS.map(({ key, Icon }, i) => (
        <span key={key} className={styles.coin} style={{ zIndex: COINS.length - i }}>
          <Icon size={20} />
        </span>
      ))}
    </div>
  );
}
