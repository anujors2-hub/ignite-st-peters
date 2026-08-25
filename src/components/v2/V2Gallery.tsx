import { useState, useRef, useEffect } from "react";
import heroLobby from "@/assets/v2/hero-lobby.jpg";
import suitePrivate from "@/assets/v2/suite-private.jpg";
import therapyGym from "@/assets/v2/therapy-gym.jpg";
import diningRoom from "@/assets/v2/dining-room.jpg";
import glowSpa from "@/assets/v2/glow-spa.jpg";
import luxecafe from "@/assets/v2/luxecafe.jpg";
import conciergeDesk from "@/assets/v2/concierge-desk.jpg";
import therapyTech from "@/assets/v2/therapy-tech.jpg";
import resortLounge from "@/assets/v2/resort-lounge.jpg";
import { Reveal } from "./V2Reveal";

const SLIDES = [
  { image: heroLobby, caption: "St. Peters Lobby" },
  { image: suitePrivate, caption: "Private Suite" },
  { image: therapyGym, caption: "Therapy Studio" },
  { image: diningRoom, caption: "Fireside Grille" },
  { image: glowSpa, caption: "Glow Spa" },
  { image: luxecafe, caption: "Signature LuxeCafé" },
  { image: conciergeDesk, caption: "Reception" },
  { image: therapyTech, caption: "Advanced Equipment" },
  { image: resortLounge, caption: "Resort Lounge" },
];

export function V2Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const calcWidth = () => {
      if (!trackRef.current) return;
      const container = trackRef.current.parentElement;
      if (!container) return;
      const containerWidth = container.clientWidth;
      // Show ~2.4 slides on desktop, ~1.15 on mobile
      const w = window.innerWidth;
      const visibleSlides = w >= 1400 ? 3.2 : w >= 1024 ? 2.4 : w >= 640 ? 1.6 : 1.15;
      setSlideWidth((containerWidth - (visibleSlides - 1) * 20) / visibleSlides);
    };
    calcWidth();
    window.addEventListener("resize", calcWidth);
    return () => window.removeEventListener("resize", calcWidth);
  }, []);

  const maxIndex = SLIDES.length - 1;

  const prev = () => setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section id="gallery" className="bg-v2-sand py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="v2-eyebrow">Gallery</p>
            <div className="v2-rule my-6 w-24" />
            <h2 className="font-v2-display text-4xl sm:text-5xl lg:text-[4rem]">
              Step inside <span className="italic">Ignite.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="grid h-12 w-12 place-items-center rounded-full border border-v2-ink/12 transition hover:bg-v2-ink hover:text-white"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={next}
              className="grid h-12 w-12 place-items-center rounded-full border border-v2-ink/12 transition hover:bg-v2-ink hover:text-white"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 overflow-hidden px-5 sm:px-8">
        <div
          ref={trackRef}
          className="flex gap-5 transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (slideWidth + 20)}px)`,
          }}
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.caption}
              className="shrink-0"
              style={{ width: slideWidth || "85%" }}
            >
              <div className="group overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="h-[52vh] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-[11px] tracking-[.24em] uppercase text-v2-muted">
                {slide.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mt-8 flex justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.caption}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentIndex
                ? "w-6 bg-v2-ember"
                : "bg-v2-ink/25 hover:bg-v2-ink/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
