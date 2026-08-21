import {
  Activity,
  Dumbbell,
  Flame,
  Goal,
  LayoutDashboard,
  Salad,
  Settings,
  TrendingUp,
} from "lucide-react";

const items = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Workout", icon: Dumbbell },
  { label: "Exercises", icon: Activity },
  { label: "Progress", icon: TrendingUp },
  { label: "Nutrition", icon: Salad },
  { label: "Goals", icon: Goal },
  { label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-sidebar/70 px-4 py-6 backdrop-blur-xl lg:flex">
      <div className="flex items-center gap-3 px-2">
        <span className="flex size-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
          <Flame className="size-5" />
        </span>
        <div>
          <p className="font-display text-lg font-semibold leading-none">Pulse</p>
          <p className="mt-1 text-xs text-muted-foreground">Fitness OS</p>
        </div>
      </div>

      <nav className="mt-9 flex flex-1 flex-col gap-1">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-[inset_0_0_0_1px_var(--color-border)]"
                : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
            }`}
          >
            <Icon className={`size-4.5 ${active ? "text-primary" : ""}`} />
            <span className="font-medium">{label}</span>
            {active && <span className="ml-auto size-1.5 rounded-full bg-primary" />}
          </button>
        ))}
      </nav>

      <div className="glass-card mt-6 p-4">
        <p className="font-display text-sm font-semibold">Weekly streak</p>
        <p className="mt-1 text-xs text-muted-foreground">5 of 7 sessions completed</p>
        <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
          <div className="h-full w-[71%] rounded-full bg-[image:var(--gradient-primary)]" />
        </div>
      </div>
    </aside>
  );
}
