import { useState } from "react";
import { PageHero, PageSection, LinkCards } from "../components/page/PageParts";
import RateConverter from "../components/page/RateConverter";
import RatesTable from "../components/page/RatesTable";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { CALCULATOR } from "../content/rates";
import { COINS, ratePath } from "../data/coins";
import { FEATURES } from "../data/features";
import styles from "../components/page/Page.module.css";

export default function CryptoCalculatorPage() {
  // USDT first: it's what most people convert.
  const [coin, setCoin] = useState(COINS.find((c) => c.symbol === "USDT") ?? COINS[0]);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Crypto rates", to: FEATURES.rates.path },
          { label: "Calculator", to: CALCULATOR.path },
        ]}
        eyebrow="Calculator · today's Pyker rates"
        title={
          <>
            Crypto to naira <span className="accent">calculator</span>
          </>
        }
        intro={CALCULATOR.intro}
        secondary={{ label: "See all rates", to: FEATURES.rates.path }}
      />

      <PageSection eyebrow="Convert" title={`${coin.displayName} to naira`}>
        <div className={styles.coinPicker} role="group" aria-label="Coin">
          {COINS.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={option.id === coin.id}
              onClick={() => setCoin(option)}
            >
              <option.Icon size={22} />
              {option.symbol}
            </button>
          ))}
        </div>
        <RateConverter key={coin.id} coin={coin} initial={coin.amounts[Math.floor(coin.amounts.length / 2)]} />
      </PageSection>

      <PageSection soft eyebrow="Today's prices" title="1 coin in naira, at a glance">
        <RatesTable />
      </PageSection>

      <Faq items={CALCULATOR.faq} title="Crypto to naira calculator: FAQs" />

      <PageSection eyebrow="By coin" title="Rate and converter for each coin">
        <LinkCards
          links={COINS.map((other) => ({
            to: ratePath(other),
            title: `${other.displayName} to naira`,
            text: `Today's ${other.symbol}/NGN rate, with a table of common amounts.`,
            icon: <other.Icon size={36} />,
          }))}
        />
      </PageSection>

      <FinalCta />
    </>
  );
}
