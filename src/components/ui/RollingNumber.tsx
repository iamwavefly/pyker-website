import type { CSSProperties } from "react";
import styles from "./RollingNumber.module.css";

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * Text whose digits roll like an odometer when the value changes. Characters
 * are keyed from the right, so units stay units when the length changes.
 */
export default function RollingNumber({ value, className }: { value: string; className?: string }) {
  const chars = value.split("");

  return (
    <span className={[styles.roll, className].filter(Boolean).join(" ")}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className={styles.visual}>
        {chars.map((char, index) => {
          const fromRight = chars.length - index;
          if (!/\d/.test(char)) {
            return (
              <span key={`c${fromRight}${char}`} className={styles.static}>
                {char}
              </span>
            );
          }
          return (
            <span key={`d${fromRight}`} className={styles.digit}>
              {/* The current digit, invisible, gives the slot its natural width */}
              <span className={styles.sizer}>{char}</span>
              <span
                className={styles.strip}
                style={{ "--n": Number(char), "--i": fromRight } as CSSProperties}
              >
                {DIGITS.map((digit) => (
                  <span key={digit}>{digit}</span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
