import type { Post } from "./types";

// Funding follows the app (mobile app/(cards)/fund.tsx): Fund card, funding
// source Wallet, a whole-dollar amount, paid from the NGN Wallet. Selling
// pays into the NGN Wallet.
export const fundCardWithCrypto: Post = {
  slug: "fund-virtual-dollar-card-with-crypto",
  title: "How to Fund a Virtual Dollar Card with Crypto in Nigeria",
  metaTitle: "How to Fund a Virtual Dollar Card with Crypto",
  description:
    "Turn your USDT, Bitcoin or other crypto into dollar card spending in Nigeria: sell for naira, fund your Pyker card in USD, and pay online in minutes.",
  excerpt:
    "Got USDT and a Netflix bill? Here's how to turn your crypto into a funded dollar card in a few minutes, step by step.",
  category: "Dollar card",
  tags: ["card", "sell"],
  published: "2026-11-11",
  updated: "2026-11-11",
  cover: { kind: "card", color: "black", network: "mastercard", tone: "lime" },
  body: [
    {
      type: "p",
      text: "You hold USDT or Bitcoin, but Netflix, ChatGPT and your Upwork fees want a dollar card. With Pyker, you don't need a domiciliary account or a friend abroad. You sell your crypto, fund your virtual dollar card from the same app, and pay online in minutes.",
    },
    { type: "h2", text: "Step 1: Sell your crypto for naira" },
    {
      type: "ol",
      items: [
        "Open Pyker and tap **Sell crypto**.",
        "Pick the coin you're selling. For USDT or USDC, choose the network you're sending from.",
        "Copy or scan your deposit address and send from any wallet or exchange.",
        "Once the network confirms, your NGN Wallet is credited, usually within minutes.",
      ],
    },
    {
      type: "p",
      text: "Not sure what your coins are worth? Check the [crypto to naira calculator](/crypto-to-naira-calculator) first. New to selling? Our guides on [selling USDT](/blog/how-to-sell-usdt-for-naira-in-nigeria) and [converting Bitcoin to naira](/blog/how-to-convert-bitcoin-to-naira) walk you through it.",
    },
    { type: "h2", text: "Step 2: Fund your dollar card" },
    {
      type: "ol",
      items: [
        "Go to your virtual card and tap **Fund card**. No card yet? Tap **Add card**, choose Standard or Lite, then pick a colour and Visa or Mastercard.",
        "Under **Select funding source**, choose **Wallet**.",
        "Enter the amount in USD. Pyker shows what it costs in naira from your wallet balance, including any funding fee, before you confirm.",
        "Confirm with your PIN. Your card balance updates in a few seconds.",
      ],
    },
    {
      type: "screens",
      items: [
        {
          src: "/screens/card-fund.webp",
          alt: "Pyker Fund card screen with Wallet as the funding source and an amount in USD",
          caption: "Choose Wallet, enter an amount in USD, and confirm with your PIN.",
        },
      ],
    },
    { type: "h2", text: "Step 3: Pay online" },
    {
      type: "p",
      text: "Your card works wherever Visa or Mastercard is accepted online. We have step-by-step guides for [ChatGPT](/blog/how-to-pay-for-chatgpt-plus-in-nigeria), [Netflix](/pay-for/netflix), [Amazon](/pay-for/amazon), [Upwork](/pay-for/upwork) and [many more](/virtual-dollar-card).",
    },
    { type: "h2", text: "Tips to spend smart" },
    {
      type: "ul",
      items: [
        "**Fund what you need.** Top up close to when you pay, so you're not holding more on the card than you plan to spend.",
        "**Freeze it between payments.** One tap freezes the card, and one tap brings it back.",
        "**Withdraw what's left.** Leftover dollars can go back to your wallet with **Withdraw**.",
        "**Check the minimum.** If an amount is too small, the app tells you the minimum funding amount right on the screen.",
      ],
    },
    {
      type: "cta",
      title: "Get your dollar card",
      text: "Visa or Mastercard, ready in about a minute, funded from your crypto.",
      to: "/virtual-dollar-card",
      label: "About the dollar card",
    },
  ],
  faq: [
    {
      question: "Can I fund my dollar card straight from USDT?",
      answer:
        "Not directly yet. Sell your USDT for naira first, which takes minutes, then fund your card from your wallet in USD.",
    },
    {
      question: "How long does funding take?",
      answer: "A few seconds once you confirm with your PIN.",
    },
    {
      question: "Are there fees to fund the card?",
      answer: "Any funding fee is included in the quote you see before you confirm, so you know the full cost up front.",
    },
    {
      question: "Can I move money back off the card?",
      answer: "Yes. Tap Withdraw on your card to move the balance back to your wallet.",
    },
  ],
};
