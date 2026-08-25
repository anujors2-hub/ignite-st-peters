import { Reveal } from "./V2Reveal";

const STATS = [
  { value: "5★", label: "Hotel Environment" },
  { value: "24/7", label: "Concierge Care" },
  { value: "7", label: "Specialty Programs" },
  { value: "7 Days", label: "A Week Therapy" },
];

export function V2Intro() {
  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="v2-eyebrow">Welcome to St. Peters</p>
          <div className="v2-rule my-6 w-24" />
          <h2 className="font-v2-display text-4xl sm:text-5xl lg:text-6xl">
            Extinguishing
            <br />
            <span className="italic">the stereotype.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <p className="text-lg font-light leading-relaxed text-v2-muted sm:text-xl">
            Welcome to your place of healing — where recovery meets luxury. Guests experience advanced physical
            therapy and rehabilitation in a setting that feels far more like a five-star hotel than a healthcare
            facility. From top-tier private rooms and a specialty coffee café to chef-prepared meals, every detail
            is designed for comfort and care.
          </p>
          <p className="mt-6 text-base leading-relaxed text-v2-muted">
            Our dedicated Director of Hospitality provides personalized concierge services and keeps family and
            friends updated on your progress — ensuring peace of mind throughout your stay.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-v2-ink/12 pt-10 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="v2-ember-text font-v2-display text-5xl">{stat.value}</p>
                <p className="mt-2 text-[11px] tracking-[.2em] uppercase text-v2-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
