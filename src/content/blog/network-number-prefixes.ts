import type { Post } from "./types";

// Keep the prefixes in step with the network pages (content/billProviders.ts),
// which also feed the network checker in this post.
export const networkPrefixes: Post = {
  slug: "mtn-airtel-glo-9mobile-number-prefixes",
  title: "MTN, Airtel, Glo and 9mobile Number Prefixes in Nigeria",
  metaTitle: "MTN, Airtel, Glo & 9mobile Number Prefixes (2026)",
  description:
    "Which network is that number on? Check any number instantly, plus the full list of MTN, Airtel, Glo and 9mobile number prefixes in Nigeria.",
  excerpt:
    "0803 or 0802? 0805 or 0809? Type any number and see its network, then get the full list of MTN, Airtel, Glo and 9mobile prefixes in one place.",
  category: "Bills",
  tags: ["bills"],
  published: "2026-11-11",
  updated: "2026-11-11",
  cover: { kind: "art", src: "/art/bills.webp" },
  body: [
    {
      type: "answer",
      text: "**MTN:** 0703, 0704, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903, 0906, 0913, 0916, 07025, 07026. **Airtel:** 0701, 0708, 0802, 0808, 0812, 0901, 0902, 0904, 0907, 0912. **Glo:** 0705, 0805, 0807, 0811, 0815, 0905, 0915. **9mobile:** 0809, 0817, 0818, 0908, 0909.",
    },
    {
      type: "p",
      text: "Your mum calls: \"Abeg, send me airtime.\" Easy, until you stare at her number and realise you're not sure if 0813 is MTN or Airtel. Or a customer pays you to buy data for their line and you need to pick the right network first. Buy on the wrong one and the top-up won't land where you want it.",
    },
    {
      type: "p",
      text: "The first four digits of a Nigerian mobile number, the prefix, usually tell you the network. Below, you can check any number instantly, see the full list for every network, and learn the one situation where the prefix can fool you.",
    },
    { type: "h2", text: "Check any number instantly" },
    {
      type: "p",
      text: "Type or paste a number in any format, like 0803 123 4567 or +234 803 123 4567, and we'll tell you the network from its prefix.",
    },
    { type: "networkChecker" },
    { type: "h2", text: "All network prefixes at a glance" },
    {
      type: "table",
      head: ["Network", "Prefixes"],
      rows: [
        ["MTN", "0703, 0704, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903, 0906, 0913, 0916, 07025, 07026"],
        ["Airtel", "0701, 0708, 0802, 0808, 0812, 0901, 0902, 0904, 0907, 0912"],
        ["Glo", "0705, 0805, 0807, 0811, 0815, 0905, 0915"],
        ["9mobile", "0809, 0817, 0818, 0908, 0909"],
      ],
    },
    {
      type: "p",
      text: "Notice the pattern? Each network got a few prefixes in the 080 range when mobile phones arrived in the early 2000s, then more in the 070, 081 and 090 ranges as they ran out of numbers. That's why the newest lines often start with 09.",
    },
    { type: "h2", text: "MTN number prefixes" },
    {
      type: "p",
      text: "MTN is Nigeria's biggest network, so it has the most prefixes: **0703, 0704, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903, 0906, 0913, 0916**, plus the five-digit **07025** and **07026**. Those last two, along with 0704, came from Visafone's old customers, who moved to MTN.",
    },
    {
      type: "p",
      text: "[Buy MTN airtime and data with cashback](/pay-bills/mtn).",
    },
    { type: "h2", text: "Airtel number prefixes" },
    {
      type: "p",
      text: "Airtel numbers start with **0701, 0708, 0802, 0808, 0812, 0901, 0902, 0904, 0907** or **0912**. If you've had an 0802 line since the early days, it's been through a few names, from Econet to Zain to Airtel, but the number never changed.",
    },
    {
      type: "p",
      text: "[Buy Airtel airtime and data with cashback](/pay-bills/airtel).",
    },
    { type: "h2", text: "Glo number prefixes" },
    {
      type: "p",
      text: "Glo numbers start with **0705, 0805, 0807, 0811, 0815, 0905** or **0915**. Glo is known for big data bundles, so if someone on 0805 asks for data, you know where to go.",
    },
    {
      type: "p",
      text: "[Buy Glo airtime and data with cashback](/pay-bills/glo).",
    },
    { type: "h2", text: "9mobile number prefixes" },
    {
      type: "p",
      text: "9mobile, which was Etisalat until 2017, uses **0809, 0817, 0818, 0908** and **0909**. If an old contact still shows \"Etisalat\" next to their name, they're on 9mobile.",
    },
    {
      type: "p",
      text: "[Buy 9mobile airtime and data with cashback](/pay-bills/9mobile).",
    },
    { type: "h2", text: "The prefixes people mix up most" },
    {
      type: "p",
      text: "The 080 range trips everyone up, because all four networks have numbers there. Here's a quick way to remember it:",
    },
    {
      type: "table",
      head: ["Prefix", "Network", "Memory trick"],
      rows: [
        ["0802, 0808", "Airtel", "The \"2s and 8s\" are Airtel"],
        ["0803, 0806", "MTN", "3 and 6, MTN's oldest lines"],
        ["0805, 0807", "Glo", "5 and 7 are Glo"],
        ["0809", "9mobile", "9 for 9mobile"],
      ],
    },
    {
      type: "p",
      text: "The 090 and 091 ranges are the next most confusing: **0903, 0906, 0913, 0916** are MTN, **0901, 0902, 0904, 0907, 0912** are Airtel, **0905, 0915** are Glo and **0908, 0909** are 9mobile. When in doubt, paste the number in the checker above.",
    },
    { type: "h2", text: "A real example" },
    {
      type: "p",
      text: "Amaka wants to send ₦2,000 airtime to her dad in Enugu and data to her younger brother at uni. Her dad's number starts with 0805, so she picks Glo. Her brother's is 0913, which she would have guessed was Airtel, but the checker says MTN, and he confirms it. On Pyker she tops up both in under a minute, gets cashback on each, and saves both numbers so next month is just two taps.",
    },
    { type: "h2", text: "Why a prefix isn't always the full story" },
    {
      type: "p",
      text: "Nigeria allows mobile number portability. You can move your number to another network and keep every digit. A ported number keeps its old prefix, so an 0803 number could be on Airtel today. Porting isn't very common, but it happens, especially with people who've had the same number for years.",
    },
    {
      type: "tip",
      title: "When in doubt, ask",
      text: "If the top-up matters, like data for work or airtime for someone travelling, a quick \"which network are you on?\" saves the stress.",
    },
    { type: "h2", text: "How to find your own number and network" },
    {
      type: "ul",
      items: [
        "**On iPhone:** go to Settings, then Phone. Your number shows under My Number.",
        "**On Android:** go to Settings, then About phone, then SIM status. The exact menu names vary by phone.",
        "**From the SIM pack:** your number and network are printed on the card the SIM came in.",
        "**From a friend:** call or flash someone. Your number shows on their screen.",
      ],
    },
    { type: "h2", text: "Before you buy airtime or data for someone" },
    {
      type: "checklist",
      title: "Quick check",
      items: [
        "I've checked the number's network with the checker above",
        "I've asked them if they ever ported their number",
        "I've double-checked all 11 digits",
        "For data, I've picked a plan they actually want",
      ],
    },
    {
      type: "p",
      text: "Airtime and data sent to a valid number can't be pulled back, so the extra ten seconds of checking is worth it. If a top-up fails on Pyker, your money goes straight back to your wallet.",
    },
    { type: "h2", text: "Top up any network in seconds" },
    {
      type: "p",
      text: "On Pyker, tap **Pay bills**, then **Airtime** or **Data**, pick the network, enter the number and pay. It lands in seconds, and you get cashback every time. Save the lines you top up often as beneficiaries, and next time it's just a couple of taps. See the full guide to [paying bills online in Nigeria](/blog/how-to-pay-bills-online-in-nigeria).",
    },
    {
      type: "cta",
      title: "Top up any network with cashback",
      text: "MTN, Airtel, Glo and 9mobile airtime and data in seconds.",
      to: "/pay-bills",
      label: "See bill payments",
    },
  ],
  faq: [
    {
      question: "Is 0704 MTN or Airtel?",
      answer: "0704 is an MTN prefix. It came from Visafone, whose customers moved to MTN.",
    },
    {
      question: "Is 0809 MTN or 9mobile?",
      answer: "0809 is a 9mobile prefix. 9mobile was formerly Etisalat.",
    },
    {
      question: "Is 0912 MTN or Airtel?",
      answer: "0912 is an Airtel prefix.",
    },
    {
      question: "Which network is 0913?",
      answer: "0913 is an MTN prefix.",
    },
    {
      question: "Which network is 0915?",
      answer: "0915 is a Glo prefix.",
    },
    {
      question: "Can a number change network but keep its prefix?",
      answer:
        "Yes. With mobile number portability, a number keeps its prefix when it moves to another network, so check with the person if you're not sure.",
    },
  ],
};
