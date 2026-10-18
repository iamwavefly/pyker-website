import type { FaqItem } from "../seo/meta";

export const RATES = {
  title: "Crypto to Naira Rates Today: BTC, USDT, ETH to NGN | Pyker",
  description:
    "Live Bitcoin, USDT, Ethereum, USDC, Solana and Dogecoin prices in naira, updated every minute. See today's crypto to naira rates and sell in minutes with Pyker.",
  faq: [
    {
      question: "What is the USDT to naira rate today?",
      answer:
        "The table on this page shows the current USDT to naira market price, updated every minute. When you sell on Pyker, you'll see your exact rate in the app before you send.",
    },
    {
      question: "What is the Bitcoin price in naira today?",
      answer:
        "The Bitcoin row in the table shows today's BTC to naira market price and how much it has moved in the last 24 hours.",
    },
    {
      question: "Why can the rate in the app differ from this page?",
      answer:
        "This page shows market prices for reference. Your payout rate is set when you sell and is always shown in the app before you send, so there are no surprises.",
    },
    {
      question: "Where do these prices come from?",
      answer: "Market prices on this page are provided by CoinGecko and refresh every minute while the page is open.",
    },
    {
      question: "How do I sell crypto at today's rate?",
      answer:
        "Download Pyker, verify your account, and generate a deposit address for the coin you're selling. You'll see the live rate before you send, and your wallet is credited once the network confirms.",
    },
  ] as FaqItem[],
};
