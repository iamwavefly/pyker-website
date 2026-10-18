import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import VirtualCard from "../ui/VirtualCard";
import { BankIcon, CaretLeftIcon, CaretRightIcon, CopyIcon } from "../icons";
import { FEATURES, isLive } from "../../data/features";
import styles from "./ProductTabs.module.css";

type Card = { title: string; text: string; visual: ReactNode; soon?: boolean };

function Art({ src }: { src: string }) {
  return <img src={src} alt="" className={styles.art} loading="lazy" />;
}

function Screen({ src, position }: { src: string; position: string }) {
  return (
    <div className={styles.screen}>
      <img src={src} alt="" loading="lazy" style={{ objectPosition: position }} />
    </div>
  );
}

function AccountNumber() {
  return (
    <div className={styles.account}>
      <div className={styles.accountTop}>
        <span className={styles.bankIcon}>
          <BankIcon width={18} height={18} />
        </span>
        <span className={styles.permanent}>Permanent</span>
      </div>
      <span className={styles.muted}>Account number</span>
      <div className={styles.accountNumber}>
        <strong>901 ••• 4728</strong>
        <CopyIcon width={16} height={16} />
      </div>
      <span className={styles.muted}>Ada Okafor · Pyker</span>
    </div>
  );
}

function Wallets() {
  return (
    <div className={styles.wallets}>
      {[
        ["🇳🇬", "NGN Wallet", "₦895,740.23"],
        ["🇺🇸", "USD Wallet", "$1,240.00"],
      ].map(([flag, name, amount]) => (
        <div key={name} className={styles.wallet}>
          <span className={styles.flag}>{flag}</span>
          <span>{name}</span>
          <strong>{amount}</strong>
        </div>
      ))}
    </div>
  );
}

const TABS: { key: string; label: string; title: string; text: string; more: { label: string; to: string }; cards: Card[] }[] = [
  {
    key: "sell",
    label: "Sell",
    title: "Sell crypto with ease",
    text: "Instant sell, no P2P. BTC, ETH, USDT and more, converted to naira or dollars as soon as your deposit confirms.",
    more: { label: "Learn about selling crypto", to: FEATURES.sellCrypto.path },
    cards: [
      {
        title: "Your own deposit address",
        text: "Scan or share a QR code, with the minimum and live rate shown before you send.",
        visual: <Screen src="/screens/sell-address.png" position="50% 52%" />,
      },
      {
        title: "Rates that move with the market",
        text: "Live prices for every coin you can sell, plus alerts when the market jumps.",
        visual: <Art src="/art/rates.webp" />,
      },
      {
        title: "Every sale, tracked",
        text: "See each deposit go from detected to credited, with a receipt for every one.",
        visual: <Art src="/art/activity.webp" />,
      },
    ],
  },
  {
    key: "spend",
    label: "Spend",
    title: "Spend in dollars, anywhere",
    text: "A virtual dollar card funded straight from your wallet, for subscriptions, software and shopping online.",
    more: { label: "Explore the dollar card", to: FEATURES.virtualCard.path },
    cards: [
      {
        title: "Visa or Mastercard",
        text: "Pick your network and colour. Your card is ready in about a minute.",
        visual: (
          <div className={styles.cardVisual}>
            <VirtualCard color="pink" network="mastercard" />
          </div>
        ),
      },
      {
        title: "A card for the world online",
        text: "Fund it from your Pyker balance and pay wherever Visa or Mastercard is accepted.",
        visual: <Art src="/art/cards.webp" />,
      },
      {
        title: "In control, always",
        text: "Fund, withdraw or freeze in one tap. Card details only show after your PIN.",
        visual: <Screen src="/screens/virtual-card.png" position="50% 46%" />,
      },
    ],
  },
  {
    key: "fund",
    label: "Fund",
    title: "Top up and pay, your way",
    text: "Add naira by bank transfer from any Nigerian bank, and keep naira and dollars side by side.",
    more: { label: "See bill payments", to: FEATURES.bills.path },
    cards: [
      {
        title: "Your own account number",
        text: "Use a one-time account for a single transfer, or activate a permanent one that's yours.",
        visual: <AccountNumber />,
      },
      {
        title: "Airtime, data and bills",
        text: "Pay for airtime, data, electricity and cable TV straight from your naira balance.",
        soon: !isLive("bills"),
        visual: <Art src="/art/bills.webp" />,
      },
      {
        title: "Naira and dollar wallets",
        text: "Hold both, and choose which one each crypto sale pays into.",
        visual: <Wallets />,
      },
    ],
  },
];

export default function ProductTabs() {
  const [index, setIndex] = useState(0);
  const tab = TABS[index];

  const go = (step: number) => setIndex((i) => (i + step + TABS.length) % TABS.length);

  return (
    <section id="features" className={styles.section}>
      <Container>
        <div className={styles.tabs} role="tablist" aria-label="Product">
          {TABS.map((t, i) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={i === index ? styles.tabOn : ""}
              onClick={() => setIndex(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div key={tab.key} className={styles.head}>
          <h2 className="display">{tab.title}</h2>
          <p>{tab.text}</p>
          <Link to={tab.more.to} className={styles.more}>
            {tab.more.label}
            <CaretRightIcon width={14} height={14} />
          </Link>
        </div>

        <div key={`${tab.key}-cards`} className={styles.cards} role="tabpanel">
          {tab.cards.map((card, i) => (
            <article key={card.title} className={`${styles.card} ${i === 1 ? styles.center : ""}`} style={{ animationDelay: `${i * 70}ms` }}>
              <div className={styles.visual}>{card.visual}</div>
              <div className={styles.copy}>
                <h3>
                  {card.title}
                  {card.soon && <span className={styles.soon}>Coming soon</span>}
                </h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.controls}>
          <div className={styles.dots} aria-hidden="true">
            {TABS.map((t, i) => (
              <span key={t.key} className={i === index ? styles.dotOn : ""} />
            ))}
          </div>
          <div className={styles.arrows}>
            <button type="button" aria-label="Previous" onClick={() => go(-1)}>
              <CaretLeftIcon width={14} height={14} />
            </button>
            <button type="button" aria-label="Next" onClick={() => go(1)}>
              <CaretRightIcon width={14} height={14} />
            </button>
            <Button variant="outline" size="md" href="#how-it-works" icon={<CaretRightIcon width={12} height={12} />} className={styles.iconEnd}>
              See how it works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
