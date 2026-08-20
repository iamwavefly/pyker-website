import type { ReactNode } from "react";
import styles from "./Badge.module.css";

type Tone = "primary" | "dark" | "light";

export default function Badge({
  children,
  tone = "primary",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
