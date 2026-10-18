import { PLAY_STORE_URL } from "../data/links";

export const SITE_URL = "https://usepyker.com";
export const SITE_NAME = "Pyker";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

type JsonLd = Record<string, unknown>;

export type PageMeta = {
  title: string;
  description: string;
  /** Path without trailing slash, e.g. "/sell-bitcoin". */
  path: string;
  noindex?: boolean;
  jsonLd?: JsonLd[];
};

export type FaqItem = { question: string; answer: string };

export function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function faqSchema(items: FaqItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated: string;
  image: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: absoluteUrl(article.path),
    datePublished: article.published,
    dateModified: article.updated,
    image: absoluteUrl(article.image),
    inLanguage: "en-NG",
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/pyker-icon.png` },
    },
  };
}

export const appSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: SITE_NAME,
  operatingSystem: "ANDROID",
  applicationCategory: "FinanceApplication",
  installUrl: PLAY_STORE_URL,
  offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
};

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// JSON inside <script> must not be able to close the tag early.
export function safeJson(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

/** Head tags for a pre-rendered page. Kept in step with applyMeta below. */
export function headTags(meta: PageMeta) {
  const url = absoluteUrl(meta.path);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    meta.noindex ? `<meta name="robots" content="noindex" />` : "",
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    ...(meta.jsonLd ?? []).map(
      (data) => `<script type="application/ld+json" data-page-jsonld>${safeJson(data)}</script>`,
    ),
  ];
  return tags.filter(Boolean).join("\n    ");
}

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let element = document.head.querySelector<HTMLElement>(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element.setAttribute(attr, value);
}

function metaTag(key: "name" | "property", name: string) {
  return () => {
    const element = document.createElement("meta");
    element.setAttribute(key, name);
    return element;
  };
}

/** Keeps the head in step with the current route during client navigation. */
export function applyMeta(meta: PageMeta) {
  const url = absoluteUrl(meta.path);
  document.title = meta.title;
  upsert('meta[name="description"]', metaTag("name", "description"), "content", meta.description);
  upsert(
    'link[rel="canonical"]',
    () => {
      const link = document.createElement("link");
      link.rel = "canonical";
      return link;
    },
    "href",
    url,
  );
  upsert('meta[property="og:title"]', metaTag("property", "og:title"), "content", meta.title);
  upsert('meta[property="og:description"]', metaTag("property", "og:description"), "content", meta.description);
  upsert('meta[property="og:url"]', metaTag("property", "og:url"), "content", url);
  upsert('meta[name="twitter:title"]', metaTag("name", "twitter:title"), "content", meta.title);
  upsert('meta[name="twitter:description"]', metaTag("name", "twitter:description"), "content", meta.description);

  const robots = document.head.querySelector('meta[name="robots"]');
  if (meta.noindex && !robots) document.head.appendChild(metaTag("name", "robots")()).setAttribute("content", "noindex");
  if (!meta.noindex && robots) robots.remove();

  document.head.querySelectorAll("script[data-page-jsonld]").forEach((script) => script.remove());
  for (const data of meta.jsonLd ?? []) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageJsonld = "";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}

export type SitemapEntry = { path: string; priority: number; changefreq: "daily" | "weekly" | "monthly" | "yearly" };

export function sitemapXml(entries: SitemapEntry[], lastmod: string) {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${absoluteUrl(entry.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
