import therapyGym from "@/assets/v2/therapy-gym.jpg";
import { INNOVATION_FEATURES } from "./data";
import { Reveal } from "./V2Reveal";

export function V2Innovation() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={therapyGym}
        alt="Ignite Medical Resorts therapy gym"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-v2-ink/75" />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-36">
        <Reveal className="lg:col-span-5">
          <p className="v2-eyebrow text-v2-ember-2">Igniting Innovation</p>
          <h2 className="mt-6 font-v2-display text-4xl text-white sm:text-5xl lg:text-[4.2rem]">
            World-class outcomes,
            <br />
            <span className="italic">world-class technology.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <p className="text-lg font-light leading-relaxed text-v2-sand/85">
            Our St. Peters location features the latest physical therapy techniques supported by advanced electronic
            medical records, including specialized wound care software. Patients benefit from continuous monitoring of
            heart rate, respiratory function and oxygen saturation, along with proactive fall and wound prevention.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {INNOVATION_FEATURES.map((feature) => (
              <div key={feature.title} className="border-t border-white/20 pt-4">
                <p className="text-sm tracking-[.18em] uppercase text-white">{feature.title}</p>
                <p className="mt-2 text-sm text-v2-beige/65">{feature.copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
