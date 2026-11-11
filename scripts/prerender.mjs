// Renders every route in src/routes.tsx to static HTML after `vite build`, so
// search engines and link previews get real content and the right head tags.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createElement } from "react";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const server = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { render, ROUTES, metaFor, sitemapEntries, headTags, safeJson, sitemapXml, fetchTicker, primeTicker } = server;
const { ShareBackground, ShareImage, shareImagePath, rateFor } = server;

// Bake in today's prices so rate pages are indexed with real numbers. If
// Pyker's rates are down, pages fall back to market prices.
let ticker = null;
try {
  ticker = await fetchTicker(AbortSignal.timeout(10_000));
  console.log(`prerender: market prices ${ticker.coins ? `fetched for ${ticker.coins.length} coins` : "unavailable"}`);
  console.log(`prerender: Pyker rates ${ticker.pyker ? `fetched for ${Object.keys(ticker.pyker.rates).join(", ")}` : "unavailable, falling back to market prices"}`);
} catch (error) {
  // Failing keeps the last good deployment live instead of shipping rate
  // pages with no numbers. Set ALLOW_MISSING_RATES=1 to deploy anyway.
  if (!process.env.ALLOW_MISSING_RATES) {
    console.error(`prerender: prices unavailable (${error.message}); set ALLOW_MISSING_RATES=1 to build without them`);
    process.exit(1);
  }
  console.warn(`prerender: prices unavailable (${error.message}), building without them`);
}
primeTicker(ticker);

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
for (const marker of ["<!--app-head-->", "<!--app-html-->", "<!--app-data-->"]) {
  if (!template.includes(marker)) throw new Error(`index.html is missing ${marker}`);
}
const data = ticker ? `<script>window.__PYKER_TICKER__=${safeJson(ticker)}</script>` : "";

function outputFile(routePath) {
  if (routePath === "/") return "index.html";
  if (routePath === "*") return "404.html";
  return `${routePath.slice(1)}.html`;
}

for (const route of ROUTES) {
  const url = route.path === "*" ? "/404" : route.path;
  const html = template
    .replace("<!--app-head-->", headTags(metaFor(route)))
    .replace("<!--app-html-->", render(url))
    .replace("<!--app-data-->", data);
  const file = path.join(dist, outputFile(route.path));
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html);
  console.log(`prerender: ${url} -> ${path.relative(root, file)}`);
}

// Share images: one 1200x630 PNG per page that has a `share` spec. Rate
// pages show today's rate, so these are redrawn with every build.
const shareDir = path.join(root, "scripts/share");
const fonts = [
  { name: "Mona Sans", data: await fs.readFile(path.join(shareDir, "mona-sans-500.ttf")), weight: 500 },
  { name: "Clash Display", data: await fs.readFile(path.join(shareDir, "clash-display-600.ttf")), weight: 600 },
];
// Satori turns text into paths, so resvg needn't scan system fonts (~1s each).
const toPng = async (element) =>
  new Resvg(await satori(element, { width: 1200, height: 630, fonts }), { font: { loadSystemFonts: false } })
    .render()
    .asPng();
const dataUri = async (file, type) =>
  `data:${type};base64,${(await fs.readFile(path.join(root, file))).toString("base64")}`;
const assets = {
  background: `data:image/png;base64,${(await toPng(createElement(ShareBackground))).toString("base64")}`,
  logo: await dataUri("public/art/pyker-logo.png", "image/png"),
  cardLogo: await dataUri("public/cards/pyker-logo-white.png", "image/png"),
  visa: await dataUri("public/cards/visa.svg", "image/svg+xml"),
  mastercard: await dataUri("public/cards/mastercard.svg", "image/svg+xml"),
  cards: Object.fromEntries(
    await Promise.all(
      ["indigo", "pink", "blue", "black", "brown"].map(async (color) => [
        color,
        await dataUri(`scripts/share/card-${color}.png`, "image/png"),
      ]),
    ),
  ),
};
const shareDate = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Africa/Lagos" });
const tickerState = ticker ?? { coins: null, status: "error", updatedAt: null, pyker: null };

let shareCount = 0;
for (const route of ROUTES) {
  if (!route.share) continue;
  const { visual } = route.share;
  const rate = visual.kind === "rate" ? rateFor(tickerState, visual.coinId) : null;
  const png = await toPng(createElement(ShareImage, { spec: route.share, assets, rate, date: shareDate }));
  const file = path.join(dist, shareImagePath(route.path).slice(1));
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, png);
  shareCount++;
}
console.log(`prerender: ${shareCount} share images`);

const buildDate = new Date().toISOString().slice(0, 10);
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemapXml(sitemapEntries(), buildDate));
console.log(`prerender: sitemap.xml with ${sitemapEntries().length} URLs`);

await fs.rm(ssrDir, { recursive: true, force: true });
