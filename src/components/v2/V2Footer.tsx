import igniteLogoFooter from "@/assets/v2/ignite-logo.jpg";
import { PHONE, PHONE_HREF, SOCIAL_LINKS } from "./data";

export function V2Footer() {
  return (
    <footer className="bg-v2-ink text-v2-beige">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={igniteLogoFooter}
            alt="Ignite Medical Resorts"
            className="h-12 w-12 object-contain"
          />
          <p className="mt-6 font-v2-display text-3xl text-white">
            Ignite Medical Resort
            <br />
            <span className="italic">St. Peters</span>
          </p>
          <p className="mt-4 max-w-md text-sm text-v2-beige/60">
            5101 Executive Centre Parkway, St. Peters, MO 63376 ·{" "}
            <a href={PHONE_HREF} className="text-v2-ember-2">
              {PHONE}
            </a>
          </p>
        </div>

        <div>
          <p className="v2-eyebrow text-v2-ember-2">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-v2-beige/70">
            <li>
              <a href="#experience" className="transition hover:text-white">The Resort</a>
            </li>
            <li>
              <a href="#care" className="transition hover:text-white">Clinical Care</a>
            </li>
            <li>
              <a href="#amenities" className="transition hover:text-white">Amenities</a>
            </li>
            <li>
              <a href="#gallery" className="transition hover:text-white">Gallery</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="v2-eyebrow text-v2-ember-2">Connect</p>
          <ul className="mt-5 space-y-3 text-sm text-v2-beige/70">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.ignitemedicalresorts.com/join-team-ignite.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Join Team Ignite
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-8 text-[11px] leading-relaxed text-v2-beige/45 sm:px-8">
          Ignite Medical Resorts® is a service mark owned by an Illinois Corporation, but used by a group of limited
          liability companies and corporations. Each Ignite Medical Resorts facility® is independently owned and
          operated. Not all services, programs and amenities mentioned herein are available at each location.
        </div>
      </div>
    </footer>
  );
}
