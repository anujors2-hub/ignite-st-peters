import guestStory from "@/assets/guest-story.jpg";
import { useParallax } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    quote:
      "The therapy team pushed Dad exactly as far as he could go, and not one step further. He walked out on his own.",
    name: "Katherine M.",
    relation: "Daughter of a guest",
  },
  {
    quote:
      "Someone called me every single day with an update. As the family member two hours away, that was everything.",
    name: "Daniel R.",
    relation: "Son of a guest",
  },
  {
    quote:
      "I expected a nursing home. I got a suite, a real restaurant, and nurses who remembered how I take my coffee.",
    name: "Joyce W.",
    relation: "Short-term rehabilitation guest",
  },
];

export function GuestStory() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.12);

  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-20">
          <div ref={ref} className="overflow-hidden rounded-sm bg-secondary">
            <img
              src={guestStory}
              alt="A guest walking with his physical therapist at Ignite Medical Resort St. Peters"
              width={1280}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full scale-110 object-cover"
              style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.1)` }}
            />
          </div>

          <Reveal>
            <p className="eyebrow mb-8 text-ember">A guest's recovery</p>
            <blockquote className="font-display text-[clamp(1.9rem,3.4vw,3.25rem)] italic leading-[1.15]">
              “I came in after a hip replacement thinking I would finish out my days in a chair.
              Forty-one days later I walked my granddaughter down the driveway.”
            </blockquote>
            <p className="eyebrow mt-10 text-muted-foreground">Ray H. · St. Charles County</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ray worked with our orthopedic team seven days a week, took his meals at the Fireside
              Grille with his wife, and rang the bell on his way home.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 border-t border-border pt-16">
          <Reveal className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <span className="font-display text-5xl text-ember">4.9</span>
            <span className="eyebrow text-muted-foreground">Average family review rating</span>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <Reveal key={review.name} delay={i * 110}>
                <div className="rule-ember h-full">
                  <p className="font-display text-2xl leading-snug">“{review.quote}”</p>
                  <p className="eyebrow mt-6 text-[0.6rem] text-muted-foreground">
                    {review.name} · {review.relation}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
