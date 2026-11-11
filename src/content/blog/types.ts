import type { FaqItem } from "../../seo/meta";
import type { CardColor, CardNetwork } from "../../data/cards";

// Inline text supports [link text](/path) and **bold**.
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  /** `start` continues the numbering of an earlier list, e.g. after screenshots. */
  | { type: "ol"; items: string[]; start?: number }
  | { type: "tip"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "cta"; title: string; text: string; to: string; label: string }
  /** One or two app screenshots in phone frames, each with a caption. */
  | { type: "screens"; items: { src: string; alt: string; caption: string }[] }
  /** A short "quick answer" box, usually first, for skimmers and featured snippets. */
  | { type: "answer"; text: string }
  /** The live coin-to-naira converter, by coin id. */
  | { type: "converter"; coinId: string }
  /** Type a phone number, see which network its prefix belongs to. */
  | { type: "networkChecker" }
  /** Steps or things to check that the reader can tick off. */
  | { type: "checklist"; title: string; items: string[] }
  /** "Which one are you?": pick an option, see the answer for it. */
  | { type: "picker"; question: string; options: { label: string; result: string }[] };

export type CoverTone = "lilac" | "lime" | "peach" | "ink";

/** Covers are built from brand assets, so every post gets its own look. */
export type PostCover =
  | { kind: "art"; src: string }
  | { kind: "card"; color: CardColor; network: CardNetwork; tone: CoverTone }
  | { kind: "coins"; ids: string[]; tone: CoverTone }
  | { kind: "shield"; tone: CoverTone };

export type PostTag = "card" | "sell" | "bitcoin" | "usdt" | "safety" | "bills" | "dogecoin";

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
