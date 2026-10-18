import styles from "./Phone.module.css";

export default function Phone({
  src,
  alt,
  className,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={[styles.device, className].filter(Boolean).join(" ")}>
      <div className={styles.frame}>
        <span className={`${styles.button} ${styles.action}`} aria-hidden="true" />
        <span className={`${styles.button} ${styles.volUp}`} aria-hidden="true" />
        <span className={`${styles.button} ${styles.volDown}`} aria-hidden="true" />
        <span className={`${styles.button} ${styles.power}`} aria-hidden="true" />
        <div className={styles.bezel}>
          <div className={styles.screen}>
            <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
            <span className={styles.island} aria-hidden="true" />
            <span className={styles.glare} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
