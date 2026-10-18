import { useState, type ReactNode } from "react";
import Container from "../ui/Container";
import VirtualCard from "../ui/VirtualCard";
import Reveal from "../ui/Reveal";
import { CARD_COLORS, type CardColor, type CardNetwork } from "../../data/cards";
import { ChevronDownIcon, DesignIcon, MusicIcon, PlusIcon, ShoppingIcon, SparkIcon } from "../icons";
import styles from "./CardSection.module.css";

// Illustrative activity. Merchant names only, no logos (see data/merchants.ts).
const TRANSACTIONS = [
  { Icon: PlusIcon, tone: "#d4f55c", name: "Card funded", date: "From NGN Wallet", amount: "+$200.00", credit: true },
  { Icon: DesignIcon, tone: "#e3dcff", name: "Claude", date: "Subscription · Today", amount: "−$20.00" },
  { Icon: MusicIcon, tone: "#ffd9e8", name: "Netflix", date: "Subscription · Yesterday", amount: "−$15.49" },
  { Icon: ShoppingIcon, tone: "#ffe6cf", name: "Udemy", date: "Course · Mon", amount: "−$12.99" },
];

const MARQUEE = ["Virtual dollar card", "Instant naira payouts", "Live crypto rates", "Visa & Mastercard", "PIN-protected"];

export default function CardSection() {
  const [open, setOpen] = useState(0);
  const [color, setColor] = useState<CardColor>("indigo");
  const [network, setNetwork] = useState<CardNetwork>("visa");
  const [frozen, setFrozen] = useState(false);

  const steps: { title: string; text: string; extra?: ReactNode }[] = [
    {
      title: "Choose Visa or Mastercard",
      text: "Pick your network and one of five colours. Try it here.",
      extra: (
        <div className={styles.controls}>
          <div className={styles.segment} role="radiogroup" aria-label="Card network">
            {(["visa", "mastercard"] as CardNetwork[]).map((option) => (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={network === option}
                className={network === option ? styles.segmentOn : ""}
                onClick={() => setNetwork(option)}
              >
                {option === "visa" ? "Visa" : "Mastercard"}
              </button>
            ))}
          </div>
          <div className={styles.swatches} role="radiogroup" aria-label="Card colour">
            {(Object.keys(CARD_COLORS) as CardColor[]).map((key) => (
              <button
                key={key}
                type="button"
                role="radio"
                aria-checked={color === key}
                aria-label={CARD_COLORS[key].label}
                className={`${styles.swatch} ${color === key ? styles.swatchOn : ""}`}
                style={{ background: CARD_COLORS[key].swatch }}
                onClick={() => setColor(key)}
              />
            ))}
          </div>
        </div>
      ),
    },
    { title: "Fund it from your wallet", text: "Move money from your Pyker balance onto your card in seconds." },
    { title: "Spend anywhere online", text: "Subscriptions, software and shopping, wherever Visa or Mastercard is accepted." },
    {
      title: "Freeze or withdraw anytime",
      text: "Pause your card in one tap, or move funds back to your wallet. Try freezing it.",
      extra: (
        <button
          type="button"
          role="switch"
          aria-checked={frozen}
          className={`${styles.freeze} ${frozen ? styles.freezeOn : ""}`}
          onClick={() => setFrozen((v) => !v)}
        >
          <span className={styles.switch}>
            <span />
          </span>
          {frozen ? "Card frozen" : "Freeze card"}
        </button>
      ),
    },
  ];

  return (
    <section id="card" className={styles.section}>
      <div className={styles.texture} aria-hidden="true" />
      <Container>
        <div className={styles.layout}>
          <Reveal className={styles.left}>
            <span className={styles.eyebrow}>Virtual dollar card</span>
            <h2 className={`display ${styles.title}`}>Your dollar card, ready in a minute</h2>
            <p className={styles.lead}>
              Spend in dollars, pay in naira. Create a USD card from your Pyker balance and pay for
              Apple, Google, Netflix, Udemy, Claude and more.
            </p>

            <ol className={styles.steps}>
              {steps.map((step, index) => {
                const isOpen = index === open;
                return (
                  <li key={step.title} className={isOpen ? styles.stepOpen : ""}>
                    <button type="button" className={styles.stepHead} aria-expanded={isOpen} onClick={() => setOpen(index)}>
                      <span className={styles.num}>0{index + 1}</span>
                      <span className={styles.stepTitle}>{step.title}</span>
                      <ChevronDownIcon width={16} height={16} className={styles.chevron} />
                    </button>
                    <div className={styles.stepBody}>
                      <div>
                        <p>{step.text}</p>
                        {step.extra}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          <Reveal delay={120} className={styles.panel}>
            <div className={styles.cardWrap}>
              <VirtualCard color={color} network={network} frozen={frozen} />
            </div>
            <div className={styles.history}>
              <div className={styles.historyHead}>
                <strong>Card transactions</strong>
                <span>USD</span>
              </div>
              {TRANSACTIONS.map(({ Icon, tone, name, date, amount, credit }) => (
                <div key={name} className={styles.tx}>
                  <span className={styles.txIcon} style={{ background: tone }}>
                    <Icon width={18} height={18} />
                  </span>
                  <span className={styles.txName}>
                    {name}
                    <small>{date}</small>
                  </span>
                  <span className={credit ? styles.credit : styles.debit}>{amount}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.belt}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.track}>
              {MARQUEE.map((item) => (
                <span key={item}>
                  {item}
                  <SparkIcon width={18} height={18} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
