import { PageHero, PageSection, LinkCards } from "../components/page/PageParts";
import CoinPriceCard from "../components/page/CoinPriceCard";
import RateConverter from "../components/page/RateConverter";
import RateAmounts from "../components/page/RateAmounts";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { COINS, ratePath, sellPath, type Coin } from "../data/coins";
import { FEATURES } from "../data/features";
import { coinRateFaq, coinRateIntro } from "../content/coinRates";

export default function CoinRatePage({ coin }: { coin: Coin }) {
  const others = COINS.filter((c) => c.id !== coin.id);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Crypto rates", to: FEATURES.rates.path },
          { label: `${coin.displayName} to naira`, to: ratePath(coin) },
        ]}
        eyebrow={`${coin.symbol}/NGN · today's rate`}
        title={
          <>
            {coin.displayName} to naira <span className="accent">rate today</span>
          </>
        }
        intro={coinRateIntro(coin)}
        secondary={{ label: `How to sell ${coin.symbol}`, to: sellPath(coin) }}
        aside={<CoinPriceCard coin={coin} />}
      />

      <PageSection eyebrow="Converter" title={`Convert ${coin.symbol} to naira`}>
        <RateConverter coin={coin} initial={coin.amounts[Math.floor(coin.amounts.length / 2)]} />
      </PageSection>

      <PageSection
        soft
        eyebrow="Quick reference"
        title={`What your ${coin.symbol} is worth today`}
        intro="Common amounts at today's Pyker rate, both ways. Your exact amount is shown in the app before you send."
      >
        <RateAmounts coin={coin} />
      </PageSection>

      <Faq items={coinRateFaq(coin)} title={`${coin.displayName} to naira: FAQs`} />

      <PageSection eyebrow="More rates" title="Other crypto to naira rates">
        <LinkCards
          links={others.map((other) => ({
            to: ratePath(other),
            title: `${other.displayName} to naira`,
            text: `Today's ${other.symbol}/NGN rate.`,
            icon: <other.Icon size={36} />,
          }))}
        />
      </PageSection>

      <FinalCta />
    </>
  );
}
