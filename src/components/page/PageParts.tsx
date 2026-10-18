import type { ComponentType, ReactNode } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CaretRightIcon, GooglePlayLogoIcon } from "../icons";
import { PLAY_STORE_URL } from "../../data/links";
import MerchantLogo from "../ui/MerchantLogo";
import styles from "./Page.module.css";

export type Crumb = { label: string; to: string };

export function PlayButton({ label = "Get it on Google Play" }: { label?: string }) {
  return (
    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.play}>
      <GooglePlayLogoIcon width={18} height={18} />
      <span className={styles.playLabel}>{label}</span>
    </a>
  );
}

export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  badge,
  secondary,
  aside,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  intro: string;
  badge?: string;
  secondary?: { label: string; to: string };
  aside?: ReactNode;
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.wash} aria-hidden="true" />
      <Container>
        <nav aria-label="Breadcrumb" className={styles.crumbs}>
          <ol>
            {crumbs.map((crumb, index) => (
              <li key={crumb.to}>
                {index < crumbs.length - 1 ? (
                  <Link to={crumb.to}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className={`${styles.heroGrid} ${aside ? "" : styles.heroSolo}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              {eyebrow}
              {badge && <span className={styles.badge}>{badge}</span>}
            </span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.intro}>{intro}</p>
            <div className={styles.actions}>
              <PlayButton />
              {secondary && (
                <Link to={secondary.to} className={styles.textLink}>
                  {secondary.label}
                  <CaretRightIcon width={16} height={16} />
                </Link>
              )}
            </div>
          </div>
          {aside && <div className={styles.heroAside}>{aside}</div>}
        </div>
      </Container>
    </section>
  );
}

export function PageSection({
  id,
  eyebrow,
  title,
  intro,
  soft = false,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  soft?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${styles.section} ${soft ? styles.soft : ""}`}>
      <Container>
        <div className={styles.sectionHead}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className="display">{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className={styles.steps}>
      {steps.map((step, index) => (
        <Reveal key={step.title} delay={index * 80} className={styles.step}>
          <span className={styles.stepNum}>{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export type Point = { Icon: ComponentType<{ width?: number; height?: number }>; title: string; text: string };

export function Points({ points }: { points: Point[] }) {
  return (
    <div className={styles.points}>
      {points.map(({ Icon, title, text }, index) => (
        <Reveal key={title} delay={(index % 4) * 70} className={styles.point}>
          <span className={styles.pointIcon}>
            <Icon width={22} height={22} />
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export type LinkCard = { to: string; title: string; text: string; badge?: string; icon?: ReactNode };

export function LinkCards({ links }: { links: LinkCard[] }) {
  return (
    <div className={styles.linkCards}>
      {links.map((link) => (
        <Link key={link.to} to={link.to} className={styles.linkCard}>
          {link.icon && <span className={styles.linkIcon}>{link.icon}</span>}
          <span className={styles.linkTitle}>
            {link.title}
            {link.badge && <span className={styles.badge}>{link.badge}</span>}
          </span>
          <span className={styles.linkText}>{link.text}</span>
          <span className={styles.linkArrow}>
            <CaretRightIcon width={16} height={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return <p className={styles.notice}>{children}</p>;
}

export function Merchants({ names, note }: { names: string[]; note?: string }) {
  return (
    <div className={styles.merchants}>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <MerchantLogo name={name} size={20} />
            {name}
          </li>
        ))}
        <li className={styles.merchantMore}>and more</li>
      </ul>
      {note && <p>{note}</p>}
    </div>
  );
}

export function CompareTable({
  columns,
  rows,
}: {
  columns: [string, string, string];
  rows: { label: string; ours: string; theirs: string }[];
}) {
  return (
    <div className={styles.compareWrap}>
      <table className={styles.compare}>
        <thead>
          <tr>
            <th scope="col">{columns[0]}</th>
            <th scope="col" className={styles.compareOurs}>
              {columns[1]}
            </th>
            <th scope="col">{columns[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td className={styles.compareOurs}>{row.ours}</td>
              <td>{row.theirs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
