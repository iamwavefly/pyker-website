import type { CardColor, CardNetwork } from "../data/cards";

// What each page's share image shows. The image itself is drawn at build time
// (src/seo/share.tsx), so this file stays light enough for the browser bundle.

export type ShareVisual =
  | { kind: "card"; color: CardColor; network: CardNetwork; merchant?: string }
  | { kind: "rate"; coinId: string }
  | { kind: "coins"; ids?: string[] }
  | { kind: "bills" };

export type ShareSpec = {
  eyebrow: string;
  title: string;
  /** Part of the title to highlight, as it appears in the title. */
  accent?: string;
  subtitle?: string;
  visual: ShareVisual;
};

export function shareImagePath(path: string) {
  return `/share/${path === "/" ? "home" : path.slice(1).replace(/\//g, "--")}.png`;
}
