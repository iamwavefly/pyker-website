import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Sparkline from "../page/Sparkline";
import { FEATURES } from "../../data/features";
import Button from "../ui/Button";
import Phone from "../ui/Phone";
import VirtualCard from "../ui/VirtualCard";
import MerchantLogo from "../ui/MerchantLogo";
import { BtcIcon } from "../icons/crypto";
import { ArrowRightIcon, CaretRightIcon, CheckCircleIcon } from "../icons";
import { COINS, formatNgn } from "../../data/coins";
import { useMarketTicker } from "../../hooks/useMarketTicker";
import { MERCHANTS } from "../../data/merchants";
import styles from "./Hero.module.css";

const TRUST = ["BVN-verified accounts", "PIN on every move", "Free naira withdrawals"];

const RATE_COINS = COINS.filter((coin) => ["bitcoin", "tether", "ethereum"].includes(coin.id));

const RATE_CYCLE_MS = 4000;

// One featured coin at a time, cycling, with its 7-day chart across the tile.
function RateTile() {
  const { coins } = useMarketTicker();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % RATE_COINS.length), RATE_CYCLE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const coin = RATE_COINS[index];
  const live = coins?.find((c) => c.id === coin.id);
  const up = (live?.change24h ?? 0) >= 0;

  return (
    <div
      className={`${styles.tile} ${styles.tileInk} ${styles.rates}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.ratesTop}>
        <span className={styles.tileTag}>
          <i className={styles.liveDot} /> Live rate
        </span>
        <div className={styles.rateTabs} role="tablist" aria-label="Coin">
          {RATE_COINS.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={c.name}
              className={i === index ? styles.rateTabOn : ""}
              onClick={() => setIndex(i)}
            >
              <c.Icon size={22} />
            </button>
          ))}
        </div>
      </div>

      <div key={coin.id} className={styles.rateBody}>
        <span className={styles.rateLabel}>1 {coin.symbol} to naira</span>
        {live ? (
          <p className={styles.rateValue}>
            ₦{formatNgn(live.price)}
            <span className={up ? styles.up : styles.down}>
              {up ? "▲" : "▼"} {Math.abs(live.change24h).toFixed(1)}%
            </span>
          </p>
        ) : (
          <Link to={FEATURES.rates.path} className={styles.rateLink}>
            Today's rates <ArrowRightIcon width={20} height={20} />
          </Link>
        )}
      </div>

      <Sparkline points={live?.sparkline} color="#d4f55c" className={styles.rateChart} />
    </div>
  );
}

function BentoVisual() {

  return (
    <div className={styles.bento}>
      {/* Left column */}
      <div className={`${styles.tile} ${styles.tileLime} ${styles.sale}`}>
        <span className={styles.tileTag}>
          <BtcIcon size={18} /> Sell · BTC
        </span>
        <p className={styles.saleRoute}>
          BTC <ArrowRightIcon width={26} height={26} /> NGN
        </p>
        <div className={styles.saleFoot}>
          <span>
            <small>You received</small>
            ₦432,180
          </span>
          <span className={styles.saleDone}>
            <CheckCircleIcon width={16} height={16} /> Credited
          </span>
        </div>
      </div>

      <RateTile />

      {/* Centre: the app */}
      <div className={`${styles.tile} ${styles.tilePhone}`}>
        <span className={styles.phoneTag}>One app for crypto and dollars</span>
        <Phone src="/screens/home.png" alt="Pyker home screen with wallet balance and quick actions" className={styles.phone} eager />
      </div>

      {/* Right column */}
      <div className={`${styles.tile} ${styles.tileViolet} ${styles.card}`}>
        <p className={styles.tileTitle}>Spend in dollars</p>
        <span className={styles.cardNote}>Visa or Mastercard, funded in naira</span>
        <div className={styles.cardArt}>
          <VirtualCard color="black" network="visa" />
        </div>
      </div>

      <div className={`${styles.tile} ${styles.tileWhite} ${styles.merchants}`}>
        <span className={styles.tileTag}>Pay for</span>
        <ul>
          {MERCHANTS.map((name) => (
            <li key={name}>
              <MerchantLogo name={name} />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default function Hero() {
  return (
    <>
      <section id="top" className={styles.hero}>
        <div className={styles.wash} aria-hidden="true" />
        <Container>
          <div className={styles.copy}>
            <h1 className={styles.title}>
              Sell crypto for{" "}
              <span className={styles.keep}>
                <span className={`${styles.sticker} ${styles.naira}`} aria-hidden="true">
                  ₦
                </span>
                naira,
              </span>
              <br />
              spend in{" "}
              <span className={styles.keep}>
                <span className={`${styles.sticker} ${styles.dollar}`} aria-hidden="true">
                  $
                </span>
                <span className={styles.scribbled}>
                  dollars
                  <svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true">
                    <path pathLength={1} d="M4 16 C 70 6, 160 4, 296 9 M 30 20 C 110 13, 200 13, 270 16" />
                  </svg>
                </span>
              </span>
            </h1>
            <p className={styles.subtitle}>
              Instant sell, no P2P. Get paid in minutes, then pay Apple, Google, Netflix and more with a
              virtual dollar card.
            </p>
            <div className={styles.ctaRow}>
              <Button variant="lime" size="lg" href="#download" icon={<CaretRightIcon width={13} height={13} />} className={styles.iconEnd}>
                Get the app
              </Button>
              <Button variant="outline" size="lg" href="#how-it-works">
                See how it works
              </Button>
            </div>
            <ul className={styles.trust}>
              {TRUST.map((item) => (
                <li key={item}>
                  <CheckCircleIcon width={16} height={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <BentoVisual />
        </Container>
      </section>

      <div className={styles.band}>
        <Container>
          <div className={styles.bandInner}>
            <span className={styles.bandLabel}>Sell the coins you already hold</span>
            <div className={styles.bandCoins}>
              <ul className={styles.coinTrack}>
                {[...COINS, ...COINS].map(({ id, name, Icon }, index) => (
                  <li key={`${id}-${index}`} aria-hidden={index >= COINS.length || undefined}>
                    <Icon size={22} />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
