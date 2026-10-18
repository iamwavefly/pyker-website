import type { Post } from "./types";

export const bitcoinToNaira: Post = {
  slug: "how-to-convert-bitcoin-to-naira",
  title: "How to Convert Bitcoin to Naira: A Step-by-Step Guide",
  metaTitle: "How to Convert Bitcoin to Naira (Step-by-Step Guide)",
  description:
    "Learn how to convert Bitcoin to naira in Nigeria: checking the BTC to naira rate, understanding confirmations and fees, and getting paid in minutes.",
  excerpt:
    "From checking today's BTC to naira rate to understanding confirmations and fees, here's how to turn Bitcoin into spendable naira.",
  category: "Selling crypto",
  tags: ["bitcoin", "sell"],
  published: "2026-10-18",
  updated: "2026-10-18",
  cover: { kind: "coins", ids: ["bitcoin"], tone: "ink" },
  body: [
    {
      type: "p",
      text: "Whether you've held Bitcoin for years or just received some as payment, converting it to naira should be simple. This guide covers how to check the rate, what affects how long it takes, and how to sell your BTC for naira in a few steps.",
    },
    { type: "h2", text: "Step 1: Check today's Bitcoin to naira rate" },
    {
      type: "p",
      text: "Bitcoin's price changes constantly, so start by checking the current market price. Our [crypto to naira rates page](/rates) shows what Pyker pays for BTC today, along with the last seven days of market movement.",
    },
    {
      type: "p",
      text: "Prices move through the day, so the rate you get is the one shown in the app when you sell, before you send anything. You always know what you'll receive.",
    },
    { type: "h2", text: "Step 2: Understand confirmations" },
    {
      type: "p",
      text: "When you send Bitcoin, the network has to confirm the transaction before it's final. Bitcoin produces a new block roughly every ten minutes on average, so timing depends on how busy the network is and the fee your wallet pays.",
    },
    {
      type: "ul",
      items: [
        "**Higher network fees** usually get confirmed faster.",
        "**Busy periods** can slow things down, even with a normal fee.",
        "**Exchanges** sometimes batch withdrawals, which can add a short delay before your BTC is even sent.",
      ],
    },
    {
      type: "tip",
      title: "Follow it live",
      text: "On Pyker you can watch each stage of your sale: payment detected, validating payment, and funds credited. You don't have to guess whether it's on its way.",
    },
    { type: "h2", text: "Step 3: Sell your Bitcoin on Pyker" },
    {
      type: "ol",
      items: [
        "**Verify your account.** Download Pyker, sign up, and verify your BVN with a quick liveness check.",
        "**Choose Bitcoin and your payout.** Tap Sell crypto, pick Bitcoin, and choose naira (NGN Wallet) or dollars (USD Wallet).",
        "**Get your BTC address.** Pyker gives you a Bitcoin deposit address, along with the live rate and minimum amount.",
        "**Send your BTC.** Copy or scan the address in your wallet or exchange and send.",
        "**Get paid.** Once the network confirms your payment, your wallet is credited and you get a receipt.",
      ],
    },
    { type: "h2", text: "Fees to expect" },
    {
      type: "p",
      text: "There are two kinds of cost when you sell Bitcoin. The first is the **network fee** your wallet or exchange charges to send BTC, which goes to the Bitcoin network. The second is the **difference between the market price and your payout rate**. On Pyker, your payout is shown before you send, so there are no surprises.",
    },
    { type: "h2", text: "What to do with your naira" },
    {
      type: "p",
      text: "Once your naira lands, you can keep it in your wallet, or move it to a [virtual dollar card](/virtual-dollar-card) for international subscriptions and shopping. Selling a different coin? See how to [sell USDT for naira](/blog/how-to-sell-usdt-for-naira-in-nigeria).",
    },
    { type: "h2", text: "Bitcoin address formats, explained" },
    {
      type: "p",
      text: "Bitcoin addresses come in a few formats, and all of them are valid. You might see addresses that start with:",
    },
    {
      type: "ul",
      items: [
        "**bc1q** or **bc1p**: newer formats (SegWit and Taproot), common in modern wallets.",
        "**3**: an older format that's still widely supported.",
        "**1**: the original (legacy) format.",
      ],
    },
    {
      type: "p",
      text: "You don't need to convert between them. Just copy the exact address the app gives you, paste it into your wallet or exchange, and check the first and last few characters before sending.",
    },
    { type: "h2", text: "Sending from an exchange vs your own wallet" },
    {
      type: "table",
      head: ["Sending from", "What to expect"],
      rows: [
        ["An exchange", "You choose Withdraw, paste the address and confirm. The exchange sets the fee and may take a few minutes to process the withdrawal."],
        ["Your own wallet", "You choose the fee yourself. A higher fee usually means faster confirmation when the network is busy."],
      ],
    },
    { type: "h2", text: "Before you send: a checklist" },
    {
      type: "ul",
      items: [
        "You're sending **BTC** to a **Bitcoin** address. Never send another coin to it.",
        "The address was copied from the app, not typed by hand.",
        "The amount is above the minimum shown in the app.",
        "You've chosen naira or dollars as your payout.",
      ],
    },
    {
      type: "cta",
      title: "Sell Bitcoin for naira",
      text: "Get your own Bitcoin deposit address and see the live rate before you send.",
      to: "/sell-bitcoin",
      label: "Sell Bitcoin on Pyker",
    },
  ],
  faq: [
    {
      question: "How do I convert Bitcoin to naira?",
      answer:
        "On Pyker, choose Bitcoin in the app, get your deposit address, and send your BTC to it. Once the network confirms the payment, your naira wallet is credited.",
    },
    {
      question: "How long does it take to sell Bitcoin for naira?",
      answer:
        "It depends mainly on how quickly the Bitcoin network confirms your transaction. Once it's confirmed, Pyker credits your wallet, usually within minutes.",
    },
    {
      question: "Where can I check the Bitcoin to naira rate today?",
      answer:
        "Pyker's crypto rates page shows what Pyker pays for BTC today. Your exact payout rate is shown in the app before you send.",
    },
    {
      question: "Can I receive dollars instead of naira for my Bitcoin?",
      answer: "Yes. Choose your USD Wallet as the destination when you generate your Bitcoin deposit address.",
    },
  ],
};
