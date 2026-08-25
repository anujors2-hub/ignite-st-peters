import heroImage from "@/assets/v2/hero-lobby.jpg";

export function V2Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] lg:min-h-[100vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ignite Medical Resort St. Peters lobby"
          className="w-full h-full object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241D18]/85 via-[#241D18]/35 to-[#241D18]/20"></div>
      </div>
      <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8 pb-16 lg:pb-24 pt-32">
        <p className="eyebrow text-[#F5B335] reveal">Skilled Nursing &amp; Rehabilitation · St. Peters, MO</p>
        <h1 className="display text-white mt-6 text-[13vw] leading-[.92] sm:text-[9vw] lg:text-[7.4rem] reveal d1">
          Recovery,<br className="hidden sm:block" /> <span className="italic ember-text">reimagined</span> as luxury.
        </h1>
        <div className="mt-8 grid lg:grid-cols-[1.1fr_auto] gap-10 lg:items-end reveal d2">
          <p className="max-w-xl text-[#F2ECE2]/90 text-base sm:text-lg font-light leading-relaxed">
            Rehab in a five-star hotel environment — amenity-rich private suites, a Starbucks café,
            an onsite restaurant with an executive chef, a full-service spa, and a Director of Hospitality
            available around the clock.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#visit"
              className="inline-flex items-center rounded-full bg-[color:var(--cream)] text-[color:var(--ink)] px-7 py-4 text-[11px] tracking-[.24em] uppercase hover:bg-[color:var(--ember)] hover:text-white transition"
            >
              Schedule a Private Tour
            </a>
            <a
              href="tel:+16362261900"
              className="inline-flex items-center rounded-full border border-white/45 text-white px-7 py-4 text-[11px] tracking-[.24em] uppercase hover:bg-white hover:text-[color:var(--ink)] transition"
            >
              Call 636-226-1900
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
