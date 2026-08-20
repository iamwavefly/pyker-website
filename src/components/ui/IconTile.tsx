import type { ReactNode } from "react";
import styles from "./IconTile.module.css";

type Tone = "primary" | "dark" | "green" | "orange" | "glass";

export default function IconTile({ children, tone = "primary" }: { children: ReactNode; tone?: Tone }) {
  return <div className={`${styles.tile} ${styles[tone]}`}>{children}</div>;
}
