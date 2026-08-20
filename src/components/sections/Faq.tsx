import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { ChevronDownIcon } from "../icons";
import styles from "./Faq.module.css";

const QUESTIONS = [
  {
    question: "How do I verify my account?",
    answer:
      "Sign up with your email, then complete BVN verification and a quick liveness check from within the app. It usually takes a few minutes.",
  },
  {
    question: "How fast are payouts when I sell crypto?",
    answer:
      "Once you confirm a sell, your Naira balance updates in your Pyker wallet within minutes. Spend it directly, fund your virtual USD card, or withdraw it to a linked bank account if you'd rather cash out.",
  },
  {
    question: "Which coins can I sell on Pyker?",
    answer:
      "Bitcoin, Ethereum, USDT, USDC, BNB, Solana, XRP, Dogecoin, TRON, TON, Litecoin, Bitcoin Cash and Avalanche — 13 coins in total, with more added regularly.",
  },
  {
    question: "What is the Pyker virtual card?",
    answer:
      "A virtual USD card you fund directly from your Pyker wallet balance. Use it for international subscriptions, online shopping, and anywhere Visa is accepted — no domiciliary bank account required.",
  },
  {
    question: "Can I pay bills from my Pyker wallet?",
    answer:
      "Yes. Once your Naira balance is funded — by selling crypto or a bank transfer — you can pay for airtime, data, electricity and cable TV subscriptions directly from it.",
  },
  {
    question: "Is my money and data safe?",
    answer:
      "Your account is protected by identity verification, encryption, and a PIN or biometric lock on every transaction.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <Container>
        <SectionHeading align="center" eyebrow="FAQ" title="Frequently asked questions" />

        <div className={styles.list}>
          {QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal delay={index * 60} className={styles.item} key={item.question}>
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <ChevronDownIcon
                    width={18}
                    height={18}
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                  />
                </button>
                {isOpen && <p className={styles.answer}>{item.answer}</p>}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
