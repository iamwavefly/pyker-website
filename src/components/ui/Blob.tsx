import type { CSSProperties } from "react";
import styles from "./Blob.module.css";

type Tone = "primary" | "orange" | "green";

export default function Blob({
  tone = "primary",
  size = 320,
  style,
  delay = 0,
}: {
  tone?: Tone;
  size?: number;
  style?: CSSProperties;
  delay?: number;
}) {
  return (
    <span
      className={`${styles.blob} ${styles[tone]}`}
      style={{ width: size, height: size, animationDelay: `${delay}ms`, ...style }}
      aria-hidden="true"
    />
  );
}
