import PageIntro from "../components/ui/PageIntro";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import IconTile from "../components/ui/IconTile";
import FinalCta from "../components/sections/FinalCta";
import { ChartIcon, LockIcon, ShieldIcon } from "../components/icons";
import styles from "./AboutPage.module.css";

const VALUES = [
  {
    icon: LockIcon,
    tone: "primary" as const,
    title: "Security first",
    description:
      "Every account is verified and every transaction is protected, because it's your money, not ours.",
  },
  {
    icon: ChartIcon,
    tone: "green" as const,
    title: "Radical simplicity",
    description:
      "Crypto shouldn't need a manual. We strip away the jargon so anyone can sell their assets and spend the proceeds with confidence.",
  },
  {
    icon: ShieldIcon,
    tone: "orange" as const,
    title: "Built for Nigeria",
    description:
      "From BVN verification to instant naira payouts, Pyker is designed around how people actually move money here.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Pyker"
        title="A simpler way to turn crypto into everyday money"
        description="Pyker exists to make crypto practical for everyday use, selling and spending, without the stress that usually comes with it."
      />

      <section className={styles.section}>
        <Container>
          <div className={styles.mission}>
            <h2 className={styles.missionTitle}>Why we built Pyker</h2>
            <p className={styles.missionText}>
              Selling crypto shouldn't mean juggling multiple apps, confusing rates, or
              waiting days to get paid. We built Pyker as one place to sell your crypto
              and turn it into Naira in minutes, backed by identity verification and
              bank-level security from day one.
            </p>
            <p className={styles.missionText}>
              Beyond selling, Pyker connects crypto to the things people actually spend
              money on: a virtual USD card for online payments, plus airtime, data,
              electricity, and cable TV. The goal is simple: make crypto useful, not
              just something you hold.
            </p>
          </div>

          <div className={styles.grid}>
            {VALUES.map(({ icon: Icon, tone, title, description }) => (
              <Card key={title} className={styles.card}>
                <IconTile tone={tone}>
                  <Icon width={20} height={20} />
                </IconTile>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
