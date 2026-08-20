import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { AppleLogoIcon, BoltIcon, GooglePlayLogoIcon, ShieldIcon } from "../icons";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section id="download" className={styles.section}>
      <Container>
        <Reveal className={styles.card}>
          <span className={styles.glowTop} aria-hidden="true" />
          <span className={styles.glowBottom} aria-hidden="true" />

          <div className={styles.copy}>
            <h2 className={styles.title}>Take control of your crypto today</h2>
            <p className={styles.description}>
              Download Pyker and start turning crypto into Naira, spending with your
              virtual USD card, and paying bills, all from one secure wallet.
            </p>

            <div className={styles.actionsWrap}>
              <div className={`${styles.chip} ${styles.chipA}`}>
                <BoltIcon width={14} height={14} />
                No P2P waiting
              </div>

              <div className={styles.actions}>
                <Button variant="light" size="lg" href="#" icon={<AppleLogoIcon width={18} height={18} />}>
                  Download for iOS
                </Button>
                <Button variant="outlineLight" size="lg" href="#" icon={<GooglePlayLogoIcon width={18} height={18} />}>
                  Download for Android
                </Button>
              </div>

              <div className={`${styles.chip} ${styles.chipB}`}>
                <ShieldIcon width={14} height={14} />
                Bank-level security
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
