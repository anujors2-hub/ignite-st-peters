import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";

const STATS = [
  { value: 92, suffix: "%", label: "Return home", note: "Guests discharged to their own home" },
  { value: 18, suffix: " days", label: "Average stay", note: "Short-term rehabilitation" },
  { value: 7, suffix: " days", label: "Therapy each week", note: "PT, OT and speech therapy" },
  { value: 4.9, suffix: "★", label: "Guest rating", note: "Across recent family reviews" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, revealed } = useReveal<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!revealed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const duration = 1600;
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [revealed, value]);

  const decimals = value % 1 !== 0 ? 1 : 0;

  return (
    <span ref={ref} className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-none text-ember-soft">
      {display.toFixed(decimals)}
      <span className="text-[0.45em] align-super tracking-tight">{suffix}</span>
    </span>
  );
}

export function OutcomesBand() {
  return (
    <section id="outcomes" className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-6 text-ember">Clinical outcomes first</p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] text-on-ink">
            Luxury is the setting. Getting you home is the point.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-16 border-t border-on-ink/15 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 110}>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="eyebrow mt-6 text-on-ink">{stat.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-on-ink-muted">{stat.note}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center gap-6 border-t border-on-ink/15 pt-10">
          <p className="text-sm text-on-ink-muted">
            Figures shown are placeholders for the St. Peters location — send us your current
            reporting and we will set them live.
          </p>
          <a
            href="#visit"
            className="eyebrow rounded-full border border-ember px-7 py-3 text-ember-soft transition-colors hover:bg-ember hover:text-primary-foreground"
          >
            Talk with our team
          </a>
        </Reveal>
      </div>
    </section>
  );
}
