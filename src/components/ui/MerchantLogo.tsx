import { MERCHANT_LOGOS } from "../../data/merchantLogos";

/** A merchant's brand mark in its brand colour, or nothing if we don't have one. */
export default function MerchantLogo({ name, size = 18 }: { name: string; size?: number }) {
  const logo = MERCHANT_LOGOS[name];
  if (!logo) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={logo.color} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d={logo.path} />
    </svg>
  );
}
