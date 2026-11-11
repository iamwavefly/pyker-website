import type { Post } from "./types";

export const prepaidVsPostpaid: Post = {
  slug: "prepaid-vs-postpaid-meter-nigeria",
  title: "Prepaid vs Postpaid Meter in Nigeria: What's the Difference?",
  metaTitle: "Prepaid vs Postpaid Meter in Nigeria: Key Differences",
  description:
    "Prepaid or postpaid meter? How each one works in Nigeria, how to tell which you have, and how to pay either online in seconds with cashback.",
  excerpt:
    "One makes you buy units first, the other sends you a bill later. Here's how prepaid and postpaid meters differ, and how to pay both online.",
  category: "Bills",
  tags: ["bills"],
  published: "2026-11-11",
  updated: "2026-11-11",
  cover: { kind: "art", src: "/art/bills.webp" },
  body: [
    {
      type: "p",
      text: "Every electricity customer in Nigeria pays one of two ways: prepaid or postpaid. When you pay a light bill online, the first thing you're asked is which one you have. Here's the difference, how to tell which meter you have, and why so many people are switching to prepaid.",
    },
    { type: "h2", text: "What is a prepaid meter?" },
    {
      type: "p",
      text: "With a prepaid meter, you pay first and use later. You buy units, get a 20-digit token, and [load it on your meter](/blog/how-to-load-electricity-token-on-prepaid-meter). When the units finish, the light goes off until you buy more. You only ever pay for what you buy.",
    },
    { type: "h2", text: "What is a postpaid meter?" },
    {
      type: "p",
      text: "With postpaid, you use first and pay later. Your DisCo sends a bill for the month, based on your meter reading or, where there's no working meter, an estimate. You pay the bill against your account, and there's no token to load.",
    },
    { type: "h2", text: "Prepaid vs postpaid at a glance" },
    {
      type: "table",
      head: ["", "Prepaid", "Postpaid"],
      rows: [
        ["When you pay", "Before you use", "After you use"],
        ["What you get", "A 20-digit token", "A monthly bill"],
        ["Control over spending", "Full: you buy what you want", "Less: the bill comes when it comes"],
        ["Estimated bills", "No", "Possible if your meter isn't read"],
        ["Paying online on Pyker", "Choose Prepaid", "Choose Postpaid"],
      ],
    },
    { type: "h2", text: "How to tell which meter you have" },
    {
      type: "ul",
      items: [
        "**You have a keypad and load tokens:** that's prepaid.",
        "**You get a monthly bill with an amount owed:** that's postpaid.",
        "**Still not sure?** Check your last receipt or bill. It shows your account type, and your DisCo can confirm it.",
      ],
    },
    { type: "h2", text: "Why people switch to prepaid" },
    {
      type: "p",
      text: "Estimated billing is the big one. When a postpaid meter isn't read, the bill can come in far higher than what you actually used. A prepaid meter puts you in control: you see your units, you buy what you need, and nobody sends you a surprise bill. To switch, apply to your DisCo. Many DisCos supply meters through the Meter Asset Provider (MAP) scheme.",
    },
    { type: "h2", text: "How to pay either one online" },
    {
      type: "ol",
      items: [
        "In Pyker, tap **Pay bills**, then **Electricity**, and choose your DisCo.",
        "Select **Prepaid** or **Postpaid**.",
        "Enter your **Meter ID** and check the name that comes up.",
        "Enter the amount, tap **Continue**, then **Pay** and enter your PIN.",
      ],
    },
    {
      type: "p",
      text: "Prepaid customers get their token on the spot. Postpaid payments go straight to your DisCo account. Either way, cashback lands in your NGN Wallet once the payment goes through.",
    },
    {
      type: "cta",
      title: "Pay your light bill with cashback",
      text: "Prepaid or postpaid, seven DisCos, in seconds.",
      to: "/pay-bills",
      label: "See bill payments",
    },
  ],
  faq: [
    {
      question: "Is prepaid or postpaid cheaper?",
      answer:
        "The tariff is set by your band, not your meter type. Prepaid just means you only pay for units you buy, with no risk of an estimated bill.",
    },
    {
      question: "Can I pay a postpaid electricity bill online?",
      answer: "Yes. In Pyker, choose your DisCo, select Postpaid, enter your Meter ID, check the name and pay.",
    },
    {
      question: "How do I get a prepaid meter?",
      answer: "Apply to your DisCo. Many DisCos supply meters through the Meter Asset Provider (MAP) scheme.",
    },
  ],
};
