import { PageHero, PageSection, Points, LinkCards } from "../components/page/PageParts";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { FEATURES, isLive } from "../data/features";
import { BILLS } from "../content/bills";
import { AirtimeIcon, CableTvIcon, DataIcon, ElectricityIcon } from "../components/icons";

const ICONS = [AirtimeIcon, DataIcon, ElectricityIcon, CableTvIcon];

export default function PayBillsPage() {
  const live = isLive("bills");

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Pay bills", to: FEATURES.bills.path },
        ]}
        eyebrow="Bill payments"
        badge={live ? undefined : "Coming soon"}
        title={
          <>
            Airtime, data and bills, <span className="accent">paid from your wallet</span>
          </>
        }
        intro={BILLS.intro}
        secondary={{ label: "Sell crypto today", to: FEATURES.sellCrypto.path }}
      />

      <PageSection eyebrow={live ? "What you can pay" : "What's coming"} title="Everyday bills, in one app">
        <Points points={BILLS.categories.map((item, index) => ({ Icon: ICONS[index], ...item }))} />
      </PageSection>

      <Faq items={BILLS.faq} title="Bill payments, explained" />

      <PageSection soft eyebrow="Available today" title="What you can do with Pyker now">
        <LinkCards
          links={[
            { to: FEATURES.sellCrypto.path, title: FEATURES.sellCrypto.label, text: FEATURES.sellCrypto.summary },
            { to: FEATURES.virtualCard.path, title: FEATURES.virtualCard.label, text: FEATURES.virtualCard.summary },
            { to: FEATURES.rates.path, title: FEATURES.rates.label, text: FEATURES.rates.summary },
          ]}
        />
      </PageSection>

      <FinalCta />
    </>
  );
}
