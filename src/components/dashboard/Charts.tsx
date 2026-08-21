const week = [
  { day: "Mon", value: 62, cals: 480 },
  { day: "Tue", value: 78, cals: 610 },
  { day: "Wed", value: 45, cals: 350 },
  { day: "Thu", value: 88, cals: 720 },
  { day: "Fri", value: 71, cals: 560 },
  { day: "Sat", value: 96, cals: 840 },
  { day: "Sun", value: 54, cals: 410 },
];

export function WeeklyActivityChart() {
  const max = 100;
  const points = week
    .map((d, i) => `${(i / (week.length - 1)) * 100},${100 - (d.value / max) * 100}`)
    .join(" ");

  return (
    <div>
      <div className="relative h-52">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
        >
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              x2="100"
              y1={y}
              y2={y}
              stroke="var(--color-border)"
              strokeWidth="0.4"
            />
          ))}
          <polygon points={`0,100 ${points} 100,100`} fill="url(#areaFill)" />
          <polyline
            points={points}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-end gap-2 px-1 pb-0">
          {week.map((d) => (
            <div key={d.day} className="group flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-md bg-[image:var(--gradient-primary)] opacity-25 transition-opacity group-hover:opacity-60"
                style={{ height: `${d.value}%` }}
                title={`${d.cals} kcal`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {week.map((d) => (
          <span key={d.day} className="flex-1 text-center text-xs text-muted-foreground">
            {d.day}
          </span>
        ))}
      </div>
    </div>
  );
}

const hr = [62, 70, 96, 128, 142, 118, 88, 74, 69, 82, 110, 95, 76, 66];

export function HeartRateSpark() {
  const max = 160;
  const pts = hr
    .map((v, i) => `${(i / (hr.length - 1)) * 100},${100 - (v / max) * 100}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-24 w-full">
      <defs>
        <linearGradient id="hrFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-destructive)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-destructive)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,100 ${pts} 100,100`} fill="url(#hrFill)" />
      <polyline
        points={pts}
        fill="none"
        stroke="var(--color-destructive)"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
      />
    </svg>
  );
}
