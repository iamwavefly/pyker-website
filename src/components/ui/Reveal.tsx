import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";
import styles from "./Reveal.module.css";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[styles.reveal, visible ? styles.visible : "", className].filter(Boolean).join(" ")}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
