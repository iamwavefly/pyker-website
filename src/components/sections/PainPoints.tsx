import type { ReactNode } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { PAIN_POINTS } from "../../content/painPoints";
import { CheckCircleIcon, CloseIcon } from "../icons";
import styles from "./PainPoints.module.css";

export default function PainPoints({
  soft = false,
  title = (
    <>
      Tired of surprise fees and <span className="accent">slow cashouts?</span>
    </>
  ),
}: {
  soft?: boolean;
  title?: ReactNode;
}) {
  return (
    <section className={`${styles.section} ${soft ? styles.soft : ""}`}>
      <Container>
        <div className={styles.head}>
          <span className={styles.eyebrow}>Why people switch</span>
          <h2 className="display">{title}</h2>
          <p>Common frustrations when selling crypto in Nigeria, and how Pyker handles each one.</p>
        </div>

        <div className={styles.grid}>
          {PAIN_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 80} className={styles.card}>
              <p className={styles.pain}>
                <span className={styles.painIcon}>
                  <CloseIcon width={16} height={16} />
                </span>
                {point.pain}
              </p>
              <div className={styles.fix}>
                <h3>
                  <CheckCircleIcon width={22} height={22} />
                  {point.title}
                </h3>
                <p>{point.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
