import { PageHero, PageSection, Steps, LinkCards, CompareTable } from "../components/page/PageParts";
import RatesTable from "../components/page/RatesTable";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import PainPoints from "../components/sections/PainPoints";
import { PostGrid } from "../components/blog/PostCard";
import { postsTagged } from "../content/blog";
import { COINS, sellPath } from "../data/coins";
import { FEATURES } from "../data/features";
import { SELL_COMPARE, SELL_HUB } from "../content/sell";

export default function SellCryptoPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Sell crypto", to: FEATURES.sellCrypto.path },
        ]}
        eyebrow="Instant sell · no P2P"
        title={
          <>
            Instant crypto to naira, <span className="accent">no waiting</span>
          </>
        }
        intro="Send Bitcoin, USDT, Ethereum and more to your own Pyker address. No buyers to wait for, no fake alerts to worry about: your NGN or USD wallet is credited as soon as the network confirms."
        secondary={{ label: "See today's rates", to: FEATURES.rates.path }}
      />

      <PageSection eyebrow="Supported coins" title="Choose the coin you're selling">
        <LinkCards
          links={COINS.map((coin) => ({
            to: sellPath(coin),
            title: `Sell ${coin.displayName}`,
            text: coin.multiNetwork
              ? `${coin.symbol} to naira, on the network you send from.`
              : `${coin.symbol} to naira or dollars, paid in minutes.`,
            icon: <coin.Icon size={40} />,
          }))}
        />
      </PageSection>

      <PageSection soft eyebrow="How it works" title="Three steps from crypto to cash">
        <Steps steps={SELL_HUB.steps} />
      </PageSection>

      <PageSection eyebrow="Today's prices" title="Crypto to naira rates" intro="What Pyker pays for each coin today.">
        <RatesTable />
      </PageSection>

      <PainPoints soft />

      <PageSection eyebrow="Compare" title="Instant sell vs P2P" intro="Why selling to your own address beats waiting on a buyer.">
        <CompareTable columns={SELL_COMPARE.columns} rows={SELL_COMPARE.rows} />
      </PageSection>

      <Faq items={SELL_HUB.faq} title="Selling crypto, explained" />
      <PageSection eyebrow="Guides" title="Selling crypto, step by step">
        <PostGrid posts={postsTagged(["sell"]).slice(0, 3)} />
      </PageSection>

      <FinalCta />
    </>
  );
}
