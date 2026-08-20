import Hero from "../components/sections/Hero";
import ValueStrip from "../components/sections/ValueStrip";
import HowItWorks from "../components/sections/HowItWorks";
import ShowcaseSplit from "../components/sections/ShowcaseSplit";
import FeatureGrid from "../components/sections/FeatureGrid";
import Security from "../components/sections/Security";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <HowItWorks />

      <ShowcaseSplit
        eyebrow="Sell with confidence"
        title="Sell crypto in a few taps"
        description="Pick a wallet to receive your payout, scan or share your address, and see the live rate before you confirm anything."
        points={[
          "Choose an NGN or USD payout wallet",
          "Live conversion and exchange rates upfront",
          "Clear minimum amount and fees, no surprises",
        ]}
        screenSrc="/screens/sell-address.png"
        screenAlt="Pyker sell screen showing a deposit address, QR code and live rates"
      />

      <ShowcaseSplit
        reverse
        tint
        eyebrow="Fast payouts"
        title="Get paid in minutes, not days"
        description="Track every step of your sale in real time, from payment detected to funds credited, with a full breakdown of the payout."
        points={[
          "Live status from detection to settlement",
          "Transparent fee and payout breakdown",
          "Transaction hash for every sale, on request",
        ]}
        screenSrc="/screens/sell-success.png"
        screenAlt="Pyker transaction screen showing a successful crypto sale and payout breakdown"
      />

      <ShowcaseSplit
        eyebrow="Spend your crypto"
        title="A virtual card for everyday spending"
        description="Fund a virtual dollar card straight from your wallet and pay for subscriptions, shopping and more, anywhere Visa is accepted."
        points={[
          "Fund and top up from your Pyker balance",
          "Freeze, fund or view statements anytime",
          "Built for secure online payments",
        ]}
        screenSrc="/screens/virtual-card.png"
        screenAlt="Pyker virtual dollar card screen showing card balance and management options"
      />

      <ShowcaseSplit
        reverse
        tint
        eyebrow="Pay bills instantly"
        title="Airtime, data and bills, sorted"
        description="Once your Naira balance is topped up from a sale, pay for the essentials right there in the app — no separate app, no delay."
        points={[
          "Airtime, data, electricity & cable TV",
          "Pay directly from your Naira balance",
          "Instant confirmation on every payment",
        ]}
        screenSrc="/screens/bills.png"
        screenAlt="Pyker bill payment screen for airtime, data, electricity and cable TV"
      />

      <ShowcaseSplit
        eyebrow="Trade between assets"
        title="Swap crypto at a fair, live rate"
        description="Convert directly between supported assets — no detour through Naira — with the rate shown live before you confirm."
        points={[
          "Convert between supported crypto assets directly",
          "Live floating rate shown before you confirm",
          "No need to sell to Naira first",
        ]}
        screenSrc="/screens/swap.png"
        screenAlt="Pyker swap screen showing a live floating rate between two crypto assets"
      />

      <FeatureGrid />
      <Security />
      <Faq />
      <FinalCta />
    </>
  );
}
