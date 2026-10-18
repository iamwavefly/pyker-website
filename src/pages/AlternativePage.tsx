import { PageHero, PageSection, Steps, Points, LinkCards, CompareTable, Merchants } from "../components/page/PageParts";
import VirtualCard from "../components/ui/VirtualCard";
import { MERCHANTS, TRADEMARK_NOTE } from "../data/merchants";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import PainPoints from "../components/sections/PainPoints";
import { FEATURES } from "../data/features";
import {
  ALTERNATIVES,
  ALTERNATIVES_CHECKED,
  ALTERNATIVES_PATH,
  CARD_CHECKS,
  PAYOUT_CHECKS,
  alternativePath,
  type Alternative,
} from "../content/alternatives";
import { BankIcon, BoltIcon, ChartIcon, ClockIcon, CreditCardIcon, EyeSlashIcon, PlusIcon, WalletIcon } from "../components/icons";
import styles from "../components/page/Page.module.css";

export default function AlternativePage({ alternative: alt }: { alternative: Alternative }) {
  const others = ALTERNATIVES.filter((a) => a !== alt);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Alternatives", to: ALTERNATIVES_PATH },
          { label: alt.name, to: alternativePath(alt) },
        ]}
        eyebrow={`${alt.name} alternative`}
        title={
          <>
            Looking for a <span className="accent">{alt.name} alternative?</span>
          </>
        }
        intro={alt.intro}
        secondary={
          alt.card
            ? { label: "Explore the dollar card", to: FEATURES.virtualCard.path }
            : { label: "How selling works", to: FEATURES.sellCrypto.path }
        }
        aside={
          alt.card ? (
            <div style={{ width: "100%", maxWidth: 420, transform: "rotate(-5deg)" }}>
              <VirtualCard color="black" network="mastercard" />
            </div>
          ) : alt.event ? (
            <div className={styles.eventCard}>
              <span className={styles.eventDate}>{alt.event.date}</span>
              <p>{alt.event.text}</p>
              <span className={styles.eventNote}>Public reporting, checked {ALTERNATIVES_CHECKED}</span>
            </div>
          ) : (
            <div className={styles.eventCard}>
              <span className={styles.eventDate}>Comparing payouts?</span>
              <p>Compare the naira that lands in your bank, not the headline rate.</p>
              <span className={styles.eventNote}>Check every app at the same moment, after all fees.</span>
            </div>
          )
        }
      />

      <PageSection eyebrow={alt.event ? "What changed" : "Background"} title={alt.changed.title}>
        <div className={styles.changed}>
          {alt.changed.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className={styles.sources}>
            <span>Sources</span>
            <ul>
              {alt.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection soft eyebrow="Compare" title={`Pyker vs ${alt.name}`}>
        <CompareTable columns={["", "Pyker", alt.name]} rows={alt.compare.map((row) => ({ label: row.label, ours: row.pyker, theirs: row.them }))} />
      </PageSection>

      {alt.card ? (
        <PageSection eyebrow="Choosing a card" title="What to compare in a dollar card">
          <Points
            points={CARD_CHECKS.map((check, index) => ({
              Icon: [CreditCardIcon, WalletIcon, PlusIcon, EyeSlashIcon][index] ?? CreditCardIcon,
              ...check,
            }))}
          />
        </PageSection>
      ) : (
      <PageSection
          eyebrow="Rate and cashout"
          title="Comparing rates or cashout speed?"
          intro="The fairest comparison is the naira that actually reaches your bank. Here's how to check it."
        >
          <Points
            points={PAYOUT_CHECKS.map((check, index) => ({
              Icon: [ClockIcon, ChartIcon, BankIcon, BoltIcon][index] ?? ChartIcon,
              ...check,
            }))}
          />
        </PageSection>
      )}

      <PageSection eyebrow="Switch in minutes" title={`Moving from ${alt.name} to Pyker`}>
        <Steps steps={alt.switchSteps} />
      </PageSection>

      {alt.card ? (
        <PageSection soft eyebrow="Works with" title="Pay for the services you already use">
          <Merchants names={MERCHANTS} note={TRADEMARK_NOTE} />
        </PageSection>
      ) : (
        <PainPoints soft />
      )}

      <Faq items={alt.faq} title={`${alt.name} alternative: FAQs`} />

      <PageSection eyebrow="More alternatives" title="Other platforms people are switching from">
        <LinkCards
          links={others.map((other) => ({
            to: alternativePath(other),
            title: `${other.name} alternative`,
            text: other.summary,
          }))}
        />
        <p className={styles.disclaimer}>
          Information about other platforms comes from public reporting, checked {ALTERNATIVES_CHECKED}, and may have
          changed since. Platform names are trademarks of their respective owners. Pyker isn't affiliated with or
          endorsed by them.
        </p>
      </PageSection>

      <FinalCta />
    </>
  );
}
