import type { ReactNode } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import AccountDeletionPage from "./pages/AccountDeletionPage";
import SellCryptoPage from "./pages/SellCryptoPage";
import SellCoinPage from "./pages/SellCoinPage";
import RatesPage from "./pages/RatesPage";
import VirtualCardPage from "./pages/VirtualCardPage";
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
import { COINS, sellPath } from "./data/coins";
import { FEATURES } from "./data/features";
import { HOME, HOME_FAQ } from "./content/home";
import { SELL_HUB, sellCoinDescription, sellCoinFaq, sellCoinTitle } from "./content/sell";
import { RATES } from "./content/rates";
import { CARD } from "./content/card";
import { BILLS } from "./content/bills";
import { SUPPORT_FAQ } from "./content/support";
import { appSchema, articleSchema, breadcrumbSchema, faqSchema, type PageMeta, type SitemapEntry } from "./seo/meta";

export type AppRoute = {
  /** "/" for home, "*" for the 404 page. */
  path: string;
  element: ReactNode;
  meta: PageMeta;
  /** Omit to leave the page out of the sitemap. */
  sitemap?: Omit<SitemapEntry, "path">;
};

const home = { name: "Home", path: "/" };

// Every page on the site, in one place. The router, the pre-renderer and the
// sitemap are all generated from this list.
export const ROUTES: AppRoute[] = [
  {
    path: "/",
    element: <HomePage />,
    meta: { ...HOME, path: "/", jsonLd: [appSchema, faqSchema(HOME_FAQ)] },
    sitemap: { priority: 1, changefreq: "weekly" },
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
    sitemap: { priority: 0.9, changefreq: "weekly" },
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
      sitemap: { priority: 0.9, changefreq: "daily" },
    }),
  ),
  {
    path: FEATURES.rates.path,
    element: <RatesPage />,
    meta: {
      title: RATES.title,
      description: RATES.description,
      path: FEATURES.rates.path,
      jsonLd: [breadcrumbSchema([home, { name: "Crypto rates", path: FEATURES.rates.path }]), faqSchema(RATES.faq)],
    },
    sitemap: { priority: 0.9, changefreq: "daily" },
  },
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
  },
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
    sitemap: { priority: 0.6, changefreq: "monthly" },
  },
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
    sitemap: { priority: 0.7, changefreq: "weekly" },
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
          articleSchema({ ...post, path: postPath(post), image: post.cover.kind === "art" ? post.cover.src : "/og-image.png" }),
          breadcrumbSchema([home, { name: "Blog", path: BLOG_PATH }, { name: post.title, path: postPath(post) }]),
          faqSchema(post.faq),
        ],
      },
      sitemap: { priority: 0.7, changefreq: "monthly" },
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

export function findRoute(pathname: string) {
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
  return ROUTES.find((route) => route.path === clean) ?? ROUTES[ROUTES.length - 1];
}

export function sitemapEntries(): SitemapEntry[] {
  return ROUTES.filter((route) => route.sitemap).map((route) => ({ path: route.path, ...route.sitemap! }));
}
