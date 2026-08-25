import { useState, useEffect } from "react";

export function V3Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`hdr ${solid ? "is-solid" : ""}`} id="hdr">
      <a className="logo" href="#top" aria-label="Ignite Medical Resorts — home">
        <b>IGNITE</b>
        <i aria-hidden="true"></i>
        <span>MEDICAL RESORTS</span>
      </a>
      <button
        className="burger"
        id="burger"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        aria-label="Open menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>
      <nav className={`hdr__nav ${menuOpen ? "is-open" : ""}`} id="primary-nav" aria-label="Primary">
        <a href="#care" onClick={() => setMenuOpen(false)}>Care</a>
        <a href="#tour" onClick={() => setMenuOpen(false)}>The Resort</a>
        <a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
        <a href="tel:+16362261900" data-cta="call-header">636&nbsp;226&nbsp;1900</a>
        <a className="hdr__cta" href="#visit" data-cta="tour-header" onClick={() => setMenuOpen(false)}>
          Schedule a Tour
        </a>
      </nav>
    </header>
  );
}
