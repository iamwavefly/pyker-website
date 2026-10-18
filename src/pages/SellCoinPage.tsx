import { PageHero, PageSection, Steps, LinkCards, Points, Notice, CompareTable } from "../components/page/PageParts";
import CoinPriceCard from "../components/page/CoinPriceCard";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { PostGrid } from "../components/blog/PostCard";
import { postsTagged, type PostTag } from "../content/blog";
import { COINS, sellPath, type Coin } from "../data/coins";
import { FEATURES } from "../data/features";
import { SELL_COMPARE, sellCoinFaq, sellCoinSteps } from "../content/sell";
import { BoltIcon, ChartIcon, QrIcon, WalletIcon } from "../components/icons";

export default function SellCoinPage({ coin }: { coin: Coin }) {
  const others = COINS.filter((c) => c.id !== coin.id);
  // Coin-specific guides first, then general selling guides.
  const coinTag = (["bitcoin", "usdt"] as PostTag[]).find((tag) => tag === coin.slug);
  const guides = [...(coinTag ? postsTagged([coinTag]) : []), ...postsTagged(["sell"])]
    .filter((post, index, all) => all.indexOf(post) === index)
    .slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Sell crypto", to: FEATURES.sellCrypto.path },
          { label: coin.displayName, to: sellPath(coin) },
        ]}
        eyebrow={`Instant ${coin.symbol} to naira · no P2P`}
        title={
          <>
            Sell {coin.displayName} for naira, <span className="accent">instantly</span>
          </>
        }
        intro={coin.intro}
        secondary={{ label: "See all rates", to: FEATURES.rates.path }}
        aside={<CoinPriceCard coin={coin} />}
      />

      <PageSection eyebrow="How it works" title={`How to sell ${coin.displayName} on Pyker`}>
        <Steps steps={sellCoinSteps(coin)} />
        <Notice>
          {coin.multiNetwork
            ? `Always send ${coin.symbol} on the same network you chose in the app. Sending on a different network, or sending another coin, can result in permanent loss.`
            : `Only send ${coin.symbol} to your ${coin.symbol} deposit address. Sending any other coin to it can result in permanent loss.`}
        </Notice>
      </PageSection>

      <PageSection soft eyebrow="Why Pyker" title={`A better way to sell ${coin.symbol}`}>
        <Points
          points={[
            {
              Icon: BoltIcon,
              title: "Instant sell",
              text: `No buyers, no haggling. Your wallet is credited automatically once your ${coin.symbol} confirms.`,
            },
            { Icon: ChartIcon, title: "One upfront rate", text: "See your rate before you send, with Pyker's fee already built in." },
            {
              Icon: QrIcon,
              title: "Your own address",
              text: `A dedicated ${coin.symbol} address in your account, ready whenever you want to sell.`,
            },
            { Icon: WalletIcon, title: "Naira or dollars", text: "Choose your NGN or USD wallet for every sale." },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="Compare" title={`Selling ${coin.symbol}: instant sell vs P2P`}>
        <CompareTable columns={SELL_COMPARE.columns} rows={SELL_COMPARE.rows} />
      </PageSection>

      <Faq items={sellCoinFaq(coin)} title={`Selling ${coin.displayName}: FAQs`} />

      <PageSection eyebrow="More coins" title="Sell other crypto for naira">
        <LinkCards
          links={others.map((other) => ({
            to: sellPath(other),
            title: `Sell ${other.displayName}`,
            text: `${other.symbol} to naira or dollars.`,
            icon: <other.Icon size={36} />,
          }))}
        />
      </PageSection>

      <PageSection soft eyebrow="Guides" title={`Guides for selling ${coin.symbol}`}>
        <PostGrid posts={guides} />
      </PageSection>

      <FinalCta />
    </>
  );
}
