import Container from "../ui/Container";
import IconTile from "../ui/IconTile";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import LiveRatePreview from "../ui/visuals/LiveRatePreview";
import CoinStack from "../ui/visuals/CoinStack";
import BillIconsRow from "../ui/visuals/BillIconsRow";
import PinDots from "../ui/visuals/PinDots";
import VerificationChecklist from "../ui/visuals/VerificationChecklist";
import { ChartIcon, CreditCardIcon, FingerprintIcon, ShieldIcon, WalletIcon } from "../icons";
import styles from "./FeatureGrid.module.css";

export default function FeatureGrid() {
  return (
    <section id="features" className={styles.section}>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Features"
          title="Everything you need in one wallet"
          description="Pyker brings selling crypto and spending in USD together, so your crypto works as hard as you do."
        />

        <div className={styles.bento}>
          <Reveal className={`${styles.cell} ${styles.big} ${styles.dark}`}>
            <IconTile tone="glass">
              <CreditCardIcon width={20} height={20} />
            </IconTile>
            <h3 className={styles.cardTitle}>Virtual USD card</h3>
            <p className={styles.cardText}>
              Fund a virtual dollar card straight from your wallet and spend anywhere Visa is accepted online.
            </p>
          </Reveal>

          <Reveal delay={80} className={styles.cell}>
            <h3 className={styles.cardTitle}>Bill payments</h3>
            <p className={styles.cardText}>Pay for airtime, data, electricity and cable TV from your balance.</p>
            <div className={styles.visualSlot}>
              <BillIconsRow />
            </div>
          </Reveal>

          <Reveal delay={140} className={styles.cell}>
            <IconTile tone="green">
              <ShieldIcon width={20} height={20} />
            </IconTile>
            <h3 className={styles.cardTitle}>Secure verification</h3>
            <p className={styles.cardText}>BVN and identity checks keep your account protected.</p>
            <div className={styles.visualSlot}>
              <VerificationChecklist />
            </div>
          </Reveal>

          <Reveal delay={200} className={`${styles.cell} ${styles.wide}`}>
            <div className={styles.wideTop}>
              <IconTile tone="primary">
                <ChartIcon width={20} height={20} />
              </IconTile>
              <div>
                <h3 className={styles.cardTitle}>Real-time rates</h3>
                <p className={styles.cardText}>Live market prices for every asset, always up to date.</p>
              </div>
            </div>
            <div className={styles.visualSlot}>
              <LiveRatePreview />
            </div>
          </Reveal>

          <Reveal delay={260} className={`${styles.cell} ${styles.wide}`}>
            <div className={styles.wideTop}>
              <IconTile tone="dark">
                <WalletIcon width={20} height={20} />
              </IconTile>
              <div>
                <h3 className={styles.cardTitle}>13 coins, one payout</h3>
                <p className={styles.cardText}>Sell Bitcoin, Ethereum, Solana, USDT and 9 more assets — straight to Naira.</p>
              </div>
            </div>
            <div className={styles.visualSlot}>
              <CoinStack />
            </div>
          </Reveal>

          <Reveal delay={320} className={`${styles.cell} ${styles.wide}`}>
            <div className={styles.wideTop}>
              <IconTile tone="green">
                <FingerprintIcon width={20} height={20} />
              </IconTile>
              <div>
                <h3 className={styles.cardTitle}>PIN &amp; biometric lock</h3>
                <p className={styles.cardText}>Every transaction is protected by your PIN or biometrics.</p>
              </div>
            </div>
            <div className={styles.visualSlot}>
              <PinDots />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
