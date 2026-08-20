import type { ComponentType } from "react";
import {
  Shield,
  Lock,
  Lightning,
  ChartLineUp,
  Wallet,
  Receipt,
  ArrowsLeftRight,
  Check,
  X,
  List,
  CaretDown,
  ArrowRight,
  AppleLogo,
  GooglePlayLogo,
  DeviceMobile,
  WifiHigh,
  LightbulbFilament,
  Television,
  Fingerprint,
  XLogo,
  InstagramLogo,
  LinkedinLogo,
  EnvelopeSimple,
  Megaphone,
  CreditCard,
} from "@phosphor-icons/react";

type IconProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

// Matches the Phosphor weight the mobile app uses for feature-level icons.
function withWeight(Icon: ComponentType<Record<string, unknown>>, weight: string) {
  return function WeightedIcon({ width, height, ...rest }: IconProps) {
    return <Icon size={width ?? height ?? 20} weight={weight} {...rest} />;
  };
}

function withDuotone(Icon: ComponentType<Record<string, unknown>>) {
  return withWeight(Icon, "duotone");
}

export const ShieldIcon = withDuotone(Shield);
export const LockIcon = withDuotone(Lock);
export const BoltIcon = withDuotone(Lightning);
export const ChartIcon = withDuotone(ChartLineUp);
export const WalletIcon = withDuotone(Wallet);
export const BillIcon = withDuotone(Receipt);
export const SwapIcon = withDuotone(ArrowsLeftRight);
export const CheckIcon = withDuotone(Check);
export const CloseIcon = withDuotone(X);
export const MenuIcon = withDuotone(List);
export const ChevronDownIcon = withDuotone(CaretDown);
export const ArrowRightIcon = withDuotone(ArrowRight);

export const AppleLogoIcon = withWeight(AppleLogo, "fill");
export const GooglePlayLogoIcon = withWeight(GooglePlayLogo, "fill");

export const AirtimeIcon = withDuotone(DeviceMobile);
export const DataIcon = withDuotone(WifiHigh);
export const ElectricityIcon = withDuotone(LightbulbFilament);
export const CableTvIcon = withDuotone(Television);
export const FingerprintIcon = withDuotone(Fingerprint);

export const XLogoIcon = withWeight(XLogo, "fill");
export const InstagramLogoIcon = withWeight(InstagramLogo, "fill");
export const LinkedinLogoIcon = withWeight(LinkedinLogo, "fill");

export const EnvelopeIcon = withDuotone(EnvelopeSimple);
export const MegaphoneIcon = withDuotone(Megaphone);
export const CreditCardIcon = withDuotone(CreditCard);
