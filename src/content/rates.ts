import type { FaqItem } from "../seo/meta";

export const CALCULATOR = {
  path: "/crypto-to-naira-calculator",
  title: "Crypto to Naira Calculator: BTC, USDT, ETH to NGN | Pyker",
  description:
    "Convert Bitcoin, USDT, Ethereum, USDC, Solana and Dogecoin to naira at today's Pyker rate. Type any amount, either way, and see what you'll get before you sell.",
  intro:
    "How much naira is your crypto worth today? Pick a coin, type any amount, and see it in naira at Pyker's rate, or type naira to see how much crypto that is. No guesswork, no long calculation.",
  faq: [
    {
      question: "How do I convert crypto to naira?",
      answer:
        "Pick your coin above and type the amount. The calculator multiplies it by today's Pyker rate for that coin. To actually cash out, sell it in the Pyker app and the naira lands in your NGN Wallet.",
    },
    {
      question: "How much is 100 USDT in naira?",
      answer:
        "Pick USDT and type 100. USDT tracks the dollar, so 100 USDT is about the naira value of $100 at Pyker's USD rate today.",
    },
    {
      question: "Is this the rate I'll get when I sell?",
      answer:
        "It's today's Pyker rate, refreshed every few hours. Prices move all day, so the app shows your exact rate at the moment you sell, before you send anything.",
    },
    {
      question: "Can I convert naira to crypto?",
      answer:
        "Yes. Type a naira amount in the NGN field and the calculator shows how much of the coin that's worth. Pyker is for selling crypto, so use it to see what you need to send to get a naira amount.",
    },
  ] as FaqItem[],
};

export const RATES = {
  title: "Crypto to Naira Rates Today: BTC, USDT, ETH to NGN | Pyker",
  description:
    "Today's Pyker rates for Bitcoin, USDT, Ethereum, USDC, Solana and Dogecoin in naira. See what you'll get before you sell, then get paid in minutes.",
  faq: [
    {
      question: "What is Pyker's dollar to naira rate today?",
      answer:
        "The USD rate at the top of the rates table shows the naira value of $1 today, the same USD rate you see in the Pyker app. The conversion rate for each coin is what you receive for 1 unit of that coin.",
    },
    {
      question: "What is the USDT to naira rate today?",
      answer:
        "The table on this page shows what Pyker pays for 1 USDT today, refreshed every few hours. When you sell, you'll see your exact rate in the app before you send.",
    },
    {
      question: "What is the Bitcoin price in naira today?",
      answer:
        "The Bitcoin row in the table shows what Pyker pays for 1 BTC today, and how much the wider market has moved in the last 24 hours.",
    },
    {
      question: "Why can the rate in the app differ from this page?",
      answer:
        "Rates on this page refresh every few hours, while prices move all day. The app always shows your exact rate at the moment you sell, before you send anything, so there are no surprises.",
    },
    {
      question: "Where do these prices come from?",
      answer:
        "The rates are Pyker's own. The 24h change and 7-day charts show the wider market, using data from CoinGecko.",
    },
    {
      question: "How do I sell crypto at today's rate?",
      answer:
        "Download Pyker, verify your account, and generate a deposit address for the coin you're selling. You'll see your rate before you send, and your wallet is credited once the network confirms.",
    },
  ] as FaqItem[],
};
