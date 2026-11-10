import { PageHero, PageSection, Points, LinkCards, Steps } from "../components/page/PageParts";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { FEATURES, isLive } from "../data/features";
import { BILLS } from "../content/bills";
import { postsTagged } from "../content/blog";
import { PostGrid } from "../components/blog/PostCard";
import {
  AirtimeIcon,
  BoltIcon,
  CableTvIcon,
  DataIcon,
  ElectricityIcon,
  GiftIcon,
  GlobeIcon,
  IdCardIcon,
  RetryIcon,
  SwapIcon,
  UsersIcon,
  WalletIcon,
} from "../components/icons";

const ICONS = [AirtimeIcon, DataIcon, ElectricityIcon, CableTvIcon, GlobeIcon];
const BENEFIT_ICONS = [WalletIcon, BoltIcon, RetryIcon, IdCardIcon, UsersIcon, SwapIcon];
const FOR_YOU_ICONS = [GiftIcon, AirtimeIcon, DataIcon, CableTvIcon];

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
          live ? (
            <>
              Bills that <span className="accent">pay you back</span>
            </>
          ) : (
            <>
              Airtime, data and bills, <span className="accent">paid from your wallet</span>
            </>
          )
        }
        intro={BILLS.intro}
        secondary={{ label: live ? "Sell crypto to fund it" : "Sell crypto today", to: FEATURES.sellCrypto.path }}
      />

      <PageSection eyebrow={live ? "What you can pay" : "What's coming"} title={live ? "Every bill in your house, one app" : "Everyday bills, in one app"}>
        <Points columns={live ? 3 : undefined} points={BILLS.categories.map((item, index) => ({ Icon: ICONS[index], ...item }))} />
      </PageSection>

      {live && (
        <>
          <PageSection soft eyebrow="Why Pyker" title="Why pay bills on Pyker? Plenty reasons">
            <Points columns={3} points={BILLS.benefits.map((item, index) => ({ Icon: BENEFIT_ICONS[index], ...item }))} />
          </PageSection>

          <PageSection eyebrow="How it works" title="Pay. Get paid back.">
            <Steps steps={BILLS.steps} />
          </PageSection>

          <PageSection soft eyebrow="Made for how we live" title="For everybody wey dey pay bills">
            <Points points={BILLS.forYou.map((item, index) => ({ Icon: FOR_YOU_ICONS[index], ...item }))} />
          </PageSection>
        </>
      )}

      <Faq items={BILLS.faq} title="Bill payments, explained" />

      {live && (
        <PageSection eyebrow="Guides" title="Bill payments, step by step">
          <PostGrid posts={postsTagged(["bills"]).slice(0, 3)} />
        </PageSection>
      )}

      <PageSection soft eyebrow={live ? "More from Pyker" : "Available today"} title={live ? "Got crypto? Turn it into bills paid" : "What you can do with Pyker now"}>
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
