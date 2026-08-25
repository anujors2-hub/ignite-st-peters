import glowSpa from "@/assets/v2/glow-spa.jpg";
import luxecafe from "@/assets/v2/luxecafe.jpg";
import resortLounge from "@/assets/v2/resort-lounge.jpg";
import greatRoom from "@/assets/v2/great-room.jpg";
import conciergeDesk from "@/assets/v2/concierge-desk.jpg";
import therapyTech from "@/assets/v2/therapy-tech.jpg";
import diningRoom from "@/assets/v2/dining-room.jpg";

export function V2Amenities() {
  return (
    <section id="amenities" className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6 reveal">
        <div className="max-w-2xl">
          <p className="eyebrow">Resort-Style Amenities</p>
          <div className="rule w-24 my-6"></div>
          <h2 className="display text-4xl sm:text-5xl lg:text-[4.4rem]">
            Every comfort,<br />
            <span className="italic">thoughtfully appointed.</span>
          </h2>
        </div>
        <p className="max-w-md text-[color:var(--muted)] font-light">
          At Glow Spa, guests are pampered with manicures, pedicures, massage therapies and professional hair services.
          Our concierge team is always available to fulfill any request.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[240px] md:auto-rows-[260px]">
        <figure className="relative img-zoom md:row-span-2 reveal">
          <img src={glowSpa} alt="Glow Spa salon" className="w-full h-full object-cover" loading="lazy" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <p className="eyebrow text-[#F5B335]">Full Service</p>
            <p className="display text-3xl mt-1">Glow Spa &amp; Salon</p>
          </figcaption>
        </figure>
        <figure className="relative img-zoom reveal d1">
          <img
            src={luxecafe}
            alt="Signature LuxeCafé serving Starbucks coffee"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <p className="display text-2xl">Signature LuxeCafé</p>
          </figcaption>
        </figure>
        <figure className="relative img-zoom reveal d2">
          <img src={resortLounge} alt="Resort lounge seating" className="w-full h-full object-cover" loading="lazy" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <p className="display text-2xl">Resort Lounge</p>
          </figcaption>
        </figure>
        <figure className="relative img-zoom md:col-span-2 reveal d1">
          <img src={greatRoom} alt="Great room with fireplace and café" className="w-full h-full object-cover" loading="lazy" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <p className="eyebrow text-[#F5B335]">Gather</p>
            <p className="display text-3xl mt-1">The Great Room</p>
          </figcaption>
        </figure>
        <figure className="relative img-zoom reveal d2">
          <img src={conciergeDesk} alt="Reception and concierge desk" className="w-full h-full object-cover" loading="lazy" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <p className="display text-2xl">Concierge Desk</p>
          </figcaption>
        </figure>
        <figure className="relative img-zoom reveal d3">
          <img
            src={therapyTech}
            alt="Anti-gravity treadmill in the therapy gym"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <p className="display text-2xl">Therapy Technology</p>
          </figcaption>
        </figure>
        <figure className="relative img-zoom md:col-span-2 reveal d1">
          <img src={diningRoom} alt="Onsite dining room" className="w-full h-full object-cover" loading="lazy" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <p className="display text-3xl">Dine Somewhere Beautiful</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
