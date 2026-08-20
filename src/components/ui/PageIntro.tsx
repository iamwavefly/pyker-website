import type { ReactNode } from "react";
import Container from "./Container";
import Badge from "./Badge";
import styles from "./PageIntro.module.css";

export default function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <section className={styles.intro}>
      <Container>
        <Badge>{eyebrow}</Badge>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </Container>
    </section>
  );
}
