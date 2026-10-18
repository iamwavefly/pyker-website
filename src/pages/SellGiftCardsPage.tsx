import { PageHero, PageSection, Steps, LinkCards } from "../components/page/PageParts";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { FEATURES, isLive } from "../data/features";
import { GIFT_CARDS } from "../content/giftCards";
import { GiftIcon } from "../components/icons";
import styles from "../components/page/Page.module.css";

export default function SellGiftCardsPage() {
  const live = isLive("giftCards");

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Sell gift cards", to: FEATURES.giftCards.path },
        ]}
        eyebrow="Gift cards"
        badge={live ? undefined : "Coming soon"}
        title={
          <>
            Turn gift cards into <span className="accent">naira</span>
          </>
        }
        intro={GIFT_CARDS.intro}
        secondary={{ label: "Sell crypto today", to: FEATURES.sellCrypto.path }}
        aside={
          <div className={styles.eventCard}>
            <span className={styles.giftIcon}>
              <GiftIcon width={36} height={36} />
            </span>
            <p>{live ? "Sell gift cards in the Pyker app." : "Gift card selling is on its way."}</p>
            <span className={styles.eventNote}>
              {live ? "Rates shown before you submit." : "We'll let you know in the app as soon as it's live."}
            </span>
          </div>
        }
      />

      <PageSection eyebrow={live ? "How it works" : "How it will work"} title="Gift card to naira in three steps">
        <Steps steps={GIFT_CARDS.steps} />
      </PageSection>

      <Faq items={GIFT_CARDS.faq} title="Gift cards, explained" />

      <PageSection soft eyebrow="Available today" title="What you can do with Pyker now">
        <LinkCards
          links={[FEATURES.sellCrypto, FEATURES.virtualCard, FEATURES.rates].map((feature) => ({
            to: feature.path,
            title: feature.label,
            text: feature.summary,
          }))}
        />
      </PageSection>

      <FinalCta />
    </>
  );
}
