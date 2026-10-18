import type { FaqItem } from "../seo/meta";
import { FEATURES } from "../data/features";
import type { Step } from "./sell";

export type Source = { label: string; url: string };

export type Alternative = {
  slug: string;
  name: string;
  metaTitle: string;
  description: string;
  intro: string;
  /** A dated headline event, for platforms whose service changed. */
  event?: { date: string; text: string };
  /** One-line summary for link cards. */
  summary: string;
  /** A dollar-card app, so the page compares cards rather than selling crypto. */
  card?: boolean;
  changed: { title: string; paragraphs: string[] };
  /** Only facts we could verify from the sources below. */
  compare: { label: string; pyker: string; them: string }[];
  switchSteps: Step[];
  faq: FaqItem[];
  sources: Source[];
};

// Facts about other platforms are from public reporting, checked on this date.
// Re-check before editing, and update this date when you do.
const giftCardsLive = FEATURES.giftCards.status === "live";
const pykerGiftCards = giftCardsLive ? "Yes. Sell gift cards for naira." : "Coming soon.";
const giftCardFaq = {
  question: "Can I sell gift cards on Pyker?",
  answer: giftCardsLive
    ? "Yes. Sell your unused gift cards for naira, paid straight to your NGN Wallet."
    : "Gift card selling is coming soon. Today, Pyker focuses on selling crypto for naira or dollars and paying online with a virtual dollar card.",
};

export const ALTERNATIVES_CHECKED = "October 2026";
export const ALTERNATIVES_PATH = "/alternatives";

const pykerSellRow = {
  label: "How you sell",
  pyker: "Instant sell: send to your own Pyker address and your wallet is credited automatically once it confirms.",
};

// Platforms whose naira service changed or ended.
const changedPlatforms: Alternative[] = [
  {
    slug: "binance-p2p",
    summary: "Binance dropped naira in March 2024.",
    name: "Binance P2P",
    metaTitle: "Binance P2P Alternative for Naira in Nigeria | Pyker",
    description:
      "Binance no longer supports naira. Sell USDT, BTC and more for naira instantly with Pyker: no P2P, rate shown upfront, paid once your deposit confirms.",
    intro:
      "Binance stopped supporting naira in 2024, so you can't cash out to naira there anymore. Pyker lets you sell USDT, BTC and other coins for naira instantly, without trading with strangers.",
    event: { date: "5 March 2024", text: "Binance announces it will discontinue all naira services." },
    changed: {
      title: "What happened to naira on Binance",
      paragraphs: [
        "Naira trading on Binance's P2P marketplace was removed in February 2024. On 5 March 2024, Binance announced it would discontinue all naira services: naira deposits stopped, naira trading pairs were delisted on 7 March, and naira withdrawals ended on 8 March. Remaining naira balances were converted to USDT.",
        "Binance still offers crypto-to-crypto trading to users in Nigeria, but it no longer turns crypto into naira in your bank account. If that's what you used it for, you need another way to sell.",
      ],
    },
    compare: [
      {
        label: "Sell crypto for naira",
        pyker: "Yes, to your NGN Wallet, or choose your USD Wallet instead.",
        them: "No. Naira services were discontinued in March 2024.",
      },
      {
        ...pykerSellRow,
        them: "Crypto-to-crypto trading only. Naira P2P is no longer available.",
      },
    ],
    switchSteps: [
      {
        title: "Download Pyker and verify",
        text: "Sign up and complete BVN verification and a quick liveness check in the app.",
      },
      {
        title: "Get your deposit address",
        text: "Tap Sell crypto, choose the coin (for example USDT) and the network, and copy your Pyker address.",
      },
      {
        title: "Withdraw from Binance to Pyker",
        text: "In Binance, withdraw the coin to your Pyker address on the same network. Your naira wallet is credited once it confirms.",
      },
    ],
    faq: [
      {
        question: "Can I still sell crypto for naira on Binance?",
        answer:
          "No. Binance discontinued its naira services in March 2024, including naira P2P, deposits and withdrawals. You can still withdraw crypto from Binance and sell it elsewhere.",
      },
      {
        question: "How do I move my USDT from Binance to Pyker?",
        answer:
          "Generate a USDT deposit address in the Pyker app, then withdraw from Binance to that address on the same network. Always match the network on both sides.",
      },
      {
        question: "Is Pyker a P2P platform like Binance P2P was?",
        answer:
          "No. There's no buyer to wait for. You send crypto to your own Pyker address and your wallet is credited automatically once your deposit confirms.",
      },
    ],
    sources: [
      { label: "TechCabal: Binance to discontinue all naira services (5 March 2024)", url: "https://techcabal.com/2024/03/05/breaking-binance-to-discontinue-all-naira-services/" },
      { label: "Binance: Discontinuation of NGN services", url: "https://www.binance.com/en/square/post/4993367124321" },
    ],
  },
  {
    slug: "paxful",
    summary: "Paxful wound down in November 2025.",
    name: "Paxful",
    metaTitle: "Paxful Alternative in Nigeria: Sell Crypto for Naira | Pyker",
    description:
      "Paxful has shut down. Sell Bitcoin, USDT and more for naira instantly with Pyker: no P2P buyers, no fake alerts, and your rate shown before you send.",
    intro:
      "Paxful wound down its operations in 2025. If you used it to sell Bitcoin or USDT for naira, Pyker gives you a simpler way to do it, without trading with strangers.",
    event: { date: "1 October 2025", text: "Paxful announces it will wind down all operations by 1 November 2025." },
    changed: {
      title: "What happened to Paxful",
      paragraphs: [
        "On 1 October 2025, Paxful announced it would wind down all operations by 1 November 2025, and asked users to withdraw their funds before the cutoff. Nigeria had been one of its biggest markets.",
        "Paxful was a peer-to-peer marketplace, so every sale meant finding a buyer and waiting for their payment. Many former users now want a way to sell that doesn't depend on a counterparty at all.",
      ],
    },
    compare: [
      {
        label: "Available today",
        pyker: "Yes. Download the app and sell in minutes.",
        them: "No. Operations wound down in November 2025.",
      },
      {
        ...pykerSellRow,
        them: "Was a P2P marketplace: you traded with individual buyers.",
      },
      {
        label: "Fake payment alert risk",
        pyker: "None. There's no buyer to send one.",
        them: "A known risk of P2P trading with strangers.",
      },
    ],
    switchSteps: [
      {
        title: "Download Pyker and verify",
        text: "Sign up and complete BVN verification and a quick liveness check in the app.",
      },
      {
        title: "Choose your coin and payout",
        text: "Tap Sell crypto, pick Bitcoin, USDT or another coin, and choose naira or dollars.",
      },
      {
        title: "Send from your wallet",
        text: "Send from wherever you hold your crypto to your Pyker address. Your wallet is credited once it confirms.",
      },
    ],
    faq: [
      {
        question: "Is Paxful still working in Nigeria?",
        answer:
          "No. Paxful announced on 1 October 2025 that it would wind down all operations by 1 November 2025.",
      },
      {
        question: "What's the easiest Paxful alternative for selling Bitcoin?",
        answer:
          "If you just want naira for your Bitcoin, an instant-sell app avoids P2P entirely. On Pyker, you send BTC to your own address and your wallet is credited automatically once it confirms.",
      },
      {
        question: "Can I sell USDT on Pyker too?",
        answer:
          "Yes. Pyker supports Bitcoin, USDT, Ethereum, USDC, Solana and Dogecoin, with USDT and USDC on several networks.",
      },
    ],
    sources: [
      { label: "TechCabal: Paxful winds down (October 2025)", url: "https://techcabal.com/2025/10/07/techcabal-daily-paxful-winds-down/" },
    ],
  },
  {
    slug: "yellow-card",
    summary: "Yellow Card closed its retail app.",
    name: "Yellow Card",
    metaTitle: "Yellow Card Alternative in Nigeria for Selling Crypto | Pyker",
    description:
      "Yellow Card closed its retail app to focus on businesses. Sell USDT, BTC and more for naira instantly with Pyker, with your rate shown before you send.",
    intro:
      "Yellow Card closed its consumer app to focus on business customers. If you used it to cash out crypto to naira, Pyker is built for exactly that, for everyday users.",
    event: { date: "29 October 2025", text: "Yellow Card tells retail users its consumer app is closing." },
    changed: {
      title: "What happened to Yellow Card's app",
      paragraphs: [
        "On 29 October 2025, Yellow Card told retail users it would discontinue its consumer app, and asked them to withdraw their funds before 31 December. From 1 January 2026, the company focused on stablecoin services for businesses.",
        "Yellow Card is still operating, but as a business-to-business provider. For individuals who want to sell crypto for naira, that means finding a consumer app instead.",
      ],
    },
    compare: [
      {
        label: "Built for individuals",
        pyker: "Yes. Pyker is a consumer app for everyday users.",
        them: "No longer. Yellow Card now focuses on business customers.",
      },
      {
        ...pykerSellRow,
        them: "Retail selling through the consumer app has been discontinued.",
      },
      {
        label: "Virtual dollar card",
        pyker: "Yes. A USD Visa or Mastercard card funded from your Pyker balance.",
        them: "Not offered to retail users.",
      },
    ],
    switchSteps: [
      {
        title: "Download Pyker and verify",
        text: "Sign up and complete BVN verification and a quick liveness check in the app.",
      },
      {
        title: "Get your USDT address",
        text: "Tap Sell crypto, choose USDT and the network you're sending on, and copy your address.",
      },
      {
        title: "Sell and get paid",
        text: "Send your USDT from your wallet or exchange. Your naira wallet is credited once it confirms.",
      },
    ],
    faq: [
      {
        question: "Is Yellow Card still available for individuals in Nigeria?",
        answer:
          "Yellow Card closed its consumer app and, from 1 January 2026, focuses on business customers. Individuals need a consumer app to sell crypto for naira.",
      },
      {
        question: "Can I sell stablecoins like USDT and USDC on Pyker?",
        answer:
          "Yes. You can sell both USDT and USDC for naira or dollars, and choose the network you're sending from in the app.",
      },
      {
        question: "Do I need a business account to use Pyker?",
        answer: "No. Pyker is built for individuals. Sign up with your email and phone number and verify your BVN.",
      },
    ],
    sources: [
      { label: "TechCabal: Yellow Card discontinues retail services (3 November 2025)", url: "https://techcabal.com/2025/11/03/yellow-card-closes-retail-app-turns-to-enterprises/" },
    ],
  },
  {
    slug: "quidax-p2p",
    summary: "Quidax ended P2P in January 2026.",
    name: "Quidax P2P",
    metaTitle: "Quidax P2P Alternative: Sell Crypto for Naira | Pyker",
    description:
      "Quidax ended its P2P service in January 2026. Sell crypto for naira instantly with Pyker, plus get a virtual dollar card for paying online.",
    intro:
      "Quidax discontinued its P2P marketplace in January 2026. If you relied on it to sell for naira, Pyker offers instant sell to naira or dollars, plus a dollar card for spending online.",
    event: { date: "23 January 2026", text: "Quidax discontinues its P2P trading service." },
    changed: {
      title: "What changed at Quidax",
      paragraphs: [
        "Quidax discontinued its peer-to-peer trading service on 23 January 2026, about five months after launching it. The P2P marketplace, orders, ads and chat were all affected.",
        "Quidax still offers instant swaps and order-book trading. If you prefer a simple sell-to-naira flow, plus a dollar card for paying online, Pyker is built around exactly that.",
      ],
    },
    compare: [
      {
        label: "P2P marketplace",
        pyker: "Not needed. You never trade with another person.",
        them: "Discontinued on 23 January 2026.",
      },
      {
        ...pykerSellRow,
        them: "Instant swap or order-book trading.",
      },
      {
        label: "Virtual dollar card",
        pyker: "Yes. A USD Visa or Mastercard card funded from your Pyker balance.",
        them: "Check the Quidax app for current card offerings.",
      },
    ],
    switchSteps: [
      {
        title: "Download Pyker and verify",
        text: "Sign up and complete BVN verification and a quick liveness check in the app.",
      },
      {
        title: "Get your deposit address",
        text: "Tap Sell crypto, choose your coin and network, and copy your Pyker address.",
      },
      {
        title: "Send and get paid",
        text: "Send from your wallet or exchange on the matching network. Your wallet is credited once it confirms.",
      },
    ],
    faq: [
      {
        question: "Does Quidax still have P2P?",
        answer:
          "No. Quidax discontinued its P2P trading service on 23 January 2026. It still offers instant swaps and order-book trading.",
      },
      {
        question: "How is Pyker different from an exchange?",
        answer:
          "Pyker focuses on selling crypto for naira or dollars and spending it, with a virtual dollar card. You don't need to place orders or trade on a market.",
      },
      {
        question: "Can I get paid in dollars?",
        answer: "Yes. Choose your USD Wallet instead of your NGN Wallet when you generate a deposit address.",
      },
    ],
    sources: [
      { label: "Quidax support: P2P service discontinuation", url: "https://support.quidax.io/hc/en-us/articles/24723218178972-P2P-Service-Discontinuation-Everything-You-Need-to-Know" },
      { label: "TechCabal: Quidax discontinues P2P trading (23 January 2026)", url: "https://techcabal.com/2026/01/23/quidax-pause-p2p/" },
    ],
  },
  {
    slug: "bybit-p2p",
    summary: "Skip waiting on P2P merchants.",
    name: "Bybit P2P",
    metaTitle: "Bybit P2P Alternative: Sell USDT for Naira Instantly | Pyker",
    description:
      "Tired of waiting on P2P merchants? Sell USDT, BTC and more for naira instantly with Pyker. No counterparty, no fake alerts, rate shown upfront.",
    intro:
      "On Bybit, naira trades go through its P2P marketplace, which means finding a merchant and waiting for their payment. Pyker skips the counterparty: send to your own address and get paid automatically.",
    event: { date: "Since 2024", text: "Many Nigerians moved to Bybit P2P after Binance dropped naira." },
    changed: {
      title: "How selling for naira works on Bybit",
      paragraphs: [
        "Bybit is an international exchange. After Binance discontinued naira in 2024, many Nigerians turned to Bybit's P2P marketplace, where you sell to individual merchants who pay you by bank transfer.",
        "P2P can work, but every trade depends on someone else: you wait for an order, wait for their transfer, and have to confirm the money really arrived before releasing your crypto.",
      ],
    },
    compare: [
      {
        ...pykerSellRow,
        them: "P2P: you sell to an individual merchant who pays you by bank transfer.",
      },
      {
        label: "Waiting",
        pyker: "No buyer to wait for. Your wallet is credited once the deposit confirms.",
        them: "You wait for a merchant, then for their transfer to arrive.",
      },
      {
        label: "Fake payment alert risk",
        pyker: "None. There's no buyer to send one.",
        them: "A known risk of P2P trading. Always confirm money in your bank app.",
      },
    ],
    switchSteps: [
      {
        title: "Download Pyker and verify",
        text: "Sign up and complete BVN verification and a quick liveness check in the app.",
      },
      {
        title: "Get your USDT address",
        text: "Tap Sell crypto, choose USDT and the network you'll withdraw on, and copy your address.",
      },
      {
        title: "Withdraw from Bybit to Pyker",
        text: "Withdraw USDT from Bybit to your Pyker address on the same network. Your naira wallet is credited once it confirms.",
      },
    ],
    faq: [
      {
        question: "Why choose instant sell over Bybit P2P?",
        answer:
          "Instant sell removes the counterparty. You don't wait for a merchant or risk a fake payment alert. You send to your own Pyker address and your wallet is credited automatically.",
      },
      {
        question: "Can I withdraw USDT from Bybit to Pyker?",
        answer:
          "Yes. Generate a USDT address in the Pyker app, then withdraw from Bybit on the same network you chose in Pyker.",
      },
      {
        question: "Will I see my rate before I send?",
        answer: "Yes. Pyker shows your rate in the app before you send, with Pyker's fee built in.",
      },
    ],
    sources: [
      { label: "TechCabal: Bybit, KuCoin emerge winners after Binance restriction (April 2024)", url: "https://techcabal.com/2024/04/02/as-binance-suffers-regulatory-clampdown-nigerians-find-alternatives-in-bybit-kucoin-and-telegram-in-app-wallet/" },
    ],
  },
];


// Still-active platforms. People compare these for rate and cashout speed, so
// their pages focus on how to compare fairly. We describe each platform only
// as its own store listing does, and make no claims about its rates or fees.
const activePlatforms: Alternative[] = [
  {
    slug: "roqqu",
    summary: "Compare payouts, not headline rates.",
    name: "Roqqu",
    metaTitle: "Roqqu Alternative: Sell Crypto for Naira Instantly | Pyker",
    description:
      "Comparing Roqqu for rates or cashout speed? Pyker has one upfront rate, no separate fee, and no Pyker fee to withdraw naira to your bank.",
    intro:
      "Looking for a better payout or a faster way to get naira into your bank? Here's how Pyker works, and how to compare apps fairly before you sell.",
    changed: {
      title: "Why people compare Roqqu with other apps",
      paragraphs: [
        "Roqqu describes itself as an app to buy and sell crypto, with trading features alongside. People usually compare it with other apps for one of three reasons: a better payout, faster cashout to their bank, or a simpler way to just turn crypto into naira.",
        "Pyker is focused on that last job. You send crypto to your own address, your wallet is credited automatically once it confirms, and you can withdraw naira to your bank. If you mainly sell rather than trade, that can be the simpler choice.",
      ],
    },
    compare: [
      {
        label: "What it's built for",
        pyker: "Selling crypto for naira or dollars, and spending online with a dollar card.",
        them: "Buying, selling and trading crypto.",
      },
      {
        ...pykerSellRow,
        them: "Check the Roqqu app for its current selling options.",
      },
      {
        label: "Fees to check",
        pyker: "Pyker's fee is built into the rate shown, and Pyker charges no fee to withdraw naira.",
        them: "Check Roqqu's current fee schedule in its app.",
      },
    ],
    switchSteps: [
      {
        title: "Check both apps at the same time",
        text: "Rates move constantly. Compare the naira you'd receive on each app within the same few minutes.",
      },
      {
        title: "Get your Pyker address",
        text: "Verify your account, tap Sell crypto, choose your coin and network, and copy your address.",
      },
      {
        title: "Send and cash out",
        text: "Send your crypto, get credited once it confirms, then withdraw naira to your bank.",
      },
    ],
    faq: [
      {
        question: "Does Pyker have better rates than Roqqu?",
        answer:
          "Rates on every platform move constantly, so the fair way to compare is to check both apps at the same time and compare the naira that would land in your bank after all fees. On Pyker, our fee is built into the rate you see and there's no Pyker fee to withdraw naira.",
      },
      {
        question: "How fast can I cash out on Pyker?",
        answer:
          "Your Pyker wallet is credited once the network confirms your deposit, usually within minutes. You can then withdraw naira to your verified bank account.",
      },
      {
        question: "Can I move crypto from Roqqu to Pyker?",
        answer:
          "Yes. Generate a deposit address in the Pyker app, then withdraw from Roqqu to that address on the same network.",
      },
    ],
    sources: [{ label: "Roqqu on Google Play", url: "https://play.google.com/store/apps/details?id=com.roqqu.app" }],
  },
  {
    slug: "busha",
    summary: "Just want to sell? Keep it simple.",
    name: "Busha",
    metaTitle: "Busha Alternative: Sell Crypto for Naira Instantly | Pyker",
    description:
      "Comparing Busha for rates or cashout? Pyker is built just for selling crypto for naira: one upfront rate, no separate fee, free naira withdrawals.",
    intro:
      "Busha is a full crypto investing app. If you mostly want to turn crypto into naira, quickly and with a clear payout, here's how Pyker compares.",
    changed: {
      title: "Why people compare Busha with other apps",
      paragraphs: [
        "Busha's store listing describes a broad investing app: buying and selling, limit orders, recurring buys, savings and asset-backed loans, with withdrawals to your bank. That suits people who want to invest and trade.",
        "If what you really want is to sell crypto and get naira, Pyker keeps it to the essentials: your own deposit address, one upfront rate, automatic crediting, and naira withdrawals to your bank, plus a dollar card for paying online.",
      ],
    },
    compare: [
      {
        label: "What it's built for",
        pyker: "Selling crypto for naira or dollars, and spending online with a dollar card.",
        them: "Investing: buying and selling, limit orders, recurring buys, savings and loans.",
      },
      {
        ...pykerSellRow,
        them: "Instant buy and sell, or limit orders, according to its store listing.",
      },
      {
        label: "Fees to check",
        pyker: "Pyker's fee is built into the rate shown, and Pyker charges no fee to withdraw naira.",
        them: "Check Busha's current fees in its app.",
      },
    ],
    switchSteps: [
      {
        title: "Check both apps at the same time",
        text: "Compare the naira you'd receive on each app within the same few minutes, after all fees.",
      },
      {
        title: "Get your Pyker address",
        text: "Verify your account, tap Sell crypto, choose your coin and network, and copy your address.",
      },
      {
        title: "Send and cash out",
        text: "Send your crypto, get credited once it confirms, then withdraw naira to your bank.",
      },
    ],
    faq: [
      {
        question: "Does Pyker have better rates than Busha?",
        answer:
          "Rates change all the time, so compare both apps at the same moment and look at the naira that would reach your bank after every fee. On Pyker, our fee is built into the rate shown and there's no Pyker fee to withdraw naira.",
      },
      {
        question: "Is Pyker an investment app?",
        answer:
          "No. Pyker is built for selling crypto for naira or dollars and spending online with a virtual dollar card. It doesn't offer trading tools like limit orders.",
      },
      {
        question: "How do I withdraw naira from Pyker?",
        answer: "Add and verify your bank account in the app, then withdraw from your NGN Wallet. Pyker doesn't charge a fee for naira withdrawals.",
      },
    ],
    sources: [{ label: "Busha on Google Play", url: "https://play.google.com/store/apps/details?id=co.busha.android" }],
  },
];


// More active platforms, each described only as its own store listing or
// website does. Fee figures are deliberately left out: link to their pricing.
const morePlatforms: Alternative[] = [
  {
    slug: "bitnob",
    summary: "A focused way to cash out crypto to naira.",
    name: "Bitnob",
    metaTitle: "Bitnob Alternative: Sell Crypto for Naira Instantly | Pyker",
    description:
      "Comparing Bitnob? Pyker focuses on selling crypto for naira: one upfront rate, free naira withdrawals, and a USD Visa or Mastercard card.",
    intro:
      "Bitnob covers a lot: sending money across Africa, Bitcoin and stablecoins, and a dollar card. If you mainly want to turn crypto into naira and spend in dollars, here's how Pyker compares.",
    changed: {
      title: "Why people compare Bitnob with other apps",
      paragraphs: [
        "Bitnob describes itself as a money transfer app for sending and receiving money within Africa and globally, with Bitcoin and stablecoin features and a virtual dollar card.",
        "People usually compare it for a better payout when cashing out, faster access to their naira, or a card that works for their subscriptions. Pyker is built around those two jobs: selling crypto for naira, and paying online in dollars.",
      ],
    },
    compare: [
      {
        label: "What it's built for",
        pyker: "Selling crypto for naira or dollars, and paying online with a dollar card.",
        them: "Sending and receiving money across Africa, plus Bitcoin, stablecoins and a dollar card.",
      },
      { ...pykerSellRow, them: "Check the Bitnob app for its current selling options." },
      {
        label: "Dollar card",
        pyker: "USD Visa or Mastercard, in five colours. A one-time issuance fee is shown before you confirm.",
        them: "Offers a virtual dollar card. Check Bitnob for its current card fees.",
      },
    ],
    switchSteps: [
      { title: "Compare at the same moment", text: "Check the naira you'd receive on each app within the same few minutes, after all fees." },
      { title: "Get your Pyker address", text: "Verify your account, tap Sell crypto, choose your coin and network, and copy your address." },
      { title: "Send and cash out", text: "Send your crypto, get credited once it confirms, then withdraw naira to your bank." },
    ],
    faq: [
      {
        question: "Does Pyker have better rates than Bitnob?",
        answer:
          "Rates change constantly, so compare both apps at the same moment and look at the naira that would reach your bank after every fee. On Pyker, our fee is built into the rate shown and there's no Pyker fee to withdraw naira.",
      },
      {
        question: "Does Pyker have a dollar card like Bitnob?",
        answer:
          "Yes. Pyker's virtual dollar card is a USD Visa or Mastercard you fund from your Pyker balance, for paying Apple, Google, Netflix, Udemy, Claude and more.",
      },
      {
        question: "Can I send USDT or Bitcoin from Bitnob to Pyker?",
        answer: "Yes. Generate a deposit address in the Pyker app, then send to it on the matching network.",
      },
    ],
    sources: [
      { label: "Bitnob on the App Store (Nigeria)", url: "https://apps.apple.com/ng/app/bitnob/id1513951003" },
      { label: "Bitnob Nigeria website", url: "https://bitnob.com/en-NG/" },
    ],
  },
  {
    slug: "luno",
    summary: "Selling, not investing? Keep it simple.",
    name: "Luno",
    metaTitle: "Luno Alternative in Nigeria: Sell Crypto for Naira | Pyker",
    description:
      "Comparing Luno? Pyker is built just for selling crypto for naira: send to your own address, see one upfront rate, and withdraw naira free.",
    intro:
      "Luno is built for buying, storing and investing in crypto. If you mostly want to sell crypto you already hold and get naira, here's how Pyker compares.",
    changed: {
      title: "Why people compare Luno with other apps",
      paragraphs: [
        "Luno describes itself as a place to buy, store and explore Bitcoin and other cryptocurrencies with naira, with instant buys and sells as well as an exchange for traders.",
        "If you hold crypto elsewhere and just want naira, Pyker is focused on that one job: generate an address, send your coins, and get credited once they confirm.",
      ],
    },
    compare: [
      {
        label: "What it's built for",
        pyker: "Selling crypto for naira or dollars, and paying online with a dollar card.",
        them: "Buying, storing and investing in crypto, with an exchange for traders.",
      },
      { ...pykerSellRow, them: "Instant sell from your portfolio, or orders on the Luno Exchange." },
      {
        label: "Fees to check",
        pyker: "Pyker's fee is built into the rate shown, and Pyker charges no fee to withdraw naira.",
        them: "Luno publishes its Nigeria fees and limits in its help centre.",
      },
    ],
    switchSteps: [
      { title: "Compare at the same moment", text: "Check the naira you'd receive on each app within the same few minutes, after all fees." },
      { title: "Get your Pyker address", text: "Verify your account, tap Sell crypto, choose your coin and network, and copy your address." },
      { title: "Send from Luno", text: "Send your crypto from Luno to your Pyker address. You're credited once it confirms." },
    ],
    faq: [
      {
        question: "Does Pyker have better rates than Luno?",
        answer:
          "Compare both at the same moment and look at the naira that reaches your bank after every fee. Luno publishes its Nigeria fees in its help centre; on Pyker, our fee is built into the rate and naira withdrawals are free.",
      },
      {
        question: "Is Pyker an investment platform like Luno?",
        answer: "No. Pyker is built for selling crypto and spending online. It doesn't offer investing or trading tools.",
      },
      {
        question: "Can I send crypto from Luno to Pyker?",
        answer: "Yes. Generate a deposit address in the Pyker app, then send from Luno to it on the matching network.",
      },
    ],
    sources: [
      { label: "Luno Nigeria website", url: "https://www.luno.com/en-ng/" },
      { label: "Luno fees and limits in Nigeria", url: "https://guide.luno.com/hc/en-gb/articles/14962563616157-Luno-fees-and-limits-in-Nigeria" },
    ],
  },
  {
    slug: "prestmit",
    summary: "Instant crypto to naira, gift cards soon.",
    name: "Prestmit",
    metaTitle: "Prestmit Alternative for Selling Crypto in Nigeria | Pyker",
    description:
      "Comparing Prestmit for selling crypto? Pyker focuses on instant crypto to naira: your own address, one upfront rate and free naira withdrawals.",
    intro:
      "Prestmit is known for gift cards as well as crypto. Pyker is focused on selling crypto for naira and paying online with a dollar card, with gift card selling coming soon.",
    changed: {
      title: "Why people compare Prestmit with other apps",
      paragraphs: [
        "Prestmit describes itself as a gift card and crypto platform, where you sell gift cards or crypto and get paid in naira or other currencies.",
        "If your main need is selling crypto, a focused instant-sell app can be simpler: you send to your own address and your wallet is credited automatically once the deposit confirms. Gift card selling is coming to Pyker soon.",
      ],
    },
    compare: [
      {
        label: "What it's built for",
        pyker: "Selling crypto for naira or dollars, and paying online with a dollar card.",
        them: "Selling gift cards and crypto for naira and other currencies.",
      },
      { label: "Gift cards", pyker: pykerGiftCards, them: "A core part of the platform." },
      { ...pykerSellRow, them: "Check the Prestmit app for how crypto sales are processed." },
    ],
    switchSteps: [
      { title: "Compare at the same moment", text: "Check the naira you'd receive on each app within the same few minutes, after all fees." },
      { title: "Get your Pyker address", text: "Verify your account, tap Sell crypto, choose your coin and network, and copy your address." },
      { title: "Send and cash out", text: "Send your crypto, get credited once it confirms, then withdraw naira to your bank." },
    ],
    faq: [
      giftCardFaq,
      {
        question: "Does Pyker have better crypto rates than Prestmit?",
        answer:
          "Compare both apps at the same moment and look at the naira that reaches your bank after every fee. On Pyker, our fee is built into the rate shown and naira withdrawals are free.",
      },
      {
        question: "Which coins can I sell on Pyker?",
        answer: "Bitcoin, USDT, Ethereum, USDC, Solana and Dogecoin.",
      },
    ],
    sources: [
      { label: "Prestmit on Google Play", url: "https://play.google.com/store/apps/details?id=com.prestmit" },
      { label: "Prestmit website", url: "https://prestmit.io/" },
    ],
  },
  {
    slug: "noones",
    summary: "Skip P2P trades with instant sell.",
    name: "NoOnes",
    metaTitle: "NoOnes Alternative: Sell Crypto Without P2P | Pyker",
    description:
      "Comparing NoOnes? Skip P2P trades with Pyker's instant sell: send to your own address, see one upfront rate, and get paid once it confirms.",
    intro:
      "NoOnes is a peer-to-peer marketplace, so every sale means trading with another person. Pyker removes the counterparty: you send to your own address and get paid automatically.",
    changed: {
      title: "How selling works on NoOnes",
      paragraphs: [
        "NoOnes describes itself as a peer-to-peer marketplace for buying and selling crypto, with escrow and hundreds of payment methods, alongside swaps and a wallet.",
        "P2P gives you lots of payment options, but each trade depends on a counterparty: you find a buyer, wait for payment, and confirm it really arrived. Instant sell skips all of that.",
      ],
    },
    compare: [
      { ...pykerSellRow, them: "P2P: you trade with another user, with escrow on the platform." },
      {
        label: "Waiting",
        pyker: "No buyer to wait for. Your wallet is credited once the deposit confirms.",
        them: "You wait for a counterparty to accept and pay.",
      },
      {
        label: "Fake payment alert risk",
        pyker: "None. There's no buyer to send one.",
        them: "A known risk in P2P trading. Always confirm money in your bank app.",
      },
    ],
    switchSteps: [
      { title: "Download Pyker and verify", text: "Sign up and complete BVN verification and a quick liveness check." },
      { title: "Get your deposit address", text: "Tap Sell crypto, choose your coin and network, and copy your address." },
      { title: "Send and get paid", text: "Send from your wallet. Your naira wallet is credited automatically once it confirms." },
    ],
    faq: [
      {
        question: "Why choose instant sell over NoOnes P2P?",
        answer:
          "Instant sell removes the counterparty, so there's no buyer to wait for and no fake payment alerts. You send to your own Pyker address and your wallet is credited automatically.",
      },
      {
        question: "Can I send crypto from NoOnes to Pyker?",
        answer: "Yes. Generate a deposit address in the Pyker app, then send to it on the matching network.",
      },
      {
        question: "Will I see my rate before I send?",
        answer: "Yes. Pyker shows your rate in the app before you send, with Pyker's fee built in.",
      },
    ],
    sources: [
      { label: "NoOnes on Google Play", url: "https://play.google.com/store/apps/details?id=team.noones.mobilemessenger" },
      { label: "NoOnes website", url: "https://noones.com/" },
    ],
  },
  {
    slug: "grey",
    card: true,
    summary: "A dollar card funded from naira or crypto.",
    name: "Grey",
    metaTitle: "Grey Card Alternative: Virtual Dollar Card in Nigeria | Pyker",
    description:
      "Comparing Grey's dollar card? Pyker's USD Visa or Mastercard card is funded from your naira or crypto. Pay Apple, Google, Netflix, Claude and more.",
    intro:
      "Grey is built for freelancers who receive money from abroad. If you'd rather fund a dollar card from naira or crypto, here's how Pyker's card compares.",
    changed: {
      title: "Why people compare Grey with other apps",
      paragraphs: [
        "Grey describes itself as offering US, UK and EU accounts for receiving international payments, plus a virtual dollar card, aimed at people who work across borders.",
        "If you don't earn in foreign currency and simply want a card for subscriptions and online shopping, a card funded from your naira balance or your crypto can be more direct.",
      ],
    },
    compare: [
      {
        label: "What it's built for",
        pyker: "Selling crypto for naira or dollars, and paying online with a dollar card.",
        them: "Receiving international payments into foreign accounts, plus a dollar card.",
      },
      {
        label: "Funding your card",
        pyker: "From your Pyker balance, which you can top up by bank transfer or by selling crypto.",
        them: "From the balance in your Grey account.",
      },
      {
        label: "Card networks",
        pyker: "Choose Visa or Mastercard, in one of five colours.",
        them: "Check Grey for its current card options and fees.",
      },
    ],
    switchSteps: [
      { title: "Verify your account", text: "Sign up in the Pyker app and verify your BVN." },
      { title: "Create your card", text: "Choose Visa or Mastercard and a colour. The one-time issuance fee is shown before you confirm." },
      { title: "Fund it and pay", text: "Move money from your Pyker balance onto your card and use it anywhere online." },
    ],
    faq: [
      {
        question: "Is Pyker's dollar card a good Grey alternative?",
        answer:
          "If you want a card funded from naira or crypto rather than foreign income, Pyker's USD Visa or Mastercard card is a direct option. Compare card fees in each app before you choose.",
      },
      {
        question: "Where can I use the Pyker dollar card?",
        answer: "Pyker users pay for Apple, Google, Netflix, Udemy, Claude, ChatGPT and other online services that accept Visa or Mastercard.",
      },
      {
        question: "Do I need foreign income to use Pyker's card?",
        answer: "No. You fund it from your Pyker balance, which you can top up by bank transfer or by selling crypto.",
      },
    ],
    sources: [
      { label: "Grey help centre: your Grey account", url: "https://support.grey.co/en/articles/11901765-everything-you-need-to-know-about-your-grey-account" },
      { label: "Grey for freelancers", url: "https://grey.co/discover/freelancers" },
    ],
  },
  {
    slug: "cardtonic",
    card: true,
    summary: "A dollar card plus crypto, in one app.",
    name: "Cardtonic",
    metaTitle: "Cardtonic Alternative: Dollar Card & Crypto | Pyker",
    description:
      "Comparing Cardtonic? Pyker pairs a USD Visa or Mastercard card with instant crypto to naira. Pay Apple, Google, Netflix, Udemy, Claude and more.",
    intro:
      "Cardtonic is known for gift cards and virtual dollar cards. Pyker pairs a dollar card with instant crypto selling, so you can fund your card from the crypto you already hold.",
    changed: {
      title: "Why people compare Cardtonic with other apps",
      paragraphs: [
        "Cardtonic describes itself as an app for gift cards and virtual dollar cards, with Visa and Mastercard options, plus bill payments.",
        "If you hold crypto and want to turn it into card spending, Pyker connects the two: sell crypto for naira or dollars, then fund your dollar card from the same balance. Gift card selling is coming to Pyker soon.",
      ],
    },
    compare: [
      {
        label: "What it's built for",
        pyker: "Selling crypto for naira or dollars, and paying online with a dollar card.",
        them: "Gift cards and virtual dollar cards, plus bill payments.",
      },
      {
        label: "Card networks",
        pyker: "Choose Visa or Mastercard, in one of five colours.",
        them: "Visa and Mastercard options. Check Cardtonic for current card fees.",
      },
      { label: "Gift cards", pyker: pykerGiftCards, them: "A core part of the app." },
    ],
    switchSteps: [
      { title: "Verify your account", text: "Sign up in the Pyker app and verify your BVN." },
      { title: "Sell crypto to fund it", text: "Send crypto to your Pyker address, or top up by bank transfer." },
      { title: "Create and fund your card", text: "Pick Visa or Mastercard, then move money onto your card and pay online." },
    ],
    faq: [
      {
        question: "Can I fund my Pyker dollar card with crypto?",
        answer:
          "Yes. Sell crypto for naira or dollars in the app, then move money from your balance onto your card.",
      },
      giftCardFaq,
      {
        question: "Where can I use the Pyker dollar card?",
        answer: "Pyker users pay for Apple, Google, Netflix, Udemy, Claude, ChatGPT and other online services that accept Visa or Mastercard.",
      },
    ],
    sources: [
      { label: "Cardtonic on Google Play", url: "https://play.google.com/store/apps/details?id=com.cardtonic.app" },
      { label: "Cardtonic website", url: "https://cardtonic.com/" },
    ],
  },
];

export const ALTERNATIVES: Alternative[] = [...changedPlatforms, ...activePlatforms, ...morePlatforms];

export function alternativePath(alternative: Alternative) {
  return `${ALTERNATIVES_PATH}/${alternative.slug}`;
}

// How to compare payouts fairly, shown on every alternatives page. Pyker's
// side reflects the backend: fee built into the quoted rate (sell.Quote), no
// fee on naira bank withdrawals (sell.Withdraw).
export const PAYOUT_CHECKS = [
  {
    title: "Compare at the same moment",
    text: "Rates move constantly. Check each app within the same few minutes, for the same amount.",
  },
  {
    title: "Count every fee",
    text: "Look at the naira you'd actually receive: rate, selling fees and withdrawal fees together. On Pyker, our fee is built into the rate you see.",
  },
  {
    title: "Check the cashout",
    text: "Money in an app isn't money in your bank. Pyker doesn't charge a fee to withdraw naira to your verified bank account.",
  },
  {
    title: "Factor in waiting",
    text: "P2P trades depend on a buyer. With instant sell, your wallet is credited automatically once your deposit confirms.",
  },
];

// What to compare between dollar cards, for card-app alternative pages.
// Pyker's side matches the app: issuance fee shown before you confirm, funded
// from the Pyker balance, Visa or Mastercard, freeze/withdraw, PIN-gated details.
export const CARD_CHECKS = [
  {
    title: "Issuance and funding fees",
    text: "Check what it costs to create and top up a card. Pyker's one-time issuance fee is shown before you confirm.",
  },
  {
    title: "How you fund it",
    text: "Pyker cards are funded from your balance, which you can top up by bank transfer or by selling crypto.",
  },
  {
    title: "Network choice",
    text: "Some merchants accept one network more readily. With Pyker, you choose Visa or Mastercard.",
  },
  {
    title: "Control and security",
    text: "Freeze your card in one tap, withdraw unused funds, and reveal card details only after your PIN.",
  },
];

export const ALTERNATIVES_FAQ: FaqItem[] = [
  {
    question: "Which app gives the best rate for selling crypto in Nigeria?",
    answer:
      "Rates change by the minute and differ by coin and amount, so no single app is always best. Compare apps at the same moment and look at the naira that would reach your bank after every fee, including withdrawal fees.",
  },
  {
    question: "What's the best alternative to P2P for selling crypto in Nigeria?",
    answer:
      "If you just want naira for your crypto, an instant-sell app removes the counterparty. You send crypto to your own address and your wallet is credited automatically, with no buyer to wait for and no fake alerts.",
  },
  {
    question: "Which coins can I sell on Pyker?",
    answer: "Bitcoin, USDT, Ethereum, USDC, Solana and Dogecoin, with USDT and USDC on several networks.",
  },
  {
    question: "How fast do I get paid on Pyker?",
    answer: "Your wallet is credited as soon as the network confirms your deposit, usually within minutes.",
  },
];
