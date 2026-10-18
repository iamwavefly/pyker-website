import { FEATURES } from "../data/features";
import type { FaqItem } from "../seo/meta";

export const HOME = {
  title: "Pyker: Sell Crypto for Naira & Get a Virtual Dollar Card",
  description:
    "Instantly sell Bitcoin, USDT, Ethereum and more for naira, no P2P. Then pay Apple, Google, Netflix and more with a virtual dollar card.",
};

export const HOME_FAQ: FaqItem[] = [
  {
    question: "Which coins can I sell on Pyker?",
    answer:
      "Bitcoin, Ethereum, USDT, USDC, Solana and Dogecoin. Stablecoins like USDT and USDC can be sent on several networks, so just pick the network you're sending from when you generate your address.",
  },
  {
    question: "How fast do I get paid?",
    answer:
      "As soon as your deposit is confirmed on the network, Pyker converts it and credits your wallet, usually within minutes. Some networks take longer to confirm than others, and you can track every step in the app.",
  },
  {
    question: "Can I get paid in dollars instead of naira?",
    answer: "Yes. When you generate a deposit address, choose your NGN Wallet or your USD Wallet as the destination.",
  },
  {
    question: "What is the Pyker virtual card?",
    answer:
      "A USD Visa or Mastercard virtual card you fund from your Pyker balance. Use it for subscriptions, software and online shopping, no domiciliary account needed. A one-time issuance fee is shown before you confirm.",
  },
  {
    question: "Can I withdraw naira to my bank account?",
    answer:
      "Yes. Add and verify your bank account in the app, then withdraw from your NGN Wallet. Pyker doesn't charge a fee for naira withdrawals.",
  },
  {
    question: "How do I add money by bank transfer?",
    answer:
      "Once your BVN is verified, you can generate a one-time account number for a single transfer, or activate a permanent account number that's yours to keep. Transfers from any Nigerian bank are credited to your wallet.",
  },
  {
    question: "How do I verify my account?",
    answer:
      "Sign up with your email and phone number, then verify your BVN and complete a quick liveness check in the app. It usually takes a few minutes.",
  },
  {
    question: "Can I sell gift cards on Pyker?",
    answer:
      FEATURES.giftCards.status === "live"
        ? "Yes. Sell your unused gift cards for naira and get paid straight to your NGN Wallet."
        : "Gift card selling is coming soon. We'll let you know in the app as soon as it's live.",
  },
  {
    question: "Can I pay bills with Pyker?",
    answer:
      FEATURES.bills.status === "live"
        ? "Yes. Pay for airtime, data, electricity and cable TV straight from your naira balance."
        : "Airtime, data, electricity and cable TV payments are coming soon. We'll let you know in the app as soon as they're live.",
  },
];
