import type { ComponentType, CSSProperties, ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { COINS, formatNgn } from "../data/coins";
import { MERCHANT_LOGOS } from "../data/merchantLogos";
import { AirtimeIcon, CableTvIcon, DataIcon, ElectricityIcon } from "../components/icons";
import type { CardColor, CardNetwork } from "../data/cards";
import type { CoinRate } from "../hooks/useMarketTicker";
import type { ShareSpec, ShareVisual } from "./shareSpec";

// Share images (og:image) for each page, drawn at build time by satori in
// scripts/prerender.mjs. Satori supports a subset of CSS: flexbox only, and
// every element with more than one child needs display: flex.

/** Images and other files the build loads from disk, as data URIs. */
export type ShareAssets = {
  /** ShareBackground, drawn once per build. */
  background: string;
  logo: string;
  cardLogo: string;
  visa: string;
  mastercard: string;
  cards: Record<CardColor, string>;
};

const INK = "#0c0a1a";
const GREY = "#5f5c72";
const PRIMARY = "#6b4eff";

function svgUri(markup: string) {
  return `data:image/svg+xml;base64,${btoa(markup)}`;
}

function coinIcon(id: string, size: number) {
  const coin = COINS.find((c) => c.id === id);
  if (!coin) return null;
  let markup = renderToStaticMarkup(<coin.Icon size={size} />);
  // Satori needs the namespace to read an SVG as an image.
  if (!markup.includes("xmlns=")) markup = markup.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
  return <img src={svgUri(markup)} width={size} height={size} />;
}

function merchantIcon(name: string, size: number) {
  const logo = MERCHANT_LOGOS[name];
  if (!logo) return null;
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${logo.color}"><path d="${logo.path}"/></svg>`;
  return <img src={svgUri(markup)} width={size} height={size} />;
}

function uiIcon(Icon: ComponentType<{ width?: number; height?: number }>, size: number) {
  // Solar paints with currentColor and sets the duotone half's opacity
  // through CSS variables, neither of which resvg resolves inside an image.
  const markup = renderToStaticMarkup(<Icon width={size} height={size} />)
    .replace(/style="[^"]*"/g, 'opacity="0.5"')
    .replace(/currentColor/g, PRIMARY)
    .replace(/<svg(?![^>]*xmlns=)/, '<svg xmlns="http://www.w3.org/2000/svg"');
  return <img src={svgUri(markup)} width={size} height={size} />;
}

/** The fonts have no naira sign, so it's drawn: an N with two bars. */
function NairaAmount({ value, size }: { value: number; size: number }) {
  const bar: CSSProperties = {
    position: "absolute",
    left: -size * 0.08,
    right: -size * 0.08,
    height: Math.max(3, size * 0.07),
    background: INK,
  };
  return (
    <div style={{ display: "flex", alignItems: "baseline", fontSize: size }}>
      <div style={{ display: "flex", position: "relative", marginRight: size * 0.06 }}>
        N
        <div style={{ ...bar, top: size * 0.38 }} />
        <div style={{ ...bar, top: size * 0.56 }} />
      </div>
      {formatNgn(value).replace(/^₦/, "")}
    </div>
  );
}

function Card({ color, network, assets, style }: { color: CardColor; network: CardNetwork; assets: ShareAssets; style?: CSSProperties }) {
  const width = 400;
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        width,
        height: (width * 616) / 1080,
        borderRadius: 26,
        overflow: "hidden",
        boxShadow: "0 30px 60px -18px rgba(43, 27, 107, 0.5)",
        ...style,
      }}
    >
      <img src={assets.cards[color]} width={width} height={(width * 616) / 1080} style={{ position: "absolute", top: 0, left: 0 }} />
      <img src={assets.cardLogo} width={width * 0.19} style={{ position: "absolute", top: "10%", left: "6%" }} />
      <img
        src={network === "visa" ? assets.visa : assets.mastercard}
        width={width * (network === "visa" ? 0.13 : 0.11)}
        style={{ position: "absolute", top: "10%", right: "5%" }}
      />
      <div
        style={{
          position: "absolute",
          left: "6%",
          right: "6%",
          bottom: "9%",
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          fontSize: 17,
          letterSpacing: 1,
        }}
      >
        <span>•••• 7908</span>
        <span>12/29</span>
      </div>
    </div>
  );
}

function Badge({ children, size = 128 }: { children: ReactNode; size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: size,
        background: "#fff",
        boxShadow: "0 18px 40px -12px rgba(12, 10, 26, 0.28)",
      }}
    >
      {children}
    </div>
  );
}

function CardVisual({ visual, assets }: { visual: Extract<ShareVisual, { kind: "card" }>; assets: ShareAssets }) {
  const back: CardColor = visual.color === "black" ? "indigo" : "black";
  const merchant = visual.merchant;
  return (
    <div style={{ display: "flex", position: "relative", width: 500, height: 630 }}>
      <Card color={back} network={visual.network} assets={assets} style={{ top: 175, left: 50, transform: "rotate(-14deg)" }} />
      <Card color={visual.color} network={visual.network} assets={assets} style={{ top: 235, left: 40, transform: "rotate(-6deg)" }} />
      {merchant && (
        <div style={{ display: "flex", position: "absolute", left: 0, top: 390 }}>
          <Badge>
            {merchantIcon(merchant, 64) ?? (
              <span style={{ fontFamily: "Clash Display", fontSize: 24, color: INK }}>{merchant}</span>
            )}
          </Badge>
        </div>
      )}
    </div>
  );
}

function RateVisual({ coinId, rate, date }: { coinId: string; rate: CoinRate | null; date: string }) {
  const coin = COINS.find((c) => c.id === coinId)!;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 440,
        padding: "40px 40px 36px",
        borderRadius: 32,
        background: "#fff",
        boxShadow: "0 30px 60px -20px rgba(43, 27, 107, 0.35)",
        transform: "rotate(-3deg)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {coinIcon(coin.id, 64)}
        <span style={{ marginLeft: 18, fontSize: 30, color: INK }}>1 {coin.symbol}</span>
      </div>
      {rate ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", marginTop: 26, fontFamily: "Clash Display", color: INK }}>
            <NairaAmount value={rate.price} size={rate.price >= 1e8 ? 50 : 58} />
          </div>
          <span style={{ marginTop: 14, fontSize: 21, color: GREY }}>
            {rate.source === "pyker" ? "Pyker rate" : "Market rate"} on {date}
          </span>
        </div>
      ) : (
        <span style={{ marginTop: 26, fontSize: 26, color: GREY }}>Live rate in the Pyker app</span>
      )}
    </div>
  );
}

function CoinsVisual({ ids }: { ids: string[] }) {
  // A loose cluster: positions for up to six coins.
  const spots = [
    { x: 150, y: 120, s: 168 },
    { x: 330, y: 230, s: 140 },
    { x: 90, y: 330, s: 130 },
    { x: 270, y: 410, s: 118 },
    { x: 360, y: 80, s: 100 },
    { x: 40, y: 190, s: 96 },
  ];
  return (
    <div style={{ display: "flex", position: "relative", width: 500, height: 630 }}>
      {ids.slice(0, spots.length).map((id, i) => (
        <div key={id} style={{ display: "flex", position: "absolute", left: spots[i].x, top: spots[i].y }}>
          <Badge size={spots[i].s}>{coinIcon(id, Math.round(spots[i].s * 0.62))}</Badge>
        </div>
      ))}
    </div>
  );
}

function BillsVisual() {
  const spots = [
    { Icon: AirtimeIcon, x: 70, y: 120, s: 150 },
    { Icon: ElectricityIcon, x: 260, y: 170, s: 170 },
    { Icon: DataIcon, x: 40, y: 320, s: 140 },
    { Icon: CableTvIcon, x: 220, y: 380, s: 150 },
  ];
  return (
    <div style={{ display: "flex", position: "relative", width: 500, height: 630 }}>
      {spots.map(({ Icon, x, y, s }, i) => (
        <div key={i} style={{ display: "flex", position: "absolute", left: x, top: y }}>
          <Badge size={s}>{uiIcon(Icon, Math.round(s * 0.5))}</Badge>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: 150,
          top: 300,
          padding: "14px 26px",
          borderRadius: 999,
          background: "#d4f55c",
          color: INK,
          fontFamily: "Clash Display",
          fontSize: 32,
          transform: "rotate(-6deg)",
          boxShadow: "0 18px 40px -12px rgba(12, 10, 26, 0.3)",
        }}
      >
        + Cashback
      </div>
    </div>
  );
}

function Title({ title, accent }: { title: string; accent?: string }) {
  const size = title.length <= 30 ? 70 : title.length <= 48 ? 60 : 50;
  const at = accent ? title.indexOf(accent) : -1;
  const parts =
    at >= 0 && accent
      ? [title.slice(0, at), accent, title.slice(at + accent.length)]
      : [title, "", ""];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        fontFamily: "Clash Display",
        fontSize: size,
        lineHeight: 1.06,
        letterSpacing: -1,
        color: INK,
      }}
    >
      {/* Split into words so satori wraps the highlighted part with the rest. */}
      {parts.flatMap((part, p) =>
        part
          .split(" ")
          .filter(Boolean)
          .map((word, i) => (
            <span key={`${p}-${i}`} style={{ marginRight: size * 0.24, color: p === 1 ? PRIMARY : INK }}>
              {word}
            </span>
          )),
      )}
    </div>
  );
}

/**
 * The grid and glows behind every share image. Gradients are slow to
 * rasterise, so the build draws this once and reuses it as an image.
 */
export function ShareBackground() {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: 1200,
        height: 630,
        backgroundColor: "#f7f6fb",
        backgroundImage:
          "linear-gradient(rgba(12, 10, 26, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(12, 10, 26, 0.045) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -260,
          right: -200,
          width: 760,
          height: 760,
          borderRadius: 760,
          backgroundImage: "radial-gradient(circle, rgba(107, 78, 255, 0.22), rgba(107, 78, 255, 0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -260,
          left: -220,
          width: 620,
          height: 620,
          borderRadius: 620,
          backgroundImage: "radial-gradient(circle, rgba(212, 245, 92, 0.4), rgba(212, 245, 92, 0) 70%)",
        }}
      />
    </div>
  );
}

/** The 1200x630 share image for one page. */
export function ShareImage({
  spec,
  assets,
  rate,
  date,
}: {
  spec: ShareSpec;
  assets: ShareAssets;
  rate: CoinRate | null;
  date: string;
}) {
  const { visual } = spec;
  return (
    <div style={{ display: "flex", position: "relative", width: 1200, height: 630, fontFamily: "Mona Sans" }}>
      <img src={assets.background} width={1200} height={630} style={{ position: "absolute", top: 0, left: 0 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute",
          top: 60,
          bottom: 56,
          left: 72,
          width: 640,
        }}
      >
        <img src={assets.logo} width={132} height={(132 * 233) / 674} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <span
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                background: "#eae5ff",
                color: PRIMARY,
                fontSize: 22,
              }}
            >
              {spec.eyebrow}
            </span>
          </div>
          <div style={{ display: "flex", marginTop: 26 }}>
            <Title title={spec.title} accent={spec.accent} />
          </div>
          {spec.subtitle && (
            <span style={{ marginTop: 22, fontSize: 26, lineHeight: 1.35, color: GREY }}>{spec.subtitle}</span>
          )}
        </div>
        <span style={{ fontSize: 22, color: GREY }}>usepyker.com</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 0,
          right: 0,
          width: 500,
          height: 630,
        }}
      >
        {visual.kind === "card" && <CardVisual visual={visual} assets={assets} />}
        {visual.kind === "rate" && <RateVisual coinId={visual.coinId} rate={rate} date={date} />}
        {visual.kind === "bills" && <BillsVisual />}
        {visual.kind === "coins" && (
          <CoinsVisual ids={visual.ids ?? ["bitcoin", "tether", "ethereum", "solana", "usd-coin", "dogecoin"]} />
        )}
      </div>
    </div>
  );
}
