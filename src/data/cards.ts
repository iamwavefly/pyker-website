// Mirrors mobile/components/cards: the same five colours, swatches and card art.
export const CARD_COLORS = {
  indigo: { label: "Indigo", swatch: "#6b4eff", art: "/cards/indigo.webp" },
  pink: { label: "Pink", swatch: "#d6217b", art: "/cards/pink.webp" },
  blue: { label: "Blue", swatch: "#1650c2", art: "/cards/blue.webp" },
  black: { label: "Black", swatch: "#0a0b0c", art: "/cards/black.webp" },
  brown: { label: "Brown", swatch: "#582504", art: "/cards/brown.webp" },
} as const;

export type CardColor = keyof typeof CARD_COLORS;
export type CardNetwork = "visa" | "mastercard";
