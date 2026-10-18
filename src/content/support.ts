import type { FaqItem } from "../seo/meta";

export const SUPPORT_FAQ: FaqItem[] = [
  {
    question: "My crypto deposit hasn't been credited. What should I do?",
    answer:
      "Your wallet is credited once the network confirms your deposit. Check the sale tracker in the app first. If it's been a while, email us with the coin, the amount and the transaction hash.",
  },
  {
    question: "I sent crypto on the wrong network. Can you help?",
    answer:
      "Email us right away with the transaction hash, the coin and both networks involved. Recovery isn't always possible, but we'll look into it.",
  },
  {
    question: "My dollar card payment was declined.",
    answer:
      "Check that your card has enough balance and isn't frozen, and that the details are correct. If it still fails, email us the merchant name and the time of the payment.",
  },
  {
    question: "Will Pyker ever ask for my PIN or password?",
    answer:
      "Never. Our team will never ask for your PIN, password, one-time code or seed phrase. We only contact you from support@usepyker.com.",
  },
];
