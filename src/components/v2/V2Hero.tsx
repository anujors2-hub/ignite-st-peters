import heroImage from "@/assets/v2/hero-lobby.jpg";
import { PHONE, PHONE_HREF } from "./data";
import { Reveal } from "./V2Reveal";

export function V2Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden lg:min-h-[100vh]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ignite Medical Resort St. Peters lobby"
          className="h-full w-full animate-v2-kb object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-v2-ink/85 via-v2-ink/35 to-v2-ink/20" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-5 pt-32 pb-16 sm:px-8 lg:pb-24">
        <Reveal>
          <p className="v2-eyebrow text-v2-ember-2">
            Skilled Nursing &amp; Rehabilitation · St. Peters, MO
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-6 font-v2-display text-[13vw] font-light leading-[.92] text-white sm:text-[9vw] lg:text-[7.4rem]">
            Recovery,
            <br className="hidden sm:block" />{" "}
            <span className="v2-ember-text italic">reimagined</span> as luxury.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.1fr_auto]">
            <p className="max-w-xl text-base font-light leading-relaxed text-v2-sand/90 sm:text-lg">
              Rehab in a five-star hotel environment — amenity-rich private suites, a Starbucks café,
              an onsite restaurant with an executive chef, a full-service spa, and a Director of Hospitality
              available around the clock.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#visit"
                className="inline-flex items-center rounded-full bg-v2-cream px-7 py-4 text-[11px] tracking-[.24em] uppercase text-v2-ink transition hover:bg-v2-ember hover:text-white"
              >
                Schedule a Private Tour
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center rounded-full border border-white/45 px-7 py-4 text-[11px] tracking-[.24em] uppercase text-white transition hover:bg-white hover:text-v2-ink"
              >
                Call {PHONE}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
