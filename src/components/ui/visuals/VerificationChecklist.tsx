import { CheckIcon } from "../../icons";
import styles from "./VerificationChecklist.module.css";

const ITEMS = ["Identity", "Liveness", "Device"];

export default function VerificationChecklist() {
  return (
    <div className={styles.row} aria-hidden="true">
      {ITEMS.map((item) => (
        <span key={item} className={styles.badge}>
          <CheckIcon width={11} height={11} />
          {item}
        </span>
      ))}
    </div>
  );
}
