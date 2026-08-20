import type { ReactNode } from "react";
import PageIntro from "../ui/PageIntro";
import Container from "../ui/Container";
import styles from "./LegalLayout.module.css";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageIntro eyebrow="Legal" title={title} description={`Last updated: ${lastUpdated}`} />
      <section className={styles.section}>
        <Container>
          <div className={styles.prose}>{children}</div>
        </Container>
      </section>
    </>
  );
}
