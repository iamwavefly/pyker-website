import { FEATURES } from "../data/features";
import type { FaqItem } from "../seo/meta";

const live = FEATURES.giftCards.status === "live";

// Brands aren't named: which cards are supported is decided at launch.
export const GIFT_CARDS = {
  title: live ? "Sell Gift Cards for Naira in Nigeria | Pyker" : "Sell Gift Cards for Naira (Coming Soon) | Pyker",
  description: live
    ? "Sell your unused gift cards for naira with Pyker. See your rate upfront and get paid straight to your naira wallet."
    : "Gift card selling is coming to Pyker. Soon you'll turn unused gift cards into naira, paid straight to your Pyker wallet.",
  intro: live
    ? "Turn unused gift cards into naira. See your rate before you sell, and get paid straight to your Pyker wallet."
    : "Gift card selling is coming to Pyker. Soon you'll turn unused gift cards into naira, paid straight to the same wallet you use for crypto.",
  steps: [
    { title: "Choose your card", text: "Pick the gift card brand and enter its value." },
    { title: "See your rate", text: "Your naira payout is shown before you submit anything." },
    { title: "Get paid to your wallet", text: "Once your card is verified, your NGN Wallet is credited." },
  ],
  faq: (live
    ? [
        {
          question: "Which gift cards can I sell on Pyker?",
          answer: "The supported cards are listed in the app, with the current rate for each.",
        },
        {
          question: "How do I get paid for my gift card?",
          answer: "Once your card is verified, your NGN Wallet is credited. You can withdraw naira to your bank with no Pyker fee.",
        },
      ]
    : [
        {
          question: "When can I sell gift cards on Pyker?",
          answer: "Gift card selling is coming soon. We'll let you know in the app as soon as it's live.",
        },
        {
          question: "Which gift cards will be supported?",
          answer: "We'll share the full list of supported cards and their rates when gift card selling launches.",
        },
        {
          question: "What can I do with Pyker today?",
          answer:
            "Sell crypto for naira or dollars instantly, withdraw naira to your bank, and pay online with a virtual dollar card.",
        },
      ]) as FaqItem[],
};
