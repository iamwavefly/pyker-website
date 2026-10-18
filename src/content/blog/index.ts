import type { Block, Post, PostTag } from "./types";
import { payForChatgpt } from "./pay-for-chatgpt-in-nigeria";
import { sellUsdt } from "./sell-usdt-in-nigeria";
import { usdtNetworks } from "./usdt-networks-explained";
import { bitcoinToNaira } from "./convert-bitcoin-to-naira";
import { virtualCardGuide } from "./virtual-dollar-card-guide";
import { avoidScams } from "./avoid-crypto-scams";

export type { Block, Post, PostTag };

// To publish a post, write it in its own file and add it here. Its page,
// blog listing, related links and sitemap entry are generated from this list.
export const POSTS: Post[] = [sellUsdt, payForChatgpt, usdtNetworks, bitcoinToNaira, virtualCardGuide, avoidScams].sort(
  (a, b) => b.published.localeCompare(a.published),
);

export const BLOG_PATH = "/blog";

export function postPath(post: Post) {
  return `${BLOG_PATH}/${post.slug}`;
}

export function postsTagged(tags: PostTag[], exclude?: Post) {
  return POSTS.filter((post) => post !== exclude && post.tags.some((tag) => tags.includes(tag)));
}

/** Strips the inline link/bold syntax for word counts and plain text. */
export function plainText(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");
}

function blockText(block: Block): string {
  switch (block.type) {
    case "ul":
    case "ol":
      return block.items.join(" ");
    case "table":
      return [...block.head, ...block.rows.flat()].join(" ");
    case "tip":
      return `${block.title} ${block.text}`;
    case "cta":
      return "";
    default:
      return block.text;
  }
}

export function readingMinutes(post: Post) {
  const words = post.body.map((block) => plainText(blockText(block))).join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function headingId(text: string) {
  return plainText(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** "18 October 2026", formatted by hand so server and browser agree. */
export function formatPostDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${day} ${months[month - 1]} ${year}`;
}
