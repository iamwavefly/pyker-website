import styles from "./TrendSparkline.module.css";

export default function TrendSparkline({ points, positive }: { points: number[]; positive: boolean }) {
  if (points.length < 2) return null;

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const width = 64;
  const height = 24;

  const coords = points
    .map((value, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={styles.sparkline} aria-hidden="true">
      <polyline
        points={coords}
        fill="none"
        stroke={positive ? "var(--color-green)" : "var(--color-red)"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
