import { useState } from "react";
import styles from "./Phone.module.css";

type Screen = { src: string; alt: string };

/**
 * A phone frame around one app screen, or several screens that move like app
 * navigation as `active` changes: later screens push in from the right, and
 * going back to an earlier one slides the current screen away to the right.
 */
export default function Phone({
  src,
  alt,
  screens,
  active = 0,
  className,
  eager = false,
}: {
  src?: string;
  alt?: string;
  screens?: Screen[];
  active?: number;
  className?: string;
  eager?: boolean;
}) {
  const shots = screens ?? [{ src: src ?? "", alt: alt ?? "" }];

  // Remember the screen we're leaving: only it and the new screen animate.
  // Any others (e.g. the middle screen when jumping back to the first) snap.
  const [current, setCurrent] = useState(active);
  const [leaving, setLeaving] = useState(active);
  if (active !== current) {
    setLeaving(current);
    setCurrent(active);
  }

  return (
    <div className={[styles.device, className].filter(Boolean).join(" ")}>
      <div className={styles.frame}>
        <span className={`${styles.button} ${styles.action}`} aria-hidden="true" />
        <span className={`${styles.button} ${styles.volUp}`} aria-hidden="true" />
        <span className={`${styles.button} ${styles.volDown}`} aria-hidden="true" />
        <span className={`${styles.button} ${styles.power}`} aria-hidden="true" />
        <div className={styles.bezel}>
          <div className={styles.screen}>
            {shots.map((shot, index) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                aria-hidden={index !== active || undefined}
                loading={eager && index === 0 ? "eager" : "lazy"}
                className={`${styles.shot} ${
                  index === active ? styles.shotOn : index < active ? styles.shotPast : styles.shotNext
                } ${index !== active && index !== leaving ? styles.snap : ""}`}
              />
            ))}
            <span className={styles.island} aria-hidden="true" />
            <span className={styles.glare} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
