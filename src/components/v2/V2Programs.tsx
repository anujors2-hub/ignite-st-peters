import { SPECIALTY_PROGRAMS } from "./data";
import { Reveal } from "./V2Reveal";

export function V2Programs() {
  return (
    <section id="care" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
      <Reveal className="max-w-3xl">
        <p className="v2-eyebrow">Specialty Programs</p>
        <div className="v2-rule my-6 w-24" />
        <h2 className="font-v2-display text-4xl sm:text-5xl lg:text-[4.4rem]">
          A personalized plan,
          <br />
          <span className="italic">confident outcomes.</span>
        </h2>
        <p className="mt-7 text-lg font-light leading-relaxed text-v2-muted">
          A comprehensive approach to well-being and rehabilitation is always top-of-mind. Our expert team devises a
          personalized plan in which your needs and capabilities are considered.
        </p>
      </Reveal>

      <div className="mt-14 grid border-t border-l border-v2-ink/12 sm:grid-cols-2 lg:grid-cols-4">
        {SPECIALTY_PROGRAMS.map((program, i) => (
          <Reveal key={program.title} delay={i * 60}>
            <div className="border-b border-r border-v2-ink/12 p-8 transition hover:bg-v2-sand">
              <p className="font-v2-display text-3xl">{program.num}</p>
              <h3 className="mt-4 text-[13px] tracking-[.2em] uppercase">{program.title}</h3>
              <p className="mt-3 text-sm text-v2-muted">{program.copy}</p>
            </div>
          </Reveal>
        ))}

        {/* Long-term care card */}
        <Reveal delay={420}>
          <div className="border-b border-r border-v2-ink/12 bg-v2-ink p-8 text-v2-sand">
            <p className="font-v2-display text-3xl text-v2-ember-2">＋</p>
            <h3 className="mt-4 text-[13px] tracking-[.2em] uppercase">Long-Term Care</h3>
            <p className="mt-3 text-sm text-v2-beige/75">
              Personalized, professional and deeply compassionate daily support.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
