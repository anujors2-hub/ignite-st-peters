import { useState } from "react";
import spa from "@/assets/amenity-spa.jpg";
import cafe from "@/assets/amenity-cafe.jpg";
import chapel from "@/assets/amenity-chapel.jpg";
import gym from "@/assets/amenity-gym.jpg";
import concierge from "@/assets/amenity-concierge.jpg";
import grille from "@/assets/dining-grille.jpg";
import { Reveal } from "./Reveal";

const AMENITIES = [
  {
    name: "Glow Spa",
    kicker: "Manicures · Pedicures · Massage · Hair",
    copy: "A full menu of salon and massage services, because feeling like yourself is part of getting better.",
    image: spa,
    span: "lg:col-span-7 lg:row-span-2",
    ratio: "aspect-[4/5] lg:aspect-auto lg:h-full",
  },
  {
    name: "Fireside Grille",
    kicker: "Chef-driven dining",
    copy: "Cuisine and cocktails served indoors, on the courtyard patio, or beside the fire pit.",
    image: grille,
    span: "lg:col-span-5",
    ratio: "aspect-[16/10]",
  },
  {
    name: "Signature Luxe Café",
    kicker: "Specialty coffee",
    copy: "A café for morning espresso with family — a small ritual that makes a long stay feel normal.",
    image: cafe,
    span: "lg:col-span-5",
    ratio: "aspect-[16/10]",
  },
  {
    name: "Therapy Gym",
    kicker: "Physical · Occupational · Speech",
    copy: "Bright, fully equipped therapy space where progress happens seven days a week.",
    image: gym,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    name: "Onsite Chapel",
    kicker: "Quiet and open to all",
    copy: "A still room for prayer, reflection or simply a moment away from the day.",
    image: chapel,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    name: "Concierge Service",
    kicker: "Director of Hospitality",
    copy: "Always available to fulfill a request and to keep loved ones updated on your progress.",
    image: concierge,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
];

export function Amenities() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="amenities" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <Reveal>
            <p className="eyebrow mb-6 text-ember">Resort-style amenities</p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05]">
              Comfort, offered as evidence.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Recovery is a journey of both body and mind. Every amenity here exists because rest,
              dignity and good company measurably help people heal — and go home sooner.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {AMENITIES.map((item, i) => {
            const isOpen = open === item.name;
            return (
              <Reveal key={item.name} delay={i * 70} className={item.span}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.name)}
                  className="group relative block h-full w-full overflow-hidden rounded-sm bg-ink text-left"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} at Ignite Medical Resort St. Peters`}
                    width={1280}
                    height={1024}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06] ${item.ratio}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/10" />
                  <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                    <p className="eyebrow text-ember-soft">{item.kicker}</p>
                    <h3 className="mt-3 font-display text-[clamp(1.75rem,2.6vw,2.6rem)] leading-tight text-on-ink">
                      {item.name}
                    </h3>
                    <p
                      className={`overflow-hidden text-base leading-relaxed text-on-ink-muted transition-all duration-700 ${
                        isOpen ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.copy}
                    </p>
                    <span className="eyebrow mt-5 inline-block text-[0.6rem] text-on-ink/70">
                      {isOpen ? "Close" : "Read more"}
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
