import type { FaqItem } from "../seo/meta";
import type { Step } from "./sell";

export const CARD = {
  title: "Virtual Dollar Card in Nigeria: Visa & Mastercard | Pyker",
  description:
    "Get a USD Visa or Mastercard virtual card in a minute and pay Apple, Google, Netflix, Udemy, Claude and more, funded from your Pyker balance.",
  steps: [
    {
      title: "Verify your account",
      text: "Sign up and verify your BVN in the app. It only takes a few minutes.",
    },
    {
      title: "Create your card",
      text: "Choose Visa or Mastercard and pick a colour. A one-time issuance fee is shown before you confirm.",
    },
    {
      title: "Fund it and spend",
      text: "Move money from your Pyker balance onto your card and pay anywhere online.",
    },
  ] as Step[],
  uses: [
    { title: "Apple and Google", text: "Pay for apps, iCloud, Google One and app store purchases." },
    { title: "Netflix and streaming", text: "Keep your streaming and music subscriptions running." },
    { title: "Claude and ChatGPT", text: "Subscribe to the AI tools you use for work and study." },
    { title: "Udemy and online courses", text: "Pay for courses and learn new skills online." },
  ],
  faq: [
    {
      question: "What is the Pyker virtual dollar card?",
      answer:
        "A USD Visa or Mastercard virtual card you fund from your Pyker balance. Use it for subscriptions, software and online shopping wherever Visa or Mastercard is accepted, with no domiciliary account needed.",
    },
    {
      question: "How much does the card cost?",
      answer:
        "There's a one-time issuance fee when you create a card. The exact amount is shown in the app before you confirm.",
    },
    {
      question: "Can I use it for Apple, Google, Netflix, Udemy or Claude?",
      answer:
        "Yes. Pyker users pay for Apple, Google, Netflix, Udemy, Claude, ChatGPT and other online services that accept Visa or Mastercard. If a payment is ever declined, contact support and we'll help.",
    },
    {
      question: "How do I fund my dollar card?",
      answer:
        "Move money from your Pyker balance onto your card in the app. You can top up your balance by selling crypto or by bank transfer.",
    },
    {
      question: "Can I freeze or withdraw from my card?",
      answer:
        "Yes. Freeze your card in one tap, unfreeze it when you're ready, or withdraw funds back to your Pyker wallet anytime.",
    },
    {
      question: "Who can get a Pyker dollar card?",
      answer: "Any verified Pyker user in Nigeria with a verified BVN can create a virtual dollar card.",
    },
  ] as FaqItem[],
};
