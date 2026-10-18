import { PageHero, PageSection, LinkCards, CompareTable, Points } from "../components/page/PageParts";
import { BankIcon, BoltIcon, ChartIcon, ClockIcon } from "../components/icons";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import PainPoints from "../components/sections/PainPoints";
import { FEATURES } from "../data/features";
import {
  ALTERNATIVES,
  ALTERNATIVES_CHECKED,
  ALTERNATIVES_FAQ,
  ALTERNATIVES_PATH,
  PAYOUT_CHECKS,
  alternativePath,
} from "../content/alternatives";
import { SELL_COMPARE } from "../content/sell";
import styles from "../components/page/Page.module.css";


export default function AlternativesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Alternatives", to: ALTERNATIVES_PATH },
        ]}
        eyebrow="Alternatives"
        title={
          <>
            Looking for a better way <span className="accent">to sell crypto?</span>
          </>
        }
        intro="Whether you want a better payout, faster cashout to your bank, or your old platform changed, here's how Pyker compares, and how to compare any app fairly."
        secondary={{ label: "How selling works", to: FEATURES.sellCrypto.path }}
      />

      <PageSection title="Platforms that changed">
        <LinkCards
          links={ALTERNATIVES.filter((alt) => alt.event).map((alt) => ({
            to: alternativePath(alt),
            title: `${alt.name} alternative`,
            text: `${alt.event!.date}: ${alt.event!.text}`,
          }))}
        />
      </PageSection>

      <PageSection soft title="Comparing apps for rate or speed">
        <LinkCards
          links={ALTERNATIVES.filter((alt) => !alt.event && !alt.card).map((alt) => ({
            to: alternativePath(alt),
            title: `${alt.name} alternative`,
            text: alt.summary,
          }))}
        />
      </PageSection>

      <PageSection title="Comparing dollar card apps">
        <LinkCards
          links={ALTERNATIVES.filter((alt) => alt.card).map((alt) => ({
            to: alternativePath(alt),
            title: `${alt.name} alternative`,
            text: alt.summary,
          }))}
        />
      </PageSection>

      <PageSection
        soft
        eyebrow="Rate and cashout"
        title="How to compare payouts fairly"
        intro="The best rate is the one that puts the most naira in your bank, after every fee."
      >
        <Points
          points={PAYOUT_CHECKS.map((check, index) => ({
            Icon: [ClockIcon, ChartIcon, BankIcon, BoltIcon][index] ?? ChartIcon,
            ...check,
          }))}
        />
        <p className={styles.disclaimer}>
          Based on public reporting, checked {ALTERNATIVES_CHECKED}. Platform names are trademarks of their respective
          owners. Pyker isn't affiliated with or endorsed by them.
        </p>
      </PageSection>

      <PageSection soft eyebrow="Compare" title="Instant sell vs P2P">
        <CompareTable columns={SELL_COMPARE.columns} rows={SELL_COMPARE.rows} />
      </PageSection>

      <PainPoints />

      <Faq items={ALTERNATIVES_FAQ} title="Switching, explained" />
      <FinalCta />
    </>
  );
}
