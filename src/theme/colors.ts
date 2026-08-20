// Mirrors /mobile/theme/color.ts. Keep in sync with the app's palette.
export const colors = {
  primary: "#6B4EFF",
  primaryShade: "#EAE5FF",
  active: "#7F66FF",
  dark: "#0C0A1A",
  background: "#F8F9FA",
  green: "#02C076",
  greenShade: "rgba(2, 192, 118, 0.1)",
  red: "#F84960",
  redShade: "rgba(248, 73, 96, 0.1)",
  orange: "#F7931A",
  orangeShade: "rgba(247, 147, 26, 0.1)",
  amberYellow: "#F0B90B",
  yellowShade: "rgba(240, 185, 11, 0.1)",
  skyBlue: "#0084FF",
  skyblueShade: "rgba(0, 132, 255, 0.1)",
  grey07: "#1F1D2F",
  grey06: "#666379",
  grey05: "#848E9C",
  grey03: "#B7BDC6",
  grey02: "#F0F0F0",
  borderColor: "#D6D5DD",
  white: "#FFFFFF",
  black: "#000000",
} as const;

export type ColorToken = keyof typeof colors;
