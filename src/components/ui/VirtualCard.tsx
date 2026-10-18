import type { CSSProperties } from "react";
import { SnowflakeIcon } from "../icons";
import { CARD_COLORS, type CardColor, type CardNetwork } from "../../data/cards";
import styles from "./VirtualCard.module.css";

export default function VirtualCard({
  color = "indigo",
  network = "visa",
  frozen = false,
  holder = "Ada Okafor",
  className,
  style,
}: {
  color?: CardColor;
  network?: CardNetwork;
  frozen?: boolean;
  holder?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={[styles.sizer, className].filter(Boolean).join(" ")}
      style={style}
      aria-label={`Pyker virtual ${network === "visa" ? "Visa" : "Mastercard"} card`}
      role="img"
    >
      <div className={`${styles.card} ${frozen ? styles.frozen : ""}`}>
        {(Object.keys(CARD_COLORS) as CardColor[]).map((key) => (
          <img
            key={key}
            src={CARD_COLORS[key].art}
            alt=""
            className={`${styles.art} ${key === color ? styles.artOn : ""}`}
          />
        ))}

        <img src="/cards/pyker-logo-white.png" alt="" className={styles.logo} />

        {/* The app's own network marks (mobile/assets/icons), cross-faded like CardIssuerMark. */}
        <img src="/cards/visa.svg" alt="" className={`${styles.visa} ${network === "visa" ? styles.markOn : ""}`} />
        <img
          src="/cards/mastercard.svg"
          alt=""
          className={`${styles.mastercard} ${network === "mastercard" ? styles.markOn : ""}`}
        />

        <div className={styles.bottom}>
          <div>
            <span>•••• 7908</span>
            <span>{holder}</span>
          </div>
          <div className={styles.expiry}>
            <span>12/29</span>
            <span>Valid thru</span>
          </div>
        </div>

        <div className={styles.frost} aria-hidden={!frozen}>
          <SnowflakeIcon />
          <span>Card frozen</span>
        </div>
      </div>
    </div>
  );
}
