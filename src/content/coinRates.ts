import type { Coin } from "../data/coins";
import type { FaqItem } from "../seo/meta";

/** Naira amounts listed in the "naira to coin" table on every rate page. */
export const NAIRA_AMOUNTS = [5_000, 10_000, 20_000, 50_000, 100_000, 200_000, 500_000, 1_000_000];

// One per coin, keyed by slug, so each rate page says something of its own.
const INTROS: Record<string, string> = {
  bitcoin:
    "What Pyker pays for 1 BTC in naira today, plus what smaller amounts like 0.001 BTC are worth. Most people sell a fraction of a bitcoin, so the table below does the maths for you.",
  usdt:
    "What Pyker pays for 1 USDT in naira today. USDT tracks the US dollar, so this is the same as Pyker's USD rate: the naira you get for every $1 you sell, on TRC20, ERC20 or BEP20.",
  ethereum:
    "What Pyker pays for 1 ETH in naira today, plus what smaller amounts like 0.01 ETH are worth. Check the rate here, then sell from any wallet or exchange in a few taps.",
  usdc:
    "What Pyker pays for 1 USDC in naira today. USDC is a dollar stablecoin, so 1 USDC is worth about $1, and this rate is the naira you get for each one you sell.",
  solana:
    "What Pyker pays for 1 SOL in naira today, plus what amounts from 0.1 SOL up are worth. See the rate here, then sell straight from your Solana wallet.",
  dogecoin:
    "What Pyker pays for DOGE in naira today, from 10 DOGE to 10,000. Check what your Dogecoin is worth, then cash it out to naira or dollars in minutes.",
};

export function coinRateIntro(coin: Coin) {
  return INTROS[coin.slug] ?? `What Pyker pays for 1 ${coin.symbol} in naira today.`;
}

export function coinRateTitle(coin: Coin) {
  return coin.displayName === coin.symbol
    ? `${coin.symbol} to Naira Rate Today: Convert ${coin.symbol} to NGN | Pyker`
    : `${coin.displayName} to Naira Rate Today: ${coin.symbol} to NGN | Pyker`;
}

export function coinRateDescription(coin: Coin) {
  return `Today's ${coin.displayName} to naira rate from Pyker. Convert any amount of ${coin.symbol} to NGN, see what common amounts are worth, then sell in minutes.`;
}

export function coinRateFaq(coin: Coin): FaqItem[] {
  const { displayName: name, symbol } = coin;
  const stable = coin.multiNetwork;
  return [
    {
      question: `What is the ${symbol} to naira rate today?`,
      answer: `The rate at the top of this page is what Pyker pays for 1 ${symbol} today, refreshed every few hours. When you sell, the app shows your exact rate before you send anything.`,
    },
    {
      question: `How much is ${stable ? `100 ${symbol}` : `1 ${symbol}`} in naira?`,
      answer: `Use the table or converter on this page: it multiplies today's Pyker rate by your amount. The figure you'll receive is shown in the app before you send, with Pyker's fee already built in.`,
    },
    stable
      ? {
          question: `Is the ${symbol} rate the same as the dollar rate?`,
          answer: `${symbol} is a dollar stablecoin, so 1 ${symbol} is worth about $1. Pyker's ${symbol} rate is very close to its USD rate, the naira you get for each dollar you sell.`,
        }
      : {
          question: `Why does the ${name} rate change during the day?`,
          answer: `${name} trades around the clock, so its price moves all day. This page refreshes every few hours, and the app always shows your live rate at the moment you sell.`,
        },
    {
      question: `Why might my rate in the app differ from this page?`,
      answer:
        "Prices move between refreshes. The app shows your exact rate at the moment you sell, before you send anything, so you always know what you'll get.",
    },
    {
      question: `How do I sell ${symbol} at today's rate?`,
      answer: `Download Pyker, verify your account, then tap Sell crypto and choose ${name}. Send ${symbol} to your own deposit address and your wallet is credited once the network confirms.`,
    },
    {
      question: "Can I get paid in dollars instead of naira?",
      answer: `Yes. When you generate your ${symbol} address, choose your USD Wallet instead of your NGN Wallet.`,
    },
  ];
}
