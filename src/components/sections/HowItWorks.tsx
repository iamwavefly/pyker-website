import Container from "../ui/Container";
import Card from "../ui/Card";
import IconTile from "../ui/IconTile";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { BillIcon, ShieldIcon, SwapIcon } from "../icons";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    step: "01",
    icon: ShieldIcon,
    title: "Verify your identity",
    description: "Sign up and complete a quick BVN and identity check to secure your account.",
  },
  {
    step: "02",
    icon: SwapIcon,
    title: "Send your crypto",
    description: "Send BTC, ETH, USDT or any of 13 supported coins to your Pyker address and see a live Naira quote before you confirm.",
  },
  {
    step: "03",
    icon: BillIcon,
    title: "Spend or pay bills",
    description: "Fund a virtual USD card, or pay for airtime, data and bills straight from your Naira balance.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="Get started in three simple steps"
          description="No paperwork, no waiting days for approval. Most people sell their first crypto within minutes of signing up."
        />

        <div className={styles.grid}>
          {STEPS.map(({ step, icon: Icon, title, description }, index) => (
            <Reveal key={step} delay={index * 120}>
              <Card className={styles.card}>
                <div className={styles.cardTop}>
                  <IconTile>
                    <Icon width={20} height={20} />
                  </IconTile>
                  <span className={styles.step}>{step}</span>
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
