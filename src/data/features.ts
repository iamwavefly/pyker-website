// The single place to manage Pyker's features on the website. Flipping a
// status here updates its page, badges, nav and footer labels everywhere.
export type FeatureStatus = "live" | "coming-soon";

export type FeatureKey = "sellCrypto" | "rates" | "virtualCard" | "giftCards" | "bills";

export type Feature = {
  label: string;
  path: string;
  status: FeatureStatus;
  summary: string;
};

export const FEATURES: Record<FeatureKey, Feature> = {
  sellCrypto: {
    label: "Sell crypto",
    path: "/sell-crypto",
    status: "live",
    summary: "Sell BTC, USDT, ETH and more for naira or dollars.",
  },
  rates: {
    label: "Crypto rates",
    path: "/rates",
    status: "live",
    summary: "Live crypto to naira market prices, updated every minute.",
  },
  virtualCard: {
    label: "Virtual dollar card",
    path: "/virtual-dollar-card",
    status: "live",
    summary: "A USD Visa or Mastercard card for paying online.",
  },
  giftCards: {
    label: "Sell gift cards",
    path: "/sell-gift-cards",
    status: "coming-soon",
    summary: "Turn unused gift cards into naira, straight to your wallet.",
  },
  bills: {
    label: "Pay bills",
    path: "/pay-bills",
    status: "coming-soon",
    summary: "Airtime, data, electricity and cable TV from your naira balance.",
  },
};

export function isLive(key: FeatureKey) {
  return FEATURES[key].status === "live";
}
