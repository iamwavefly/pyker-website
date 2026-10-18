import type { ReactNode } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Phone from "../ui/Phone";
import VirtualCard from "../ui/VirtualCard";
import { BtcIcon } from "../icons/crypto";
import { BoltIcon, CheckCircleIcon, CreditCardIcon, IdCardIcon, QrIcon } from "../icons";
import styles from "./QuickSteps.module.css";

function Checklist() {
  return (
    <div className={styles.checklist}>
      <div className={styles.checkHead}>
        <strong>Verification</strong>
        <span className={styles.done}>Complete</span>
      </div>
      {["Email and phone", "BVN verified", "Liveness check"].map((item) => (
        <div key={item} className={styles.checkRow}>
          <CheckCircleIcon width={18} height={18} />
          {item}
        </div>
      ))}
    </div>
  );
}

function CardFan() {
  return (
    <div className={styles.fan}>
      <VirtualCard color="black" network="mastercard" className={styles.fanBack} />
      <VirtualCard color="indigo" network="visa" className={styles.fanFront} />
    </div>
  );
}

const STEPS: { Icon: typeof BoltIcon; title: string; text: string; visual: ReactNode }[] = [
  {
    Icon: IdCardIcon,
    title: "Verify in minutes",
    text: "Sign up, verify your BVN and take a quick liveness check. Most people are done in a few minutes.",
    visual: <Checklist />,
  },
  {
    Icon: QrIcon,
    title: "Pick a coin, get an address",
    text: "Choose what you're selling and whether you want naira or dollars. Your deposit address is ready instantly.",
    visual: <Phone src="/screens/sell-address.png" alt="Pyker deposit address screen" className={styles.phone} />,
  },
  {
    Icon: BoltIcon,
    title: "Send and watch it land",
    text: "Send from any wallet or exchange and follow it live, from payment detected to funds credited.",
    visual: <Phone src="/screens/sell-success.png" alt="Pyker sale tracking screen" className={styles.phone} />,
  },
  {
    Icon: CreditCardIcon,
    title: "Spend it your way",
    text: "Fund a virtual dollar card for shopping and subscriptions online, or keep it in your wallet.",
    visual: <CardFan />,
  },
];

export default function QuickSteps() {
  return (
    <section id="how-it-works" className={styles.section}>
      <Container>
        <div className={styles.head}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 className="display">
            4 quick steps to turn
            <span className="glyph" aria-hidden="true">
              <BtcIcon />
            </span>
            crypto into cash
          </h2>
        </div>

        <div className={styles.grid}>
          {STEPS.map(({ Icon, title, text, visual }, index) => (
            <Reveal key={title} delay={(index % 2) * 90} className={styles.card}>
              <div className={styles.copy}>
                <span className={styles.icon}>
                  <Icon width={26} height={26} />
                </span>
                <span className={styles.step}>Step {index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <div className={styles.visual}>{visual}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
