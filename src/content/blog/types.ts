import type { FaqItem } from "../../seo/meta";
import type { CardColor, CardNetwork } from "../../data/cards";

// Inline text supports [link text](/path) and **bold**.
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "cta"; title: string; text: string; to: string; label: string };

export type CoverTone = "lilac" | "lime" | "peach" | "ink";

/** Covers are built from brand assets, so every post gets its own look. */
export type PostCover =
  | { kind: "art"; src: string }
  | { kind: "card"; color: CardColor; network: CardNetwork; tone: CoverTone }
  | { kind: "coins"; ids: string[]; tone: CoverTone }
  | { kind: "shield"; tone: CoverTone };

export type PostTag = "card" | "sell" | "bitcoin" | "usdt" | "safety";

export type Post = {
  slug: string;
  /** On-page H1. */
  title: string;
  /** <title> tag, under ~60 characters. */
  metaTitle: string;
  /** Meta description, under ~160 characters. */
  description: string;
  excerpt: string;
  category: string;
  tags: PostTag[];
  /** ISO dates. */
  published: string;
  updated: string;
  cover: PostCover;
  body: Block[];
  faq: FaqItem[];
};
