import type { Post } from "./types";

// Band minimums follow NERC's service-based tariff (2024). No naira-per-kWh
// figures: tariffs change and vary by DisCo.
export const tariffBands: Post = {
  slug: "electricity-tariff-bands-nigeria-explained",
  title: "Electricity Tariff Bands A to E in Nigeria, Explained",
  metaTitle: "Electricity Bands A, B, C, D, E in Nigeria Explained",
  description:
    "What Bands A to E mean on your electricity bill, the hours of light each promises, how to find your band and how to make your units last longer.",
  excerpt:
    "Band A, Band B... what do the letters on your light bill mean? Find out which band matches the light you get, why your units dropped, and what to do if your DisCo falls short.",
  category: "Bills",
  tags: ["bills"],
  published: "2026-11-11",
  updated: "2026-11-11",
  cover: { kind: "art", src: "/art/bills.webp" },
  body: [
    {
      type: "answer",
      text: "Nigeria's electricity bands rank areas by the minimum hours of supply per day: **Band A** at least 20 hours, **Band B** 16, **Band C** 12, **Band D** 8 and **Band E** 4. The more hours promised, the more you pay per unit. Your band is set by your feeder, and you can find it on your bill or receipt, or by asking your DisCo.",
    },
    {
      type: "p",
      text: "You buy ₦10,000 of units like you always do, but this time the meter gives you noticeably less. You check the token, you check the meter, everything looks fine. Then your neighbour on the next street says their units are the same as last month. What's going on?",
    },
    {
      type: "p",
      text: "Most of the time, the answer is your band. Since 2024, the band your area is on decides two things: how many hours of light your DisCo should give you each day, and how much you pay for each unit. Here's how it works, which band matches the light you actually get, and what you can do about it.",
    },
    { type: "h2", text: "What the bands mean" },
    {
      type: "p",
      text: "Every customer is connected through a feeder, the line that carries power to your area. Each feeder is placed in a band based on how many hours of supply it's expected to deliver per day. The more hours promised, the higher the price per unit.",
    },
    {
      type: "table",
      head: ["Band", "Minimum supply per day", "Price per unit"],
      rows: [
        ["Band A", "20 hours", "Highest"],
        ["Band B", "16 hours", "Lower than A"],
        ["Band C", "12 hours", "Lower than B"],
        ["Band D", "8 hours", "Lower than C"],
        ["Band E", "4 hours", "Lowest"],
      ],
    },
    {
      type: "p",
      text: "Prices per unit are set by the regulator and can change, and the exact figures differ by DisCo, so check your DisCo's current tariff for your band. The order never changes, though: Band A always pays the most per unit.",
    },
    { type: "h2", text: "Which band matches the light you get?" },
    {
      type: "p",
      text: "Think about a normal day on your street, not the best day or the worst. Pick the option that fits:",
    },
    {
      type: "picker",
      question: "How many hours of light do you get on a normal day?",
      options: [
        {
          label: "20 hours or more",
          result:
            "That's **Band A** territory. If you're billed as Band A, you're getting what you pay for. Enjoy it, and keep an eye on your units: Band A pays the most per unit.",
        },
        {
          label: "16 to 20 hours",
          result:
            "That matches **Band B**. If you're billed as Band A, you may be paying for hours you don't get. Start a log of your supply hours (see the checklist below).",
        },
        {
          label: "12 to 16 hours",
          result:
            "That matches **Band C**. If your bill or receipt says Band A or B, your supply is falling short of what you're paying for. Report it to your DisCo.",
        },
        {
          label: "8 to 12 hours",
          result:
            "That matches **Band D**. Check your receipt: if you're on a higher band, you have a strong case to raise with your DisCo.",
        },
        {
          label: "Less than 8 hours",
          result:
            "That's **Band E** level supply, the lowest band. If you're billed on anything higher, record your hours and report it to your DisCo with your meter number.",
        },
      ],
    },
    {
      type: "p",
      text: "This only tells you which band your supply matches. The band you're actually billed on is set by your feeder, so check it using the steps below.",
    },
    { type: "h2", text: "How to find out your band" },
    {
      type: "ul",
      items: [
        "**Check your token receipt or bill.** Many DisCos show your band or tariff class on it.",
        "**Look at your units.** If the same amount suddenly buys far fewer units, you may have been moved to a higher band.",
        "**Ask your DisCo.** Customer care can confirm your band from your meter or account number.",
        "**Ask your neighbours.** People on the same feeder are on the same band, so compare notes.",
      ],
    },
    { type: "h2", text: "Why your units suddenly dropped" },
    {
      type: "p",
      text: "If the same amount of money buys fewer units than before, there are usually three possible reasons: your feeder was moved to a higher band, the tariff for your band changed, or there's a fault with the meter. The first two affect everyone on your feeder, so ask around. If only your meter is affected, contact your DisCo.",
    },
    { type: "h2", text: "What if you're not getting your band's hours?" },
    {
      type: "p",
      text: "If you're billed as Band A but light comes and goes all day, you don't have to just accept it. Areas whose supply keeps falling short can be reviewed and moved to a lower band. Here's how to build your case:",
    },
    {
      type: "checklist",
      title: "Report a band that doesn't match your supply",
      items: [
        "Write down the hours of supply you get each day for at least a week",
        "Note your meter number and, if you know it, your feeder's name",
        "Get your band from your token receipt or bill",
        "Contact your DisCo's customer care with your log and meter number",
        "Keep the complaint reference number they give you",
        "Follow up if nothing changes, and get your neighbours to report too",
      ],
    },
    { type: "h2", text: "Make your units last longer" },
    {
      type: "p",
      text: "Whatever your band, nobody likes watching units disappear. A few habits make a real difference:",
    },
    {
      type: "ul",
      items: [
        "**Switch off at the socket.** TVs, decoders and chargers still draw power on standby.",
        "**Use LED bulbs.** They use a fraction of the power of old bulbs and last much longer.",
        "**Iron in one go.** Pressing irons draw a lot of power. Do the week's ironing in one session.",
        "**Watch the big users.** Air conditioners, water heaters, fridges and freezers use the most. Keep doors closed and set sensible temperatures.",
        "**Check for faults.** If your units vanish even when almost everything is off, get an electrician to check your wiring.",
      ],
    },
    { type: "h2", text: "Pay for your units in seconds" },
    {
      type: "p",
      text: "Whatever your band, you can buy your token or pay your bill on Pyker in seconds and get cashback every time. Pick your DisCo: [Ikeja](/pay-bills/ikeja-electric), [Eko](/pay-bills/eko-electric), [Abuja](/pay-bills/abuja-electric), [Kano](/pay-bills/kano-electric), [Port Harcourt](/pay-bills/port-harcourt-electric), [Ibadan](/pay-bills/ibadan-electric) or [Enugu](/pay-bills/enugu-electric). Not sure if you're prepaid or postpaid? [Here's the difference](/blog/prepaid-vs-postpaid-meter-nigeria). Got your token? [Here's how to load it](/blog/how-to-load-electricity-token-on-prepaid-meter).",
    },
    {
      type: "cta",
      title: "Buy light with cashback",
      text: "Seven DisCos, prepaid or postpaid, token straight in the app.",
      to: "/pay-bills",
      label: "See bill payments",
    },
  ],
  faq: [
    {
      question: "What is Band A electricity?",
      answer: "Band A covers feeders expected to supply at least 20 hours of electricity a day. It has the highest price per unit.",
    },
    {
      question: "How many hours is Band B?",
      answer: "Band B feeders are expected to supply at least 16 hours a day.",
    },
    {
      question: "What are Bands C, D and E?",
      answer: "Band C promises at least 12 hours a day, Band D at least 8 and Band E at least 4, each at a lower price per unit than the band above.",
    },
    {
      question: "How do I know my electricity band?",
      answer: "Check your bill or token receipt, or ask your DisCo's customer care with your meter or account number.",
    },
    {
      question: "Why did my units drop?",
      answer:
        "Usually because your feeder moved to a higher band or your band's tariff changed. If only your meter is affected, contact your DisCo.",
    },
    {
      question: "Can my area be moved to a lower band?",
      answer:
        "Yes. If your supply keeps falling short of your band's hours, report it to your DisCo with a log of your supply. Areas can be reviewed and moved.",
    },
  ],
};
