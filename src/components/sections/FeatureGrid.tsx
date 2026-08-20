import Container from "../ui/Container";
import IconTile from "../ui/IconTile";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import LiveRatePreview from "../ui/visuals/LiveRatePreview";
import CoinStack from "../ui/visuals/CoinStack";
import BillIconsRow from "../ui/visuals/BillIconsRow";
import PinDots from "../ui/visuals/PinDots";
import VerificationChecklist from "../ui/visuals/VerificationChecklist";
import { AirtimeIcon, ChartIcon, CreditCardIcon, FingerprintIcon, ShieldIcon, WalletIcon } from "../icons";
import styles from "./FeatureGrid.module.css";

const FEATURES = [
  {
    icon: CreditCardIcon,
    tone: "glass" as const,
    dark: true,
    title: "Virtual USD card",
    description: "Fund a virtual dollar card straight from your wallet and spend anywhere Visa is accepted online.",
    Visual: null,
  },
  {
    icon: AirtimeIcon,
    tone: "orange" as const,
    title: "Bill payments",
    description: "Pay for airtime, data, electricity and cable TV from your balance.",
    Visual: BillIconsRow,
  },
  {
    icon: ShieldIcon,
    tone: "green" as const,
    title: "Secure verification",
    description: "BVN and identity checks keep your account protected.",
    Visual: VerificationChecklist,
  },
  {
    icon: ChartIcon,
    tone: "primary" as const,
    title: "Real-time rates",
    description: "Live market prices for every asset, always up to date.",
    Visual: LiveRatePreview,
  },
  {
    icon: WalletIcon,
    tone: "dark" as const,
    title: "13 coins, one payout",
    description: "Sell Bitcoin, Ethereum, Solana, USDT and 9 more assets — straight to Naira.",
    Visual: CoinStack,
  },
  {
    icon: FingerprintIcon,
    tone: "green" as const,
    title: "PIN & biometric lock",
    description: "Every transaction is protected by your PIN or biometrics.",
    Visual: PinDots,
  },
];

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
          {FEATURES.map(({ icon: Icon, tone, dark, title, description, Visual }, index) => (
            <Reveal key={title} delay={index * 70} className={`${styles.cell} ${dark ? styles.dark : ""}`}>
              <div className={styles.top}>
                <IconTile tone={tone}>
                  <Icon width={20} height={20} />
                </IconTile>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{description}</p>
              </div>
              {Visual && (
                <div className={styles.visualSlot}>
                  <Visual />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
