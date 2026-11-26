# Pyker on Facebook: Page kit

Everything needed to set up the Pyker Facebook Page.

## Images

| Slot | File | Notes |
| --- | --- | --- |
| Profile picture | `../tiktok/pyker-tiktok-avatar.png` | The same purple avatar as TikTok, so the brand looks the same everywhere. Facebook crops it to a circle. |
| Cover photo | `pyker-facebook-cover.png` | 1640×924. "Never settle for less" with two 3D phones (a successful BTC sale in front, the virtual dollar card behind) and a frosted credit alert. Phones show the whole image; desktop shows only the middle 1640×624 band, which holds the copy and the alert. |

To change the cover, edit `social/html/facebook.html` (shared styles in `social/html/banner.css`) and run `node social/render-html.mjs`, which captures it with headless Chrome. After uploading, check the cover in the Facebook app: on phones the profile photo overlaps the bottom-left corner.

## Page details

| Field | Value | Notes |
| --- | --- | --- |
| Page name | `Pyker` | Keep it to the brand name. Facebook can reject names stuffed with keywords. |
| Username | `@usepyker` | Gives you facebook.com/usepyker, matching TikTok and the domain. |
| Categories | `Financial Service`, `App Page` | Up to 3. Add `Cryptocurrency` if the list offers it. |
| Website | `https://usepyker.com/?utm_source=facebook&utm_medium=social&utm_campaign=page` | |
| Email | `support@usepyker.com` | |
| Phone / WhatsApp | `+234 703 077 2726` | Link it under Settings → Linked accounts → WhatsApp |
| Location | Service area: Nigeria | Leave the street address off unless you want walk-ins. |

## Intro (101 characters max)

All three lead with **Never settle for less**, to match the cover. **Pick one.**

1. **Recommended** (91):
   ```
   Never settle for less. More naira for your crypto, better FX on your dollar card, low fees.
   ```
2. Pidgin (95):
   ```
   No dey sell your crypto cheap. Low spread, low fees, and better FX on your virtual dollar card.
   ```
3. Plain (92):
   ```
   More naira for your crypto and better FX on your virtual dollar card. Never settle for less.
   ```

## Action button

**Use app** → `https://play.google.com/store/apps/details?id=com.wavefly.pyker`

When the iOS app is live, point the button at `https://usepyker.com`, which sends each phone to the right store.
If you'd rather get questions than installs, use **Send WhatsApp message** instead.

## About section (longer description)

```
Never settle for less.

Many apps take a big cut when you sell crypto, through high fees and a wide spread. Pyker keeps more of your money in your pocket.

💸 Sell crypto for naira: BTC, USDT, ETH, USDC, SOL and DOGE. Low spread and low fees, so more naira lands in your wallet, usually within minutes.
💳 Virtual dollar card: a USD Visa or Mastercard with better FX and low card fees, for Netflix, Spotify, ChatGPT, Apple, Google and online shopping.
📱 Pay bills with cashback: airtime, data, light and cable TV, and you get paid back every time.
🏦 Withdraw naira to any Nigerian bank, free.

Check today's rates before you sell: usepyker.com/rates

Support: support@usepyker.com · WhatsApp 0703 077 2726

Pyker will NEVER ask for your PIN, password, OTP or seed phrase.
```

## Messenger

**Greeting** (Inbox → Automations → Greeting):

```
Hi {{user_first_name}} 👋 Welcome to Pyker, where you never settle for less. Ask us for today's rate, or anything about the dollar card or bills.
```

**Instant reply:**

```
Thanks for messaging Pyker! We'll reply shortly.
For faster account help, chat with us on WhatsApp: 0703 077 2726.
Heads up: we will NEVER ask for your PIN, password, OTP or seed phrase.
```

**FAQ prompts** (Automations → Frequently asked questions):

- What's your USDT rate today?
- What fees do you charge?
- What's the FX rate on the dollar card?
- How fast do I get paid?

## First pinned post

```
Never settle for less 💸

Why let high fees and a wide spread eat your crypto? On Pyker:
✅ More naira when you sell BTC, USDT and more
✅ Better FX and low fees on your virtual dollar card
✅ Cashback every time you pay bills
✅ Free withdrawals to any Nigerian bank

No dey sell cheap. Download Pyker 👉 usepyker.com
```

Attach the cover image or a short screen recording of a USDT sale with the credit alert landing.

## Before posting

- Meta needs written permission before you run **ads** about crypto. Normal Page posts don't need it. Apply in Business Settings before boosting any crypto post. Boosting dollar-card or bills posts should be fine.
- Turn on **two-factor authentication** for every Page admin. Hijacked Pages are a common way to scam crypto users.
- In the Page's comment moderation settings (hidden words / Moderation Assist), hide comments containing `WhatsApp me`, `DM me`, `recovery` and `support agent`. These words often come from scammers posing as support.
