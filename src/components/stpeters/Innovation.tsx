import { Reveal } from "./Reveal";

const ITEMS = [
  {
    title: "Continuous vitals monitoring",
    copy: "Heart rate, respiratory function and oxygen saturation, watched around the clock rather than at intervals.",
  },
  {
    title: "Specialized wound-care software",
    copy: "Healing tracked image by image, so treatment adjusts to what the tissue is actually doing.",
  },
  {
    title: "Onsite pharmacy",
    copy: "Medications on the premises — no waiting on an outside courier for a dose change.",
  },
  {
    title: "In-house lab and diagnostics",
    copy: "Analyzers and imaging on site let our clinicians adjust a plan the same day, not next week.",
  },
  {
    title: "Proactive fall and wound prevention",
    copy: "Risk scoring and hourly rounding built into the daily rhythm of every unit.",
  },
];

export function Innovation() {
  return (
    <section className="bg-ink-soft py-28 lg:py-36">
      <div className="mx-auto grid max-w-[92rem] gap-14 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-6 text-ember">Igniting innovation</p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] text-on-ink">
            World-class outcomes begin with world-class technology.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-on-ink-muted">
            The quiet part of luxury: the instruments, records and protocols working behind every
            beautiful room in St. Peters.
          </p>
        </Reveal>

        <div>
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-on-ink/12 py-8 first:border-t md:gap-10">
                <span className="font-display text-xl text-ember/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-on-ink md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-on-ink-muted">{item.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
