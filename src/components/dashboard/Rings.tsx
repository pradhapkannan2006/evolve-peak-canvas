type RingProps = {
  value: number;
  size?: number;
  stroke?: number;
  color?: string;
  label?: string;
  sublabel?: string;
};

export function Ring({
  value,
  size = 132,
  stroke = 10,
  color = "var(--color-primary)",
  label,
  sublabel,
}: RingProps) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - Math.min(value, 100) / 100);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          className="stroke-muted"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          stroke={color}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute text-center">
        <p className="font-display text-2xl font-semibold leading-none">{label ?? `${value}%`}</p>
        {sublabel && <p className="mt-1 text-[11px] text-muted-foreground">{sublabel}</p>}
      </div>
    </div>
  );
}
