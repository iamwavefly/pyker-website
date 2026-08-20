import { AirtimeIcon, CableTvIcon, DataIcon, ElectricityIcon } from "../../icons";
import styles from "./BillIconsRow.module.css";

const ITEMS = [
  { Icon: AirtimeIcon, label: "Airtime" },
  { Icon: DataIcon, label: "Data" },
  { Icon: ElectricityIcon, label: "Electricity" },
  { Icon: CableTvIcon, label: "Cable TV" },
];

export default function BillIconsRow() {
  return (
    <div className={styles.row} aria-hidden="true">
      {ITEMS.map(({ Icon, label }) => (
        <span className={styles.pill} key={label}>
          <Icon width={14} height={14} />
        </span>
      ))}
    </div>
  );
}
