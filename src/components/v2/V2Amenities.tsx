import glowSpa from "@/assets/v2/glow-spa.jpg";
import luxecafe from "@/assets/v2/luxecafe.jpg";
import resortLounge from "@/assets/v2/resort-lounge.jpg";
import greatRoom from "@/assets/v2/great-room.jpg";
import conciergeDesk from "@/assets/v2/concierge-desk.jpg";
import therapyTech from "@/assets/v2/therapy-tech.jpg";
import diningRoom from "@/assets/v2/dining-room.jpg";
import { Reveal } from "./V2Reveal";

const TILES = [
  {
    image: glowSpa,
    alt: "Glow Spa salon",
    eyebrow: "Full Service",
    title: "Glow Spa & Salon",
    span: "md:row-span-2",
  },
  {
    image: luxecafe,
    alt: "Signature LuxeCafé serving Starbucks coffee",
    title: "Signature LuxeCafé",
    span: "",
  },
  {
    image: resortLounge,
    alt: "Resort lounge seating",
    title: "Resort Lounge",
    span: "",
  },
  {
    image: greatRoom,
    alt: "Great room with fireplace and café",
    eyebrow: "Gather",
    title: "The Great Room",
    span: "md:col-span-2",
  },
  {
    image: conciergeDesk,
    alt: "Reception and concierge desk",
    title: "Concierge Desk",
    span: "",
  },
  {
    image: therapyTech,
    alt: "Anti-gravity treadmill in the therapy gym",
    title: "Therapy Technology",
    span: "",
  },
  {
    image: diningRoom,
    alt: "Onsite dining room",
    title: "Dine Somewhere Beautiful",
    span: "md:col-span-2",
  },
];

export function V2Amenities() {
  return (
    <section id="amenities" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="v2-eyebrow">Resort-Style Amenities</p>
          <div className="v2-rule my-6 w-24" />
          <h2 className="font-v2-display text-4xl sm:text-5xl lg:text-[4.4rem]">
            Every comfort,
            <br />
            <span className="italic">thoughtfully appointed.</span>
          </h2>
        </div>
        <p className="max-w-md font-light text-v2-muted">
          At Glow Spa, guests are pampered with manicures, pedicures, massage therapies and professional hair services.
          Our concierge team is always available to fulfill any request.
        </p>
      </Reveal>

      <div className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-5 md:auto-rows-[260px] md:grid-cols-3">
        {TILES.map((tile, i) => (
          <Reveal key={tile.title} delay={i * 70} className={`group relative overflow-hidden ${tile.span}`}>
            <img
              src={tile.image}
              alt={tile.alt}
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              {tile.eyebrow && (
                <p className="v2-eyebrow text-v2-ember-2">{tile.eyebrow}</p>
              )}
              <p className={`font-v2-display ${tile.eyebrow ? "mt-1 text-3xl" : "text-2xl"}`}>
                {tile.title}
              </p>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
