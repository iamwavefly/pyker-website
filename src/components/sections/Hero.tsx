import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import PhoneMockup from "../ui/PhoneMockup";
import Blob from "../ui/Blob";
import Reveal from "../ui/Reveal";
import QuickConvert from "../ui/QuickConvert";
import { AppleLogoIcon, ArrowRightIcon, BoltIcon, GooglePlayLogoIcon, ShieldIcon } from "../icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <Blob tone="primary" size={420} style={{ top: "-140px", right: "-60px" }} />
      <Blob tone="orange" size={220} style={{ bottom: "-40px", left: "-40px" }} delay={2000} />
      <Blob tone="green" size={160} style={{ top: "40%", left: "48%" }} delay={4000} />

      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <Badge tone="primary">
              <ShieldIcon width={14} height={14} />
              Verified &amp; secure
            </Badge>

            <h1 className={styles.title}>
              Sell crypto for Naira. <span className={styles.highlight}>Spend in USD.</span>
            </h1>

            <p className={styles.subtitle}>
              Pyker turns your crypto into spendable Naira in minutes, then lets
              you fund a virtual USD card for anywhere Visa is accepted online —
              all backed by bank-level security.
            </p>

            <div className={styles.ctaRow}>
              <Button variant="primary" size="lg" href="#download" icon={<ArrowRightIcon width={18} height={18} />}>
                Get the app
              </Button>
              <Button variant="outline" size="lg" href="#how-it-works">
                See how it works
              </Button>
            </div>

            <div className={styles.storeRow}>
              <span className={styles.storeBadge}>
                <AppleLogoIcon width={16} height={16} />
                App Store
              </span>
              <span className={styles.storeBadge}>
                <GooglePlayLogoIcon width={16} height={16} />
                Google Play
              </span>
            </div>
          </Reveal>

          <Reveal delay={150} className={styles.visualWrap}>
            <div className={styles.visual}>
              <PhoneMockup
                src="/screens/virtual-card.png"
                alt="Pyker virtual card screen"
                className={styles.backPhone}
              />
              <PhoneMockup
                src="/screens/home.png"
                alt="Pyker home screen showing wallet balance and quick actions"
                className={styles.tiltPhone}
              />

              <div className={`${styles.floatChip} ${styles.chipTop}`}>
                <span className={styles.chipIcon}>
                  <BoltIcon width={16} height={16} />
                </span>
                <span>Sell in minutes</span>
              </div>

              <QuickConvert className={styles.chipBottom} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
