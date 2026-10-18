import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import {
  CheckCircleIcon,
  EyeSlashIcon,
  FingerprintIcon,
  IdCardIcon,
  LimitsIcon,
  RetryIcon,
} from "../icons";
import styles from "./Security.module.css";

const POINTS = [
  { Icon: IdCardIcon, title: "Verified accounts only", text: "Every account is checked against a BVN, with a liveness check to prove it's really you." },
  { Icon: EyeSlashIcon, title: "Your BVN stays yours", text: "We keep only the last four digits. The full number is never written to our database." },
  { Icon: RetryIcon, title: "Charged once. Never twice.", text: "If a bad connection repeats a request, it's processed one time only." },
  { Icon: LimitsIcon, title: "Limits that grow with you", text: "Tiered limits keep new accounts safe and unlock more as you verify further." },
];

function PinPad() {
  return (
    <div className={styles.pin}>
      <span className={styles.pinLabel}>Enter your PIN to fund card</span>
      <div className={styles.dots}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={i < 3 ? styles.dotOn : ""} />
        ))}
      </div>
      <div className={styles.keys}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((k) => (
          <span key={k}>{k}</span>
        ))}
        <span className={styles.bio}>
          <FingerprintIcon width={20} height={20} />
        </span>
        <span>0</span>
        <span />
      </div>
    </div>
  );
}

function Ledger() {
  return (
    <div className={styles.ledger}>
      <div className={styles.ledgerHead}>
        <span>Ledger entry</span>
        <span className={styles.mono}>TX·8F2A·91C4</span>
      </div>
      {[
        ["Debit", "Settlement", "₦382,500.00"],
        ["Credit", "NGN Wallet", "₦382,500.00"],
      ].map(([side, account, amount]) => (
        <div key={side} className={styles.entry}>
          <span className={styles.side}>{side}</span>
          <span>{account}</span>
          <strong>{amount}</strong>
        </div>
      ))}
      <div className={styles.balanced}>
        <CheckCircleIcon width={16} height={16} />
        Balanced
      </div>
    </div>
  );
}

export default function Security() {
  return (
    <section id="security" className={styles.section}>
      <Container>
        <div className={styles.head}>
          <span className={styles.eyebrow}>Security</span>
          <h2 className="display">
            Every naira, <span className="accent">accounted for</span>
          </h2>
          <p>Pyker is built like a bank ledger, not a spreadsheet. Here's what protects your money behind every tap.</p>
        </div>

        <div className={styles.big}>
          <Reveal className={styles.bigCard}>
            <div className={styles.bigCopy}>
              <h3>Your PIN on every move</h3>
              <p>Withdrawals, card funding and revealing card details all ask for your PIN or biometrics.</p>
            </div>
            <div className={styles.bigVisual}>
              <PinPad />
            </div>
          </Reveal>
          <Reveal delay={90} className={styles.bigCard}>
            <div className={styles.bigCopy}>
              <h3>A double-entry ledger</h3>
              <p>Every naira is recorded as matching debits and credits, so your balance always adds up.</p>
            </div>
            <div className={styles.bigVisual}>
              <Ledger />
            </div>
          </Reveal>
        </div>

        <div className={styles.small}>
          {POINTS.map(({ Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 70} className={styles.smallCard}>
              <span className={styles.icon}>
                <Icon width={24} height={24} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
