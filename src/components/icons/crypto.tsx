import { TokenBTC, TokenETH, TokenUSDT, TokenUSDC, TokenSOL } from "@web3icons/react";

type CryptoIconProps = {
  size?: number;
  className?: string;
};

export function BtcIcon(props: CryptoIconProps) {
  return <TokenBTC variant="branded" {...props} />;
}

export function EthIcon(props: CryptoIconProps) {
  return <TokenETH variant="branded" {...props} />;
}

export function UsdtIcon(props: CryptoIconProps) {
  return <TokenUSDT variant="branded" {...props} />;
}

export function UsdcIcon(props: CryptoIconProps) {
  return <TokenUSDC variant="branded" {...props} />;
}

export function SolIcon(props: CryptoIconProps) {
  return <TokenSOL variant="branded" {...props} />;
}

// Drawn here: the library's DOGE icon is a detailed illustration that added
// over 100 KB to every page.
export function DogeIcon({ size = 24, className }: CryptoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? `web3icons ${className}` : "web3icons"}
    >
      <circle cx="12" cy="12" r="12" fill="#C2A633" />
      <path d="M9 7h2.4a5 5 0 0 1 0 10H9z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <path d="M7 12h5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
