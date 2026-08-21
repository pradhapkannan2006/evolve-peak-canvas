import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  Bell,
  Bike,
  Dumbbell,
  Flame,
  Footprints,
  Heart,
  Search,
  Timer,
  TrendingUp,
  Waves,
} from "lucide-react";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Ring } from "@/components/dashboard/Rings";
import { HeartRateSpark, WeeklyActivityChart } from "@/components/dashboard/Charts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pulse — Fitness Dashboard for Training & Recovery" },
      {
        name: "description",
        content:
          "Track workouts, calories, steps, heart rate and weekly progress in one clean, futuristic fitness dashboard.",
      },
      { property: "og:title", content: "Pulse — Fitness Dashboard" },
      {
        property: "og:description",
        content:
          "A premium dark fitness dashboard with workout summaries, activity charts, goals and recent sessions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const stats = [
  {
    label: "Calories burned",
    value: "842",
    unit: "kcal",
    delta: "+12% vs yesterday",
    icon: Flame,
    tone: "text-warning",
  },
  {
    label: "Steps",
    value: "11,248",
    unit: "steps",
    delta: "Goal 12,000",
    icon: Footprints,
    tone: "text-accent",
  },
  {
    label: "Active minutes",
    value: "76",
    unit: "min",
    delta: "+8 min vs avg",
    icon: Timer,
    tone: "text-primary",
  },
  {
    label: "Avg heart rate",
    value: "118",
    unit: "bpm",
    delta: "Peak 156 bpm",
    icon: Heart,
    tone: "text-destructive",
  },
];

const goals = [
  { label: "Lose 4 kg", progress: 68, note: "2.7 / 4 kg" },
  { label: "Run 60 km", progress: 82, note: "49 / 60 km" },
  { label: "Strength 5×/week", progress: 60, note: "3 / 5 sessions" },
  { label: "Sleep 8h avg", progress: 91, note: "7h 18m avg" },
];

const activities = [
  { name: "Upper body strength", meta: "Today · 48 min", kcal: 412, icon: Dumbbell },
  { name: "Interval run", meta: "Yesterday · 32 min", kcal: 386, icon: Activity },
  { name: "Cycling – hill route", meta: "Wed · 1h 12m", kcal: 640, icon: Bike },
  { name: "Recovery swim", meta: "Tue · 40 min", kcal: 298, icon: Waves },
];

const exercises = [
  { name: "Barbell squat", sets: "4 × 8", load: "80 kg", done: true },
  { name: "Incline press", sets: "4 × 10", load: "32 kg", done: true },
  { name: "Lat pulldown", sets: "3 × 12", load: "55 kg", done: false },
  { name: "Core circuit", sets: "3 rounds", load: "Bodyweight", done: false },
];

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 px-5 py-6 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Friday, 21 August
            </p>
            <h1 className="mt-1 text-2xl font-semibold sm:text-3xl">
              Welcome back, <span className="text-gradient">Pradhap</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              You're 84% through today's plan — one session left to close the ring.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-xl border border-border bg-surface/60 px-3 py-2 backdrop-blur-xl md:flex">
              <Search className="size-4 text-muted-foreground" />
              <input
                placeholder="Search workouts"
                className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button className="relative flex size-10 items-center justify-center rounded-xl border border-border bg-surface/60 backdrop-blur-xl">
              <Bell className="size-4.5 text-muted-foreground" />
              <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-primary" />
            </button>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 py-1.5 pl-1.5 pr-4 backdrop-blur-xl">
              <span className="flex size-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] font-display text-sm font-semibold text-primary-foreground">
                PK
              </span>
              <div className="leading-tight">
                <p className="text-sm font-medium">Pradhap K.</p>
                <p className="text-xs text-muted-foreground">Pro member</p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-5 xl:grid-cols-3">
          <div className="glass-card relative overflow-hidden p-6 xl:col-span-2">
            <div className="absolute -right-16 -top-20 size-56 rounded-full bg-primary/15 blur-3xl" />
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Today's workout
                </p>
                <h2 className="mt-2 text-xl font-semibold">Push Day · Strength Block 3</h2>
                <div className="mt-4 flex flex-wrap gap-6 text-sm">
                  <div>
                    <p className="font-display text-xl font-semibold">48:20</p>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold">12</p>
                    <p className="text-xs text-muted-foreground">Exercises</p>
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold">412</p>
                    <p className="text-xs text-muted-foreground">kcal burned</p>
                  </div>
                </div>
                <button className="mt-6 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5">
                  Continue session
                </button>
              </div>
              <Ring value={84} label="84%" sublabel="Plan complete" />
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">Heart rate</h3>
              <span className="rounded-full bg-destructive/15 px-2.5 py-1 text-xs text-destructive">
                Cardio zone
              </span>
            </div>
            <p className="mt-3 font-display text-3xl font-semibold">
              118 <span className="text-base font-medium text-muted-foreground">bpm</span>
            </p>
            <HeartRateSpark />
            <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground">
              <div>
                <p className="font-display text-sm text-foreground">62</p>Resting
              </div>
              <div>
                <p className="font-display text-sm text-foreground">118</p>Average
              </div>
              <div>
                <p className="font-display text-sm text-foreground">156</p>Peak
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, unit, delta, icon: Icon, tone }) => (
            <div key={label} className="glass-card p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span className={`flex size-9 items-center justify-center rounded-lg bg-muted ${tone}`}>
                  <Icon className="size-4.5" />
                </span>
              </div>
              <p className="mt-4 font-display text-2xl font-semibold">
                {value} <span className="text-sm font-medium text-muted-foreground">{unit}</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{delta}</p>
            </div>
          ))}
        </section>

        <section className="mt-5 grid gap-5 xl:grid-cols-3">
          <div className="glass-card p-6 xl:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold">Weekly activity</h3>
                <p className="text-xs text-muted-foreground">Calories burned per day</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs text-primary">
                <TrendingUp className="size-3.5" /> +18% this week
              </span>
            </div>
            <div className="mt-5">
              <WeeklyActivityChart />
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-base font-semibold">Workout progress</h3>
            <p className="text-xs text-muted-foreground">Push Day · Block 3</p>
            <ul className="mt-4 space-y-3">
              {exercises.map((e) => (
                <li
                  key={e.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/50 p-3"
                >
                  <span
                    className={`flex size-9 items-center justify-center rounded-lg ${
                      e.done ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Dumbbell className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{e.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {e.sets} · {e.load}
                    </p>
                  </div>
                  <span
                    className={`text-xs ${e.done ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {e.done ? "Done" : "Next"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-5 grid gap-5 xl:grid-cols-3">
          <div className="glass-card p-6">
            <h3 className="text-base font-semibold">Fitness goals</h3>
            <ul className="mt-4 space-y-4">
              {goals.map((g) => (
                <li key={g.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{g.label}</span>
                    <span className="text-xs text-muted-foreground">{g.note}</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-[image:var(--gradient-primary)]"
                      style={{ width: `${g.progress}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card flex flex-col items-center justify-center gap-5 p-6 sm:flex-row xl:flex-col">
            <Ring value={72} size={116} label="72%" sublabel="Weekly target" />
            <div className="grid w-full grid-cols-2 gap-3 text-center">
              <div className="rounded-xl border border-border bg-surface-2/50 p-3">
                <p className="font-display text-lg font-semibold">5.2k</p>
                <p className="text-xs text-muted-foreground">Weekly kcal</p>
              </div>
              <div className="rounded-xl border border-border bg-surface-2/50 p-3">
                <p className="font-display text-lg font-semibold">6h 40m</p>
                <p className="text-xs text-muted-foreground">Train time</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-base font-semibold">Recent activities</h3>
            <ul className="mt-4 space-y-3">
              {activities.map(({ name, meta, kcal, icon: Icon }) => (
                <li key={name} className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
                    <Icon className="size-4.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{name}</p>
                    <p className="text-xs text-muted-foreground">{meta}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{kcal} kcal</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
