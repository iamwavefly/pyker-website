import { useMarketTicker } from "../../hooks/useMarketTicker";
import TrendSparkline from "../ui/visuals/TrendSparkline";
import { BtcIcon, EthIcon, SolIcon, UsdtIcon } from "../icons/crypto";
import { BoltIcon, CreditCardIcon, LockIcon, WalletIcon } from "../icons";
import styles from "./ValueStrip.module.css";

const TRUST_ITEMS = [
  { icon: LockIcon, label: "Bank-level encryption" },
  { icon: BoltIcon, label: "Instant naira payouts" },
  { icon: CreditCardIcon, label: "Virtual USD card" },
  { icon: WalletIcon, label: "13 coins supported" },
];

const COIN_META: Record<string, { Icon: typeof BtcIcon; name: string }> = {
  bitcoin: { Icon: BtcIcon, name: "Bitcoin" },
  ethereum: { Icon: EthIcon, name: "Ethereum" },
  tether: { Icon: UsdtIcon, name: "Tether" },
  solana: { Icon: SolIcon, name: "Solana" },
};

function formatNgn(value: number) {
  return new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: value < 100 ? 2 : 0,
  }).format(value);
}

function TrustTrack() {
  return (
    <div className={styles.track}>
      {TRUST_ITEMS.map(({ icon: Icon, label }) => (
        <div className={styles.trustItem} key={label}>
          <Icon width={18} height={18} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function TickerTrack({ coins }: { coins: NonNullable<ReturnType<typeof useMarketTicker>["coins"]> }) {
  return (
    <div className={styles.track}>
      <div className={styles.liveLabel}>
        <span className={styles.liveDot} />
        Live rates
      </div>
      {coins.map((coin) => {
        const meta = COIN_META[coin.id];
        const positive = coin.change24h >= 0;
        return (
          <div className={styles.coinCard} key={coin.id}>
            <span className={styles.coinBadge}>{meta && <meta.Icon size={18} />}</span>
            <div className={styles.coinInfo}>
              <span className={styles.coinSymbol}>{coin.symbol}</span>
              <span className={styles.coinPrice}>₦{formatNgn(coin.price)}</span>
            </div>
            <TrendSparkline points={coin.sparkline} positive={positive} />
            <span className={positive ? styles.changeUp : styles.changeDown}>
              {positive ? "▲" : "▼"} {Math.abs(coin.change24h).toFixed(1)}%
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function ValueStrip() {
  const { coins, status } = useMarketTicker();
  const ready = status === "ready" && coins;

  return (
    <div className={styles.strip}>
      <div className={styles.marquee}>
        {ready ? (
          <>
            <TickerTrack coins={coins} />
            <TickerTrack coins={coins} />
          </>
        ) : (
          <>
            <TrustTrack />
            <TrustTrack />
          </>
        )}
      </div>
    </div>
  );
}
