import type { ReactNode } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import AccountDeletionPage from "./pages/AccountDeletionPage";
import SellCryptoPage from "./pages/SellCryptoPage";
import SellCoinPage from "./pages/SellCoinPage";
import CoinRatePage from "./pages/CoinRatePage";
import RatesPage from "./pages/RatesPage";
import VirtualCardPage from "./pages/VirtualCardPage";
import PayForPage from "./pages/PayForPage";
import PayBillsPage from "./pages/PayBillsPage";
import SellGiftCardsPage from "./pages/SellGiftCardsPage";
import { GIFT_CARDS } from "./content/giftCards";
import NotFoundPage from "./pages/NotFoundPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import { BLOG_PATH, POSTS, postPath } from "./content/blog";
import AlternativesPage from "./pages/AlternativesPage";
import AlternativePage from "./pages/AlternativePage";
import { ALTERNATIVES, ALTERNATIVES_FAQ, ALTERNATIVES_PATH, alternativePath } from "./content/alternatives";
import { COINS, ratePath, sellPath, type Coin } from "./data/coins";
import { buildTicker, rateFor } from "./hooks/useMarketTicker";
import { FEATURES } from "./data/features";
import { HOME, HOME_FAQ } from "./content/home";
import { SELL_HUB, sellCoinDescription, sellCoinFaq, sellCoinTitle } from "./content/sell";
import { CALCULATOR, RATES } from "./content/rates";
import CryptoCalculatorPage from "./pages/CryptoCalculatorPage";
import { coinRateDescription, coinRateFaq, coinRateTitle } from "./content/coinRates";
import { CARD } from "./content/card";
import { SERVICES, serviceFaq, servicePath } from "./content/payFor";
import { BILLS } from "./content/bills";
import { BILL_KINDS, BILL_PROVIDERS, billProviderPath } from "./content/billProviders";
import BillProviderPage from "./pages/BillProviderPage";
import { SUPPORT_FAQ } from "./content/support";
import { shareImagePath, type ShareSpec } from "./seo/shareSpec";
import { MERCHANT_LOGOS } from "./data/merchantLogos";
import { appSchema, websiteSchema, articleSchema, breadcrumbSchema, faqSchema, type PageMeta, type SitemapEntry } from "./seo/meta";

export type AppRoute = {
  /** "/" for home, "*" for the 404 page. */
  path: string;
  element: ReactNode;
  meta: PageMeta;
  /** Omit to leave the page out of the sitemap. */
  sitemap?: Omit<SitemapEntry, "path">;
  /** The page's own share image. Omit to use the site-wide one. */
  share?: ShareSpec;
  /** A rate page: its title and description carry today's rate. */
  rateCoin?: Coin;
};

const home = { name: "Home", path: "/" };

/** A post's share image follows its cover: a card, one coin's rate, or several coins. */
function postShareVisual(post: (typeof POSTS)[number]): ShareSpec["visual"] {
  const { cover } = post;
  if (cover.kind === "card") return { kind: "card", color: cover.color, network: cover.network };
  if (cover.kind === "coins" && cover.ids.length === 1) return { kind: "rate", coinId: cover.ids[0] };
  if (cover.kind === "coins") return { kind: "coins", ids: cover.ids };
  if (post.tags.includes("card")) return { kind: "card", color: "indigo", network: "visa" };
  if (post.tags.includes("bills")) return { kind: "bills" };
  return { kind: "coins" };
}

const PAGES: AppRoute[] = [
  {
    path: "/",
    element: <HomePage />,
    meta: { ...HOME, path: "/", jsonLd: [websiteSchema, appSchema, faqSchema(HOME_FAQ)] },
    sitemap: { priority: 1, changefreq: "weekly", live: true },
  },
  {
    path: FEATURES.sellCrypto.path,
    element: <SellCryptoPage />,
    meta: {
      title: SELL_HUB.title,
      description: SELL_HUB.description,
      path: FEATURES.sellCrypto.path,
      jsonLd: [
        breadcrumbSchema([home, { name: "Sell crypto", path: FEATURES.sellCrypto.path }]),
        faqSchema(SELL_HUB.faq),
      ],
    },
    sitemap: { priority: 0.9, changefreq: "weekly", live: true },
    share: {
      eyebrow: "Sell crypto",
      title: "Sell crypto for naira in minutes",
      accent: "naira",
      subtitle: "BTC, USDT, ETH and more, paid to your Pyker wallet.",
      visual: { kind: "coins" },
    },
  },
  ...COINS.map(
    (coin): AppRoute => ({
      path: sellPath(coin),
      element: <SellCoinPage coin={coin} />,
      meta: {
        title: sellCoinTitle(coin),
        description: sellCoinDescription(coin),
        path: sellPath(coin),
        jsonLd: [
          breadcrumbSchema([
            home,
            { name: "Sell crypto", path: FEATURES.sellCrypto.path },
            { name: coin.displayName, path: sellPath(coin) },
          ]),
          faqSchema(sellCoinFaq(coin)),
        ],
      },
      sitemap: { priority: 0.9, changefreq: "daily", live: true },
      share: {
        eyebrow: `Sell ${coin.symbol}`,
        title: `Sell ${coin.displayName} for naira`,
        accent: "naira",
        subtitle: "See your payout before you send.",
        visual: { kind: "rate", coinId: coin.id },
      },
    }),
  ),
  {
    path: CALCULATOR.path,
    element: <CryptoCalculatorPage />,
    meta: {
      title: CALCULATOR.title,
      description: CALCULATOR.description,
      path: CALCULATOR.path,
      jsonLd: [
        breadcrumbSchema([
          home,
          { name: "Crypto rates", path: FEATURES.rates.path },
          { name: "Calculator", path: CALCULATOR.path },
        ]),
        faqSchema(CALCULATOR.faq),
      ],
    },
    sitemap: { priority: 0.9, changefreq: "daily", live: true },
    share: {
      eyebrow: "Calculator",
      title: "Crypto to naira calculator",
      accent: "calculator",
      subtitle: "Any amount of BTC, USDT, ETH and more, in naira today.",
      visual: { kind: "coins" },
    },
  },
  {
    path: FEATURES.rates.path,
    element: <RatesPage />,
    meta: {
      title: RATES.title,
      description: RATES.description,
      path: FEATURES.rates.path,
      jsonLd: [breadcrumbSchema([home, { name: "Crypto rates", path: FEATURES.rates.path }]), faqSchema(RATES.faq)],
    },
    sitemap: { priority: 0.9, changefreq: "daily", live: true },
    share: {
      eyebrow: "Rates today",
      title: "Crypto to naira rates today",
      accent: "naira",
      subtitle: "Pyker's own rates for BTC, USDT, ETH and more.",
      visual: { kind: "coins" },
    },
  },
  ...COINS.map(
    (coin): AppRoute => ({
      path: ratePath(coin),
      element: <CoinRatePage coin={coin} />,
      rateCoin: coin,
      meta: {
        title: coinRateTitle(coin),
        description: coinRateDescription(coin),
        path: ratePath(coin),
        jsonLd: [
          breadcrumbSchema([
            home,
            { name: "Crypto rates", path: FEATURES.rates.path },
            { name: `${coin.displayName} to naira`, path: ratePath(coin) },
          ]),
          faqSchema(coinRateFaq(coin)),
        ],
      },
      sitemap: { priority: 0.9, changefreq: "daily", live: true },
      share: {
        eyebrow: "Rate today",
        title: `${coin.displayName} to naira rate today`,
        accent: "today",
        visual: { kind: "rate", coinId: coin.id },
      },
    }),
  ),
  {
    path: FEATURES.virtualCard.path,
    element: <VirtualCardPage />,
    meta: {
      title: CARD.title,
      description: CARD.description,
      path: FEATURES.virtualCard.path,
      jsonLd: [
        breadcrumbSchema([home, { name: "Virtual dollar card", path: FEATURES.virtualCard.path }]),
        faqSchema(CARD.faq),
      ],
    },
    sitemap: { priority: 0.9, changefreq: "weekly" },
    share: {
      eyebrow: "Virtual dollar card",
      title: "Pay online in dollars from Nigeria",
      accent: "dollars",
      subtitle: "A USD Visa or Mastercard, funded from your naira wallet.",
      visual: { kind: "card", color: "indigo", network: "visa" },
    },
  },
  ...SERVICES.map(
    (service): AppRoute => ({
      path: servicePath(service),
      element: <PayForPage service={service} />,
      meta: {
        title: `${service.metaTitle} | Pyker`,
        description: service.description,
        path: servicePath(service),
        jsonLd: [
          articleSchema({
            title: service.metaTitle,
            description: service.description,
            path: servicePath(service),
            published: service.updated,
            updated: service.updated,
            image: shareImagePath(servicePath(service)),
          }),
          breadcrumbSchema([
            home,
            { name: "Virtual dollar card", path: FEATURES.virtualCard.path },
            { name: service.name, path: servicePath(service) },
          ]),
          faqSchema(serviceFaq(service)),
        ],
      },
      sitemap: { priority: 0.8, changefreq: "monthly", lastmod: service.updated },
      share: {
        eyebrow: "Step-by-step guide",
        title: `How to pay for ${service.name} in Nigeria`,
        accent: service.name,
        visual: {
          kind: "card",
          ...service.card,
          merchant: MERCHANT_LOGOS[service.name] ? service.name : undefined,
        },
      },
    }),
  ),
  {
    path: FEATURES.giftCards.path,
    element: <SellGiftCardsPage />,
    meta: {
      title: GIFT_CARDS.title,
      description: GIFT_CARDS.description,
      path: FEATURES.giftCards.path,
      jsonLd: [
        breadcrumbSchema([home, { name: "Sell gift cards", path: FEATURES.giftCards.path }]),
        faqSchema(GIFT_CARDS.faq),
      ],
    },
    sitemap: { priority: 0.6, changefreq: "monthly" },
  },
  {
    path: FEATURES.bills.path,
    element: <PayBillsPage />,
    meta: {
      title: BILLS.title,
      description: BILLS.description,
      path: FEATURES.bills.path,
      jsonLd: [breadcrumbSchema([home, { name: "Pay bills", path: FEATURES.bills.path }]), faqSchema(BILLS.faq)],
    },
    sitemap: { priority: 0.9, changefreq: "monthly", lastmod: "2026-11-10" },
    share: {
      eyebrow: "Bill payments",
      title: "Pay bills and get cashback",
      accent: "cashback",
      subtitle: "Airtime, data, light and TV from your naira wallet.",
      visual: { kind: "bills" },
    },
  },
  ...BILL_PROVIDERS.map(
    (provider): AppRoute => ({
      path: billProviderPath(provider),
      element: <BillProviderPage provider={provider} />,
      meta: {
        title: provider.metaTitle,
        description: provider.description,
        path: billProviderPath(provider),
        jsonLd: [
          breadcrumbSchema([
            home,
            { name: "Pay bills", path: FEATURES.bills.path },
            { name: provider.name, path: billProviderPath(provider) },
          ]),
          faqSchema(provider.faq),
        ],
      },
      sitemap: { priority: 0.8, changefreq: "monthly", lastmod: "2026-11-11" },
      share: {
        eyebrow: BILL_KINDS[provider.kind].label,
        title: provider.h1.charAt(0).toUpperCase() + provider.h1.slice(1),
        accent: provider.accent,
        subtitle: "Pay in seconds from your Pyker wallet, with cashback.",
        visual: { kind: "bills" },
      },
    }),
  ),
  {
    path: BLOG_PATH,
    element: <BlogIndexPage />,
    meta: {
      title: "Pyker Blog: Crypto & Online Payment Guides for Nigerians",
      description:
        "Plain-English guides on selling crypto for naira, using a virtual dollar card for online payments, and staying safe in Nigeria.",
      path: BLOG_PATH,
      jsonLd: [breadcrumbSchema([home, { name: "Blog", path: BLOG_PATH }])],
    },
    sitemap: { priority: 0.7, changefreq: "weekly", lastmod: POSTS.map((post) => post.updated).sort().at(-1) },
    share: {
      eyebrow: "Pyker blog",
      title: "Crypto and dollar card guides for Nigerians",
      accent: "guides",
      visual: { kind: "coins" },
    },
  },
  ...POSTS.map(
    (post): AppRoute => ({
      path: postPath(post),
      element: <BlogPostPage post={post} />,
      meta: {
        title: post.metaTitle,
        description: post.description,
        path: postPath(post),
        jsonLd: [
          articleSchema({ ...post, path: postPath(post), image: shareImagePath(postPath(post)) }),
          breadcrumbSchema([home, { name: "Blog", path: BLOG_PATH }, { name: post.title, path: postPath(post) }]),
          faqSchema(post.faq),
        ],
      },
      sitemap: { priority: 0.7, changefreq: "monthly", lastmod: post.updated },
      share: {
        eyebrow: post.category,
        title: post.title,
        visual: postShareVisual(post),
      },
    }),
  ),
  {
    path: ALTERNATIVES_PATH,
    element: <AlternativesPage />,
    meta: {
      title: "Crypto to Naira Alternatives: Binance, Paxful & More | Pyker",
      description:
        "Binance dropped naira, Paxful shut down and Quidax ended P2P. Compare alternatives and sell crypto for naira instantly with Pyker.",
      path: ALTERNATIVES_PATH,
      jsonLd: [breadcrumbSchema([home, { name: "Alternatives", path: ALTERNATIVES_PATH }]), faqSchema(ALTERNATIVES_FAQ)],
    },
    sitemap: { priority: 0.7, changefreq: "monthly" },
    share: {
      eyebrow: "Alternatives",
      title: "Where to sell crypto for naira now",
      accent: "naira",
      subtitle: "After Binance, Paxful and Quidax P2P.",
      visual: { kind: "coins" },
    },
  },
  ...ALTERNATIVES.map(
    (alt): AppRoute => ({
      path: alternativePath(alt),
      element: <AlternativePage alternative={alt} />,
      meta: {
        title: alt.metaTitle,
        description: alt.description,
        path: alternativePath(alt),
        jsonLd: [
          breadcrumbSchema([
            home,
            { name: "Alternatives", path: ALTERNATIVES_PATH },
            { name: `${alt.name} alternative`, path: alternativePath(alt) },
          ]),
          faqSchema(alt.faq),
        ],
      },
      sitemap: { priority: 0.7, changefreq: "monthly" },
      share: {
        eyebrow: "Alternatives",
        title: `The ${alt.name} alternative for naira`,
        accent: "naira",
        visual: { kind: "coins" },
      },
    }),
  ),
  {
    path: "/about",
    element: <AboutPage />,
    meta: {
      title: "About Pyker: Making Crypto Useful in Nigeria",
      description:
        "Pyker makes crypto practical for everyday life in Nigeria: sell crypto for naira in minutes and spend online with a virtual dollar card.",
      path: "/about",
    },
    sitemap: { priority: 0.6, changefreq: "monthly" },
  },
  {
    path: "/contact",
    element: <ContactPage />,
    meta: {
      title: "Contact Pyker Support: Help With Crypto & Cards",
      description: "Get help with your Pyker account, crypto sales or virtual dollar card. Email support@usepyker.com.",
      path: "/contact",
      jsonLd: [faqSchema(SUPPORT_FAQ)],
    },
    sitemap: { priority: 0.5, changefreq: "monthly" },
  },
  {
    path: "/terms",
    element: <TermsPage />,
    meta: {
      title: "Terms of Service | Pyker Digital Services Ltd",
      description:
        "The terms that govern your use of Pyker, including selling crypto, your wallets and the Pyker virtual dollar card.",
      path: "/terms",
    },
    sitemap: { priority: 0.3, changefreq: "yearly" },
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
    meta: {
      title: "Privacy Policy | Pyker Digital Services Ltd",
      description: "How Pyker collects, uses and protects your personal information, including identity and BVN details, and your rights.",
      path: "/privacy",
    },
    sitemap: { priority: 0.3, changefreq: "yearly" },
  },
  {
    path: "/delete-account",
    element: <AccountDeletionPage />,
    meta: {
      title: "Delete Your Pyker Account: How It Works",
      description: "How to request deletion of your Pyker account and what happens to your data.",
      path: "/delete-account",
    },
    sitemap: { priority: 0.3, changefreq: "yearly" },
  },
  {
    path: "*",
    element: <NotFoundPage />,
    meta: {
      title: "Page Not Found | Pyker",
      description: "The page you're looking for doesn't exist.",
      path: "/404",
      noindex: true,
    },
  },
];

// Every page on the site, in one place. The router, the pre-renderer and the
// sitemap are all generated from this list.
export const ROUTES: AppRoute[] = PAGES.map((route) =>
  route.share ? { ...route, meta: { ...route.meta, image: shareImagePath(route.path) } } : route,
);

/** A route's head tags, with today's rate on rate pages. */
export function metaFor(route: AppRoute): PageMeta {
  const price = route.rateCoin ? rateFor(buildTicker(), route.rateCoin.id)?.price : undefined;
  if (!route.rateCoin || !price) return route.meta;
  return {
    ...route.meta,
    title: coinRateTitle(route.rateCoin, price),
    description: coinRateDescription(route.rateCoin, price),
  };
}

export function findRoute(pathname: string) {
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
  return ROUTES.find((route) => route.path === clean) ?? ROUTES[ROUTES.length - 1];
}

export function sitemapEntries(): SitemapEntry[] {
  return ROUTES.filter((route) => route.sitemap).map((route) => ({ path: route.path, ...route.sitemap! }));
}
