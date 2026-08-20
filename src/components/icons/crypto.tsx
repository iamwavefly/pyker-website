import { TokenBTC, TokenETH, TokenUSDT, TokenSOL } from "@web3icons/react";

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

export function SolIcon(props: CryptoIconProps) {
  return <TokenSOL variant="branded" {...props} />;
}
