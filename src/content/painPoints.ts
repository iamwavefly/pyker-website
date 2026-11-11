// Common frustrations from public app-store reviews of crypto apps in Nigeria
// (withdrawals, fees, waiting, not knowing where money is). No platform is
// named. Each answer is backed by the backend: net quoted rate with the fee itemised on the receipt
// (sell.Quote), no fee on naira bank withdrawals (sell.Withdraw), automatic
// crediting on the provider's trade webhook, and the deposit tracker.
export const PAIN_POINTS = [
  {
    pain: "Surprise fees after you sell",
    title: "Transparent fees",
    text: "See your rate before you send, and the fee on every receipt. No hidden charges, no surprises after you sell.",
  },
  {
    pain: "Waiting on a P2P buyer who has gone quiet",
    title: "Instant sell, no counterparty",
    text: "No buyer, no \"I'm coming\". Send to your own Pyker address and your wallet is credited automatically once your deposit confirms.",
  },
  {
    pain: "Paying to get your money out",
    title: "Free naira withdrawals",
    text: "Your money is your money. Withdraw naira to your verified bank account with no Pyker fee.",
  },
  {
    pain: "Not knowing where your money is",
    title: "Every step, tracked",
    text: "No more \"where my money?\". See your payment detected, validated and credited in real time, with a receipt for every sale.",
  },
];
