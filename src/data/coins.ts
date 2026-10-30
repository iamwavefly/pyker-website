import { BtcIcon, DogeIcon, EthIcon, SolIcon, UsdcIcon, UsdtIcon } from "../components/icons/crypto";

export type Coin = {
  /** CoinGecko id, used for the public market-price widgets. */
  id: string;
  symbol: string;
  name: string;
  /** How people search for it in Nigeria, e.g. "USDT" rather than "Tether". */
  displayName: string;
  /** URL slug for the coin's sell page: /sell-{slug}. */
  slug: string;
  Icon: typeof BtcIcon;
  /** Sent on more than one network (stablecoins), so users must pick one. */
  multiNetwork: boolean;
  intro: string;
  /** Amounts listed on the coin's rate page, in whole coins. */
  amounts: number[];
};

// Sellable assets confirmed against the backend's Breet integration. Adding a
// coin here creates its sell page, rate page, rate row, footer links and
// sitemap entries.
export const COINS: Coin[] = [
  {
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    displayName: "Bitcoin",
    slug: "bitcoin",
    Icon: BtcIcon,
    multiNetwork: false,
    intro:
      "Turn your BTC into naira you can spend. Get your own Bitcoin deposit address in the Pyker app, send from any wallet or exchange, and follow it all the way to your wallet.",
    amounts: [0.0001, 0.0005, 0.001, 0.005, 0.01, 0.05, 0.1, 0.5, 1],
  },
  {
    id: "tether",
    symbol: "USDT",
    name: "Tether",
    displayName: "USDT",
    slug: "usdt",
    Icon: UsdtIcon,
    multiNetwork: true,
    intro:
      "Convert USDT to naira straight from your wallet or exchange. Choose the network you're sending on, get your address, and get paid to your NGN or USD wallet.",
    amounts: [1, 5, 10, 20, 50, 100, 200, 500, 1000],
  },
  {
    id: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    displayName: "Ethereum",
    slug: "ethereum",
    Icon: EthIcon,
    multiNetwork: false,
    intro:
      "Sell ETH for naira without P2P trades to wait on. Send to your own Pyker address, see the live rate first, and get paid as soon as the network confirms.",
    amounts: [0.001, 0.005, 0.01, 0.05, 0.1, 0.25, 0.5, 1, 2],
  },
  {
    id: "usd-coin",
    symbol: "USDC",
    name: "USD Coin",
    displayName: "USDC",
    slug: "usdc",
    Icon: UsdcIcon,
    multiNetwork: true,
    intro:
      "Cash out USDC to naira or keep it in dollars. Pick the network you're sending from, send to your Pyker address, and your wallet is credited in minutes.",
    amounts: [1, 5, 10, 20, 50, 100, 200, 500, 1000],
  },
  {
    id: "solana",
    symbol: "SOL",
    name: "Solana",
    displayName: "Solana",
    slug: "solana",
    Icon: SolIcon,
    multiNetwork: false,
    intro:
      "Sell SOL for naira in a few taps. Get your Solana deposit address, send from any wallet, and watch your payout land in your Pyker wallet.",
    amounts: [0.1, 0.25, 0.5, 1, 2, 5, 10, 25, 50],
  },
  {
    id: "dogecoin",
    symbol: "DOGE",
    name: "Dogecoin",
    displayName: "Dogecoin",
    slug: "dogecoin",
    Icon: DogeIcon,
    multiNetwork: false,
    intro:
      "Cash out your DOGE to naira or dollars. Send it to your own Pyker address and get paid as soon as the Dogecoin network confirms.",
    amounts: [10, 50, 100, 250, 500, 1000, 2500, 5000, 10000],
  },
];

export type CoinId = string;

export const COIN_IDS = COINS.map((coin) => coin.id);

export function sellPath(coin: Coin) {
  return `/sell-${coin.slug}`;
}

/** The coin's rate page: /{slug}-to-naira. */
export function ratePath(coin: Coin) {
  return `/${coin.slug}-to-naira`;
}

export function formatNgn(value: number) {
  return new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: value < 100 ? 2 : 0,
  }).format(value);
}

/** Coin amounts like 0.0005 or 1,000, without trailing zeros. */
export function formatCoin(value: number, maxDecimals = 8) {
  return new Intl.NumberFormat("en-NG", { maximumFractionDigits: maxDecimals }).format(value);
}

/** Enough decimals to show a naira amount's worth of a coin, e.g. 7 for BTC, 2 for USDT. */
export function coinDecimals(priceNgn: number) {
  return Math.min(8, Math.max(2, Math.ceil(Math.log10(priceNgn)) - 2));
}
