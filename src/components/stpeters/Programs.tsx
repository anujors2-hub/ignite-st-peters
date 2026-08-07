import { Reveal } from "./Reveal";

const PROGRAMS = [
  {
    title: "Orthopedic Rehabilitation",
    copy: "Joint replacement and post-surgical recovery guided by in-house physical and occupational therapists.",
  },
  {
    title: "Stroke Recovery",
    copy: "Coordinated physical, occupational and speech therapy that rebuilds mobility, language and independence.",
  },
  {
    title: "Cardiac Care",
    copy: "Continuous heart-rate monitoring paired with paced, progressive conditioning.",
  },
  {
    title: "Pulmonary Rehab",
    copy: "Respiratory and oxygen-saturation monitoring with breathing and endurance programs.",
  },
  {
    title: "Wound Care",
    copy: "Specialized wound-care software and clinician oversight tailored to each guest's healing plan.",
  },
  {
    title: "Infection Management",
    copy: "In-house lab analyzers and proactive protocols that catch and treat complications early.",
  },
  {
    title: "Renal Disease",
    copy: "Including in-house dialysis, so treatment happens here rather than across town.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
          <Reveal>
            <p className="eyebrow mb-6 text-ember">Specialty programs</p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05]">
              A plan built around one person — yours.
            </h2>
          </Reveal>
          <Reveal delay={120} className="self-end">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Our expert team devises a personalized plan in which your needs and capabilities are
              considered, so you can be confident in positive outcomes. Every program below is
              delivered on-site by clinicians who know your name.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-border">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.title} delay={i * 60}>
              <article className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-6 border-b border-border py-10 transition-colors duration-500 hover:bg-secondary/40 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:gap-10 md:px-6">
                <span className="font-display text-2xl text-ember/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight transition-transform duration-500 md:group-hover:translate-x-2">
                  {program.title}
                </h3>
                <p className="col-span-2 text-base leading-relaxed text-muted-foreground md:col-span-1">
                  {program.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
