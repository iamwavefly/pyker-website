import type { Post } from "./types";

export const loadElectricityToken: Post = {
  slug: "how-to-load-electricity-token-on-prepaid-meter",
  title: "How to Load an Electricity Token on Your Prepaid Meter",
  metaTitle: "How to Load Electricity Token on a Prepaid Meter",
  description:
    "How to load an electricity token on your prepaid meter in Nigeria, step by step, plus a quick fix for every error your meter shows when it rejects a token.",
  excerpt:
    "You don pay, token don land. Here's how to load it on your prepaid meter, step by step, and what to do when the meter says no.",
  category: "Bills",
  tags: ["bills"],
  published: "2026-11-11",
  updated: "2026-11-11",
  cover: { kind: "art", src: "/art/bills.webp" },
  body: [
    {
      type: "answer",
      text: "Go to your meter's keypad, type the **20-digit token** carefully, then press **Enter** (on many keypads it's the **#** key or a coloured key). Wait for **Accept** or **Success**, and your new units are added on top of what was left. If the meter rejects it, retype it slowly first; most rejections are a typo.",
    },
    {
      type: "p",
      text: "You don pay, token don land. Now you just need to put it in the meter. Loading a token takes less than a minute once you know the steps, but it can be stressful when the meter flashes \"Reject\" at 10pm and the fan has stopped. This guide covers both: how to load it right the first time, and exactly what to do for every message your meter can throw at you.",
    },
    { type: "h2", text: "First, get your token" },
    {
      type: "p",
      text: "A prepaid electricity token is a 20-digit number. You get a new one every time you buy units for your meter, and it only works on that meter. On Pyker, tap **Pay bills**, then **Electricity**, choose your DisCo and **Prepaid**, enter your **Meter ID** and pay. Your token shows on the success screen straight away, and we send it as a notification too.",
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
      type: "checklist",
      title: "Load your token",
      items: [
        "Go to the meter's keypad (on the meter, or the small unit inside the house on split meters)",
        "Clear any old digits on the screen",
        "Type all 20 digits, slowly, in order",
        "Press Enter (often **#** or a coloured key)",
        "Wait for **Accept** or **Success** and check your new units",
      ],
    },
    {
      type: "p",
      text: "That's it. Your units are added on top of whatever was left, so you don't lose any credit by loading early. In fact, loading before your units finish means no surprise blackout in the middle of the night.",
    },
    { type: "h2", text: "Meter on the pole? Split meters explained" },
    {
      type: "p",
      text: "Many newer meters are split meters. The measuring part sits outside, often on the pole or the wall, and you get a small keypad unit inside the house, sometimes called a customer interface unit or CIU. You type your token on the indoor unit, and it talks to the meter outside. If the indoor unit shows no connection, move it closer to the meter or change its batteries, then try again.",
    },
    { type: "h2", text: "What is your meter saying?" },
    {
      type: "p",
      text: "Meters don't all use the same words, but most messages fall into one of these. Pick what yours is showing:",
    },
    {
      type: "picker",
      question: "What does your meter show after you press Enter?",
      options: [
        {
          label: "Accept / Success",
          result:
            "You're done. Your units were added on top of your old balance. Keep the token or receipt in case you need it later.",
        },
        {
          label: "Reject / Invalid",
          result:
            "Usually a typo. Clear the screen and type all 20 digits again slowly. Still rejected? Check that the meter number on your receipt matches your meter: a token only works on the meter it was bought for.",
        },
        {
          label: "Used / Old token",
          result:
            "That token has already been loaded, maybe by someone else in the house. Check your units: the credit is probably already there.",
        },
        {
          label: "Key change / KCT",
          result:
            "Your meter needs key change tokens before it can accept normal tokens. This happens when DisCos upgrade meters in an area. Contact your DisCo with your meter number to get them, enter them first, then your normal token.",
        },
        {
          label: "Error, lock or tamper",
          result:
            "That's a meter fault, not a token problem. Don't keep retrying. Contact your DisCo with your meter number and the exact message on the screen.",
        },
        {
          label: "Nothing happens",
          result:
            "On split meters, check the indoor unit's batteries and move it closer to the outdoor meter. On other meters, make sure you pressed the right Enter key for your model.",
        },
      ],
    },
    {
      type: "p",
      text: "Lost the token before you loaded it? No panic. On Pyker, open the payment in your transactions and tap **View receipt** to see the token again.",
    },
    { type: "h2", text: "How to check your remaining units" },
    {
      type: "p",
      text: "Most prepaid meters show your remaining units on the screen, and some cycle through readings when you press a key. The exact key depends on your meter brand, so check the manual that came with it or ask your DisCo. Make it a habit to check every few days, so you can buy units before NEPA takes light at the worst possible time.",
    },
    { type: "h2", text: "Why your units finish so fast" },
    {
      type: "p",
      text: "If the same amount buys fewer units than before, your area may have moved to a higher tariff band. [Here's how the bands work](/blog/electricity-tariff-bands-nigeria-explained). If your units disappear quickly even when you're not using much, the usual suspects are standby appliances, old bulbs and faulty wiring.",
    },
    {
      type: "ul",
      items: [
        "**Switch off at the socket.** TVs, decoders and chargers still draw power on standby.",
        "**Use LED bulbs.** They use a fraction of the power of old bulbs.",
        "**Iron in one go.** Pressing irons are power-hungry. Do the week's ironing in one session.",
        "**Get the wiring checked** if units vanish with almost everything off.",
      ],
    },
    { type: "h2", text: "A real example" },
    {
      type: "p",
      text: "It's 9:45pm and Bisi's units run out in the middle of her series. She opens Pyker, taps Electricity, picks Eko Electric and her saved meter, checks the name and pays. The token pops up immediately. She types it on the keypad, gets \"Reject\", takes a breath, types it again slowly and gets \"Accept\". Two minutes, light back, series back. Cashback in her wallet too.",
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
      question: "What is a key change token (KCT)?",
      answer:
        "A special token that updates your meter's settings, usually when a DisCo upgrades meters in an area. Enter it before your normal token. Your DisCo provides it.",
    },
    {
      question: "Do I lose my old units when I load a new token?",
      answer: "No. New units are added on top of whatever was left.",
    },
    {
      question: "Where can I find my token again on Pyker?",
      answer: "Open the payment in your transactions and tap View receipt. Your token is there.",
    },
  ],
};
