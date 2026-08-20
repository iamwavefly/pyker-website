import { Link } from "react-router-dom";
import Container from "../ui/Container";
import CopyButton from "../ui/CopyButton";
import { InstagramLogoIcon, LinkedinLogoIcon, XLogoIcon } from "../icons";
import styles from "./Footer.module.css";

const SOCIALS = [
  { Icon: XLogoIcon, label: "X (Twitter)", href: "#" },
  { Icon: InstagramLogoIcon, label: "Instagram", href: "#" },
  { Icon: LinkedinLogoIcon, label: "LinkedIn", href: "#" },
];

const PRODUCT_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Security", href: "/#security" },
];

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Terms of service", to: "/terms" },
  { label: "Privacy policy", to: "/privacy" },
  { label: "Delete your account", to: "/delete-account" },
];

const SUPPORT_EMAIL = "support@usepyker.com";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src="/pyker-icon.png" alt="Pyker" className={styles.logoMark} />
              <span>Pyker</span>
            </Link>
            <p className={styles.tagline}>
              Sell crypto for Naira and spend in USD — one simple, secure wallet.
            </p>
            <div className={styles.emailRow}>
              <a href={`mailto:${SUPPORT_EMAIL}`} className={styles.email}>
                {SUPPORT_EMAIL}
              </a>
              <CopyButton text={SUPPORT_EMAIL} />
            </div>
            <div className={styles.socials}>
              {SOCIALS.map(({ Icon, label, href }) => (
                <a href={href} key={label} aria-label={label} className={styles.socialLink}>
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4>Product</h4>
            <ul>
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Legal</h4>
            <ul>
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Pyker Digital Services Ltd. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
}
