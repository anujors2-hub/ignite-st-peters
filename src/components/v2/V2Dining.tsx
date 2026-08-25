import diningRoom from "@/assets/v2/dining-room.jpg";
import greatRoom from "@/assets/v2/great-room.jpg";
import { Reveal } from "./V2Reveal";

export function V2Dining() {
  return (
    <section id="dining" className="bg-v2-ink text-v2-sand">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="v2-eyebrow text-v2-ember-2">Delicious</p>
            <div className="v2-rule my-6 w-24" />
            <h2 className="font-v2-display text-4xl text-white sm:text-5xl lg:text-[4.4rem]">
              Fireside <span className="italic">Grille.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-v2-beige/80">
              Guests, family and friends gather in our vibrant, inviting onsite restaurant for chef-driven cuisine and
              handcrafted cocktails. Dining is offered indoors, on the outdoor courtyard patio, and by the beautiful fire pit.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[11px] tracking-[.24em] uppercase text-v2-beige/70">
              <span>Executive Chef</span>
              <span>Craft Cocktails</span>
              <span>Patio Dining</span>
              <span>Room Service</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            <Reveal delay={120} className="group overflow-hidden">
              <img
                src={diningRoom}
                alt="Fireside Grille dining room"
                className="h-[46vh] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={240} className="group mt-10 overflow-hidden">
              <img
                src={greatRoom}
                alt="Café and lounge seating"
                className="h-[46vh] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
