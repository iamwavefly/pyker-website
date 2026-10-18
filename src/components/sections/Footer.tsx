import { Link } from "react-router-dom";
import Container from "../ui/Container";
import CopyButton from "../ui/CopyButton";
import { InstagramLogoIcon, LinkedinLogoIcon, XLogoIcon } from "../icons";
import { COINS, sellPath } from "../../data/coins";
import { FEATURES } from "../../data/features";
import styles from "./Footer.module.css";

const SOCIALS = [
  { Icon: XLogoIcon, label: "X (Twitter)", href: "#" },
  { Icon: InstagramLogoIcon, label: "Instagram", href: "#" },
  { Icon: LinkedinLogoIcon, label: "LinkedIn", href: "#" },
];

type FooterLink = { label: string; to?: string; href?: string; soon?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Sell crypto",
    links: [
      ...COINS.map((coin) => ({ label: `Sell ${coin.displayName}`, to: sellPath(coin) })),
      { label: "All coins", to: FEATURES.sellCrypto.path },
    ],
  },
  {
    title: "Products",
    links: [
      ...Object.values(FEATURES).map((feature) => ({
        label: feature.label,
        to: feature.path,
        soon: feature.status !== "live",
      })),
      { label: "How it works", href: "/#how-it-works" },
      { label: "Alternatives", to: "/alternatives" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", to: "/terms" },
      { label: "Privacy policy", to: "/privacy" },
      { label: "Delete your account", to: "/delete-account" },
    ],
  },
];

const SUPPORT_EMAIL = "support@usepyker.com";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo} aria-label="Pyker home">
              <img src="/art/pyker-logo.png" alt="Pyker" />
            </Link>
            <p className={styles.tagline}>
              Sell crypto for naira and spend in dollars, from one simple, secure wallet.
            </p>
            <div className={styles.emailRow}>
              <a href={`mailto:${SUPPORT_EMAIL}`} className={styles.email}>
                {SUPPORT_EMAIL}
              </a>
              <CopyButton text={SUPPORT_EMAIL} />
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div className={styles.column} key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? <Link to={link.to}>{link.label}</Link> : <a href={link.href}>{link.label}</a>}
                    {link.soon && <span className={styles.soon}>Soon</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Pyker Digital Services Ltd. All rights reserved.</span>
          <div className={styles.socials}>
            {SOCIALS.map(({ Icon, label, href }) => (
              <a href={href} key={label} aria-label={label} className={styles.socialLink}>
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className={styles.wordmark} aria-hidden="true">
        pyker
      </div>
    </footer>
  );
}
