import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import heroLobby from "@/assets/v2/hero-lobby.jpg";
import suitePrivate from "@/assets/v2/suite-private.jpg";
import therapyGym from "@/assets/v2/therapy-gym.jpg";
import diningRoom from "@/assets/v2/dining-room.jpg";
import glowSpa from "@/assets/v2/glow-spa.jpg";
import luxecafe from "@/assets/v2/luxecafe.jpg";
import conciergeDesk from "@/assets/v2/concierge-desk.jpg";
import therapyTech from "@/assets/v2/therapy-tech.jpg";
import resortLounge from "@/assets/v2/resort-lounge.jpg";

const SLIDES = [
  { img: heroLobby, label: "St. Peters Lobby" },
  { img: suitePrivate, label: "Private Suite" },
  { img: therapyGym, label: "Therapy Studio" },
  { img: diningRoom, label: "Fireside Grille" },
  { img: glowSpa, label: "Glow Spa" },
  { img: luxecafe, label: "Signature LuxeCafé" },
  { img: conciergeDesk, label: "Reception" },
  { img: therapyTech, label: "Advanced Equipment" },
  { img: resortLounge, label: "Resort Lounge" },
];

export function V2Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-[color:var(--sand)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex flex-wrap items-end justify-between gap-6 reveal">
        <div>
          <p className="eyebrow">Gallery</p>
          <div className="rule w-24 my-6"></div>
          <h2 className="display text-4xl sm:text-5xl lg:text-[4rem]">
            Step inside <span className="italic">Ignite.</span>
          </h2>
        </div>
        <div className="flex gap-3">
          <button
            className="g-prev w-12 h-12 rounded-full border border-[color:var(--line)] grid place-items-center hover:bg-[color:var(--ink)] hover:text-white transition cursor-pointer"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="g-next w-12 h-12 rounded-full border border-[color:var(--line)] grid place-items-center hover:bg-[color:var(--ink)] hover:text-white transition cursor-pointer"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
      <div className="mt-12 px-5 sm:px-8">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1.15}
          spaceBetween={20}
          loop={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{ nextEl: ".g-next", prevEl: ".g-prev" }}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            1024: { slidesPerView: 2.4 },
            1400: { slidesPerView: 3.2 },
          }}
          className="gallerySwiper"
        >
          {SLIDES.map((slide, i) => (
            <SwiperSlide key={i} className="pb-14">
              <div className="img-zoom">
                <img src={slide.img} className="w-full h-[52vh] object-cover" alt={slide.label} loading="lazy" />
              </div>
              <p className="mt-4 text-[11px] tracking-[.24em] uppercase text-[color:var(--muted)]">{slide.label}</p>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
