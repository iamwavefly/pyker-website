import type { Block } from "./blog";
import type { CardColor, CardNetwork } from "../data/cards";
import type { FaqItem } from "../seo/meta";

export type ServiceCategory = "streaming" | "apps" | "ads" | "learning" | "tools";

/** Card types as the Pyker app labels them on "Select card option". */
type CardType = "Standard" | "Lite";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  metaTitle: string;
  description: string;
  /** Hero intro, specific to this service. */
  intro: string;
  /** The card option to pick in the app for this service, and why. */
  cardType: CardType;
  cardTypeReason: string;
  /** How much to fund, for this service. */
  fundAdvice: string;
  /** Everything after the Pyker setup: the service's own walkthrough. */
  body: Block[];
  faq: FaqItem[];
  card: { color: CardColor; network: CardNetwork };
  /** Slugs of related services, linked at the bottom of the page. */
  related: string[];
  /** ISO date the page content last changed. */
  updated: string;
};

export const PAY_FOR_PATH = "/pay-for";

export function serviceLabel(category: ServiceCategory) {
  return { streaming: "Streaming", apps: "App stores", ads: "Ads", learning: "Online courses", tools: "AI tools" }[
    category
  ];
}

// Rules for this file:
// - Pyker steps use the app's real labels (mobile/app/(cards)).
// - Each service's steps follow its own help centre, checked when written
//   (see `updated`). Keep menu names to the ones those pages use.
// - No prices, plan prices, fees or billing currencies: they change and
//   differ by account. Only add a service once Pyker users have used it.
export const SERVICES: Service[] = [
  {
    slug: "netflix",
    name: "Netflix",
    category: "streaming",
    metaTitle: "How to Pay for Netflix in Nigeria",
    description:
      "Step-by-step: create a Pyker virtual dollar card, fund it from your naira balance, and add it to Netflix. Plus how to fix an account on hold.",
    intro:
      "Your naira card keeps failing on Netflix? Here's how to set up a Pyker virtual dollar card and add it to your Netflix account, step by step, and what to do if your account goes on hold.",
    cardType: "Standard",
    cardTypeReason:
      "Netflix renews every month, so you want a long-lived card. A Lite card expires on its own, which would eventually stop your renewals.",
    fundAdvice:
      "Fund at least your plan's price. Netflix may also place a small temporary authorisation when you add a card, so a little extra helps.",
    body: [
      { type: "h2", text: "Step 2: Add your card to Netflix" },
      {
        type: "p",
        text: "Netflix lets you change how you pay from your account page at any time. Use a web browser: it always shows the payment options, while some devices don't let you manage payment in the app.",
      },
      {
        type: "ol",
        items: [
          "Go to **netflix.com** and sign in.",
          "Open your **Account** and go to **Manage payment info**.",
          "To replace your current card, select **Update** next to it. To add Pyker as a new method, choose to add a payment method.",
          "Choose credit or debit card and enter the card number, expiry date and CVV from **Card details** in Pyker.",
          "Save. Netflix may place a small temporary authorisation to check the card. It's released automatically.",
        ],
      },
      {
        type: "tip",
        title: "Billed through Apple or your network provider?",
        text: "If you pay for Netflix through the App Store or a phone or internet provider, you can't switch it from Netflix. Change it with that provider first, then add your Pyker card on netflix.com.",
      },
      { type: "h2", text: "If your Netflix account is on hold" },
      {
        type: "p",
        text: "Netflix puts an account on hold when a renewal payment fails. To start watching again:",
      },
      {
        type: "ol",
        items: [
          "In Pyker, open your card and tap **Fund card** to top it up.",
          "On netflix.com, go to **Manage payment info** and update your card, even if the details haven't changed.",
          "If the hold doesn't clear straight away, refresh the page.",
        ],
      },
      { type: "h2", text: "Netflix payment errors and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          [
            "Your account is on hold because of a problem with your last payment",
            "Fund your Pyker card, then update your card under **Manage payment info**.",
          ],
          [
            "Your card was declined",
            "Check your card balance, make sure the card isn't frozen, and re-enter the details exactly as shown under **Card details**.",
          ],
          [
            "This card is not supported in this territory",
            "Contact Pyker support with a screenshot so we can check the card with you.",
          ],
          [
            "Sorry, something went wrong (while changing payment)",
            "Wait a few minutes, then try again on netflix.com in a browser.",
          ],
        ],
      },
      { type: "h2", text: "Keep Netflix paid every month" },
      {
        type: "ul",
        items: [
          "Your next billing date is on your Netflix account page. Fund your Pyker card a day or two before it.",
          "Open **View transactions** on your card in Pyker to see each Netflix charge.",
          "Want to stop paying? Cancel your plan on Netflix. Freezing your card stops the payment going through, but it doesn't cancel your subscription.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I pay for Netflix in Nigeria with a virtual dollar card?",
        answer:
          "Yes. Netflix accepts Visa and Mastercard, and Pyker users pay for Netflix with their virtual dollar card. Add it under Manage payment info on netflix.com.",
      },
      {
        question: "Why does Netflix decline my naira card?",
        answer:
          "Usually because of your bank: many Nigerian banks limit or block online payments to international merchants on naira cards. A dollar card you fund yourself avoids those limits.",
      },
      {
        question: "Should I choose a Standard or Lite card for Netflix?",
        answer:
          "Standard. Netflix renews every month, and a Lite card expires on its own, which would eventually stop your renewals.",
      },
      {
        question: "Why do I see a small charge when I add my card?",
        answer:
          "Netflix may place a temporary authorisation to check that a new card works. It's a hold, not a payment, and it's released automatically.",
      },
    ],
    card: { color: "black", network: "visa" },
    related: ["spotify", "youtube-premium", "apple"],
    updated: "2026-10-30",
  },
  {
    slug: "apple",
    name: "Apple",
    category: "apps",
    metaTitle: "How to Pay for iCloud & App Store in Nigeria",
    description:
      "Add a Pyker virtual dollar card to your Apple Account for iCloud+, Apple Music and App Store purchases. Step by step, with fixes for common errors.",
    intro:
      "iCloud storage, Apple Music and App Store purchases all charge the card on your Apple Account. Here's how to set up a Pyker virtual dollar card, add it on your iPhone, and make sure Apple charges it first.",
    cardType: "Standard",
    cardTypeReason:
      "Apple keeps your card on file for every purchase and subscription, so you want a long-lived card. A Lite card expires on its own.",
    fundAdvice: "Fund enough for what you're buying, or for your next iCloud+ or other subscription renewal.",
    body: [
      { type: "h2", text: "Step 2: Add your card to your Apple Account" },
      {
        type: "p",
        text: "Once your card is on your Apple Account, it's used for App Store purchases, iCloud+, Apple Music and your other Apple subscriptions. On your iPhone or iPad:",
      },
      {
        type: "ol",
        items: [
          "Open **Settings** and tap your name at the top.",
          "Tap **Payment & Shipping**. Sign in with your Apple Account if asked.",
          "Tap **Add Payment Method**, then choose credit or debit card.",
          "Enter the card number, expiry date and CVV from **Card details** in Pyker.",
          "Enter the **name on card** and the **billing address** exactly as Pyker shows them, then tap **Done**.",
        ],
      },
      {
        type: "tip",
        title: "Use the address from your card, not your home",
        text: "Apple checks that the name and billing address match what the card issuer has on file. Use the street, city, state, zip code and country shown under **Card details** in Pyker.",
      },
      { type: "h2", text: "Make Apple charge your Pyker card first" },
      {
        type: "p",
        text: "Apple tries your payment methods in the order they're listed. Put your Pyker card at the top so renewals use it:",
      },
      {
        type: "ol",
        items: [
          "Go to **Settings**, tap your name, then **Payment & Shipping**.",
          "Tap **Edit**.",
          "Touch and hold your Pyker card and drag it to the top.",
          "Tap **Done**.",
        ],
      },
      { type: "h2", text: "Replacing an old card" },
      {
        type: "p",
        text: "If Apple won't let you update an existing card, add your Pyker card as a new payment method first, then remove the old one.",
      },
      { type: "h2", text: "Apple payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          [
            "**Add Payment Method** is greyed out",
            "You're probably in a Family Sharing group with purchase sharing on, where only the organiser can add a card. Turn off purchase sharing to use your own card.",
          ],
          [
            "Your payment method was declined",
            "Fund your Pyker card, check it isn't frozen, and make sure the name and billing address match **Card details** exactly.",
          ],
          [
            "There's a billing problem with a previous purchase",
            "An earlier charge failed. Fund your card and update your payment method, then Apple can collect what's owed.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I pay for iCloud in Nigeria with a virtual dollar card?",
        answer:
          "Yes. Add your Pyker card to your Apple Account under Payment & Shipping, and iCloud+ and your other subscriptions renew from it.",
      },
      {
        question: "Why is my card declined on the App Store?",
        answer:
          "Common reasons are not enough balance, a frozen card, or a name and billing address that don't match the card. Use the details shown under Card details in Pyker.",
      },
      {
        question: "Which billing address should I use for Apple?",
        answer:
          "The one shown under Card details in the Pyker app, not your home address. Apple checks it against the card issuer's records.",
      },
      {
        question: "Can I use the card for Apple Music and apps too?",
        answer:
          "Yes. Once it's on your Apple Account, it's used for App Store purchases and all your Apple subscriptions, in the order your payment methods are listed.",
      },
    ],
    card: { color: "black", network: "mastercard" },
    related: ["google-play", "spotify", "netflix"],
    updated: "2026-10-30",
  },
  {
    slug: "google-play",
    name: "Google Play",
    category: "apps",
    metaTitle: "How to Pay on Google Play in Nigeria",
    description:
      "Add a Pyker virtual dollar card to Google Play for apps, games, in-app purchases and subscriptions. Step by step, with fixes for declined payments.",
    intro:
      "Apps, games, in-app purchases and Google subscriptions all charge the card on your Google account. Here's how to set up a Pyker virtual dollar card and add it to Google Play, step by step.",
    cardType: "Standard",
    cardTypeReason:
      "Google saves your card to your account for future purchases and renewals, so you want a long-lived card. A Lite card expires on its own.",
    fundAdvice: "Fund enough for what you're buying, or for your next subscription renewal.",
    body: [
      { type: "h2", text: "Step 2: Add your card to Google Play" },
      {
        type: "ol",
        items: [
          "Open the **Play Store** app and tap your profile picture.",
          "Tap **Payments & subscriptions**, then **Payment methods**.",
          "Tap **Add a payment method** and choose credit or debit card.",
          "Enter the card number, expiry date and CVV from **Card details** in Pyker.",
          "Enter the **billing address** exactly as Pyker shows it, then save.",
        ],
      },
      {
        type: "p",
        text: "You can also add the card while buying: choose to add a card at checkout. A card you add during a purchase is saved to your account.",
      },
      {
        type: "tip",
        title: "A different address can get you declined",
        text: "Google says a billing address that doesn't match the card's can cause a payment to be declined. Use the address under **Card details** in Pyker.",
      },
      { type: "h2", text: "One card for your whole Google account" },
      {
        type: "p",
        text: "Your card is saved to your Google account, not just the Play Store, so you can pick it for other Google purchases and subscriptions too. You can see and manage your saved cards at **pay.google.com**.",
      },
      { type: "h2", text: "Set a backup for your subscriptions" },
      {
        type: "p",
        text: "If a renewal fails, Google can try a backup payment method. In the Play Store, go to **Payments & subscriptions**, then **Payment methods**, and look for the backup payment option. What you see can differ between accounts.",
      },
      { type: "h2", text: "Google Play payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          [
            "Your card was declined",
            "Fund your Pyker card, check it isn't frozen, and make sure the billing address matches **Card details**.",
          ],
          [
            "Your transaction cannot be completed",
            "Check your card balance and details, then try again. If it keeps failing, contact Pyker support.",
          ],
          [
            "You can't change the payment method on a family purchase",
            "Only the family manager can add or change a family payment method.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I buy apps on Google Play in Nigeria with a virtual card?",
        answer:
          "Yes. Google Play accepts Visa and Mastercard. Add your Pyker card under Payments & subscriptions in the Play Store.",
      },
      {
        question: "Why does Google Play decline my card?",
        answer:
          "Most often it's not enough balance, a frozen card, or a billing address that doesn't match the card. Use the address shown under Card details in Pyker.",
      },
      {
        question: "Can I pay for in-app purchases and game items?",
        answer: "Yes. In-app purchases are charged through Google Play, so they use the card on your Google account.",
      },
      {
        question: "Does the card work for other Google subscriptions?",
        answer:
          "Your card is saved to your Google account, so you can choose it for other Google purchases. Manage your saved cards at pay.google.com.",
      },
    ],
    card: { color: "blue", network: "visa" },
    related: ["youtube-premium", "apple", "udemy"],
    updated: "2026-10-30",
  },
  {
    slug: "udemy",
    name: "Udemy",
    category: "learning",
    metaTitle: "How to Pay for Udemy Courses in Nigeria",
    description:
      "Buy Udemy courses with a Pyker virtual dollar card: set up the card, fund it for the checkout total, and pay. Plus how to avoid failed payments.",
    intro:
      "Found the course you want but your card fails at checkout? Here's how to buy Udemy courses with a Pyker virtual dollar card, and the small things that stop Udemy payments going through.",
    cardType: "Lite",
    cardTypeReason:
      "Buying one course? A Lite card is made for one-off purchases and expires on its own, so there's nothing to cancel later. If you'll buy courses often or subscribe, choose Standard instead.",
    fundAdvice:
      "Fund the checkout total plus a small buffer. Udemy prices change often with sales, so check the total in your cart first.",
    body: [
      { type: "h2", text: "Step 2: Buy your course on Udemy" },
      {
        type: "ol",
        items: [
          "Add the course to your cart and go to checkout.",
          "Choose to pay by card.",
          "Enter the card number, expiry date and CVV exactly as shown under **Card details** in Pyker.",
          "For the postal code, enter the **zip code** from your card's billing address in Pyker.",
          "Complete the purchase. If Udemy shows an extra confirmation step, follow it.",
        ],
      },
      { type: "h2", text: "Avoid the most common failed payments" },
      {
        type: "p",
        text: "Udemy says most card failures come from the card itself. With a Pyker card you control the balance and details, so check these before you pay:",
      },
      {
        type: "ul",
        items: [
          "**Balance:** your card holds at least the checkout total.",
          "**Details:** the CVV and expiry date match **Card details** exactly.",
          "**VPN:** turn it off. Udemy lists VPNs and changing IP addresses as a cause of failed payments.",
          "**Card status:** your card isn't frozen in Pyker.",
        ],
      },
      { type: "h2", text: "Saw a charge, but the payment failed?" },
      {
        type: "p",
        text: "Udemy explains that a failed payment can still show as a temporary hold. It isn't a completed charge and is released automatically, usually within a few business days.",
      },
      { type: "h2", text: "Save your card for your next course" },
      {
        type: "p",
        text: "Udemy lets you save a card to your account and delete it later. If you used a Lite card, remember it will expire on its own. For regular purchases, a Standard card saves you setting up a new one each time.",
      },
      { type: "h2", text: "Udemy payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          ["Payment failed or declined", "Fund your Pyker card for the full total, turn off any VPN, and try again."],
          [
            "Postal code rejected",
            "Enter the zip code from your card's billing address under **Card details** in Pyker.",
          ],
          [
            "A charge appears but you didn't get the course",
            "It's likely a temporary hold from a failed attempt. It's released automatically within a few business days.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I buy Udemy courses in Nigeria with a virtual card?",
        answer:
          "Yes. Udemy accepts major international cards, including Visa and Mastercard. Pay with your Pyker card at checkout.",
      },
      {
        question: "Should I use a Standard or Lite card for Udemy?",
        answer:
          "For a single course, Lite: it's made for one-off purchases and expires on its own. If you'll buy often or subscribe, choose Standard.",
      },
      {
        question: "What postal code do I enter on Udemy?",
        answer: "The zip code from your card's billing address, shown under Card details in the Pyker app.",
      },
      {
        question: "Why was I charged when my Udemy payment failed?",
        answer:
          "A failed payment can show as a temporary hold. It isn't a completed charge and is released automatically, usually within a few business days.",
      },
    ],
    card: { color: "indigo", network: "visa" },
    related: ["coursera", "claude", "canva"],
    updated: "2026-10-30",
  },
  {
    slug: "claude",
    name: "Claude",
    category: "tools",
    metaTitle: "How to Pay for Claude Pro in Nigeria",
    description:
      "Subscribe to Claude Pro or Max with a Pyker virtual dollar card. Set up the card, subscribe on the web, and switch your billing card, step by step.",
    intro:
      "Here's how to pay for a Claude plan from Nigeria with a Pyker virtual dollar card: set up the card, subscribe on the web, and keep your plan renewing without failed payments.",
    cardType: "Standard",
    cardTypeReason:
      "Claude plans renew automatically, so you want a long-lived card. A Lite card expires on its own, which would eventually stop your renewals.",
    fundAdvice:
      "Fund at least your plan's price. If you upgrade partway through a billing cycle, Claude charges you straight away, so fund before you upgrade.",
    body: [
      { type: "h2", text: "Step 2: Subscribe to Claude on the web" },
      {
        type: "p",
        text: "Subscribe at **claude.ai** in a browser. If you subscribe in the Claude app on iPhone or Android, Apple or Google bills you instead, and you'd manage payment in that app store.",
      },
      {
        type: "ol",
        items: [
          "Sign in at **claude.ai**.",
          "Go to **Settings**, then **Billing**, and choose to upgrade.",
          "Pick your plan and continue to payment.",
          "Enter the card number, expiry date and CVV from **Card details** in Pyker, with the billing address shown there.",
          "Confirm. Your plan starts and renews from this card.",
        ],
      },
      { type: "h2", text: "Already subscribed? Switch to your Pyker card" },
      {
        type: "ol",
        items: [
          "On claude.ai, go to **Settings**, then **Billing**.",
          "Select **Update** next to your payment method.",
          "Enter your Pyker card details and save.",
        ],
      },
      {
        type: "p",
        text: "Your Pyker card becomes your default, and future renewals are charged to it. Claude keeps one card on file, so the new card replaces the old one.",
      },
      { type: "h2", text: "How Claude bills your card" },
      {
        type: "ul",
        items: [
          "Your plan renews automatically on your billing date. Fund your Pyker card before then.",
          "Upgrading partway through a cycle charges you right away and starts a new billing cycle.",
          "Your billing address comes from your card, so enter the one shown in Pyker.",
          "Invoices are under **Settings**, then **Billing**.",
        ],
      },
      { type: "h2", text: "Claude payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          [
            "Your card was declined",
            "Fund your Pyker card, check it isn't frozen, and re-enter the details from **Card details**.",
          ],
          [
            "Your plan was downgraded",
            "A renewal probably failed. Fund your card, then check the payment status and update your card under **Settings**, then **Billing**.",
          ],
          [
            "You can't find the payment settings",
            "You may have subscribed in the iPhone or Android app. Manage that subscription in the App Store or Google Play.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I pay for Claude Pro in Nigeria with a dollar card?",
        answer:
          "Yes. Claude accepts credit and debit cards on the web. Subscribe at claude.ai with your Pyker virtual dollar card.",
      },
      {
        question: "How do I change the card on my Claude plan?",
        answer:
          "On claude.ai, go to Settings, then Billing, and select Update next to your payment method. The new card replaces the old one for renewals.",
      },
      {
        question: "Why was I charged straight away when I upgraded?",
        answer:
          "Upgrading partway through a billing cycle is charged immediately and starts a new cycle. Fund your card before you upgrade.",
      },
      {
        question: "Can I use the same card for ChatGPT?",
        answer: "Yes. Our guide on paying for ChatGPT Plus in Nigeria walks through it.",
      },
    ],
    card: { color: "brown", network: "visa" },
    related: ["canva", "udemy", "coursera"],
    updated: "2026-10-30",
  },
  {
    slug: "tiktok-ads",
    name: "TikTok Ads",
    category: "ads",
    metaTitle: "How to Pay for TikTok Ads in Nigeria",
    description:
      "Run TikTok ads from Nigeria with a Pyker virtual dollar card. Add it in TikTok Ads Manager, choose manual or automatic payment, and keep ads live.",
    intro:
      "Here's how to pay for TikTok ads from Nigeria with a Pyker virtual dollar card: set up the card, add it in TikTok Ads Manager, and fund it the right way for how your account is billed.",
    cardType: "Standard",
    cardTypeReason:
      "Your ad account charges or tops up from this card for as long as you advertise, so you want a long-lived card. A Lite card expires on its own.",
    fundAdvice:
      "How much depends on your billing option (see below): the top-up amount for manual payment, or enough to cover your billing threshold for automatic payment.",
    body: [
      { type: "h2", text: "Step 2: Add your card in TikTok Ads Manager" },
      {
        type: "ol",
        items: [
          "In TikTok Ads Manager, open **Tools**, then **Billing** under Settings.",
          "Go to the **Payment** page and click to add a payment method.",
          "Choose credit or debit card.",
          "Enter the card details and billing address from **Card details** in Pyker, then submit.",
        ],
      },
      {
        type: "p",
        text: "The payment methods you see depend on your billing country, billing option and currency, so your screen may differ slightly. Ads Manager lets you add more than one payment method.",
      },
      { type: "h2", text: "Manual or automatic payment: how to fund your card" },
      {
        type: "table",
        head: ["", "Manual payment", "Automatic payment"],
        rows: [
          [
            "How it works",
            "You add balance to your ad account before your ads run.",
            "TikTok charges your card when you reach your billing threshold or bill date, whichever comes first.",
          ],
          [
            "Fund your Pyker card",
            "Before each top-up, for the amount you're adding.",
            "Keep enough on it to cover your threshold at all times.",
          ],
          ["Good for", "Fixed budgets and testing campaigns.", "Always-on campaigns."],
        ],
      },
      { type: "h2", text: "Add balance with your Pyker card (manual payment)" },
      {
        type: "ol",
        items: [
          "Fund your Pyker card for the amount you want to add.",
          "In Ads Manager, go to **Billing**, then the **Payment** section, and click **Add Balance**.",
          "Enter the amount, select your Pyker card, and complete the payment.",
        ],
      },
      { type: "h2", text: "Keep your campaigns running" },
      {
        type: "ul",
        items: [
          "TikTok needs enough balance before and throughout your campaign. Top up before your balance runs low.",
          "If a charge fails, pay the outstanding balance from **Billing** after funding your card.",
          "Add a second payment method as a backup so one failed charge doesn't stop delivery.",
          "Check **View transactions** on your card in Pyker to match each TikTok charge.",
        ],
      },
      { type: "h2", text: "TikTok Ads payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          [
            "Your card was declined",
            "Fund your Pyker card, check it isn't frozen, and re-enter the details and billing address from **Card details**.",
          ],
          [
            "Your ads stopped delivering",
            "Your balance or a charge may have run out. Fund your card, then add balance or pay the outstanding amount in **Billing**.",
          ],
          [
            "Card isn't an option",
            "Available methods depend on your billing country, billing option and currency. Check your account's billing settings.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I pay for TikTok ads in Nigeria with a virtual card?",
        answer: "Yes. Add your Pyker virtual dollar card as a payment method in TikTok Ads Manager, under Billing.",
      },
      {
        question: "Should I use manual or automatic payment?",
        answer:
          "Manual payment means you add balance before ads run, so you only fund your card when you top up. Automatic payment charges your card at your billing threshold, so keep enough on it at all times.",
      },
      {
        question: "Why did my TikTok ads stop running?",
        answer:
          "Usually the account ran out of balance or a charge failed. Fund your Pyker card, then add balance or pay the outstanding amount in Billing.",
      },
      {
        question: "Can I add more than one card?",
        answer: "Yes. Ads Manager supports more than one payment method, which is a good backup if a charge fails.",
      },
    ],
    card: { color: "pink", network: "mastercard" },
    related: ["facebook-instagram-ads", "google-ads", "canva"],
    updated: "2026-10-30",
  },
  {
    slug: "spotify",
    name: "Spotify",
    category: "streaming",
    metaTitle: "How to Pay for Spotify Premium in Nigeria",
    description:
      "Pay for Spotify Premium with a Pyker virtual dollar card: set up the card, add it on your Spotify account page, and keep Premium from lapsing.",
    intro:
      "Here's how to pay for Spotify Premium from Nigeria with a Pyker virtual dollar card: set up the card, add it to your Spotify account, and what happens if a payment fails.",
    cardType: "Standard",
    cardTypeReason:
      "Premium renews every month, so you want a long-lived card. A Lite card expires on its own, which would eventually stop your renewals.",
    fundAdvice:
      "Fund at least your plan's price. Spotify may place a small temporary authorisation when you add a card, so a little extra helps.",
    body: [
      { type: "h2", text: "Step 2: Add your card to Spotify" },
      {
        type: "p",
        text: "Manage payment on Spotify's website. If your Premium is billed by an app store or a phone or internet partner, payment is handled there instead (see the tip below).",
      },
      {
        type: "ol",
        items: [
          "Log in to your account page at **spotify.com**.",
          "Find your plan and select **Update** next to your payment method. Not subscribed yet? Choose a Premium plan and pick card at checkout.",
          "Enter the card number, expiry date and CVV from **Card details** in Pyker.",
          "Save. A change of card applies from your next billing date.",
        ],
      },
      {
        type: "p",
        text: "Spotify may place a small temporary authorisation to check a new card. It's a hold, not a payment, and it disappears shortly.",
      },
      {
        type: "tip",
        title: "Billed by a partner?",
        text: "If Premium came with your phone or internet plan, Spotify can't change the card. Manage it with that provider, or end that billing and subscribe on spotify.com with your Pyker card.",
      },
      { type: "h2", text: "If a Spotify payment fails" },
      {
        type: "p",
        text: "You don't lose Premium straight away. Spotify tries the payment again over the next few days, so fund your Pyker card in that window and the retry can go through.",
      },
      { type: "h2", text: "Paying for Family or Duo" },
      {
        type: "p",
        text: "On Family and Duo plans, the plan manager pays for everyone. Only the manager adds the Pyker card; members don't pay separately.",
      },
      { type: "h2", text: "Spotify payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          [
            "Your payment failed",
            "Fund your Pyker card within the next few days so Spotify's retry goes through, and check the details match **Card details**.",
          ],
          [
            "You can't change your payment details",
            "Your plan is probably billed by a partner or app store. Manage it there, or subscribe on spotify.com instead.",
          ],
          [
            "A small charge appeared when you added your card",
            "It's a temporary authorisation to check the card. It disappears shortly.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I pay for Spotify Premium with a virtual card in Nigeria?",
        answer:
          "Yes. Spotify accepts Visa and Mastercard. Add your Pyker virtual dollar card on your account page at spotify.com.",
      },
      {
        question: "Do I lose Premium if a payment fails?",
        answer:
          "Not straight away. Spotify retries the payment over the next few days, so fund your Pyker card and the retry can go through.",
      },
      {
        question: "When does a new card start being charged?",
        answer: "From your next billing date. Your current period stays paid on the old method.",
      },
      {
        question: "Can I pay for Spotify Family with it?",
        answer: "Yes. The plan manager adds the Pyker card, and the whole plan renews from it.",
      },
    ],
    card: { color: "indigo", network: "mastercard" },
    related: ["youtube-premium", "netflix", "apple"],
    updated: "2026-10-30",
  },
  {
    slug: "youtube-premium",
    name: "YouTube Premium",
    category: "streaming",
    metaTitle: "How to Pay for YouTube Premium in Nigeria",
    description:
      "Pay for YouTube Premium or YouTube Music with a Pyker virtual dollar card. Add it on a computer or in the app, set a backup, and fix declines.",
    intro:
      "Here's how to pay for YouTube Premium or YouTube Music Premium from Nigeria with a Pyker virtual dollar card, on a computer or in the app, and what to do when YouTube can't process your payment.",
    cardType: "Standard",
    cardTypeReason:
      "Premium renews every month, so you want a long-lived card. A Lite card expires on its own, which would eventually stop your renewals.",
    fundAdvice: "Fund at least your plan's price before each renewal.",
    body: [
      { type: "h2", text: "Step 2: Add your card to YouTube Premium" },
      {
        type: "p",
        text: "YouTube Premium is billed through your Google account. If you signed up through Apple on an iPhone, or through Google Play on Android, change your payment there instead.",
      },
      { type: "h3", text: "On a computer" },
      {
        type: "ol",
        items: [
          "Go to **youtube.com/paid_memberships** and click **Manage membership**.",
          "Click **Edit** next to your payment method.",
          "Choose to add a card and enter the number, expiry date, CVV and billing address from **Card details** in Pyker.",
          "Save.",
        ],
      },
      { type: "h3", text: "In the YouTube app" },
      {
        type: "ol",
        items: [
          "Tap your profile picture, then **Purchases and memberships**.",
          "Select your membership and edit the payment method.",
          "Add your Pyker card with the details from **Card details**, then save.",
        ],
      },
      {
        type: "p",
        text: "Not subscribed yet? Visit **youtube.com/premium**, choose a plan, and add your Pyker card at checkout.",
      },
      { type: "h2", text: "Add a backup payment method" },
      {
        type: "p",
        text: "On your membership page, click **Edit** next to **Backup payment method** to add another card. If your main card can't be charged, YouTube uses the backup so your membership keeps going.",
      },
      { type: "h2", text: "If YouTube can't process your payment" },
      {
        type: "ol",
        items: [
          "Fund your Pyker card in the app.",
          "On your membership, select the message **Current payment method could not be processed**.",
          "Choose **Update payment method** and re-enter your Pyker card.",
        ],
      },
      { type: "h2", text: "YouTube Premium payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          [
            "Current payment method could not be processed",
            "Fund your Pyker card, then select the message and choose **Update payment method**.",
          ],
          [
            "You can't change the payment method",
            "You probably subscribed through Apple or Google Play. Change it in that store.",
          ],
          [
            "Your card was declined",
            "Check your card balance, make sure it isn't frozen, and re-enter the details and billing address from **Card details**.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I pay for YouTube Premium in Nigeria with a dollar card?",
        answer:
          "Yes. YouTube Premium is billed through your Google account, which accepts Visa and Mastercard. Add your Pyker card to your membership.",
      },
      {
        question: "Does this work for YouTube Music Premium?",
        answer: "Yes. YouTube Music Premium is managed and billed the same way.",
      },
      {
        question: "How do I change the card on YouTube Premium?",
        answer:
          "On a computer, go to youtube.com/paid_memberships, click Manage membership, then Edit next to your payment method. In the app, go to Purchases and memberships.",
      },
      {
        question: "Can I add a backup card?",
        answer:
          "Yes. Click Edit next to Backup payment method on your membership. YouTube uses it if your main card can't be charged.",
      },
    ],
    card: { color: "pink", network: "visa" },
    related: ["spotify", "netflix", "google-play"],
    updated: "2026-10-30",
  },
  {
    slug: "facebook-instagram-ads",
    name: "Facebook & Instagram Ads",
    category: "ads",
    metaTitle: "How to Pay for Facebook & Instagram Ads in Nigeria",
    description:
      "Run Facebook and Instagram ads from Nigeria with a Pyker virtual dollar card. Add it to your Meta ad account, manage your threshold, keep ads live.",
    intro:
      "Here's how to pay for Facebook and Instagram ads from Nigeria with a Pyker virtual dollar card: set up the card, add it to your Meta ad account, and keep charges in step with your card balance.",
    cardType: "Standard",
    cardTypeReason:
      "Your ad account charges this card for as long as you advertise, so you want a long-lived card. A Lite card expires on its own.",
    fundAdvice:
      "Keep enough on the card to cover your payment threshold. If your ad account already has an amount due, Meta may charge it as soon as you add the card.",
    body: [
      { type: "h2", text: "Step 2: Add your card to your Meta ad account" },
      {
        type: "p",
        text: "You need to be an admin of the ad account. Facebook and Instagram ads, including boosted posts, are billed through the same Meta ad account.",
      },
      {
        type: "ol",
        items: [
          "Open **Billing & payments** for your ad account, then **Payment settings**.",
          "Choose to add a payment method and pick credit or debit card.",
          "Enter the card number, expiry date, CVV and billing address from **Card details** in Pyker.",
          "Save, and make it your default payment method so charges go to it.",
        ],
      },
      { type: "h2", text: "How Meta charges your card" },
      {
        type: "p",
        text: "Most ad accounts use automatic payments. Meta charges your card each time your spend reaches your **payment threshold**, then again on your monthly bill date for anything left over.",
      },
      {
        type: "tip",
        title: "Pick your payment setting carefully",
        text: "Once an ad account is set up for automatic or manual payments, Meta doesn't let you switch it to the other.",
      },
      { type: "h2", text: "Keep charges within your card balance" },
      {
        type: "ul",
        items: [
          "**Lower your threshold:** in **Billing & payments**, go to **Payment settings** and edit **When you'll pay** under Current balance. A lower threshold takes effect immediately, so each charge stays small.",
          "**Pay early:** use **Pay now** next to Amount due to settle what you owe before you hit your threshold, while your card is funded.",
          "**Match charges:** check **View transactions** on your card in Pyker against your Meta billing history.",
        ],
      },
      { type: "h2", text: "Ads paused?" },
      {
        type: "p",
        text: "A failed charge can stop your ads, but so can your daily spending limit, which is separate from your payment threshold. Check both in **Billing & payments**.",
      },
      { type: "h2", text: "Meta ads payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          ["Your payment failed", "Fund your Pyker card, then pay the amount due from **Payment settings**."],
          [
            "Your ads stopped delivering",
            "Check for a failed payment first, then check whether you've reached your daily spending limit.",
          ],
          [
            "You can't add a payment method",
            "Only ad account admins can manage payment. Ask an admin to add you or to add the card.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I pay for Facebook ads in Nigeria with a dollar card?",
        answer:
          "Yes. Add your Pyker card as a payment method in Billing & payments for your ad account, and make it your default.",
      },
      {
        question: "Does the same card work for Instagram ads?",
        answer:
          "Yes. Instagram ads, including boosted posts, are billed through your Meta ad account, so they use its payment method.",
      },
      {
        question: "What is a payment threshold?",
        answer:
          "The amount of spend at which Meta charges your card on automatic payments. You can lower it under Payment settings so each charge stays within your card balance.",
      },
      {
        question: "Why did my Facebook ads stop running?",
        answer:
          "Usually a failed charge or your daily spending limit. Fund your Pyker card and pay the amount due, then check your spending limit.",
      },
    ],
    card: { color: "indigo", network: "visa" },
    related: ["tiktok-ads", "google-ads", "canva"],
    updated: "2026-10-30",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    category: "ads",
    metaTitle: "How to Pay for Google Ads in Nigeria",
    description:
      "Pay for Google Ads from Nigeria with a Pyker virtual dollar card. Add it in Billing, choose automatic or manual payments, and keep ads running.",
    intro:
      "Here's how to pay for Google Ads from Nigeria, including YouTube ads, with a Pyker virtual dollar card: set up the card, add it in your billing settings, and fund it for how your account pays.",
    cardType: "Standard",
    cardTypeReason:
      "Your ads account charges this card for as long as you advertise, so you want a long-lived card. A Lite card expires on its own.",
    fundAdvice:
      "On automatic payments, keep enough to cover your payment threshold. On manual payments, fund the amount you'll add. A new card may show a small temporary authorisation that drops off within a week.",
    body: [
      { type: "h2", text: "Step 2: Add your card in Google Ads" },
      {
        type: "ol",
        items: [
          "In Google Ads, open the **Billing** menu and go to **Settings**.",
          "Open **Payment methods** and choose to add a payment method.",
          "Enter the card number, expiry date, CVV and billing address from **Card details** in Pyker, then save.",
          "To charge this card, choose **Set as primary payment method** from its **Actions** menu.",
        ],
      },
      {
        type: "p",
        text: "On an organisation account, you need Admin or Billing access to add a payment method.",
      },
      { type: "h2", text: "Automatic or manual payments: how to fund your card" },
      {
        type: "table",
        head: ["", "Automatic payments", "Manual payments"],
        rows: [
          [
            "How it works",
            "Google charges your card after your ads run: on the 1st of each month, and whenever you reach your payment threshold.",
            "You pay before your ads run. Your ads stop when that credit is used up.",
          ],
          [
            "Fund your Pyker card",
            "Keep enough on it to cover your threshold at all times.",
            "Before each payment, for the amount you're adding.",
          ],
          ["Good for", "Always-on campaigns.", "Fixed budgets."],
        ],
      },
      {
        type: "p",
        text: "Whether you can choose depends on the country of your billing address: manual payments aren't available everywhere.",
      },
      { type: "h2", text: "Add funds with your Pyker card (manual payments)" },
      {
        type: "ol",
        items: [
          "Fund your Pyker card for the amount you want to add.",
          "In Google Ads Billing, go to **Summary** and click **Add funds**.",
          "Choose your Pyker card, enter the amount and confirm. Card payments clear almost immediately.",
        ],
      },
      { type: "h2", text: "Google Ads payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          [
            "Your payment was declined",
            "Fund your Pyker card, check it isn't frozen, and make sure the billing address matches **Card details**.",
          ],
          [
            "Your ads stopped running",
            "On manual payments, your credit ran out: add funds. On automatic payments, a charge failed: fund your card and make a payment.",
          ],
          [
            "A small charge appeared when you added your card",
            "It's a temporary authorisation. It drops off automatically within a week.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I pay for Google Ads in Nigeria with a dollar card?",
        answer:
          "Yes. Add your Pyker card under Billing, then Settings, then Payment methods, and set it as your primary payment method.",
      },
      {
        question: "Does this cover YouTube ads?",
        answer: "Yes. YouTube ads are run and billed through Google Ads, so they use the same payment method.",
      },
      {
        question: "When does Google Ads charge my card?",
        answer:
          "On automatic payments, on the 1st of each month and whenever you reach your payment threshold. On manual payments, only when you add funds.",
      },
      {
        question: "Why did my Google Ads stop running?",
        answer:
          "Usually your prepaid credit ran out or a charge failed. Fund your Pyker card, then add funds or make a payment in Billing.",
      },
    ],
    card: { color: "blue", network: "mastercard" },
    related: ["facebook-instagram-ads", "tiktok-ads", "youtube-premium"],
    updated: "2026-10-30",
  },
  {
    slug: "coursera",
    name: "Coursera",
    category: "learning",
    metaTitle: "How to Pay for Coursera in Nigeria",
    description:
      "Pay for Coursera courses, certificates and Coursera Plus with a Pyker virtual dollar card. Set up the card, start your plan, and avoid trial charges.",
    intro:
      "Here's how to pay for Coursera from Nigeria with a Pyker virtual dollar card: set up the card, start a course or subscription, and handle free trials and failed payments.",
    cardType: "Standard",
    cardTypeReason:
      "Most Coursera certificates and Coursera Plus are subscriptions that renew, so you want a long-lived card. A Lite card expires on its own.",
    fundAdvice:
      "Fund your subscription price before your free trial ends or your next renewal. Coursera may place a small temporary authorisation to check the card when you sign up.",
    body: [
      { type: "h2", text: "Step 2: Pay on Coursera" },
      {
        type: "ol",
        items: [
          "Choose your course, certificate or Coursera Plus, and select enroll or start your free trial.",
          "Choose to pay by card.",
          "Enter the card number, expiry date, CVV and billing address from **Card details** in Pyker.",
          "Confirm. A small temporary authorisation may appear: it checks the card and isn't charged.",
        ],
      },
      { type: "h2", text: "Already subscribed? Switch to your Pyker card" },
      {
        type: "ol",
        items: [
          "On Coursera, go to **Settings**, then **Payment**.",
          "Click **Edit** next to your current payment method.",
          "Enter your Pyker card details and click **Save**.",
        ],
      },
      {
        type: "p",
        text: "Coursera keeps one payment method at a time, so the Pyker card replaces your old one and is charged for your next subscription payment.",
      },
      { type: "h2", text: "Free trials: don't get caught out" },
      {
        type: "ul",
        items: [
          "When a free trial ends, Coursera automatically charges you for the first month.",
          "Want to keep going? Fund your Pyker card before the trial ends.",
          "Don't want to pay? Cancel within the trial from **Purchases**. Your progress is saved.",
        ],
      },
      { type: "h2", text: "If a Coursera payment fails" },
      {
        type: "p",
        text: "You have **7 days**. Update your payment info within 7 days of a failed charge and Coursera automatically tries again. After 7 days without a successful charge, your subscription is cancelled. So fund your Pyker card, then re-save it under **Settings**, then **Payment**.",
      },
      { type: "h2", text: "Coursera payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          [
            "Your payment failed",
            "Within 7 days, fund your Pyker card and update your payment info. Coursera retries automatically.",
          ],
          [
            "You were charged after a free trial",
            "Trials convert to a paid month automatically. Cancel from **Purchases** to stop future charges.",
          ],
          [
            "Your subscription was cancelled",
            "A charge failed for more than 7 days. Fund your card and subscribe again.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I pay for Coursera in Nigeria with a virtual card?",
        answer: "Yes. Coursera accepts Visa and Mastercard. Pay with your Pyker virtual dollar card at checkout.",
      },
      {
        question: "How do I change my card on Coursera?",
        answer:
          "Go to Settings, then Payment, click Edit next to your current method, and save your Pyker card. It replaces the old one.",
      },
      {
        question: "What happens if my Coursera payment fails?",
        answer:
          "Update your payment info within 7 days and Coursera retries automatically. After 7 days without a successful charge, the subscription is cancelled.",
      },
      {
        question: "Will I be charged after my free trial?",
        answer:
          "Yes, for the first month, unless you cancel within the trial from Purchases. Fund your card first if you want to continue.",
      },
    ],
    card: { color: "brown", network: "mastercard" },
    related: ["udemy", "claude", "canva"],
    updated: "2026-10-30",
  },
  {
    slug: "canva",
    name: "Canva",
    category: "tools",
    metaTitle: "How to Pay for Canva Pro in Nigeria",
    description:
      "Pay for Canva Pro with a Pyker virtual dollar card. Set up the card, add it in Canva's billing settings, and keep your plan from dropping to Free.",
    intro:
      "Here's how to pay for Canva Pro from Nigeria with a Pyker virtual dollar card: set up the card, add it in your Canva settings, and keep your plan from dropping to Free.",
    cardType: "Standard",
    cardTypeReason:
      "Canva plans renew automatically, so you want a long-lived card. A Lite card expires on its own, which would eventually stop your renewals.",
    fundAdvice: "Fund at least your plan's price before your free trial ends or your renewal date.",
    body: [
      { type: "h2", text: "Step 2: Add your card to Canva" },
      {
        type: "p",
        text: "Manage payment on canva.com. If you subscribed in the Canva app on iPhone or Android, Apple or Google handles your payment instead.",
      },
      {
        type: "ol",
        items: [
          "Sign in at **canva.com** and open **Settings**, then **Billing**.",
          "Add a payment method, or update the one you have. Not subscribed yet? Choose to upgrade and pick your plan.",
          "Enter the card number, expiry date, CVV and billing address from **Card details** in Pyker.",
          "Save.",
        ],
      },
      {
        type: "p",
        text: "On a team, only owners and administrators can manage the payment method.",
      },
      { type: "h2", text: "Starting with a free trial" },
      {
        type: "ul",
        items: [
          "Canva's free trial is available once per account and once per payment method.",
          "Your trial end date is on the **Billing** page, next to your plan.",
          "Plans renew automatically unless you cancel, so fund your Pyker card before the trial ends.",
        ],
      },
      { type: "h2", text: "If a Canva payment fails" },
      {
        type: "p",
        text: "Canva retries the charge several times within **16 days** of your billing date. If it still fails after 16 days, your subscription is cancelled and your account moves to the Free plan. Fund your Pyker card inside that window.",
      },
      { type: "h2", text: "Canva payment problems and fixes" },
      {
        type: "table",
        head: ["What you see", "What to do"],
        rows: [
          [
            "Your payment failed",
            "Fund your Pyker card. Canva retries for up to 16 days, or update your card on the **Billing** page.",
          ],
          [
            "Your account moved to the Free plan",
            "Payments failed for more than 16 days. Fund your card and upgrade again.",
          ],
          [
            "You can't change the payment method",
            "You may have subscribed through Apple or Google, or you're not a team owner or administrator.",
          ],
        ],
      },
    ],
    faq: [
      {
        question: "Can I pay for Canva Pro in Nigeria with a virtual card?",
        answer:
          "Yes. Canva accepts Visa and Mastercard. Add your Pyker card on the Billing page in your Canva settings.",
      },
      {
        question: "What happens if my Canva payment fails?",
        answer:
          "Canva retries several times within 16 days. If it still fails, your subscription is cancelled and your account moves to the Free plan.",
      },
      {
        question: "Can I start a Canva free trial with my Pyker card?",
        answer:
          "Yes, if you haven't used a trial before. Canva's trial is available once per account and once per payment method.",
      },
      {
        question: "Who can change the card on a Canva team?",
        answer: "Only team owners and administrators can manage the payment method.",
      },
    ],
    card: { color: "pink", network: "visa" },
    related: ["claude", "facebook-instagram-ads", "coursera"],
    updated: "2026-10-30",
  },
];

export function servicePath(service: Service) {
  return `${PAY_FOR_PATH}/${service.slug}`;
}

export function findService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

/** The full guide: what you need, the Pyker setup tailored to the service, then its own walkthrough. */
export function serviceGuide(service: Service): Block[] {
  const { name } = service;
  const network = service.card.network === "visa" ? "Visa" : "Mastercard";
  return [
    { type: "h2", text: "What you need" },
    {
      type: "ul",
      items: [
        "The Pyker app, with your account verified (BVN and a quick liveness check).",
        "Naira in your Pyker wallet. Top up by bank transfer, or [sell crypto for naira](/sell-crypto).",
        `A ${name} account.`,
      ],
    },
    { type: "h2", text: "Step 1: Set up your card in Pyker" },
    {
      type: "ol",
      items: [
        "**Open Virtual card.** On the Pyker home screen, tap **Virtual card**. If you already have a card, tap **Add card**.",
        `**Choose ${service.cardType}.** Under **Select card option**, pick **${service.cardType}**. ${service.cardTypeReason}`,
        `**Pick a colour and network.** On **Customise your virtual card**, choose a colour, then Visa or Mastercard. ${name} accepts both.`,
      ],
    },
    {
      type: "screens",
      items: [
        {
          src: `/screens/card-option-${service.cardType.toLowerCase()}.webp`,
          alt: `Pyker Select card option screen with ${service.cardType} selected`,
          caption: `Pick ${service.cardType} under Select card option.`,
        },
        {
          src: `/screens/card-customise-${service.card.network}.webp`,
          alt: `Pyker Customise your virtual card screen with ${network} selected`,
          caption: "Choose a colour, then Visa or Mastercard.",
        },
      ],
    },
    {
      type: "ol",
      start: 4,
      items: [
        `**Fund it from your wallet.** Choose **Wallet** as the funding source, enter an amount in USD and tap **Create virtual card**. ${service.fundAdvice} The creation fee is shown before you confirm.`,
        "**Open your card details.** On your card, tap **Card details** and enter your PIN. You'll see the card number, CVV, expiry (**Valid till**), name on card and billing address.",
      ],
    },
    {
      type: "screens",
      items: [
        {
          src: "/screens/card-create-fund.webp",
          alt: "Pyker Fund card screen with Wallet as the funding source and a USD amount field",
          caption: "Fund the card from your naira wallet in USD.",
        },
        {
          src: "/screens/card-details.webp",
          alt: "Pyker Card details screen with card number, CVV, expiry, name and billing address",
          caption: `Everything ${name} asks for, with a copy button on each line.`,
        },
      ],
    },
    {
      type: "tip",
      title: "Keep Card details open",
      text: `You'll copy the card number, CVV, expiry and billing address into ${name} in the next step. Use the billing address Pyker shows, not your home address.`,
    },
    ...service.body,
    {
      type: "cta",
      title: "Don't have a Pyker card yet?",
      text: "Create a USD Visa or Mastercard in about a minute, funded from your naira balance.",
      to: "/virtual-dollar-card",
      label: "Get the card",
    },
  ];
}

export function serviceFaq(service: Service): FaqItem[] {
  return [
    ...service.faq,
    {
      question: "How do I fund my Pyker dollar card?",
      answer:
        "Open your card in the app and tap Fund card. It's paid from your Pyker wallet, which you can top up by bank transfer or by selling crypto for naira.",
    },
    {
      question: "What if my payment is still declined?",
      answer:
        "Check that your card has enough balance and isn't frozen, and that the details match Card details exactly. If it still fails, contact Pyker support and we'll help.",
    },
  ];
}
