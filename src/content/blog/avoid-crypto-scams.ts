import type { Post } from "./types";

export const avoidScams: Post = {
  slug: "how-to-avoid-crypto-scams-in-nigeria",
  title: "How to Avoid Crypto Scams When Selling in Nigeria",
  metaTitle: "How to Avoid Crypto Scams When Selling in Nigeria",
  description:
    "Fake payment alerts, impersonators and 'too good' rates: the most common crypto scams Nigerians face when selling, and simple habits that keep you safe.",
  excerpt:
    "Fake alerts, impersonators and rates that are too good to be true. Here are the scams to watch for when you sell crypto, and how to stay safe.",
  category: "Safety",
  tags: ["safety", "sell"],
  published: "2026-10-18",
  updated: "2026-10-18",
  cover: { kind: "shield", tone: "lilac" },
  body: [
    {
      type: "p",
      text: "Crypto transactions can't be reversed. That's part of what makes crypto useful, but it also makes it attractive to scammers. Once you send coins to the wrong person, getting them back is usually impossible. The good news is that most scams follow a few familiar patterns, and a handful of habits will protect you from nearly all of them.",
    },
    { type: "h2", text: "1. Fake bank alerts" },
    {
      type: "p",
      text: "In P2P trades, a buyer \"pays\" you and sends a convincing screenshot or an SMS alert. You release your crypto, and later discover no money ever arrived. Fake alerts and edited screenshots are among the most common scams Nigerian sellers face.",
    },
    {
      type: "ul",
      items: [
        "Never rely on a screenshot or SMS. Confirm the money in your actual bank app or balance.",
        "Wait until the funds have fully landed before releasing anything.",
      ],
    },
    { type: "h2", text: "2. Impersonators and fake support" },
    {
      type: "p",
      text: "Scammers pose as customer support on WhatsApp, Telegram or social media, often after you post a complaint publicly. They offer to \"help\" and ask for your PIN, password, one-time code or seed phrase.",
    },
    {
      type: "tip",
      title: "A rule with no exceptions",
      text: "No genuine support team will ever ask for your PIN, password, OTP or seed phrase. Pyker support only contacts you from support@usepyker.com.",
    },
    { type: "h2", text: "3. Rates that are too good to be true" },
    {
      type: "p",
      text: "If someone offers far above the market rate, ask why. Inflated rates are a classic hook to get you to send first. Check the real market price on a trusted page like our [crypto to naira rates](/rates) before you trade.",
    },
    { type: "h2", text: "4. Address swaps and wrong networks" },
    {
      type: "p",
      text: "Some malware swaps a copied wallet address for the scammer's own. And even without malware, sending on the wrong network can lose funds. Learn the difference in our [USDT networks guide](/blog/usdt-networks-trc20-vs-erc20-vs-bep20).",
    },
    {
      type: "ul",
      items: [
        "After pasting an address, check the first and last few characters match.",
        "Confirm the network on both the sending and receiving screens.",
        "Send a small test amount first when moving a large sum.",
      ],
    },
    { type: "h2", text: "5. \"Send first\" pressure" },
    {
      type: "p",
      text: "Scammers create urgency: the offer expires in five minutes, or they're a \"trusted\" dealer a friend recommended. Pressure is a red flag on its own. A legitimate trade can wait for you to double-check.",
    },
    { type: "h2", text: "How Pyker reduces the risk" },
    {
      type: "p",
      text: "Selling to a verified service removes the stranger from the trade entirely. On [Pyker](/sell-crypto), you send crypto to your own deposit address and your wallet is credited automatically. There's no buyer to send a fake alert.",
    },
    {
      type: "ul",
      items: [
        "Every account is verified with BVN and a liveness check.",
        "Your PIN is required for withdrawals and to reveal card details.",
        "You can track every sale from payment detected to funds credited, with a receipt.",
      ],
    },
    { type: "h2", text: "6. \"Doubling\" and investment schemes" },
    {
      type: "p",
      text: "Offers to double your crypto, guaranteed daily returns, or \"account managers\" who trade for you are almost always scams. They often pay small early returns to build trust, then disappear with larger deposits. If an opportunity promises fixed, high returns with no risk, walk away.",
    },
    { type: "h2", text: "7. Fake apps and phishing links" },
    {
      type: "p",
      text: "Scammers copy the look of real apps and websites, then share links by SMS, email or social media. Once you log in, they capture your details.",
    },
    {
      type: "ul",
      items: [
        "Download apps only from official stores. Pyker's official app is on [Google Play](https://play.google.com/store/apps/details?id=com.wavefly.pyker).",
        "Type website addresses yourself or use bookmarks, instead of clicking links in messages.",
        "Check the web address carefully. Fake sites often use small spelling changes.",
      ],
    },
    { type: "h2", text: "What to do if you've been scammed" },
    {
      type: "ol",
      items: [
        "**Stop sending money.** Scammers often ask for \"fees\" to release your funds. Don't pay them.",
        "**Secure your accounts.** Change passwords and PINs, and freeze any cards that may be exposed.",
        "**Gather evidence.** Save screenshots, transaction IDs, wallet addresses and chat history.",
        "**Report it.** Tell the platform involved and report to the police or the EFCC.",
        "**Warn others.** Sharing what happened helps protect friends and family.",
      ],
    },
    {
      type: "cta",
      title: "Sell crypto without the risk of P2P",
      text: "Send to your own address and get paid automatically, with the rate shown before you send.",
      to: "/sell-crypto",
      label: "See how selling works",
    },
  ],
  faq: [
    {
      question: "What is the most common crypto scam in Nigeria?",
      answer:
        "Fake payment alerts in P2P trades are among the most common. A buyer sends a fake screenshot or SMS, and the seller releases crypto before real money arrives.",
    },
    {
      question: "Will Pyker ever ask for my PIN or password?",
      answer:
        "Never. No genuine Pyker staff will ask for your PIN, password, one-time code or seed phrase. Official support only contacts you from support@usepyker.com.",
    },
    {
      question: "Can I get my crypto back if I'm scammed?",
      answer:
        "Usually not. Crypto transactions are irreversible, which is why checking before you send is so important. If you're scammed, report it to your local authorities right away.",
    },
    {
      question: "Is it safer to sell crypto through an app than P2P?",
      answer:
        "Selling through a verified service removes the need to trust a stranger. With Pyker, your wallet is credited automatically once your deposit confirms, so there's no buyer who could send a fake alert.",
    },
  ],
};
