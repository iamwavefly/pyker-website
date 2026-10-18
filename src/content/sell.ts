import type { Coin } from "../data/coins";
import type { FaqItem } from "../seo/meta";

export type Step = { title: string; text: string };

export function sellCoinTitle(coin: Coin) {
  const label = coin.displayName === coin.symbol ? coin.symbol : `${coin.displayName} (${coin.symbol})`;
  return `Sell ${label} for Naira Instantly in Nigeria | Pyker`;
}

export function sellCoinDescription(coin: Coin) {
  return `Instantly sell ${coin.displayName} for naira with Pyker. No P2P: send ${coin.symbol} to your own address, see your rate upfront, and get paid once it confirms.`;
}

export function sellCoinSteps(coin: Coin): Step[] {
  return [
    {
      title: `Choose ${coin.displayName} and your payout`,
      text: `In the Pyker app, tap Sell crypto, pick ${coin.displayName}, then choose whether you want naira or dollars.`,
    },
    {
      title: `Send ${coin.symbol} to your address`,
      text: coin.multiNetwork
        ? `Pick the network you're sending from, then copy or scan your ${coin.symbol} address and send from any wallet or exchange.`
        : `Copy or scan your ${coin.symbol} deposit address and send from any wallet or exchange.`,
    },
    {
      title: "Get paid in minutes",
      text: "Once the network confirms your payment, your wallet is credited. Withdraw naira to your bank with no Pyker fee, or fund your dollar card.",
    },
  ];
}

export function sellCoinFaq(coin: Coin): FaqItem[] {
  const { displayName: name, symbol } = coin;
  return [
    {
      question: `How do I sell ${name} for naira on Pyker?`,
      answer: `Open the Pyker app, tap Sell crypto and choose ${name}. Pick your NGN or USD wallet, then send ${symbol} to the deposit address Pyker gives you. Once the network confirms your payment, your wallet is credited.`,
    },
    {
      question: `How long does it take to sell ${name}?`,
      answer: `Your wallet is credited as soon as the network confirms your payment, usually within minutes. You can follow every step in the app, from payment detected to funds credited.`,
    },
    {
      question: `What rate will I get for my ${symbol}?`,
      answer: `You'll see the live rate in the app before you send anything. The prices on this page are market prices for reference and can differ slightly from your payout rate.`,
    },
    {
      question: `Are there fees to sell ${symbol}?`,
      answer: `Pyker's fee is built into the rate you see before you send, so there's no separate charge to work out. Your exchange or wallet may charge its own network fee to send ${symbol}.`,
    },
    {
      question: "Is there a minimum amount?",
      answer: `Yes. The minimum for ${symbol} is shown on your deposit address screen, so you can check it before you send.`,
    },
    coin.multiNetwork
      ? {
          question: `Which network should I use to send ${symbol}?`,
          answer: `${symbol} can be sent on several networks. In the app, choose the network you're sending from and Pyker gives you an address for that network. Sending on a different network can mean losing your funds.`,
        }
      : {
          question: "What happens if I send the wrong coin?",
          answer: `Only send ${symbol} to your ${symbol} deposit address. Sending any other coin to it can result in permanent loss, so always double-check before you send.`,
        },
    {
      question: "Can I get paid in dollars instead of naira?",
      answer: `Yes. When you generate your ${symbol} address, choose your USD Wallet as the destination instead of your NGN Wallet.`,
    },
    {
      question: "Can I withdraw the naira to my bank account?",
      answer:
        "Yes. Add and verify your bank account in the app, then withdraw from your NGN Wallet. Pyker doesn't charge a fee for naira withdrawals.",
    },
    {
      question: "Do I need to verify my account?",
      answer:
        "Yes. You'll verify your BVN and complete a quick liveness check in the app before selling. It keeps your account and your money safe.",
    },
  ];
}

export const SELL_HUB = {
  title: "Instant Crypto to Naira: Sell BTC, USDT, ETH | Pyker",
  description:
    "Instantly sell Bitcoin, USDT, Ethereum and more for naira. No P2P, no waiting for buyers: see your rate upfront and get paid as soon as your deposit confirms.",
  steps: [
    {
      title: "Pick a coin and your payout",
      text: "Choose the coin you're selling and whether you want naira or dollars.",
    },
    {
      title: "Send it to your address",
      text: "Pyker gives you a deposit address that's yours. Send from any wallet or exchange.",
    },
    {
      title: "Get paid in minutes",
      text: "Once the network confirms, your NGN or USD wallet is credited.",
    },
  ] as Step[],
  faq: [
    {
      question: "Which coins can I sell on Pyker?",
      answer:
        "Bitcoin, USDT, Ethereum, USDC, Solana and Dogecoin. USDT and USDC can be sent on several networks, so pick the network you're sending from when you generate your address.",
    },
    {
      question: "How fast do I get paid?",
      answer:
        "As soon as your deposit is confirmed on the network, Pyker credits your wallet, usually within minutes. You can track every step in the app.",
    },
    {
      question: "Can I withdraw naira to my bank account?",
      answer:
        "Yes. Withdraw from your NGN Wallet to your verified bank account. Pyker doesn't charge a fee for naira withdrawals.",
    },
    {
      question: "Is Pyker a P2P platform?",
      answer:
        "No. You don't trade with other people or wait for a buyer. You send crypto to your own Pyker address and your wallet is credited automatically.",
    },
    {
      question: "Are there fees to sell crypto on Pyker?",
      answer:
        "Pyker's fee is built into the rate shown before you send, so there's no separate charge. Your exchange or wallet may charge its own network fee to send crypto.",
    },
    {
      question: "Can I get paid in dollars instead of naira?",
      answer: "Yes. Choose your USD Wallet instead of your NGN Wallet when you generate a deposit address.",
    },
    {
      question: "How do I verify my account?",
      answer:
        "Sign up with your email and phone number, then verify your BVN and complete a quick liveness check in the app. It usually takes a few minutes.",
    },
  ] as FaqItem[],
};

// Structural differences only. No named competitors and no rate claims: those
// would need dated, verifiable data to publish.
export const SELL_COMPARE = {
  columns: ["", "Pyker instant sell", "P2P trading"] as [string, string, string],
  rows: [
    {
      label: "Who you trade with",
      ours: "No one. You send to your own Pyker address and the sale happens automatically.",
      theirs: "A stranger, who has to accept your order and pay you.",
    },
    {
      label: "Waiting",
      ours: "No buyer to wait for. Your wallet is credited once the deposit confirms.",
      theirs: "You wait for a buyer, then for their bank transfer to arrive.",
    },
    {
      label: "Your rate",
      ours: "Shown before you send, with Pyker's fee built in.",
      theirs: "Set per trade, and can change while you negotiate.",
    },
    {
      label: "Fake payment alerts",
      ours: "Not possible. There's no buyer to send one.",
      theirs: "A common scam: you release crypto for money that never arrives.",
    },
    {
      label: "How you're paid",
      ours: "To your NGN or USD wallet, with a receipt.",
      theirs: "Bank transfer from the buyer's account.",
    },
  ],
};
