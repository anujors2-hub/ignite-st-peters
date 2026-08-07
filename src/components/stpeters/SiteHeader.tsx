import { useEffect, useState } from "react";
import { NAV_LINKS, PHONE, PHONE_HREF } from "./data";

export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ink/95 py-3 shadow-soft backdrop-blur-md"
          : "bg-gradient-to-b from-ink/70 to-transparent py-6"
      }`}
    >
      <div className="mx-auto grid max-w-[92rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 lg:px-10">
        <a href="#top" className="flex min-w-0 items-center gap-4">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ember/70">
            <span className="h-2.5 w-2.5 rounded-full bg-ember" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none tracking-wide text-on-ink">
              IGNITE
            </span>
            <span className="eyebrow hidden text-[0.6rem] whitespace-nowrap text-on-ink-muted sm:block">
              Medical Resort · St. Peters
            </span>
          </span>
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-7 xl:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="eyebrow text-[0.62rem] text-on-ink-muted transition-colors hover:text-on-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={PHONE_HREF}
            className="hidden font-display text-lg text-on-ink transition-colors hover:text-ember-soft md:block"
          >
            {PHONE}
          </a>
          <a
            href="#visit"
            className="eyebrow shrink-0 rounded-full bg-ember px-6 py-3 text-[0.62rem] text-primary-foreground transition-all duration-300 hover:bg-ember-soft hover:text-ink"
          >
            Schedule a Tour
          </a>
        </div>
      </div>
    </header>
  );
}
