import type { Post } from "./types";

export const loadElectricityToken: Post = {
  slug: "how-to-load-electricity-token-on-prepaid-meter",
  title: "How to Load an Electricity Token on Your Prepaid Meter",
  metaTitle: "How to Load Electricity Token on a Prepaid Meter",
  description:
    "Bought your token? Here's how to load it on your prepaid meter in Nigeria, step by step, plus what to do when the meter rejects it.",
  excerpt:
    "You don pay, token don land. Here's how to load it on your prepaid meter, step by step, and what to do if the meter says no.",
  category: "Bills",
  tags: ["bills"],
  published: "2026-11-11",
  updated: "2026-11-11",
  cover: { kind: "art", src: "/art/bills.webp" },
  body: [
    {
      type: "p",
      text: "You don pay, token don land. Now you just need to put it in the meter. Loading a token takes less than a minute once you know the steps, and this guide also covers what to do when the meter refuses to take it.",
    },
    { type: "h2", text: "First, get your token" },
    {
      type: "p",
      text: "A prepaid electricity token is a 20-digit number. You get a new one every time you buy units for your meter. On Pyker, tap **Pay bills**, then **Electricity**, choose your DisCo and **Prepaid**, enter your **Meter ID** and pay. Your token shows on the success screen straight away, and we send it as a notification too.",
    },
    {
      type: "p",
      text: "Buying from a specific DisCo? See the guides for [Ikeja Electric](/pay-bills/ikeja-electric), [Eko Electric](/pay-bills/eko-electric), [Abuja Electric](/pay-bills/abuja-electric), [Ibadan Electric](/pay-bills/ibadan-electric) and [the rest](/pay-bills).",
    },
    {
      type: "tip",
      title: "Check the name before you pay",
      text: "Pyker shows the name registered to the meter before you pay. If it isn't yours, stop and check the Meter ID. A token bought for the wrong meter won't load on yours.",
    },
    { type: "h2", text: "How to load the token, step by step" },
    {
      type: "ol",
      items: [
        "Go to your meter's keypad. On some meters it's on the meter itself; on split meters it's a separate small unit inside the house.",
        "Type the 20 digits carefully, in order. Take your time: one wrong digit and the meter will reject it.",
        "Press the Enter key. On many keypads it's marked **Enter**, or it's the **#** key or a coloured key.",
        "Wait for the meter to confirm. Most show a message like **Accept** or **Success**, then your new units.",
      ],
    },
    {
      type: "p",
      text: "That's it. Your units are added on top of whatever was left, so you don't lose any credit by loading early.",
    },
    { type: "h2", text: "If your meter rejects the token" },
    {
      type: "ul",
      items: [
        "**You typed a digit wrong.** This is the most common reason. Clear the screen and type the token again slowly.",
        "**The token is for a different meter.** A token only works on the meter it was bought for. Check that the meter number on your receipt matches your meter.",
        "**The token has already been used.** Each token loads once. If the meter says it's used, check your units: it may already be in.",
        "**Your meter needs key change tokens.** When DisCos upgrade meters in an area, they may issue key change tokens to enter before your normal token. Your DisCo will tell you if this applies to you.",
        "**The meter shows an error or a lock.** That's a meter fault, not a token problem. Contact your DisCo with your meter number.",
      ],
    },
    {
      type: "p",
      text: "Lost the token before you loaded it? No panic. On Pyker, open the payment in your transactions and tap **View receipt** to see the token again.",
    },
    { type: "h2", text: "How to check your remaining units" },
    {
      type: "p",
      text: "Most prepaid meters show your remaining units on the screen, and some cycle through readings when you press a key. The exact key depends on your meter brand, so check the manual or ask your DisCo. Keep an eye on it, and buy units before NEPA takes light at the worst time.",
    },
    {
      type: "cta",
      title: "Buy your next token with cashback",
      text: "Pay any of seven DisCos in seconds, check the meter name first, and get cashback every time.",
      to: "/pay-bills",
      label: "See bill payments",
    },
  ],
  faq: [
    {
      question: "How many digits is an electricity token?",
      answer: "Prepaid electricity tokens in Nigeria are 20 digits long.",
    },
    {
      question: "Can I load the same token twice?",
      answer: "No. Each token works once, on the meter it was bought for.",
    },
    {
      question: "Why does my meter reject my token?",
      answer:
        "Usually a typo, so type it again slowly. Otherwise, the token may be for another meter, already used, or your meter may need key change tokens from your DisCo first.",
    },
    {
      question: "Where can I find my token again on Pyker?",
      answer: "Open the payment in your transactions and tap View receipt. Your token is there.",
    },
  ],
};
