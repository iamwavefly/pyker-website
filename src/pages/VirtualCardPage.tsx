import { PageHero, PageSection, Steps, Points, LinkCards, Merchants } from "../components/page/PageParts";
import { MERCHANTS, TRADEMARK_NOTE } from "../data/merchants";
import VirtualCard from "../components/ui/VirtualCard";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { PostGrid } from "../components/blog/PostCard";
import { postsTagged } from "../content/blog";
import { FEATURES } from "../data/features";
import { CARD } from "../content/card";
import { CreditCardIcon, EyeSlashIcon, PlusIcon, SnowflakeIcon, GlobeIcon, MusicIcon, IdCardIcon, ShoppingIcon } from "../components/icons";

export default function VirtualCardPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Virtual dollar card", to: FEATURES.virtualCard.path },
        ]}
        eyebrow="Virtual dollar card"
        title={
          <>
            A dollar card for Nigerians, <span className="accent">funded in naira</span>
          </>
        }
        intro="Create a USD Visa or Mastercard virtual card in about a minute. Fund it from your Pyker balance and pay for Apple, Google, Netflix, Udemy, Claude and more."
        secondary={{ label: "Sell crypto to fund it", to: FEATURES.sellCrypto.path }}
        aside={
          <div style={{ width: "100%", maxWidth: 440, transform: "rotate(-5deg)" }}>
            <VirtualCard color="indigo" network="visa" />
          </div>
        }
      />

      <PageSection
        soft
        eyebrow="Works with"
        title="Pay for the services you already use"
        intro="Use your Pyker card anywhere Visa or Mastercard is accepted online."
      >
        <Merchants names={MERCHANTS} note={TRADEMARK_NOTE} />
      </PageSection>

      <PageSection eyebrow="Get started" title="How to get a virtual dollar card">
        <Steps steps={CARD.steps} />
      </PageSection>

      <PageSection soft eyebrow="Features" title="Everything you need to pay online">
        <Points
          points={[
            { Icon: CreditCardIcon, title: "Visa or Mastercard", text: "Choose your network and one of five colours." },
            { Icon: PlusIcon, title: "Fund or withdraw anytime", text: "Move money between your card and wallet in seconds." },
            { Icon: SnowflakeIcon, title: "Freeze in one tap", text: "Pause your card instantly, unfreeze when you're ready." },
            { Icon: EyeSlashIcon, title: "Details behind your PIN", text: "Your card number only shows after you confirm your PIN." },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="Use cases" title="What you can pay for">
        <Points
          points={CARD.uses.map((use, index) => ({
            Icon: [GlobeIcon, MusicIcon, IdCardIcon, ShoppingIcon][index] ?? GlobeIcon,
            title: use.title,
            text: use.text,
          }))}
        />
      </PageSection>

      <Faq items={CARD.faq} title="Dollar card questions" />

      <PageSection eyebrow="More from Pyker" title="Fund your card with crypto">
        <LinkCards
          links={[
            { to: FEATURES.sellCrypto.path, title: FEATURES.sellCrypto.label, text: FEATURES.sellCrypto.summary },
            { to: FEATURES.rates.path, title: FEATURES.rates.label, text: FEATURES.rates.summary },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="Guides" title="Learn more about dollar cards">
        <PostGrid posts={postsTagged(["card"]).slice(0, 3)} />
      </PageSection>

      <FinalCta />
    </>
  );
}
