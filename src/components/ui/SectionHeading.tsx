import type { ReactNode } from "react";
import Badge from "./Badge";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`${styles.heading} ${align === "center" ? styles.center : ""}`}>
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
