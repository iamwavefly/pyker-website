import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../icons";
import styles from "./Lightbox.module.css";

export default function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <button className={styles.closeButton} onClick={onClose} aria-label="Close">
        <CloseIcon width={20} height={20} />
      </button>
      <img src={src} alt={alt} className={styles.image} onClick={(e) => e.stopPropagation()} />
    </div>,
    document.body
  );
}
