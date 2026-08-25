import { useState, useEffect } from "react";
import { NAV_LINKS, PHONE, PHONE_HREF } from "./data";
import logoNav from "@/assets/v2/ignite-logo-nav.png";

export function V2SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-v2-ink text-v2-beige lg:block">
        <div className="mx-auto flex h-10 max-w-[1400px] items-center justify-between px-8 text-[11px] tracking-[.22em] uppercase">
          <p>Ignite Medical Resort &nbsp;·&nbsp; St. Peters, Missouri</p>
          <div className="flex items-center gap-8">
            <a
              href="https://maps.app.goo.gl/CsEBBzvy5cbjAfKV7"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              5101 Executive Centre Pkwy
            </a>
            <a href={PHONE_HREF} className="text-v2-ember-2 transition hover:text-white">
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-v2-ink/12 bg-v2-cream/90 shadow-sm backdrop-blur-xl"
            : "border-v2-ink/12 bg-v2-cream/72 backdrop-blur-[14px]"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <img src={logoNav} alt="Ignite Medical Resorts" className="h-8 w-auto" />
          </a>

          <nav className="hidden items-center gap-9 text-[12px] tracking-[.2em] uppercase text-v2-muted lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-v2-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden text-[12px] tracking-[.2em] uppercase text-v2-ink transition hover:text-v2-ember sm:inline-flex"
            >
              {PHONE}
            </a>
            <a
              href="#visit"
              className="inline-flex items-center rounded-full bg-v2-ink px-5 py-2.5 text-[11px] tracking-[.22em] uppercase text-v2-cream transition hover:bg-v2-ember"
            >
              Book a Tour
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center lg:hidden"
            >
              <span className="relative block h-0 w-6 border-t border-v2-ink before:absolute before:-top-2 before:block before:w-6 before:border-t before:border-v2-ink after:absolute after:top-2 after:block after:w-6 after:border-t after:border-v2-ink" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`border-t border-v2-ink/12 bg-v2-cream lg:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col gap-5 px-6 py-6 text-sm tracking-[.2em] uppercase text-v2-muted">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
