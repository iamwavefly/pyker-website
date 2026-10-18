import { TokenBTC, TokenETH, TokenUSDT, TokenUSDC, TokenSOL, TokenDOGE } from "@web3icons/react";

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

export function DogeIcon(props: CryptoIconProps) {
  return <TokenDOGE variant="branded" {...props} />;
}
