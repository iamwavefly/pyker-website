// Mirrors /mobile/theme/typography.ts — same Mona Sans scale used in the app.
export const fontFamily = {
  regular: "'Mona Sans', sans-serif",
  medium: "'Mona Sans', sans-serif",
  semiBold: "'Mona Sans', sans-serif",
  bold: "'Mona Sans', sans-serif",
  strong: "'Mona Sans', sans-serif",
} as const;

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  strong: 800,
} as const;

export const letterSpacing = {
  tight: "-0.02em",
  normal: "0",
  wide: "0.02em",
  wider: "0.04em",
} as const;

export const lineHeight = {
  tight: 1.2,
  normal: 1.4,
  relaxed: 1.6,
} as const;
