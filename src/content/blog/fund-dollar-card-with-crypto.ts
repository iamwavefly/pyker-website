import type { Post } from "./types";

// Funding follows the app (mobile app/(cards)/fund.tsx): Fund card, funding
// source Wallet, a whole-dollar amount, paid from the NGN Wallet. Card types
// follow content/payFor.ts: Lite expires on its own, Standard for anything
// that renews.
export const fundCardWithCrypto: Post = {
  slug: "fund-virtual-dollar-card-with-crypto",
  title: "How to Fund a Virtual Dollar Card with Crypto in Nigeria",
  metaTitle: "How to Fund a Virtual Dollar Card with Crypto",
  description:
    "Turn USDT, Bitcoin or other crypto into dollar card spending in Nigeria: sell for naira, fund your Pyker card in USD, and pay Netflix, ChatGPT and more.",
  excerpt:
    "Got USDT and a Netflix bill? Here's how to turn your crypto into a funded dollar card in a few minutes, step by step, plus which card to pick for what you're paying for.",
  category: "Dollar card",
  tags: ["card", "sell"],
  published: "2026-11-11",
  updated: "2026-11-11",
  cover: { kind: "card", color: "black", network: "mastercard", tone: "lime" },
  body: [
    {
      type: "answer",
      text: "**Sell your crypto** for naira in the Pyker app, then go to your virtual card, tap **Fund card**, choose **Wallet** as the funding source and enter an amount in USD. Confirm with your PIN and your card is funded in seconds, ready for Netflix, ChatGPT, Amazon and anywhere Visa or Mastercard works online.",
    },
    {
      type: "p",
      text: "You hold USDT or Bitcoin, but Netflix, ChatGPT and your Upwork fees want a dollar card. Your naira card gets declined, your bank's dollar limit is tiny, and asking a cousin abroad to pay for you every month is getting awkward. Sound familiar?",
    },
    {
      type: "p",
      text: "With Pyker, you don't need a domiciliary account or a friend abroad. You sell your crypto, fund your virtual dollar card from the same app, and pay online in minutes. This guide shows every step, helps you pick the right card for what you're paying for, and covers the habits that keep your card working smoothly.",
    },
    { type: "h2", text: "How much is your crypto worth?" },
    {
      type: "p",
      text: "Start with what you have. Type your USDT amount to see it in naira at today's Pyker rate. For other coins, use the [crypto to naira calculator](/crypto-to-naira-calculator).",
    },
    { type: "converter", coinId: "tether" },
    { type: "h2", text: "Step 1: Sell your crypto" },
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
      text: "New to selling? Our guides on [selling USDT](/blog/how-to-sell-usdt-for-naira-in-nigeria), [converting Bitcoin to naira](/blog/how-to-convert-bitcoin-to-naira) and [selling Dogecoin](/blog/how-to-sell-dogecoin-in-nigeria) walk you through it. Sending USDT? Make sure you pick the right network: [TRC20, ERC20 and BEP20 explained](/blog/usdt-networks-trc20-vs-erc20-vs-bep20).",
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
    { type: "h2", text: "Which card should you use?" },
    {
      type: "p",
      text: "Pyker has two card types. The right one depends on what you're paying for:",
    },
    {
      type: "picker",
      question: "What are you paying for?",
      options: [
        {
          label: "A monthly subscription",
          result:
            "Choose a **Standard** card. Netflix, Spotify, ChatGPT and other subscriptions charge you every month, and a Lite card expires on its own, which would eventually stop your renewals. Guides: [Netflix](/pay-for/netflix), [Spotify](/pay-for/spotify), [ChatGPT](/blog/how-to-pay-for-chatgpt-plus-in-nigeria).",
        },
        {
          label: "A one-off purchase",
          result:
            "A **Lite** card works well for single purchases you won't repeat. For stores that keep your card on file, like [Amazon](/pay-for/amazon) or [AliExpress](/pay-for/aliexpress), Standard is the safer choice.",
        },
        {
          label: "Freelance or work tools",
          result:
            "Choose **Standard**. Platforms like [Upwork](/pay-for/upwork), [Shopify](/pay-for/shopify) and [Microsoft 365](/pay-for/microsoft-365) bill you on a cycle, and an expired card can freeze your account.",
        },
        {
          label: "Ads",
          result:
            "Choose **Standard**. Ad platforms charge your card repeatedly as you spend. Guides: [Facebook and Instagram ads](/pay-for/facebook-instagram-ads), [Google Ads](/pay-for/google-ads), [TikTok Ads](/pay-for/tiktok-ads).",
        },
        {
          label: "Games",
          result:
            "Either works for one-off top-ups, but Standard is better if you keep a card on file. Guides: [Steam](/pay-for/steam), [PlayStation](/pay-for/playstation).",
        },
      ],
    },
    { type: "h2", text: "Step 3: Pay online" },
    {
      type: "p",
      text: "Your card works wherever Visa or Mastercard is accepted online. Add it at checkout like any other card: the card number, expiry date and CVV are under **Card details** in the app, shown after your PIN. We have step-by-step guides for [ChatGPT](/blog/how-to-pay-for-chatgpt-plus-in-nigeria), [Netflix](/pay-for/netflix), [Amazon](/pay-for/amazon), [Upwork](/pay-for/upwork) and [many more](/virtual-dollar-card).",
    },
    { type: "h2", text: "Before you pay online" },
    {
      type: "checklist",
      title: "Card ready to go",
      items: [
        "My card has enough balance for the payment, plus a little extra for any small verification charge",
        "The card isn't frozen",
        "I've copied the card number, expiry and CVV from **Card details**",
        "For subscriptions, I've picked a **Standard** card",
        "I'm paying on the merchant's real website or app",
      ],
    },
    { type: "h2", text: "Tips to spend smart" },
    {
      type: "ul",
      items: [
        "**Fund what you need.** Top up close to when you pay, so you're not holding more on the card than you plan to spend.",
        "**Freeze it between payments.** One tap freezes the card, and one tap brings it back.",
        "**Withdraw what's left.** Leftover dollars can go back to your wallet with **Withdraw**.",
        "**Check the minimum.** If an amount is too small, the app tells you the minimum funding amount right on the screen.",
        "**Track your spending.** **Card statement** and **View transactions** show every charge, so you can match each one to a subscription.",
      ],
    },
    { type: "h2", text: "A real example" },
    {
      type: "p",
      text: "Ada is a freelance designer paid in USDT. On Monday a client pays her 200 USDT. She sells 50 USDT on Pyker, and the naira lands in her wallet within minutes. She funds her Standard Mastercard with enough to cover ChatGPT and Canva for the month, and keeps the rest of her USDT. Both subscriptions renew without a decline, and she freezes the card in between. No domiciliary account, no cousin abroad.",
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
      answer: "Any funding fee is shown in the quote before you confirm, so you know the full cost up front.",
    },
    {
      question: "Should I choose a Standard or Lite card?",
      answer:
        "Standard for anything that renews or keeps your card on file, like subscriptions, work tools and ads. Lite expires on its own, so it suits one-off purchases.",
    },
    {
      question: "Can I move money back off the card?",
      answer: "Yes. Tap Withdraw on your card to move the balance back to your wallet.",
    },
    {
      question: "Do I need a domiciliary account?",
      answer: "No. You fund the card from your Pyker wallet, so no domiciliary account is needed.",
    },
  ],
};
