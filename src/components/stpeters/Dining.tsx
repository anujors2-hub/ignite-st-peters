import grille from "@/assets/dining-grille.jpg";
import courtyard from "@/assets/courtyard.jpg";
import { useParallax } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";

export function Dining() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.16);

  return (
    <section id="dining" className="bg-ink">
      <div ref={ref} className="relative h-[70vh] overflow-hidden lg:h-[85vh]">
        <img
          src={grille}
          alt="The Fireside Grille dining room at Ignite Medical Resort St. Peters"
          width={1536}
          height={1024}
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-110 object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.12)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="relative mx-auto flex h-full max-w-[92rem] items-end px-6 pb-16 lg:px-10 lg:pb-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-6 text-ember-soft">Fireside Grille</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] text-on-ink">
              Dinner with your family, not a tray in a room.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-[92rem] gap-14 px-6 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24 lg:px-10">
        <Reveal>
          <p className="text-xl leading-relaxed text-on-ink-muted">
            Guests, family and friends gather in our vibrant onsite restaurant for chef-driven
            cuisine and handcrafted cocktails — indoors, on the courtyard patio, or beside the
            fire pit as the evening cools.
          </p>
          <div className="mt-10 grid gap-8 border-t border-on-ink/15 pt-10 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-ember">Executive chef</p>
              <p className="mt-3 text-base leading-relaxed text-on-ink-muted">
                Menus written weekly, adapted to therapeutic diets without tasting like one.
              </p>
            </div>
            <div>
              <p className="eyebrow text-ember">Signature Luxe Café</p>
              <p className="mt-3 text-base leading-relaxed text-on-ink-muted">
                Specialty coffee and pastries from morning through afternoon visits.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={140} className="overflow-hidden rounded-sm">
          <img
            src={courtyard}
            alt="The courtyard patio and fire pit at dusk"
            width={1536}
            height={1024}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
          />
        </Reveal>
      </div>
    </section>
  );
}
