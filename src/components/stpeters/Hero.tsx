import heroImage from "@/assets/hero-lobby.jpg";
import { ADDRESS, MAP_URL, PHONE, PHONE_HREF } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="The lobby and Signature LuxeCafé at Ignite Medical Resort St. Peters, with marble countertops, pendant lighting and wood-beam ceiling"
        width={1920}
        height={1088}
        className="ken-burns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/70" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(70% 55% at 20% 85%, color-mix(in oklab, var(--ember) 28%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <p className="eyebrow mb-8 text-ember-soft">St. Peters, Missouri · 5101 Executive Centre Parkway</p>
        <h1 className="max-w-5xl font-display text-[clamp(2.5rem,5.6vw,5.25rem)] font-light uppercase leading-[0.98] tracking-[0.01em] text-on-ink">
          Ignite Medical Resort St.&nbsp;Peters
          <span className="mt-4 block text-[0.4em] normal-case italic text-ember-soft">
            Skilled Nursing &amp; Rehabilitation Center in St.&nbsp;Peters, MO
          </span>
        </h1>
        <p className="mt-10 max-w-[46rem] text-lg leading-relaxed text-on-ink-muted">
          Residents of St. Peters and the surrounding communities can rehab in a 5-star hotel
          environment with amenity-rich private rooms, a Starbucks café, an onsite restaurant with
          an executive chef, a full-service spa, and an onsite chapel. Here, at Ignite Medical
          Resorts, we have successfully merged advanced physical therapy and rehabilitation with
          luxuries unique to the industry and our facility. This includes an always-available
          Director of Hospitality ready to provide concierge services and to keep loved ones
          updated on your progress.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#visit"
            className="eyebrow rounded-full bg-ember px-9 py-4 text-primary-foreground transition-all duration-300 hover:bg-ember-soft hover:text-ink"
          >
            Schedule a Private Tour
          </a>
          <a
            href={PHONE_HREF}
            className="eyebrow rounded-full border border-on-ink/30 px-9 py-4 text-on-ink transition-colors duration-300 hover:border-ember hover:text-ember-soft"
          >
            Call {PHONE}
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-on-ink/15 pt-8">
          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-on-ink-muted transition-colors hover:text-on-ink"
          >
            {ADDRESS}
          </a>
          <span className="text-sm text-on-ink-muted">Medicare · Insurance · Private Pay · Medicaid</span>
        </div>
      </div>
    </section>
  );
}
