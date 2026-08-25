import teamIgnite from "@/assets/v2/team-ignite.jpg";

export function V2SparkBack() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="reveal">
        <p className="eyebrow">Get Your</p>
        <h2 className="display text-5xl sm:text-6xl lg:text-[5rem] mt-3">
          Spark <span className="italic ember-text">Back.</span>
        </h2>
        <p className="mt-8 text-lg text-[color:var(--muted)] font-light leading-relaxed max-w-xl">
          Rediscover your strength and independence with the support of our expert rehabilitation team. Whether recovering
          from surgery or illness, guests benefit from personalized care plans crafted by our in-house physical,
          occupational and speech therapists — helping you get back to the life you love.
        </p>
        <div className="mt-10 p-8 bg-[color:var(--sand)]">
          <p className="display text-3xl">Live the Luxe Life</p>
          <p className="mt-3 text-[color:var(--muted)]">
            Long-term care reimagined — proven programs tailored to each resident's daily routines, delivered with warmth,
            professionalism and the elegance of a luxury resort.
          </p>
          <p className="mt-5 text-[11px] tracking-[.24em] uppercase text-[color:var(--ink)]">
            Medicare · Insurance · Private Pay · Medicaid
          </p>
        </div>
      </div>
      <div className="img-zoom reveal d1">
        <img
          src={teamIgnite}
          alt="The Ignite Medical Resorts therapy team"
          className="w-full h-[62vh] object-cover"
          loading="lazy"
        />
        <p className="mt-4 text-[11px] tracking-[.24em] uppercase text-[color:var(--muted)]">
          The area's best therapists — Team Ignite
        </p>
      </div>
    </section>
  );
}
