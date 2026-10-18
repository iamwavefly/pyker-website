// A gentle placeholder curve for when live data hasn't loaded.
const FALLBACK = [12, 14, 13, 17, 16, 19, 18, 22, 21, 20, 24, 23, 27, 26, 29, 28, 31, 30, 34, 33, 36];

function paths(points: number[]) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const coords = points.map((value, i) => {
    const x = (i / (points.length - 1)) * 300;
    const y = 92 - ((value - min) / range) * 80;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const line = `M${coords.join(" L")}`;
  return { line, area: `${line} L300,100 L0,100 Z` };
}

export default function Sparkline({
  points,
  up = true,
  className,
  fill = true,
  color,
}: {
  points?: number[];
  up?: boolean;
  className?: string;
  fill?: boolean;
  /** Overrides the green/red up/down colour. */
  color?: string;
}) {
  const { line, area } = paths(points && points.length > 1 ? points : FALLBACK);
  const stroke = color ?? (up ? "#02c076" : "#f84960");
  const id = `spark-${stroke.replace(/[^a-z0-9]/gi, "")}`;
  return (
    <svg className={className} viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true" style={{ color: stroke }}>
      {fill && (
        <>
          <defs>
            <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill={`url(#${id})`} />
        </>
      )}
      <path d={line} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
