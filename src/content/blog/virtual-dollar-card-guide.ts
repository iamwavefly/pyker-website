import type { Post } from "./types";

export const virtualCardGuide: Post = {
  slug: "virtual-dollar-cards-in-nigeria-explained",
  title: "Virtual Dollar Cards in Nigeria: How They Work and What to Look For",
  metaTitle: "Virtual Dollar Cards in Nigeria: How They Work",
  description:
    "What a virtual dollar card is, why Nigerians use them for online payments, what fees to check, and how to get one in minutes.",
  excerpt:
    "Why so many Nigerians now pay online with virtual dollar cards, how they work, and the things to check before you pick one.",
  category: "Dollar card",
  tags: ["card"],
  published: "2026-10-18",
  updated: "2026-10-18",
  cover: { kind: "art", src: "/art/cards.webp" },
  body: [
    {
      type: "p",
      text: "If you've tried to pay for an international subscription, app or online order with a naira card, you've probably seen a declined payment at least once. Virtual dollar cards have become the go-to fix. Here's how they work and what to look for.",
    },
    { type: "h2", text: "What is a virtual dollar card?" },
    {
      type: "p",
      text: "A virtual dollar card is a Visa or Mastercard debit card that exists only digitally and holds US dollars. It has a card number, expiry date and CVV like a physical card, so you can use it anywhere online that accepts Visa or Mastercard. You can't tap it at a shop, but for online payments it works like any other card.",
    },
    { type: "h2", text: "Why Nigerians use them" },
    {
      type: "ul",
      items: [
        "**Naira card limits.** Many banks restrict international spending on naira cards, so foreign payments fail.",
        "**Paying in dollars directly.** Your card already holds dollars, so there's no conversion at checkout.",
        "**Control.** You only load what you plan to spend, which limits your exposure if a merchant is compromised.",
        "**No domiciliary account needed.** You fund the card from your app balance instead.",
      ],
    },
    { type: "h2", text: "What to check before choosing a card" },
    {
      type: "table",
      head: ["What to check", "Why it matters"],
      rows: [
        ["Issuance fee", "Some cards charge a one-time fee to create the card. Check it before you confirm."],
        ["Funding options", "How easily can you load dollars? From naira, from crypto, or both?"],
        ["Visa or Mastercard", "Some merchants accept one network more readily, so having a choice helps."],
        ["Freeze and withdraw", "You should be able to freeze the card instantly and move unused funds back."],
        ["Security", "Card details should be protected, for example only shown after your PIN."],
      ],
    },
    { type: "h2", text: "How the Pyker dollar card works" },
    {
      type: "p",
      text: "With [Pyker's virtual dollar card](/virtual-dollar-card), you choose Visa or Mastercard and one of five colours, and the card is ready in about a minute. A one-time issuance fee is shown before you confirm.",
    },
    {
      type: "ol",
      items: [
        "**Verify your account** with your BVN in the Pyker app.",
        "**Create your card** and choose your network and colour.",
        "**Fund it** from your Pyker balance. You can top up by bank transfer or by [selling crypto](/sell-crypto).",
        "**Pay online** with the card details, which you see after confirming your PIN.",
        "**Freeze, unfreeze or withdraw** from the app whenever you need to.",
      ],
    },
    {
      type: "tip",
      title: "Smart habit",
      text: "Only keep what you need on the card, and freeze it between purchases. Just remember to unfreeze it before any subscription renews.",
    },
    { type: "h2", text: "Common uses" },
    {
      type: "ul",
      items: [
        "**Apple and Google:** apps, iCloud, Google One and app store purchases.",
        "**Streaming:** Netflix and other streaming and music subscriptions.",
        "**AI tools:** Claude, and [ChatGPT Plus](/blog/how-to-pay-for-chatgpt-plus-in-nigeria).",
        "**Learning:** Udemy courses and other online classes.",
        "**Free trials,** using a card you can freeze in one tap.",
      ],
    },
    { type: "h2", text: "Virtual vs physical dollar cards" },
    {
      type: "table",
      head: ["", "Virtual card", "Physical card"],
      rows: [
        ["Where it works", "Online payments and app stores", "Shops, ATMs and online"],
        ["How fast you get it", "Usually within minutes", "Days or weeks for delivery"],
        ["If details leak", "Freeze it instantly, or create a new one", "Often needs a replacement card"],
        ["Best for", "Subscriptions, software and online shopping", "Travel and in-person spending"],
      ],
    },
    { type: "h2", text: "How to keep your card safe" },
    {
      type: "ul",
      items: [
        "**Only enter details on trusted sites.** Look for the official website or app before you pay.",
        "**Load only what you need.** A low balance limits the damage if a merchant is ever compromised.",
        "**Freeze it between uses,** and unfreeze it before planned payments or renewals.",
        "**Check your statement regularly** so you spot any charge you don't recognise quickly.",
        "**Never share your CVV or PIN.** No genuine support team will ask for them.",
      ],
    },
    { type: "h2", text: "What happens to money you don't spend" },
    {
      type: "p",
      text: "Your card balance stays yours. With Pyker, you can withdraw unused funds from your card back to your wallet at any time, so you're never stuck with dollars on a card you no longer need.",
    },
    {
      type: "cta",
      title: "Create your dollar card",
      text: "Get a USD Visa or Mastercard virtual card in about a minute.",
      to: "/virtual-dollar-card",
      label: "Explore the dollar card",
    },
  ],
  faq: [
    {
      question: "What is a virtual dollar card?",
      answer:
        "A digital Visa or Mastercard debit card that holds US dollars. You use its card number, expiry date and CVV to pay online wherever Visa or Mastercard is accepted.",
    },
    {
      question: "Do I need a domiciliary account to get a dollar card?",
      answer: "No. With Pyker, you fund your dollar card from your Pyker balance.",
    },
    {
      question: "How much does a Pyker dollar card cost?",
      answer: "There's a one-time issuance fee when you create a card. The exact amount is shown in the app before you confirm.",
    },
    {
      question: "Where can I use the Pyker dollar card?",
      answer:
        "Pyker users pay for Apple, Google, Netflix, Udemy, Claude, ChatGPT and other online services that accept Visa or Mastercard.",
    },
    {
      question: "Can I use a virtual dollar card in a physical shop?",
      answer: "Virtual cards are designed for online payments. They don't come as a physical card you can tap or insert.",
    },
  ],
};
