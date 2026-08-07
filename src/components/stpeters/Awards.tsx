import { Reveal } from "./Reveal";

const MARKS = [
  { title: "Five-Star Experience", note: "Hospitality-led model of care" },
  { title: "Best of St. Charles County", note: "Regional recognition" },
  { title: "Featured in Senior Living Today", note: "Press mention" },
  { title: "Quality Award Recipient", note: "Post-acute care excellence" },
];

export function Awards() {
  return (
    <section className="border-y border-border bg-secondary/50 py-20">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Recognition &amp; press</p>
        </Reveal>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {MARKS.map((mark, i) => (
            <Reveal key={mark.title} delay={i * 90}>
              <div className="border-t border-foreground/15 pt-6">
                <p className="font-display text-2xl leading-tight">{mark.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{mark.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
