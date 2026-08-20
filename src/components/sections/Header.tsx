import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useScrolled } from "../../hooks/useScrolled";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { CloseIcon, MenuIcon } from "../icons";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { id: "features", label: "Features", href: "/#features" },
  { id: "how-it-works", label: "How it works", href: "/#how-it-works" },
  { id: "security", label: "Security", href: "/#security" },
  { id: "faq", label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const { pathname } = useLocation();
  const activeId = useScrollSpy(pathname === "/" ? NAV_LINKS.map((link) => link.id) : []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Container>
        <div className={styles.bar}>
          <Link to="/" className={styles.logo}>
            <img src="/pyker-icon.png" alt="Pyker" className={styles.logoMark} />
            <span>Pyker</span>
          </Link>

          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={activeId === link.id ? styles.active : ""}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button variant="outline" size="md" href="#">
              Log in
            </Button>
            <Button variant="primary" size="md" href="/#download">
              Get the app
            </Button>
          </div>

          <button
            className={styles.menuToggle}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <div className={styles.mobileMenu}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="md" href="/#download">
              Get the app
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
}
