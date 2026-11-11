import { FEATURES } from "../data/features";
import type { FaqItem } from "../seo/meta";

const live = FEATURES.bills.status === "live";

export const BILLS = {
  title: live
    ? "Buy Airtime, Data, Electricity & DStv with Cashback | Pyker"
    : "Pay Airtime, Data & Electricity Bills (Coming Soon) | Pyker",
  description: live
    ? "Recharge airtime and data, buy light and renew DStv, GOtv or StarTimes in seconds from your Pyker wallet, and get cashback every time you pay."
    : "Bill payments are coming to Pyker. Soon you'll buy airtime and data, pay electricity bills and renew cable TV straight from your naira balance.",
  intro: live
    ? "Recharge your line, buy light, renew DStv, no stress. Pay from your naira balance in seconds, and every time you recharge, top up or renew, Pyker pays you back with cashback straight to your wallet."
    : "Bill payments are coming to Pyker. Soon you'll buy airtime and data, pay your electricity bill and renew cable TV straight from your naira balance.",
  categories: live
    ? [
        { title: "Airtime", text: "Don't let your line go dry. Top up any MTN, Airtel, Glo or 9mobile number and earn cashback." },
        { title: "Data", text: "Data finishing at the worst time? Buy a bundle in seconds, for you or anyone else, with cashback on every one." },
        { title: "Electricity", text: "Before NEPA takes light, buy units. Prepaid or postpaid with seven DisCos, cashback included, and your token right in the app." },
        { title: "Cable TV", text: "Don't miss the match because of subscription. Renew DStv, GOtv or StarTimes in seconds, cashback included." },
        { title: "Internet", text: "Keep the Wi-Fi on. Renew your Smile or Spectranet plan without leaving the app." },
      ]
    : [
        { title: "Airtime", text: "Top up any line on Nigeria's major networks." },
        { title: "Data", text: "Buy data bundles for yourself or anyone else." },
        { title: "Electricity", text: "Pay prepaid and postpaid electricity bills." },
        { title: "Cable TV", text: "Renew your TV subscription in a few taps." },
      ],
  benefits: [
    {
      title: "Cashback every time",
      text: "Every recharge, every light bill, every DStv renewal puts something back in your pocket. Small small, it adds up.",
    },
    {
      title: "Your token, sharp sharp",
      text: "No more \"token never come\". Your electricity token shows in the app the moment your payment goes through.",
    },
    {
      title: "Failed? You get it back",
      text: "If a payment fails, your money goes straight back to your wallet. No calling customer care to beg for a reversal.",
    },
    {
      title: "Check the name first",
      text: "We show you the name on the meter or smartcard before you pay, so your money doesn't land in a stranger's account.",
    },
    {
      title: "Save your regulars",
      text: "Save Mummy's line, the house meter and the DStv smartcard once. Next time, it's a couple of taps.",
    },
    {
      title: "Crypto to bills, one app",
      text: "Sell a little USDT or Bitcoin, then pay your bills from the same naira balance. No moving money around.",
    },
  ],
  forYou: [
    {
      title: "For the family",
      text: "Send airtime to your parents, buy data for your siblings and keep the house light on, all from your own phone, wherever you are.",
    },
    {
      title: "For students",
      text: "Keep your data running for lectures, research and that group project, and top up your line without waking up a vendor.",
    },
    {
      title: "For remote workers",
      text: "When your work depends on being online, don't gamble with data. Renew your plan the moment it runs low and get cashback for it.",
    },
    {
      title: "For football lovers",
      text: "Champions League tonight and subscription has expired? Renew DStv or GOtv in seconds and you're back before kickoff.",
    },
  ],
  steps: [
    {
      title: "Pick your bill",
      text: "Airtime, data, light or TV. Enter the number, meter or smartcard, and for meters and smartcards we show you the name on the account so you know it's right.",
    },
    {
      title: "See your cashback upfront",
      text: "Before you pay, the app shows exactly what's coming back to you. No guesswork, no fine print.",
    },
    {
      title: "Watch it land",
      text: "The moment your payment goes through, cashback hits your NGN Wallet, ready for your next recharge.",
    },
  ],
  faq: (live
    ? [
        {
          question: "What bills can I pay with Pyker?",
          answer:
            "Airtime and data on MTN, Airtel, Glo and 9mobile; electricity with Ikeja, Eko, Abuja, Kano, Port Harcourt, Ibadan and Enugu Electric; DStv, GOtv and StarTimes; and Smile and Spectranet internet.",
        },
        {
          question: "How does cashback work?",
          answer:
            "Pay for your bill as normal. As soon as it goes through, we drop cashback into your NGN Wallet. You'll see exactly how much before you confirm.",
        },
        {
          question: "Which bills earn cashback?",
          answer:
            "Airtime, data, electricity and cable TV. Internet plans don't earn cashback.",
        },
        {
          question: "How much cashback will I get?",
          answer:
            "It depends on the bill and the amount. You'll see the exact cashback in the app before you pay, so there are no surprises.",
        },
        {
          question: "What happens if a payment fails?",
          answer:
            "You don't lose a kobo. Your money goes straight back to your NGN Wallet. If a payment is still processing, Pyker keeps checking and updates it for you.",
        },
        {
          question: "Where do I find my electricity token?",
          answer:
            "Right in the app. For prepaid meters, your token shows as soon as the payment goes through, and we send it as a notification too, so you can load it straight away.",
        },
        {
          question: "Can I buy airtime or data for someone else?",
          answer:
            "Yes. Enter their number and pay as normal. You still get the cashback, so you can treat your people and get paid back for it.",
        },
        {
          question: "Can I save the numbers and meters I pay often?",
          answer:
            "Yes. Save phone numbers, meter numbers and smartcards as beneficiaries, then pick them next time instead of typing everything again.",
        },
        {
          question: "What can I do with my cashback?",
          answer:
            "It's real money in your NGN Wallet. Spend it on your next bill, fund your dollar card or withdraw it to your bank.",
        },
        {
          question: "How do I fund bill payments?",
          answer: "Sell a little crypto or send a bank transfer to top up your naira balance, then pay any bill in seconds.",
        },
      ]
    : [
        {
          question: "When can I pay bills with Pyker?",
          answer: "Bill payments are coming soon. We'll let you know in the app as soon as they're live.",
        },
        {
          question: "What bills will I be able to pay?",
          answer: "Airtime, data, electricity and cable TV, straight from your naira balance.",
        },
        {
          question: "What can I do with Pyker today?",
          answer:
            "Sell crypto for naira or dollars, get a virtual dollar card for paying online, and fund your wallet by bank transfer.",
        },
      ]) as FaqItem[],
};
