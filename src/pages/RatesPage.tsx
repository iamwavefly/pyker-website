import { PageHero, PageSection, LinkCards } from "../components/page/PageParts";
import RatesTable from "../components/page/RatesTable";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { FEATURES } from "../data/features";
import { RATES } from "../content/rates";

export default function RatesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Crypto rates", to: FEATURES.rates.path },
        ]}
        eyebrow="Today's rates"
        title={
          <>
            Crypto to naira <span className="accent">rates today</span>
          </>
        }
        intro="What Pyker pays for Bitcoin, USDT, Ethereum, USDC, Solana and Dogecoin today, in naira. Ready to sell? You'll see your exact rate in the app before you send."
        secondary={{ label: "How selling works", to: FEATURES.sellCrypto.path }}
      />

      <section style={{ marginTop: "-40px", position: "relative" }}>
        <div className="container">
          <RatesTable />
        </div>
      </section>

      <Faq items={RATES.faq} title="Crypto rates, explained" />

      <PageSection eyebrow="More from Pyker" title="Do more with your naira">
        <LinkCards
          links={[
            { to: FEATURES.sellCrypto.path, title: FEATURES.sellCrypto.label, text: FEATURES.sellCrypto.summary },
            { to: FEATURES.virtualCard.path, title: FEATURES.virtualCard.label, text: FEATURES.virtualCard.summary },
          ]}
        />
      </PageSection>

      <FinalCta />
    </>
  );
}
