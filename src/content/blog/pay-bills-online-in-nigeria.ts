import type { Post } from "./types";

// Steps follow the app's own labels (mobile app/(bills)): Pay bills, then a
// category, Continue, Pay and Enter your PIN. Cashback is only promised on
// the bills that earn it (backend vtpass.CommissionBips): airtime, data,
// electricity and cable TV, not internet.
export const payBillsOnline: Post = {
  slug: "how-to-pay-bills-online-in-nigeria",
  title: "How to Pay Bills Online in Nigeria and Get Cashback",
  metaTitle: "How to Pay Bills Online in Nigeria (with Cashback)",
  description:
    "Buy airtime and data, buy electricity tokens and renew DStv or GOtv online in Nigeria, step by step, and get cashback every time with Pyker.",
  excerpt:
    "Light don go, data don finish, DStv don cut. Here's how to sort airtime, data, electricity and cable TV from your phone in seconds, and get paid back for it.",
  category: "Bills",
  tags: ["bills"],
  published: "2026-11-10",
  updated: "2026-11-10",
  cover: { kind: "art", src: "/art/bills.webp" },
  body: [
    {
      type: "p",
      text: "Light don go, data don finish, and DStv don cut right before the match. Every Nigerian knows the feeling. The good news is you don't need to rush to a vendor or a business centre anymore. You can pay every one of these bills online in a few taps, and with Pyker you get cashback each time you do.",
    },
    {
      type: "p",
      text: "This guide shows you how to buy airtime and data, buy an electricity token, and renew DStv, GOtv or StarTimes online, step by step.",
    },
    { type: "h2", text: "What you need before you start" },
    {
      type: "ul",
      items: [
        "**The Pyker app** on your phone, with your account verified. Sign up, verify your BVN and do a quick liveness check.",
        "**Money in your NGN Wallet.** Send naira by bank transfer from any Nigerian bank, or [sell a little crypto for naira](/sell-crypto) and pay straight from the proceeds.",
        "**The details for the bill:** the phone number for airtime and data, your meter number for electricity, or your smartcard number for cable TV.",
      ],
    },
    {
      type: "tip",
      title: "Why pay from Pyker?",
      text: "You pay the normal price, and once the payment goes through, cashback lands in your NGN Wallet. On airtime, data, electricity and cable TV, you see exactly how much before you confirm.",
    },
    { type: "h2", text: "How to buy airtime online" },
    {
      type: "ol",
      items: [
        "Open Pyker and tap **Pay bills** on your home screen.",
        "Tap **Airtime** and pick the network: MTN, Airtel, Glo or 9mobile.",
        "Enter the **Phone number** and the **Amount**, then tap **Continue**.",
        "Check the details and your cashback, tap **Pay**, then **Enter your PIN**.",
      ],
    },
    {
      type: "p",
      text: "The airtime lands on the line in seconds. You can top up your own number or anyone else's, so sending credit to your parents or siblings is just as easy, and you still get the cashback.",
    },
    { type: "h2", text: "How to buy data online" },
    {
      type: "ol",
      items: [
        "Tap **Pay bills**, then **Data**.",
        "Pick the network and choose a **Plan** from the list.",
        "Enter the **Phone number** and tap **Continue**.",
        "Tap **Pay**, then **Enter your PIN**.",
      ],
    },
    {
      type: "p",
      text: "Data plans are fixed-price bundles, so the amount is set by the plan you pick. No more guessing which code to dial.",
    },
    { type: "h2", text: "How to buy an electricity token online" },
    {
      type: "p",
      text: "Pyker works with Ikeja, Eko, Abuja, Kano, Port Harcourt, Ibadan and Enugu Electric, for both prepaid and postpaid meters.",
    },
    {
      type: "ol",
      items: [
        "Tap **Pay bills**, then **Electricity**.",
        "Pick your distribution company (DisCo) and choose prepaid or postpaid.",
        "Enter your **Meter ID**. Pyker shows the name on the meter, so you can check it's the right one before you pay.",
        "Enter the **Amount**, tap **Continue**, then **Pay** and **Enter your PIN**.",
      ],
    },
    {
      type: "screens",
      items: [
        {
          src: "/screens/bills-meter-verified.webp",
          alt: "Pyker electricity screen with Ikeja Electric selected, a prepaid meter number entered and the account name confirmed",
          caption: "Pick prepaid or postpaid, enter your Meter ID, and check the name before you pay.",
        },
      ],
    },
    {
      type: "p",
      text: "For prepaid meters, your token shows in the app the moment the payment goes through, and we send it as a notification too. Copy it, load it on your meter, and you're back in business.",
    },
    {
      type: "tip",
      title: "Check the name every time",
      text: "One wrong digit can send your money to a stranger's meter. Always confirm the name Pyker shows before you tap Pay.",
    },
    { type: "h2", text: "How to renew DStv, GOtv or StarTimes online" },
    {
      type: "ol",
      items: [
        "Tap **Pay bills**, then **Cable TV**.",
        "Pick DStv, GOtv or StarTimes and choose your package as the **Plan**.",
        "Enter your smartcard or IUC number as the **Account ID** and check the name that comes up.",
        "Tap **Continue**, then **Pay** and **Enter your PIN**.",
      ],
    },
    {
      type: "p",
      text: "Your subscription is renewed in seconds. If your screen still shows an error, restart your decoder and give it a few minutes to refresh.",
    },
    { type: "h2", text: "How cashback works" },
    {
      type: "p",
      text: "Cashback on Pyker is simple. You pay the normal price for your bill, and once the payment succeeds, Pyker credits cashback to your NGN Wallet. It's real money: spend it on your next recharge, fund your [virtual dollar card](/virtual-dollar-card) or withdraw it to your bank.",
    },
    {
      type: "table",
      head: ["Bill", "Earns cashback?"],
      rows: [
        ["Airtime (MTN, Airtel, Glo, 9mobile)", "Yes"],
        ["Data bundles", "Yes"],
        ["Electricity (prepaid and postpaid)", "Yes"],
        ["DStv, GOtv and StarTimes", "Yes"],
        ["Smile and Spectranet internet", "No"],
      ],
    },
    {
      type: "p",
      text: "The amount depends on the bill and how much you pay, and the app shows it before you confirm. Small small, it adds up: recharge every week, buy light every month and renew your TV, and the cashback keeps landing.",
    },
    { type: "h2", text: "What if a payment fails?" },
    {
      type: "p",
      text: "You don't lose a kobo. If a bill payment fails, your money goes straight back to your NGN Wallet. If a payment is still processing, Pyker keeps checking with the provider and updates it for you, so there's no need to chase a reversal.",
    },
    { type: "h2", text: "Tips to pay bills faster" },
    {
      type: "ul",
      items: [
        "**Save your regulars.** Save the numbers, meters and smartcards you pay often as beneficiaries, then pick them next time instead of typing everything again.",
        "**Use Buy again.** Open a past bill in your transactions and tap **Buy again** to repeat it with everything filled in.",
        "**Keep your receipt.** Tap **View receipt** after any payment if you need proof for your landlord, estate or office.",
        "**Top up with crypto.** Holding USDT or Bitcoin? [Sell it for naira](/sell-crypto) and pay your bills from the same balance, with no transfers in between.",
      ],
    },
    {
      type: "cta",
      title: "Pay your next bill with Pyker",
      text: "Airtime, data, light and TV in seconds, with cashback every time.",
      to: "/pay-bills",
      label: "See bill payments",
    },
  ],
  faq: [
    {
      question: "Can I pay bills online in Nigeria with cashback?",
      answer:
        "Yes. With Pyker, you get cashback on airtime, data, electricity and cable TV. It's credited to your NGN Wallet once the payment goes through, and the app shows the amount before you pay.",
    },
    {
      question: "How do I buy an electricity token online?",
      answer:
        "In Pyker, tap Pay bills, then Electricity. Pick your DisCo, enter your Meter ID, check the name, enter the amount and pay. Your token shows in the app as soon as the payment goes through.",
    },
    {
      question: "Can I renew DStv or GOtv online?",
      answer:
        "Yes. Tap Pay bills, then Cable TV, pick DStv, GOtv or StarTimes, choose your package and enter your smartcard number. Your subscription is renewed in seconds.",
    },
    {
      question: "Can I buy airtime for another number?",
      answer: "Yes. Enter any MTN, Airtel, Glo or 9mobile number. You still get the cashback.",
    },
    {
      question: "What happens if my bill payment fails?",
      answer: "Your money goes straight back to your NGN Wallet. Payments still processing are checked and updated automatically.",
    },
  ],
};
