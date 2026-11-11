import { PageHero, PageSection, Steps, Chips, LinkCards, Points } from "../components/page/PageParts";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { PostGrid } from "../components/blog/PostCard";
import { postsTagged } from "../content/blog";
import { BILLS } from "../content/bills";
import { BILL_KINDS, BILL_PROVIDERS, billProviderPath, billProviderSteps, withArticle, type BillProvider } from "../content/billProviders";
import { FEATURES } from "../data/features";
import { BoltIcon, IdCardIcon, RetryIcon, WalletIcon } from "../components/icons";

// Cashback, the instant token, refunds and the name check: the four that
// apply to every biller.
const BENEFITS = [
  { Icon: WalletIcon, ...BILLS.benefits[0] },
  { Icon: BoltIcon, ...BILLS.benefits[1] },
  { Icon: RetryIcon, ...BILLS.benefits[2] },
  { Icon: IdCardIcon, ...BILLS.benefits[3] },
];

const HOW_TO: Record<BillProvider["kind"], (name: string) => string> = {
  network: (name) => `How to buy ${name} airtime and data on Pyker`,
  electricity: (name) => `How to buy ${withArticle(name)} token on Pyker`,
  tv: (name) => `How to renew ${name} on Pyker`,
};

export default function BillProviderPage({ provider }: { provider: BillProvider }) {
  const at = provider.h1.indexOf(provider.accent);
  const siblings = BILL_PROVIDERS.filter((other) => other.kind === provider.kind && other !== provider);
  // The token benefit only makes sense for electricity.
  const benefits = provider.kind === "electricity" ? BENEFITS : BENEFITS.filter((_, index) => index !== 1);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Pay bills", to: FEATURES.bills.path },
          { label: provider.name, to: billProviderPath(provider) },
        ]}
        eyebrow={`${BILL_KINDS[provider.kind].label} · cashback every time`}
        title={
          <>
            {provider.h1.slice(0, at)}
            <span className="accent">{provider.accent}</span>
            {provider.h1.slice(at + provider.accent.length)}
          </>
        }
        intro={provider.intro}
        secondary={{ label: "All bill payments", to: FEATURES.bills.path }}
      />

      <PageSection eyebrow="How it works" title={HOW_TO[provider.kind](provider.name)}>
        <Steps steps={billProviderSteps(provider)} />
      </PageSection>

      <PageSection soft eyebrow="Good to know" title={provider.facts.title} intro={provider.facts.intro}>
        <Chips items={provider.facts.items} />
      </PageSection>

      <PageSection eyebrow="Why Pyker" title={`Pay ${provider.name} and get paid back`}>
        <Points columns={benefits.length === 3 ? 3 : undefined} points={benefits} />
      </PageSection>

      <Faq items={provider.faq} title={`${provider.name} on Pyker: FAQs`} />

      <PageSection eyebrow="More bills" title={BILL_KINDS[provider.kind].plural}>
        <LinkCards
          links={[
            ...siblings.map((other) => ({
              to: billProviderPath(other),
              title: other.h1,
              text: "Pay in seconds, with cashback.",
            })),
            { to: FEATURES.bills.path, title: "All bill payments", text: FEATURES.bills.summary },
          ]}
        />
      </PageSection>

      <PageSection soft eyebrow="Guides" title="Bill payments, step by step">
        <PostGrid posts={postsTagged(["bills"]).slice(0, 3)} />
      </PageSection>

      <FinalCta />
    </>
  );
}
