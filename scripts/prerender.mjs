// Renders every route in src/routes.tsx to static HTML after `vite build`, so
// search engines and link previews get real content and the right head tags.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const server = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { render, ROUTES, sitemapEntries, headTags, safeJson, sitemapXml, fetchTicker, primeTicker } = server;

// Bake in today's prices so rate pages are indexed with real numbers. If the
// price API is down, pages still build and load prices in the browser.
let ticker = null;
try {
  ticker = await fetchTicker(AbortSignal.timeout(10_000));
  console.log(`prerender: prices fetched for ${ticker.coins.length} coins`);
} catch (error) {
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
    .replace("<!--app-head-->", headTags(route.meta))
    .replace("<!--app-html-->", render(url))
    .replace("<!--app-data-->", data);
  const file = path.join(dist, outputFile(route.path));
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html);
  console.log(`prerender: ${url} -> ${path.relative(root, file)}`);
}

const lastmod = new Date().toISOString().slice(0, 10);
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemapXml(sitemapEntries(), lastmod));
console.log(`prerender: sitemap.xml with ${sitemapEntries().length} URLs`);

await fs.rm(ssrDir, { recursive: true, force: true });
