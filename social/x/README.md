# Pyker on X: profile kit

Everything needed to set up the Pyker X (Twitter) profile.

## Images

| Slot | File | Notes |
| --- | --- | --- |
| Profile photo | `../tiktok/pyker-tiktok-avatar.png` | The same purple avatar as TikTok and Facebook. X crops it to a circle. |
| Header | `pyker-x-header.png` | 1500×500, the same design as the Facebook cover. The profile photo covers the bottom-left corner, so the copy sits top-left and the phones sit right of centre. |

To change the header, edit `social/html/x.html` and run `node social/render-html.mjs`.

## Profile fields

| Field | Value | Notes |
| --- | --- | --- |
| Name | `Pyker` | 50 chars max. Keep it short so it never truncates next to a verified badge. |
| Handle | `@usepyker` | 15 chars max. Matches TikTok, Facebook and the domain. Fallbacks: `@pykerapp`, `@pyker_ng` |
| Location | `Nigeria` | |
| Website | `https://usepyker.com/?utm_source=x&utm_medium=social&utm_campaign=profile` | |
| Account type | Professional account | Settings → Your account → switch to a professional account, then pick the closest finance category. |

## Bio (160 characters max)

All three lead with **Never settle for less**. **Pick one.**

1. **Recommended** (135). The last line matters on X, where fake support accounts reply to anyone who complains:
   ```
   Never settle for less 💸 More naira for your crypto, better FX on your dollar card, low fees. We never DM first or ask for your PIN/OTP.
   ```
2. Pidgin (115):
   ```
   No dey sell your crypto cheap. Low spread, low fees, better FX on your virtual dollar card. Never settle for less 💸
   ```
3. Plain (92):
   ```
   More naira for your crypto and better FX on your virtual dollar card. Never settle for less.
   ```

## Pinned post

```
Never settle for less 💸

Sell BTC, USDT & more: low spread, low fees, more naira in your wallet.
Pay online with a virtual dollar card at better FX.
Bills? Cashback every time.

👉 usepyker.com
```

Attach `pyker-x-header.png` or a short screen recording of a USDT sale with the credit alert landing.

## Before posting

- **Impersonators:** scam accounts copy crypto brands' names and avatars and reply to users' complaints. Consider X's Verified Organizations subscription for the gold check, and reply publicly to complaints with "We'll never DM you first. Reach us at support@usepyker.com or WhatsApp 0703 077 2726."
- **Ads:** X restricts paid promotion of crypto products by country. Check X's financial services ad policy for Nigeria before promoting any post. Normal posts are fine.
- **Claims:** keep to "more naira", "low spread", "better FX". Avoid "best rate in Nigeria" or "cheapest" unless you can show the comparison.
