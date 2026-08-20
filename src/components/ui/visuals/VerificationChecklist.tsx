import { CheckIcon } from "../../icons";
import styles from "./VerificationChecklist.module.css";

const ITEMS = ["Identity verified", "Liveness check", "Device secured"];

export default function VerificationChecklist() {
  return (
    <ul className={styles.list} aria-hidden="true">
      {ITEMS.map((item) => (
        <li key={item} className={styles.item}>
          <span className={styles.check}>
            <CheckIcon width={11} height={11} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
