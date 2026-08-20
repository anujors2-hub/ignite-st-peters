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
      "Private room and private bath with upscale finishes",
      "Plush lounge seating and personal relaxation area",
      "Built-in fireplace, flat-screen television, and Wi-Fi",
      "Expansive windows with courtyard views and natural daylight",
    ],
    hotspots: [
      { x: 38, y: 62, title: "Lounge Seating", copy: "Plush armchairs and personal seating for therapy rest, reading, and visiting family." },
      { x: 12, y: 55, title: "Fireside Warmth", copy: "Built-in modern fireplace and entertainment console creating a cozy, resort-style atmosphere." },
      { x: 30, y: 35, title: "Courtyard Daylight", copy: "Expansive floor-to-ceiling windows bringing in ample natural sunlight overlooking landscaped grounds." },
    ],
  },
  {
    id: "adjoining",
    name: "Adjoining Suite & Parlor",
    tagline: "For couples and companions",
    image: suiteAdjoining,
    features: [
      "Two connected rooms with a shared hospitality parlor",
      "Space for a spouse or family member to stay close",
      "Decorative privacy partition and bistro seating area",
      "Quiet zone for conversations with the care team and guests",
    ],
    hotspots: [
      { x: 55, y: 46, title: "Architectural Screen", copy: "Decorative wood partition separating private suite quarters from the shared parlor area." },
      { x: 82, y: 62, title: "Bistro Seating", copy: "Intimate table seating for in-suite dining, morning coffee, and conversation with guests." },
      { x: 38, y: 60, title: "Shared Parlor", copy: "A welcoming living room between suites for meals, family visits, and care conferences." },
    ],
  },
  {
    id: "longterm",
    name: "Long-Term Residence Campus",
    tagline: "Life, made comfortable",
    image: suiteLongterm,
    features: [
      "Modern single-story resort architecture with covered porte-cochère",
      "Safe, accessible zero-barrier entry and manicured grounds",
      "Personalized daily routine with 24-hour dedicated nursing",
      "Assistance with dressing, grooming, bathing, and mobility",
    ],
    hotspots: [
      { x: 22, y: 48, title: "Porte-Cochère Arrival", copy: "Covered, weather-protected arrival canopy for effortless guest drop-off and family visits." },
      { x: 60, y: 68, title: "Zero-Barrier Entry", copy: "Seamless, fully accessible entry leading directly into the hospitality lobby and care wings." },
      { x: 86, y: 64, title: "Residential Wings", copy: "Bright, sunlit residential wings featuring private accommodations overlooking the gardens." },
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
                alt={`${suite.name} — ${suite.tagline} at Ignite Medical Resort St. Peters`}
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
