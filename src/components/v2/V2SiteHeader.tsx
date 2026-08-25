import { useState } from "react";
import logoNav from "@/assets/v2/ignite-logo-nav.png";

export function V2SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="hidden lg:block bg-[#241D18] text-[#E7DDCE] text-[11px] tracking-[.22em] uppercase">
        <div className="max-w-[1400px] mx-auto px-8 h-10 flex items-center justify-between">
          <p>Ignite Medical Resort &nbsp;·&nbsp; St. Peters, Missouri</p>
          <div className="flex items-center gap-8">
            <a
              href="https://maps.app.goo.gl/CsEBBzvy5cbjAfKV7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              5101 Executive Centre Pkwy
            </a>
            <a href="tel:+16362261900" className="text-[#F5B335] hover:text-white transition">
              636-226-1900
            </a>
          </div>
        </div>
      </div>

      {/* ===== NAV ===== */}
      <header id="nav" className="sticky top-0 z-50 glass border-b border-[color:var(--line)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-[74px] flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <img src={logoNav} alt="Ignite Medical Resorts" className="h-8 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-9 text-[12px] tracking-[.2em] uppercase text-[color:var(--muted)]">
            <a href="#experience" className="hover:text-[color:var(--ink)] transition">
              The Resort
            </a>
            <a href="#care" className="hover:text-[color:var(--ink)] transition">
              Clinical Care
            </a>
            <a href="#amenities" className="hover:text-[color:var(--ink)] transition">
              Amenities
            </a>
            <a href="#dining" className="hover:text-[color:var(--ink)] transition">
              Dining
            </a>
            <a href="#gallery" className="hover:text-[color:var(--ink)] transition">
              Gallery
            </a>
            <a href="#visit" className="hover:text-[color:var(--ink)] transition">
              Visit
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="tel:+16362261900"
              className="hidden sm:inline-flex text-[12px] tracking-[.2em] uppercase text-[color:var(--ink)] hover:text-[color:var(--ember)] transition"
            >
              636-226-1900
            </a>
            <a
              href="#visit"
              className="inline-flex items-center rounded-full bg-[#241D18] text-[#FBF8F3] px-5 py-2.5 text-[11px] tracking-[.22em] uppercase hover:bg-[color:var(--ember)] transition"
            >
              Book a Tour
            </a>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 grid place-items-center"
            >
              <span className="block w-6 border-t border-[color:var(--ink)] relative before:content-[''] before:block before:w-6 before:border-t before:border-[color:var(--ink)] before:absolute before:-top-2 after:content-[''] after:block after:w-6 after:border-t after:border-[color:var(--ink)] after:absolute after:top-2"></span>
            </button>
          </div>
        </div>
        <div
          id="mobileMenu"
          className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"} border-t border-[color:var(--line)] bg-[color:var(--cream)]`}
        >
          <nav className="px-6 py-6 flex flex-col gap-5 text-sm tracking-[.2em] uppercase text-[color:var(--muted)]">
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
              The Resort
            </a>
            <a href="#care" onClick={() => setMobileMenuOpen(false)}>
              Clinical Care
            </a>
            <a href="#amenities" onClick={() => setMobileMenuOpen(false)}>
              Amenities
            </a>
            <a href="#dining" onClick={() => setMobileMenuOpen(false)}>
              Dining
            </a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>
              Gallery
            </a>
            <a href="#visit" onClick={() => setMobileMenuOpen(false)}>
              Visit
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
