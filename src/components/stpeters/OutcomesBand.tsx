import { Reveal } from "./Reveal";

const STATS = [
  { value: "7", unit: "days", label: "Therapy each week", note: "Physical, occupational and speech therapy delivered on site." },
  { value: "24", unit: "hours", label: "Skilled nursing", note: "A licensed team on the floor around the clock." },
  { value: "In-house", unit: "", label: "Dialysis", note: "Renal treatment happens here, not across town." },
  { value: "Onsite", unit: "", label: "Pharmacy & lab", note: "Medications and diagnostics on the premises." },
];

export function OutcomesBand() {
  return (
    <section id="outcomes" className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-6 text-ember">Care on site, every day</p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] text-on-ink">
            Luxury is the setting. Getting you home is the point.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-16 border-t border-on-ink/15 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 110}>
              <span className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-none text-ember-soft">
                {stat.value}
                {stat.unit && (
                  <span className="text-[0.45em] align-super tracking-tight"> {stat.unit}</span>
                )}
              </span>
              <p className="eyebrow mt-6 text-on-ink">{stat.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-on-ink-muted">{stat.note}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center gap-6 border-t border-on-ink/15 pt-10">
          <p className="text-sm text-on-ink-muted">
            Every service listed above is delivered inside the St.&nbsp;Peters resort.
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

