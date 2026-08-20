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
  return (
    <div className={[styles.frame, className].filter(Boolean).join(" ")}>
      <img src={src} alt={alt} className={styles.screen} />
    </div>
  );
}
