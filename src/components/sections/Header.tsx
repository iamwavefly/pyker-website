import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useScrolled } from "../../hooks/useScrolled";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { CaretRightIcon, CloseIcon, MenuIcon } from "../icons";
import { FEATURES } from "../../data/features";
import styles from "./Header.module.css";

// Pages first for internal linking, then sections of the home page.
const NAV_LINKS: { label: string; to?: string; id?: string; href?: string }[] = [
  { label: FEATURES.sellCrypto.label, to: FEATURES.sellCrypto.path },
  { label: "Dollar card", to: FEATURES.virtualCard.path },
  { label: "Rates", to: FEATURES.rates.path },
  { label: "Blog", to: "/blog" },
  { label: "How it works", id: "how-it-works", href: "/#how-it-works" },
  { label: "FAQ", id: "faq", href: "/#faq" },
];

const SPY_IDS = NAV_LINKS.flatMap((link) => (link.id ? [link.id] : []));
const NO_IDS: string[] = [];

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const { pathname } = useLocation();
  const activeId = useScrollSpy(pathname === "/" ? SPY_IDS : NO_IDS);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ""}`}>
      <Container>
        <div className={styles.bar}>
          <Link to="/" className={styles.logo} aria-label="Pyker home">
            <img src="/art/pyker-logo.png" alt="Pyker" />
          </Link>

          <nav className={styles.nav} aria-label="Main">
            {NAV_LINKS.map((link) =>
              link.to ? (
                <NavLink key={link.label} to={link.to} className={({ isActive }) => (isActive ? styles.active : "")}>
                  {link.label}
                </NavLink>
              ) : (
                <a key={link.label} href={link.href} className={activeId === link.id ? styles.active : ""}>
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className={styles.actions}>
            <Button variant="lime" size="md" href="/#download" icon={<CaretRightIcon width={12} height={12} />} className={styles.iconEnd}>
              Get the app
            </Button>
            <Button variant="outline" size="md" href="/contact">
              Contact
            </Button>
          </div>

          <button
            className={styles.menuToggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
          </button>
        </div>

        {open && (
          <nav className={styles.mobileMenu} aria-label="Mobile">
            {NAV_LINKS.map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ),
            )}
            <Button variant="lime" size="lg" href="/#download" onClick={() => setOpen(false)}>
              Get the app
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
