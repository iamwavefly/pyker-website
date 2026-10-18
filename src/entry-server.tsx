import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export { ROUTES, sitemapEntries } from "./routes";
export { headTags, safeJson, sitemapXml } from "./seo/meta";
export { fetchTicker, primeTicker } from "./hooks/useMarketTicker";

/** Renders one page to HTML for the build-time pre-renderer. */
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
