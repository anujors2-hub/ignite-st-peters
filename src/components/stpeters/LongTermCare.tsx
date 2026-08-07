import { Reveal } from "./Reveal";

const SUPPORTS = ["Dressing", "Grooming", "Bathing", "Mobility", "Mealtime safety", "Medication"];

export function LongTermCare() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-10">
        <Reveal className="max-w-4xl">
          <p className="eyebrow mb-6 text-ember">Live the luxe life</p>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] leading-[1] tracking-tight">
            Long-term care, reimagined as a home.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-24">
          <Reveal>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Long-term care in St. Peters is personalized, professional and deeply compassionate.
              We begin with proven care programs and tailor them to each resident — combining expert
              medical services and physical therapy with the comfort and elegance of a luxury resort.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              We accept Medicare, Insurance, Private Pay and Medicaid. Our team will walk your family
              through coverage before a single decision is made.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow mb-6 text-muted-foreground">Daily support includes</p>
            <ul className="grid grid-cols-2 gap-x-8">
              {SUPPORTS.map((item) => (
                <li key={item} className="border-b border-border py-4 font-display text-2xl">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
