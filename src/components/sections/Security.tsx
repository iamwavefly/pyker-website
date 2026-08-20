import Container from "../ui/Container";
import Blob from "../ui/Blob";
import Reveal from "../ui/Reveal";
import { LockIcon, ShieldIcon, WalletIcon } from "../icons";
import styles from "./Security.module.css";

const POINTS = [
  {
    icon: ShieldIcon,
    title: "Identity verification",
    description: "Every account is verified with BVN and liveness checks before funds can move.",
  },
  {
    icon: LockIcon,
    title: "Encrypted by default",
    description: "Your data and transactions are protected with bank-level encryption end to end.",
  },
  {
    icon: WalletIcon,
    title: "You stay in control",
    description: "PIN and biometric locks mean only you can authorize a transaction.",
  },
];

export default function Security() {
  return (
    <section id="security" className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <Blob tone="primary" size={260} style={{ top: "-60px", left: "-60px" }} />
          <Blob tone="green" size={180} style={{ bottom: "-40px", right: "10%" }} delay={2500} />

          <Reveal className={styles.copy}>
            <span className={styles.eyebrow}>Security</span>
            <h2 className={styles.title}>Built to keep your money safe</h2>
            <p className={styles.description}>
              Security isn't an afterthought: it's how Pyker is built, from account
              verification to every transaction you make.
            </p>
          </Reveal>

          <div className={styles.points}>
            {POINTS.map(({ icon: Icon, title, description }, index) => (
              <Reveal delay={index * 120} className={styles.point} key={title}>
                <span className={styles.iconWrap}>
                  <Icon width={20} height={20} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
