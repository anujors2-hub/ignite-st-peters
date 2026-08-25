import diningRoom from "@/assets/v2/dining-room.jpg";
import greatRoom from "@/assets/v2/great-room.jpg";

export function V2Dining() {
  return (
    <section id="dining" className="bg-[#241D18] text-[#F2ECE2]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <p className="eyebrow text-[#F5B335]">Delicious</p>
            <div className="rule w-24 my-6"></div>
            <h2 className="display text-4xl sm:text-5xl lg:text-[4.4rem] text-white">
              Fireside <span className="italic">Grille.</span>
            </h2>
            <p className="mt-8 text-lg text-[#E7DDCE]/80 font-light leading-relaxed max-w-xl">
              Guests, family and friends gather in our vibrant, inviting onsite restaurant for chef-driven cuisine and
              handcrafted cocktails. Dining is offered indoors, on the outdoor courtyard patio, and by the beautiful fire pit.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[11px] tracking-[.24em] uppercase text-[#E7DDCE]/70">
              <span>Executive Chef</span>
              <span>Craft Cocktails</span>
              <span>Patio Dining</span>
              <span>Room Service</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="img-zoom reveal d1">
              <img
                src={diningRoom}
                alt="Fireside Grille dining room"
                className="w-full h-[46vh] object-cover"
                loading="lazy"
              />
            </div>
            <div className="img-zoom mt-10 reveal d2">
              <img
                src={greatRoom}
                alt="Café and lounge seating"
                className="w-full h-[46vh] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
