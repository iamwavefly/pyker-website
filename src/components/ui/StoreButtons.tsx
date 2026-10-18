import { AppleLogoIcon, GooglePlayLogoIcon } from "../icons";
import { PLAY_STORE_URL } from "../../data/links";
import styles from "./StoreButtons.module.css";

export default function StoreButtons({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className={styles.row}>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.store} ${styles[tone]}`}
      >
        <GooglePlayLogoIcon width={22} height={22} />
        <span className={styles.text}>
          <span className={styles.caption}>Get it on</span>
          <span className={styles.label}>Google Play</span>
        </span>
      </a>

      {/* No App Store listing yet: shown, but not clickable. */}
      <span className={`${styles.store} ${styles[tone]} ${styles.soon}`} aria-disabled="true">
        <AppleLogoIcon width={22} height={22} />
        <span className={styles.text}>
          <span className={styles.caption}>Coming soon to the</span>
          <span className={styles.label}>App Store</span>
        </span>
      </span>
    </div>
  );
}
