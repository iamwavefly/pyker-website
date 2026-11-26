// Captures the HTML banners in social/html/ with headless Chrome.
// Usage: node social/render-html.mjs
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const banners = [
  { page: "facebook.html", out: "social/facebook/pyker-facebook-cover.png", width: 1640, height: 924 },
  { page: "x.html", out: "social/x/pyker-x-header.png", width: 1500, height: 500 },
];

for (const { page, out, width, height } of banners) {
  const src = path.join(root, "social/html", page);
  const dest = path.join(root, out);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  execFileSync(chrome, [
    "--headless=new",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    `--window-size=${width},${height}`,
    "--virtual-time-budget=4000",
    "--allow-file-access-from-files",
    `--screenshot=${dest}`,
    `file://${src}`,
  ], { stdio: "ignore" });
  console.log(`wrote ${out}`);
}
