import type { Post } from "./types";

export const prepaidVsPostpaid: Post = {
  slug: "prepaid-vs-postpaid-meter-nigeria",
  title: "Prepaid vs Postpaid Meter in Nigeria: What's the Difference?",
  metaTitle: "Prepaid vs Postpaid Meter in Nigeria: Key Differences",
  description:
    "Prepaid or postpaid meter? How each works in Nigeria, how to tell which you have, how to switch to prepaid, and how to pay either online with cashback.",
  excerpt:
    "One makes you buy units first, the other sends you a bill later. Find out which one you have, which one is better for you, and how to pay both online.",
  category: "Bills",
  tags: ["bills"],
  published: "2026-11-11",
  updated: "2026-11-11",
  cover: { kind: "art", src: "/art/bills.webp" },
  body: [
    {
      type: "answer",
      text: "With a **prepaid** meter you buy units first, get a 20-digit token and load it; when the units finish, the light goes off until you buy more. With **postpaid** you use first and get a monthly bill, which can be **estimated** if your meter isn't read. Prepaid gives you control and no surprise bills, which is why most people prefer it.",
    },
    {
      type: "p",
      text: "Every electricity customer in Nigeria pays one of two ways: prepaid or postpaid. When you pay a light bill online, the first thing you're asked is which one you have, and plenty of people aren't sure. Then there's the classic story: the neighbour with a postpaid account who gets a bill so big it looks like a phone number, for a month when the light barely came.",
    },
    {
      type: "p",
      text: "Here's the difference in plain English, how to tell which meter you have in ten seconds, the honest pros and cons of each, and how to switch to prepaid if you're tired of estimated bills.",
    },
    { type: "h2", text: "Which one do you have?" },
    {
      type: "picker",
      question: "What do you do to pay for light?",
      options: [
        {
          label: "I buy a token and type it on a keypad",
          result:
            "You're **prepaid**. On Pyker, choose **Prepaid** when you pay, and your token shows straight away. [Here's how to load it](/blog/how-to-load-electricity-token-on-prepaid-meter).",
        },
        {
          label: "I get a bill every month",
          result:
            "You're **postpaid**. On Pyker, choose **Postpaid** and pay your bill against your meter or account number. Read on to see why many people switch to prepaid.",
        },
        {
          label: "My landlord or estate handles it",
          result:
            "Ask them. If they give you a token to load, you're prepaid. If they share a monthly bill, the building is likely postpaid. Your receipt or bill also shows the account type.",
        },
        {
          label: "I'm not sure",
          result:
            "Look for a keypad on your meter or a small keypad unit in the house. If you have one, you're prepaid. No keypad and you get monthly bills? Postpaid. Still unsure? Your DisCo can confirm from your meter number.",
        },
      ],
    },
    { type: "h2", text: "What is a prepaid meter?" },
    {
      type: "p",
      text: "With a prepaid meter, you pay first and use later, like airtime for your house. You buy units, get a 20-digit token and [load it on your meter](/blog/how-to-load-electricity-token-on-prepaid-meter). The meter counts down as you use power, and when the units finish, the light goes off until you buy more. You only ever pay for what you buy, and you can see exactly how much you have left.",
    },
    { type: "h2", text: "What is a postpaid meter?" },
    {
      type: "p",
      text: "With postpaid, you use first and pay later. Your DisCo sends a bill for the month, based on your meter reading or, where there's no working meter or nobody reads it, an estimate. You pay the bill against your account, and there's no token to load. If you don't pay, your supply can be disconnected.",
    },
    { type: "h2", text: "Prepaid vs postpaid at a glance" },
    {
      type: "table",
      head: ["", "Prepaid", "Postpaid"],
      rows: [
        ["When you pay", "Before you use", "After you use"],
        ["What you get", "A 20-digit token", "A monthly bill"],
        ["Control over spending", "Full: you buy what you want", "Less: the bill comes when it comes"],
        ["Estimated bills", "No", "Possible if your meter isn't read"],
        ["Running out", "Light goes off until you buy more", "Supply continues until disconnection"],
        ["Seeing your usage", "Units on the meter screen", "Only when the bill arrives"],
        ["Paying online on Pyker", "Choose Prepaid", "Choose Postpaid"],
      ],
    },
    { type: "h2", text: "Pros and cons, honestly" },
    { type: "h3", text: "Prepaid" },
    {
      type: "ul",
      items: [
        "**Pro: no surprise bills.** You pay for what you buy, nothing more.",
        "**Pro: you see your usage.** Watching units drop makes it easy to spot power-hungry appliances.",
        "**Pro: budget-friendly.** Buy small amounts when money is tight.",
        "**Con: the light can go off suddenly** when units finish, often at night. Check your units regularly.",
      ],
    },
    { type: "h3", text: "Postpaid" },
    {
      type: "ul",
      items: [
        "**Pro: no running out.** Supply continues while you use it.",
        "**Con: estimated billing.** If nobody reads your meter, the bill can be far more than what you used.",
        "**Con: harder to budget.** You only find out what you spent when the bill arrives.",
        "**Con: disputes take time.** Challenging a wrong bill means back-and-forth with your DisCo.",
      ],
    },
    { type: "h2", text: "How to switch to a prepaid meter" },
    {
      type: "p",
      text: "Estimated billing is the main reason people switch. The process differs a little by DisCo, but it usually looks like this:",
    },
    {
      type: "checklist",
      title: "Switch to prepaid",
      items: [
        "Clear any outstanding postpaid bill, as most DisCos require it",
        "Apply on your DisCo's website or at their office, with your account number",
        "Ask about the Meter Asset Provider (MAP) scheme, which many DisCos use to supply meters",
        "Get the installation date and keep your application reference",
        "After installation, check the meter number and do your first token purchase",
      ],
    },
    { type: "h2", text: "How to pay either one online" },
    {
      type: "ol",
      items: [
        "In Pyker, tap **Pay bills**, then **Electricity**, and choose your DisCo.",
        "Select **Prepaid** or **Postpaid**.",
        "Enter your **Meter ID** and check the name that comes up.",
        "Enter the amount, tap **Continue**, then **Pay** and enter your PIN.",
      ],
    },
    {
      type: "p",
      text: "Prepaid customers get their token on the spot. Postpaid payments go straight to your DisCo account. Either way, cashback lands in your NGN Wallet once the payment goes through. Pick your DisCo: [Ikeja](/pay-bills/ikeja-electric), [Eko](/pay-bills/eko-electric), [Abuja](/pay-bills/abuja-electric), [Kano](/pay-bills/kano-electric), [Port Harcourt](/pay-bills/port-harcourt-electric), [Ibadan](/pay-bills/ibadan-electric) or [Enugu](/pay-bills/enugu-electric).",
    },
    { type: "h2", text: "A real example" },
    {
      type: "p",
      text: "Emeka's postpaid bill kept coming in high, even in months when the light was mostly off. He started a log of his supply, cleared his balance and applied for a prepaid meter through his DisCo. Now he buys units on Pyker every two weeks, sees exactly where his money goes, and gets cashback on every top-up. No more arguing with a bill.",
    },
    {
      type: "p",
      text: "Prepaid or postpaid, the price per unit depends on your area's band. [Here's how the bands work](/blog/electricity-tariff-bands-nigeria-explained).",
    },
    {
      type: "cta",
      title: "Pay your light bill with cashback",
      text: "Prepaid or postpaid, seven DisCos, in seconds.",
      to: "/pay-bills",
      label: "See bill payments",
    },
  ],
  faq: [
    {
      question: "Is prepaid or postpaid cheaper?",
      answer:
        "The price per unit is set by your band, not your meter type. Prepaid just means you only pay for units you buy, with no risk of an estimated bill.",
    },
    {
      question: "Can I pay a postpaid electricity bill online?",
      answer: "Yes. In Pyker, choose your DisCo, select Postpaid, enter your Meter ID, check the name and pay.",
    },
    {
      question: "How do I get a prepaid meter?",
      answer: "Apply to your DisCo. Many DisCos supply meters through the Meter Asset Provider (MAP) scheme.",
    },
    {
      question: "What is estimated billing?",
      answer:
        "When a postpaid meter isn't read, the DisCo bills you an estimate instead of what you actually used. It's the main reason people switch to prepaid.",
    },
    {
      question: "How do I know if my meter is prepaid?",
      answer: "If you buy a token and type it on a keypad, it's prepaid. If you get a monthly bill, it's postpaid.",
    },
  ],
};
