import type { FaqItem } from "../seo/meta";
import type { Step } from "./sell";

// One page per biller people search for by name ("buy Ikeja Electric token
// online", "DStv subscription online"). Every biller here is in the
// backend's catalogue (internal/bills catalogue) and earns cashback
// (vtpass.CommissionBips). Steps use the app's own labels.

export type BillKind = "network" | "electricity" | "tv";

export type BillProvider = {
  slug: string;
  name: string;
  kind: BillKind;
  metaTitle: string;
  description: string;
  /** H1, with `accent` highlighted. */
  h1: string;
  accent: string;
  intro: string;
  /** Facts specific to this biller, so each page says something of its own. */
  facts: { title: string; intro: string; items: string[] };
  faq: FaqItem[];
};

export const BILL_KINDS: Record<BillKind, { label: string; plural: string }> = {
  network: { label: "Airtime and data", plural: "Airtime and data by network" },
  electricity: { label: "Electricity", plural: "Electricity by DisCo" },
  tv: { label: "Cable TV", plural: "Cable TV" },
};

/** "a Kano Electric token", "an Ikeja Electric token". */
export function withArticle(name: string) {
  return `${/^[AEIOU]/.test(name) ? "an" : "a"} ${name}`;
}

export function billProviderPath(provider: BillProvider) {
  return `/pay-bills/${provider.slug}`;
}

function network(
  slug: string,
  name: string,
  prefixes: string[],
  intro: string,
  extraFaq: FaqItem[],
): BillProvider {
  return {
    slug,
    name,
    kind: "network",
    metaTitle: `Buy ${name} Airtime & Data Online with Cashback | Pyker`,
    description: `Top up ${name} airtime and buy ${name} data plans online in seconds, for your line or anyone else's, and get cashback every time with Pyker.`,
    h1: `Buy ${name} airtime and data online`,
    accent: "online",
    intro,
    facts: {
      title: `How to tell a ${name} number`,
      intro: `${name} numbers usually start with these prefixes. If someone moved their number from another network, it keeps its old prefix, so confirm with them if you're not sure.`,
      items: prefixes,
    },
    faq: [
      {
        question: `How do I buy ${name} airtime on Pyker?`,
        answer: `Tap Pay bills, then Airtime, and pick ${name}. Enter the phone number and amount, tap Continue, then Pay and enter your PIN. The airtime lands in seconds.`,
      },
      {
        question: `Can I buy ${name} data for another number?`,
        answer: `Yes. Tap Pay bills, then Data, pick ${name}, choose a plan and enter any ${name} number. You still get the cashback.`,
      },
      {
        question: `Do I get cashback on ${name} airtime and data?`,
        answer: `Yes. Cashback lands in your NGN Wallet once the payment goes through, and the app shows the amount before you pay.`,
      },
      {
        question: "What if I enter the wrong number?",
        answer:
          "Airtime and data delivered to a valid number can't be pulled back, so double-check the number before you tap Pay. If a payment fails, your money goes straight back to your wallet.",
      },
      ...extraFaq,
    ],
  };
}

function disco(
  slug: string,
  name: string,
  short: string,
  coverage: string[],
  intro: string,
): BillProvider {
  return {
    slug,
    name,
    kind: "electricity",
    metaTitle: `Buy ${name} Token Online with Cashback | Pyker`,
    description: `Buy ${name} prepaid tokens or pay your postpaid bill online in seconds. Check the name on your meter, get your token in the app, and get cashback.`,
    h1: `Buy ${name} token online`,
    accent: "token online",
    intro,
    facts: {
      title: `Where ${short} supplies power`,
      intro: `${name} distributes electricity across these areas. Not sure who supplies you? The DisCo's name is on your meter card and on your last bill or token receipt.`,
      items: coverage,
    },
    faq: [
      {
        question: `How do I buy ${withArticle(name)} token online?`,
        answer: `In Pyker, tap Pay bills, then Electricity, and pick ${name}. Choose Prepaid, enter your Meter ID, check the name that comes up, enter the amount and pay. Your token shows in the app straight away.`,
      },
      {
        question: `Can I pay my postpaid ${name} bill?`,
        answer: `Yes. Choose Postpaid instead of Prepaid, enter your Meter ID, check the name and pay. The payment goes to your ${short} account.`,
      },
      {
        question: "Where do I find my token?",
        answer:
          "On the success screen as soon as the payment goes through, and in a notification too. You can find it again any time in the transaction's receipt.",
      },
      {
        question: "What if the name on the meter doesn't match?",
        answer:
          "Stop and check the Meter ID. Pyker shows the name registered to the meter before you pay, so a wrong digit never sends your money to someone else's meter.",
      },
      {
        question: `Do I get cashback on ${name}?`,
        answer: "Yes. Cashback lands in your NGN Wallet after every successful electricity payment, and the app shows the amount before you pay.",
      },
    ],
  };
}

function tv(slug: string, name: string, card: string, packages: string[], intro: string): BillProvider {
  return {
    slug,
    name,
    kind: "tv",
    metaTitle: `${name} Subscription Online: Renew with Cashback | Pyker`,
    description: `Renew your ${name} subscription online in seconds from your Pyker wallet. Check the name on your ${card}, pick your package and get cashback every time.`,
    h1: `Renew your ${name} subscription online`,
    accent: "online",
    intro,
    facts: {
      title: `${name} packages you can pay for`,
      intro: `Pick your package from the list in the app, which always shows the current packages and prices. ${name} packages include:`,
      items: packages,
    },
    faq: [
      {
        question: `How do I renew ${name} online?`,
        answer: `Tap Pay bills, then Cable TV, and pick ${name}. Choose your package, enter your ${card} as the Account ID, check the name that comes up, then tap Continue and Pay.`,
      },
      {
        question: `Where do I find my ${card}?`,
        answer: `It's on a sticker on your decoder, usually underneath or at the back. You'll also find it on your ${name} receipts and in the decoder's information menu.`,
      },
      {
        question: "My channels are still off after paying. What do I do?",
        answer:
          "Leave the decoder on and give it a few minutes to receive the signal. If it still shows an error, restart the decoder. Your payment receipt is in the app if you need it.",
      },
      {
        question: `Do I get cashback on ${name}?`,
        answer: `Yes. Every successful ${name} payment earns cashback in your NGN Wallet, and the app shows the amount before you pay.`,
      },
    ],
  };
}

export const BILL_PROVIDERS: BillProvider[] = [
  network(
    "mtn",
    "MTN",
    ["0803, 0806, 0810, 0813, 0814, 0816", "0703, 0706, 0704, 07025, 07026", "0903, 0906, 0913, 0916"],
    "MTN line don dry? Top up airtime or buy a data plan for any MTN number in seconds, straight from your naira balance, and get cashback every single time.",
    [
      {
        question: "How fast does MTN airtime arrive?",
        answer: "Usually in seconds. If a payment is still processing, Pyker keeps checking and updates it for you.",
      },
    ],
  ),
  network(
    "airtel",
    "Airtel",
    ["0802, 0808, 0812", "0701, 0708", "0901, 0902, 0904, 0907, 0912"],
    "Recharge any Airtel line or buy Airtel data in a few taps, for yourself, your people or that business line, and get paid back with cashback each time.",
    [],
  ),
  network(
    "glo",
    "Glo",
    ["0805, 0807, 0811, 0815", "0705", "0905, 0915"],
    "Glo data for the big downloads, Glo airtime for the calls. Buy both in seconds from your Pyker wallet, with cashback landing after every top-up.",
    [],
  ),
  network(
    "9mobile",
    "9mobile",
    ["0809, 0817, 0818", "0908, 0909"],
    "Still rocking 9mobile? Top up airtime or grab a data bundle for any 9mobile number in seconds, and get cashback every time you pay.",
    [
      {
        question: "Is 9mobile the same as Etisalat?",
        answer: "Yes. Etisalat Nigeria became 9mobile in 2017, so old Etisalat lines are 9mobile lines.",
      },
    ],
  ),
  disco(
    "ikeja-electric",
    "Ikeja Electric",
    "Ikeja Electric",
    ["Ikeja and Akowonjo", "Ikorodu", "Oshodi", "Abule Egba", "Shomolu", "Other parts of mainland Lagos"],
    "Before NEPA takes light, buy units. Get your Ikeja Electric prepaid token or pay your postpaid bill in seconds, check the name on the meter first, and get cashback every time.",
  ),
  disco(
    "eko-electric",
    "Eko Electric",
    "EKEDC",
    ["Lagos Island, Ikoyi and Victoria Island", "Lekki, Ajah and Ibeju", "Apapa, Ijora and Orile", "Festac and Ojo", "Mushin", "Agbara"],
    "From the Island to Lekki to Festac, buy your Eko Electric token in seconds without hunting for a vendor. Your token shows in the app, and cashback lands in your wallet.",
  ),
  disco(
    "abuja-electric",
    "Abuja Electric",
    "AEDC",
    ["Federal Capital Territory (Abuja)", "Niger State", "Kogi State", "Nasarawa State"],
    "Abuja Electric (AEDC) prepaid token or postpaid bill, sorted in seconds from your phone. Check the meter name before you pay, then load your token straight from the app, with cashback.",
  ),
  disco(
    "kano-electric",
    "Kano Electric",
    "KEDCO",
    ["Kano State", "Jigawa State", "Katsina State"],
    "Buy your Kano Electric (KEDCO) token anytime, day or night, without leaving the house. Prepaid or postpaid, your payment is confirmed in seconds and you get cashback.",
  ),
  disco(
    "port-harcourt-electric",
    "Port Harcourt Electric",
    "PHED",
    ["Rivers State", "Bayelsa State", "Cross River State", "Akwa Ibom State"],
    "Port Harcourt Electric (PHED) prepaid token or postpaid bill, paid in seconds from your Pyker wallet. Check the name on the meter, get your token in the app, and get cashback too.",
  ),
  disco(
    "ibadan-electric",
    "Ibadan Electric",
    "IBEDC",
    ["Oyo State", "Ogun State", "Osun State", "Kwara State", "Parts of Niger, Ekiti and Kogi States"],
    "Ibadan Electric (IBEDC) covers a wide area, and so does Pyker. Buy your prepaid token or pay your postpaid bill from anywhere, and get cashback every time.",
  ),
  disco(
    "enugu-electric",
    "Enugu Electric",
    "EEDC",
    ["Enugu State", "Anambra State", "Imo State", "Abia State", "Ebonyi State"],
    "Enugu Electric (EEDC) token in seconds, from your phone, for your house, your shop or your parents' place back home. Check the meter name, pay, and get cashback.",
  ),
  tv(
    "dstv",
    "DStv",
    "smartcard number",
    ["Padi", "Yanga", "Confam", "Compact", "Compact Plus", "Premium"],
    "Champions League tonight and DStv don cut? Renew in seconds from your phone, check the name on the smartcard first, and get cashback every time you pay.",
  ),
  tv(
    "gotv",
    "GOtv",
    "IUC number",
    ["Smallie", "Jinja", "Jolli", "Max", "Supa", "Supa+"],
    "GOtv expired just as the movie was getting good? Renew your package in seconds from your Pyker wallet, check the name on the IUC first, and get cashback.",
  ),
  tv(
    "startimes",
    "StarTimes",
    "smartcard number",
    ["Nova", "Basic", "Smart", "Classic", "Super"],
    "Keep the football, the series and the cartoons running. Renew StarTimes in seconds, check the name on the smartcard before you pay, and get cashback every time.",
  ),
];

export function billProviderSteps(provider: BillProvider): Step[] {
  switch (provider.kind) {
    case "network":
      return [
        {
          title: `Pick ${provider.name}`,
          text: `Tap Pay bills, then Airtime or Data, and choose ${provider.name}. For data, pick a plan from the list.`,
        },
        { title: "Enter the number", text: "Type any phone number, or pick one you've saved. Add the amount for airtime." },
        { title: "Pay and get cashback", text: "Tap Continue, check your cashback, then Pay and enter your PIN. Done in seconds." },
      ];
    case "electricity":
      return [
        {
          title: `Pick ${provider.name}`,
          text: `Tap Pay bills, then Electricity, choose ${provider.name} and select Prepaid or Postpaid.`,
        },
        {
          title: "Enter your Meter ID",
          text: "Pyker shows the name on the meter so you know it's the right one. Then enter the amount.",
        },
        {
          title: "Pay and load your token",
          text: "Tap Continue, then Pay and enter your PIN. Your token shows straight away, and cashback lands in your wallet.",
        },
      ];
    case "tv":
      return [
        {
          title: `Pick ${provider.name}`,
          text: `Tap Pay bills, then Cable TV, choose ${provider.name} and pick your package as the Plan.`,
        },
        {
          title: "Enter your Account ID",
          text: "Type your smartcard or IUC number and check the name that comes up before you pay.",
        },
        {
          title: "Pay and keep watching",
          text: "Tap Continue, then Pay and enter your PIN. Your subscription is renewed in seconds, with cashback.",
        },
      ];
  }
}
