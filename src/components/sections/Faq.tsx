import { useState, type ReactNode } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { PlusIcon } from "../icons";
import { HOME_FAQ } from "../../content/home";
import type { FaqItem } from "../../seo/meta";
import styles from "./Faq.module.css";


const SUPPORT_EMAIL = "support@usepyker.com";

export default function Faq({
  items = HOME_FAQ,
  title = (
    <>
      Questions, <span className="accent">answered</span>
    </>
  ),
}: {
  items?: FaqItem[];
  title?: ReactNode;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.left}>
            <SectionHeading
              eyebrow="FAQ"
              title={title}
            />
            <p className={styles.help}>
              Can't find what you're looking for?
              <br />
              Write to us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </p>
          </div>

          <ul className={styles.list}>
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              return (
                <li key={item.question} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                  <button
                    className={styles.question}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    {item.question}
                    <span className={styles.toggle}>
                      <PlusIcon width={14} height={14} />
                    </span>
                  </button>
                  <div id={panelId} className={styles.answer} role="region">
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
