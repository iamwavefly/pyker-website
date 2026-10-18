import { FEATURES } from "../data/features";
import type { FaqItem } from "../seo/meta";

const live = FEATURES.bills.status === "live";

export const BILLS = {
  title: live
    ? "Pay Airtime, Data, Electricity & Cable TV Bills | Pyker"
    : "Pay Airtime, Data & Electricity Bills (Coming Soon) | Pyker",
  description: live
    ? "Buy airtime and data, pay electricity bills and renew cable TV straight from your Pyker naira balance. Instant confirmation on every payment."
    : "Bill payments are coming to Pyker. Soon you'll buy airtime and data, pay electricity bills and renew cable TV straight from your naira balance.",
  intro: live
    ? "Buy airtime and data, pay your electricity bill and renew cable TV straight from your naira balance, without leaving the app."
    : "Bill payments are coming to Pyker. Soon you'll buy airtime and data, pay your electricity bill and renew cable TV straight from your naira balance.",
  categories: [
    { title: "Airtime", text: "Top up any line on Nigeria's major networks." },
    { title: "Data", text: "Buy data bundles for yourself or anyone else." },
    { title: "Electricity", text: "Pay prepaid and postpaid electricity bills." },
    { title: "Cable TV", text: "Renew your TV subscription in a few taps." },
  ],
  faq: (live
    ? [
        {
          question: "What bills can I pay with Pyker?",
          answer: "Airtime, data, electricity and cable TV, straight from your naira balance.",
        },
        {
          question: "How do I fund bill payments?",
          answer: "Top up your naira balance by selling crypto or by bank transfer, then pay any bill in the app.",
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
