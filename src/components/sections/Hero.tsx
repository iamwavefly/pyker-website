import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Sparkline from "../page/Sparkline";
import { FEATURES } from "../../data/features";
import Button from "../ui/Button";
import Phone from "../ui/Phone";
import { BtcIcon } from "../icons/crypto";
import VirtualCard from "../ui/VirtualCard";
import MerchantLogo from "../ui/MerchantLogo";
import RollingNumber from "../ui/RollingNumber";
import { ArrowRightIcon, CaretRightIcon, CheckCircleIcon } from "../icons";
import { COINS, formatNgn } from "../../data/coins";
import { useMarketTicker } from "../../hooks/useMarketTicker";
import { MERCHANTS } from "../../data/merchants";
import styles from "./Hero.module.css";

const TRUST = ["BVN-verified accounts", "PIN on every move", "Free naira withdrawals"];


// The app's real deposit tracker states.
const SALE_STAGES = [
  { key: "detected", label: "Payment detected" },
  { key: "validating", label: "Validating" },
  { key: "credited", label: "Credited" },
] as const;
const SALE_STEP_MS = 1300;

// Where each naira coin flies when the sale is credited (offsets from the badge).
const BURST = [
  { x: -150, y: -70, r: -40, d: 0 },
  { x: -110, y: -115, r: 25, d: 40 },
  { x: -60, y: -130, r: -15, d: 80 },
  { x: -15, y: -110, r: 45, d: 20 },
  { x: 25, y: -85, r: -30, d: 60 },
  { x: -175, y: -30, r: 20, d: 100 },
  { x: 40, y: -45, r: -50, d: 120 },
  { x: -85, y: -60, r: 60, d: 140 },
];

// A finished sale. The first time it scrolls into view it plays through the
// tracker once, then stays as a fixed receipt. Pre-renders as credited.
function SaleTile() {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(2);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !document.documentElement.classList.contains("motion")) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      setStage(0);
      timers.push(setTimeout(() => setStage(1), SALE_STEP_MS));
      timers.push(
        setTimeout(() => {
          setStage(2);
          setBurst(true);
        }, SALE_STEP_MS * 2),
      );
      timers.push(setTimeout(() => setBurst(false), SALE_STEP_MS * 2 + 1600));
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const { key, label } = SALE_STAGES[stage];
  const credited = key === "credited";

  return (
    <div ref={ref} className={`${styles.tile} ${styles.tileLime} ${styles.sale}`}>
      <span className={styles.tileTag}>
        <BtcIcon size={18} /> Sell · BTC
      </span>
      <p className={styles.saleRoute}>
        BTC <ArrowRightIcon width={26} height={26} /> NGN
      </p>
      <div className={styles.saleFoot}>
        <span className={credited ? "" : styles.salePending}>
          <small>{credited ? "You received" : "You'll receive"} · 0.004 BTC</small>
          <RollingNumber value={credited ? "₦432,180" : "₦000,000"} />
        </span>
        <span key={key} className={`${styles.saleDone} ${styles[key]}`} aria-live="polite">
          {credited ? <CheckCircleIcon width={16} height={16} /> : <i className={styles.stageDot} />}
          {label}
          {burst && (
            <span className={styles.burst} aria-hidden="true">
              {BURST.map((coin, i) => (
                <i key={i} style={{ "--x": `${coin.x}px`, "--y": `${coin.y}px`, "--r": `${coin.r}deg`, "--d": `${coin.d}ms` } as CSSProperties}>
                  ₦
                </i>
              ))}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

const RATE_COINS = COINS.filter((coin) => ["bitcoin", "tether", "ethereum"].includes(coin.id));
const RATE_CYCLE_MS = 4000;

// The live element of the hero: one coin at a time, cycling, with its 7-day
// chart across the tile. Pauses on hover and when motion is reduced.
function RateTile() {
  const { coins } = useMarketTicker();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !document.documentElement.classList.contains("motion")) return;
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

      <div className={styles.rateBody}>
        <span className={styles.rateLabel}>1 {coin.symbol} to naira</span>
        {live ? (
          <p className={styles.rateValue}>
            <RollingNumber value={`₦${formatNgn(live.price)}`} />
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

// The app's own screens, telling the story: wallet, deposit address, credited.
const PHONE_SCREENS = [
  { src: "/screens/home.png", alt: "Pyker home screen with wallet balance and quick actions" },
  { src: "/screens/sell-address.png", alt: "Pyker deposit address screen with a QR code and live rates" },
  { src: "/screens/sell-success.png", alt: "Pyker sale tracker showing a Bitcoin sale credited" },
];
const PHONE_SCREEN_MS = 3800;

function PhoneTile() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !document.documentElement.classList.contains("motion")) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % PHONE_SCREENS.length), PHONE_SCREEN_MS);
    return () => clearInterval(timer);
  }, [visible]);

  return (
    <div ref={ref} className={`${styles.tile} ${styles.tilePhone}`}>
      <span className={styles.phoneTag}>One app for crypto and dollars</span>
      <Phone screens={PHONE_SCREENS} active={active} className={styles.phone} eager />
    </div>
  );
}

// The card leans towards the pointer, with a sheen that follows it.
function CardTile() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (event.pointerType !== "mouse" || !node || !document.documentElement.classList.contains("motion")) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--ry", `${(x * 18).toFixed(1)}deg`);
    node.style.setProperty("--rx", `${(-y * 14).toFixed(1)}deg`);
    node.style.setProperty("--sheen", `${((x + 0.5) * 100).toFixed(0)}%`);
  }

  function handleLeave() {
    ref.current?.style.removeProperty("--ry");
    ref.current?.style.removeProperty("--rx");
    ref.current?.style.removeProperty("--sheen");
  }

  return (
    <div
      ref={ref}
      className={`${styles.tile} ${styles.tileViolet} ${styles.card}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <p className={styles.tileTitle}>Spend in dollars</p>
      <span className={styles.cardNote}>Visa or Mastercard, funded in naira</span>
      <div className={styles.cardArt}>
        <VirtualCard color="black" network="visa" />
        <span className={styles.sheen} aria-hidden="true" />
      </div>
    </div>
  );
}

function BentoVisual() {
  return (
    <div className={styles.bento}>
      {/* Left column */}
      <SaleTile />

      <RateTile />

      {/* Centre: the app */}
      <PhoneTile />

      {/* Right column */}
      <CardTile />

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
