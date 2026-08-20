import styles from "./PinDots.module.css";

export default function PinDots() {
  return (
    <div className={styles.row} aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className={`${styles.dot} ${i < 3 ? styles.filled : ""}`} />
      ))}
    </div>
  );
}
