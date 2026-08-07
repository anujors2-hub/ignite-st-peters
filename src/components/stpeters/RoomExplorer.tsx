import { useState } from "react";
import suitePrivate from "@/assets/suite-private.jpg";
import suiteAdjoining from "@/assets/suite-adjoining.jpg";
import suiteLongterm from "@/assets/suite-longterm.jpg";
import { Reveal } from "./Reveal";

type Hotspot = { x: number; y: number; title: string; copy: string };

type Suite = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  features: string[];
  hotspots: Hotspot[];
};

const SUITES: Suite[] = [
  {
    id: "private",
    name: "Private Suite",
    tagline: "Short-term rehabilitation",
    image: suitePrivate,
    features: [
      "Private room and private bath",
      "Hotel-grade linens and a personal recliner",
      "Flat-screen television and guest Wi-Fi",
      "Direct-dial phone and in-room dining",
    ],
    hotspots: [
      { x: 30, y: 62, title: "The recliner", copy: "Every suite is appointed with a personal recliner for therapy rest and visiting family." },
      { x: 62, y: 58, title: "Hotel bedding", copy: "Layered linens and a bolster — made up daily by housekeeping, not turned over like a ward." },
      { x: 40, y: 34, title: "Daylight", copy: "Wide windows on the courtyard. Natural light is part of the recovery plan." },
    ],
  },
  {
    id: "adjoining",
    name: "Adjoining Suite",
    tagline: "For couples and companions",
    image: suiteAdjoining,
    features: [
      "Two connected rooms with a shared sitting area",
      "Space for a spouse or family member to stay close",
      "Twin recliners and lounge seating",
      "Quiet zone for conversations with the care team",
    ],
    hotspots: [
      { x: 24, y: 70, title: "Twin recliners", copy: "Rest side by side — no one recovers alone here." },
      { x: 58, y: 46, title: "Shared parlor", copy: "A sitting room between the suites for meals, visits and care conferences." },
      { x: 84, y: 40, title: "Courtyard view", copy: "Floor-to-ceiling glass onto the landscaped grounds." },
    ],
  },
  {
    id: "longterm",
    name: "Long-Term Residence",
    tagline: "Life, made comfortable",
    image: suiteLongterm,
    features: [
      "Personalized daily routine and mealtime support",
      "Room for your own furniture, art and photographs",
      "Assistance with dressing, grooming, bathing and mobility",
      "24-hour nursing with a familiar, consistent team",
    ],
    hotspots: [
      { x: 22, y: 45, title: "Make it yours", copy: "Bring books, frames and the chair you love. This is a residence, not a room number." },
      { x: 58, y: 62, title: "Reading corner", copy: "A wing chair by the window for afternoons that belong to you." },
      { x: 82, y: 70, title: "Nightly comfort", copy: "Soft textiles, warm lamplight and a call button always within reach." },
    ],
  },
];

export function RoomExplorer() {
  const [activeId, setActiveId] = useState<string>(SUITES[0]!.id);
  const [openSpot, setOpenSpot] = useState<number | null>(null);
  const active = SUITES.find((s) => s.id === activeId)!;

  return (
    <section id="suites" className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-6 text-ember">Explore the suites</p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] text-on-ink">
            Step inside before you ever visit.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-on-ink-muted">
            Choose a suite and touch the markers to see what makes each room feel like a hotel
            rather than a hospital.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-3">
          {SUITES.map((suite) => (
            <button
              key={suite.id}
              type="button"
              onClick={() => {
                setActiveId(suite.id);
                setOpenSpot(null);
              }}
              className={`eyebrow rounded-full border px-7 py-3 transition-all duration-300 ${
                suite.id === activeId
                  ? "border-ember bg-ember text-primary-foreground"
                  : "border-on-ink/25 text-on-ink-muted hover:border-on-ink/60 hover:text-on-ink"
              }`}
            >
              {suite.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-ink-soft shadow-lift">
            {SUITES.map((suite) => (
              <img
                key={suite.id}
                src={suite.image}
                alt={`${suite.name} at Ignite Medical Resort St. Peters`}
                width={1536}
                height={1024}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  suite.id === activeId ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

            {active.hotspots.map((spot, i) => (
              <div key={spot.title} className="absolute" style={{ left: `${spot.x}%`, top: `${spot.y}%` }}>
                <button
                  type="button"
                  aria-label={spot.title}
                  onClick={() => setOpenSpot(openSpot === i ? null : i)}
                  className={`grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border backdrop-blur-sm transition-all duration-300 ${
                    openSpot === i
                      ? "border-ember bg-ember"
                      : "border-on-ink/70 bg-ink/40 hover:border-ember hover:bg-ember/70"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-on-ink" />
                </button>
                {openSpot === i && (
                  <div className="absolute left-1/2 top-6 z-10 w-64 -translate-x-1/2 rounded-sm border border-on-ink/15 bg-ink/95 p-5 text-left shadow-lift backdrop-blur">
                    <p className="eyebrow text-ember-soft">{spot.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-on-ink-muted">{spot.copy}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <p className="eyebrow text-ember">{active.tagline}</p>
            <h3 className="mt-4 font-display text-[clamp(2rem,3.4vw,3rem)] leading-tight text-on-ink">
              {active.name}
            </h3>
            <ul className="mt-8 space-y-5 border-t border-on-ink/15 pt-8">
              {active.features.map((feature) => (
                <li key={feature} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                  <span className="mt-2 h-px w-6 shrink-0 bg-ember" />
                  <span className="text-base leading-relaxed text-on-ink-muted">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#visit"
              className="eyebrow mt-10 self-start rounded-full bg-ember px-8 py-4 text-primary-foreground transition-colors hover:bg-ember-soft hover:text-ink"
            >
              Reserve this suite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
