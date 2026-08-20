import Container from "../ui/Container";
import Badge from "../ui/Badge";
import PhoneMockup from "../ui/PhoneMockup";
import Blob from "../ui/Blob";
import Reveal from "../ui/Reveal";
import { CheckIcon } from "../icons";
import styles from "./ShowcaseSplit.module.css";

export default function ShowcaseSplit({
  id,
  eyebrow,
  title,
  description,
  points,
  screenSrc,
  screenAlt,
  reverse = false,
  tint = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  screenSrc: string;
  screenAlt: string;
  reverse?: boolean;
  tint?: boolean;
}) {
  return (
    <section id={id} className={`${styles.section} ${tint ? styles.tint : ""}`}>
      {tint && <Blob tone="primary" size={280} style={{ top: "10%", left: reverse ? "auto" : "-80px", right: reverse ? "-80px" : "auto" }} />}

      <Container>
        <div className={`${styles.grid} ${reverse ? styles.reverse : ""}`}>
          <Reveal className={styles.copy}>
            <Badge>{eyebrow}</Badge>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <ul className={styles.points}>
              {points.map((point) => (
                <li key={point}>
                  <CheckIcon width={16} height={16} />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className={styles.visual}>
            <PhoneMockup
              src={screenSrc}
              alt={screenAlt}
              className={reverse ? styles.tiltRight : styles.tiltLeft}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
