import teamIgnite from "@/assets/v2/team-ignite.jpg";
import { Reveal } from "./V2Reveal";

export function V2SparkBack() {
  return (
    <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-32">
      <Reveal>
        <p className="v2-eyebrow">Get Your</p>
        <h2 className="mt-3 font-v2-display text-5xl sm:text-6xl lg:text-[5rem]">
          Spark <span className="v2-ember-text italic">Back.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-v2-muted">
          Rediscover your strength and independence with the support of our expert rehabilitation team. Whether recovering
          from surgery or illness, guests benefit from personalized care plans crafted by our in-house physical,
          occupational and speech therapists — helping you get back to the life you love.
        </p>

        <div className="mt-10 bg-v2-sand p-8">
          <p className="font-v2-display text-3xl">Live the Luxe Life</p>
          <p className="mt-3 text-v2-muted">
            Long-term care reimagined — proven programs tailored to each resident's daily routines, delivered with warmth,
            professionalism and the elegance of a luxury resort.
          </p>
          <p className="mt-5 text-[11px] tracking-[.24em] uppercase text-v2-ink">
            Medicare · Insurance · Private Pay · Medicaid
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="group overflow-hidden">
          <img
            src={teamIgnite}
            alt="The Ignite Medical Resorts therapy team"
            className="h-[62vh] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-[11px] tracking-[.24em] uppercase text-v2-muted">
          The area's best therapists — Team Ignite
        </p>
      </Reveal>
    </section>
  );
}
