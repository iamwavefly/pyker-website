import type { ComponentType } from "react";
import {
  AddIcon,
  AltArrowDownIcon,
  AltArrowLeftIcon,
  AltArrowRightIcon,
  ArrowRightIcon as SolarArrowRight,
  CheckIcon as SolarCheck,
  CloseCircleIcon,
  CopyIcon as SolarCopy,
  HamburgerMenuIcon,
  TransferHorizontalIcon,
} from "@solar-icons/react/linear";
import {
  BoltIcon as SolarBolt,
  Buildings2Icon,
  CardIcon,
  Chart2Icon,
  EyeClosedIcon,
  FaceScanCircleIcon,
  GlobalIcon,
  GraphUpIcon,
  LetterIcon,
  LockKeyholeIcon,
  MusicNote2Icon,
  PaletteIcon,
  QrCodeIcon,
  RefreshCircleIcon,
  ShieldCheckIcon as SolarShieldCheckDuotone,
  SnowflakeIcon as SolarSnowflake,
  UserIdIcon,
  Bag4Icon,
  ClockCircleIcon,
  WalletIcon as SolarWallet,
  DocumentTextIcon,
  SmartphoneIcon,
  WiFiRouterIcon,
  LightbulbIcon,
  TvIcon,
  GiftIcon as SolarGift,
} from "@solar-icons/react/bold-duotone";
import {
  CheckCircleIcon as SolarCheckCircle,
  ShieldCheckIcon as SolarShieldCheck,
  StarsMinimalisticIcon,
} from "@solar-icons/react/bold";
// Solar has no brand marks, so store and social logos stay on Phosphor.
import { AppleLogo, GooglePlayLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";

type IconProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

// Size is only passed when the caller sets one: Solar applies it as an inline
// style, so leaving it unset lets CSS size the icon instead.
function solar(Icon: ComponentType<{ size?: number | string; className?: string }>) {
  return function SolarIcon({ width, height, className }: IconProps) {
    return <Icon size={width ?? height} className={className} />;
  };
}

function brand(Icon: ComponentType<Record<string, unknown>>) {
  return function BrandIcon({ width, height, ...rest }: IconProps) {
    return <Icon size={width ?? height ?? 20} weight="fill" {...rest} />;
  };
}

// Interface controls (linear)
export const CloseIcon = solar(CloseCircleIcon);
export const MenuIcon = solar(HamburgerMenuIcon);
export const ChevronDownIcon = solar(AltArrowDownIcon);
export const CaretLeftIcon = solar(AltArrowLeftIcon);
export const CaretRightIcon = solar(AltArrowRightIcon);
export const ArrowRightIcon = solar(SolarArrowRight);
export const PlusIcon = solar(AddIcon);
export const CheckIcon = solar(SolarCheck);
export const CopyIcon = solar(SolarCopy);
export const SwapIcon = solar(TransferHorizontalIcon);

// Feature icons (bold duotone)
export const ShieldIcon = solar(SolarShieldCheckDuotone);
export const LockIcon = solar(LockKeyholeIcon);
export const BoltIcon = solar(SolarBolt);
export const ChartIcon = solar(Chart2Icon);
export const CreditCardIcon = solar(CardIcon);
export const BankIcon = solar(Buildings2Icon);
export const SnowflakeIcon = solar(SolarSnowflake);
export const FingerprintIcon = solar(FaceScanCircleIcon);
export const RetryIcon = solar(RefreshCircleIcon);
export const LimitsIcon = solar(GraphUpIcon);
export const IdCardIcon = solar(UserIdIcon);
export const EyeSlashIcon = solar(EyeClosedIcon);
export const QrIcon = solar(QrCodeIcon);
export const EnvelopeIcon = solar(LetterIcon);
export const MegaphoneIcon = solar(GlobalIcon);
export const MusicIcon = solar(MusicNote2Icon);
export const DesignIcon = solar(PaletteIcon);
export const ShoppingIcon = solar(Bag4Icon);
export const ClockIcon = solar(ClockCircleIcon);
export const WalletIcon = solar(SolarWallet);
export const GlobeIcon = solar(GlobalIcon);
export const LedgerIcon = solar(DocumentTextIcon);
export const AirtimeIcon = solar(SmartphoneIcon);
export const DataIcon = solar(WiFiRouterIcon);
export const ElectricityIcon = solar(LightbulbIcon);
export const CableTvIcon = solar(TvIcon);
export const GiftIcon = solar(SolarGift);

// Solid accents (bold)
export const CheckCircleIcon = solar(SolarCheckCircle);
export const ShieldCheckIcon = solar(SolarShieldCheck);
export const SparkIcon = solar(StarsMinimalisticIcon);

// Brand marks
export const AppleLogoIcon = brand(AppleLogo);
export const GooglePlayLogoIcon = brand(GooglePlayLogo);
export const XLogoIcon = brand(XLogo);
export const InstagramLogoIcon = brand(InstagramLogo);
export const LinkedinLogoIcon = brand(LinkedinLogo);
