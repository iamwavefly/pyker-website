import { useState } from "react";
import Lightbox from "./Lightbox";
import styles from "./PhoneMockup.module.css";

export default function PhoneMockup({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <button
        type="button"
        className={[styles.frame, className].filter(Boolean).join(" ")}
        onClick={() => setZoomed(true)}
        aria-label={`View larger: ${alt}`}
      >
        <img src={src} alt={alt} className={styles.screen} />
      </button>

      {zoomed && <Lightbox src={src} alt={alt} onClose={() => setZoomed(false)} />}
    </>
  );
}
