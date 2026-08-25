export function V2Intro() {
  return (
    <section id="experience" className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 reveal">
          <p className="eyebrow">Welcome to St. Peters</p>
          <div className="rule w-24 my-6"></div>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
            Extinguishing<br />
            <span className="italic">the stereotype.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 reveal d1">
          <p className="text-lg sm:text-xl leading-relaxed text-[color:var(--muted)] font-light">
            Welcome to your place of healing — where recovery meets luxury. Guests experience advanced physical
            therapy and rehabilitation in a setting that feels far more like a five-star hotel than a healthcare
            facility. From top-tier private rooms and a specialty coffee café to chef-prepared meals, every detail
            is designed for comfort and care.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)]">
            Our dedicated Director of Hospitality provides personalized concierge services and keeps family and
            friends updated on your progress — ensuring peace of mind throughout your stay.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14 border-t border-[color:var(--line)] pt-10">
            <div>
              <p className="display text-5xl ember-text">5★</p>
              <p className="mt-2 text-[11px] tracking-[.2em] uppercase text-[color:var(--muted)]">Hotel Environment</p>
            </div>
            <div>
              <p className="display text-5xl ember-text">24/7</p>
              <p className="mt-2 text-[11px] tracking-[.2em] uppercase text-[color:var(--muted)]">Concierge Care</p>
            </div>
            <div>
              <p className="display text-5xl ember-text">7</p>
              <p className="mt-2 text-[11px] tracking-[.2em] uppercase text-[color:var(--muted)]">Specialty Programs</p>
            </div>
            <div>
              <p className="display text-5xl ember-text">7 Days</p>
              <p className="mt-2 text-[11px] tracking-[.2em] uppercase text-[color:var(--muted)]">A Week Therapy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
