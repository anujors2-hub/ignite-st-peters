import { useState } from "react";
import suitePrivate from "@/assets/v2/suite-private.jpg";
import luxecafe from "@/assets/v2/luxecafe.jpg";
import diningRoom from "@/assets/v2/dining-room.jpg";
import glowSpa from "@/assets/v2/glow-spa.jpg";
import therapyGym from "@/assets/v2/therapy-gym.jpg";
import chapel from "@/assets/amenity-chapel.jpg";

const ROOMS = [
  {
    category: "Accommodation",
    title: "Private Suites",
    tabLabel: "Private Suites",
    copy: "Private and adjoining suites, thoughtfully appointed with recliners — so a spouse can stay the whole afternoon, and comfort meets convenience.",
    img: suitePrivate,
    alt: "A private suite with a bed, recliner and warm evening lamplight.",
  },
  {
    category: "Café",
    title: "Signature Luxe Café",
    tabLabel: "Luxe Café",
    copy: "A specialty coffee café serving Starbucks — the ordinary pleasure of a good cup, in the middle of an extraordinary week.",
    img: luxecafe,
    alt: "The Signature Luxe Café serving Starbucks, with lounge seating.",
  },
  {
    category: "Dining",
    title: "Fireside Grille",
    tabLabel: "Fireside Grille",
    copy: "Guests, family and friends gather in our onsite restaurant for chef-driven cuisine — indoors, on the courtyard patio, or by the fire pit.",
    img: diningRoom,
    alt: "Fireside Grille dining room opening onto the courtyard patio.",
  },
  {
    category: "Spa",
    title: "Glow Spa",
    tabLabel: "Glow Spa",
    copy: "A full menu of manicures, pedicures, massage therapies and professional hair services. Feeling like yourself is part of the recovery.",
    img: glowSpa,
    alt: "A Glow Spa salon station with a manicure chair.",
  },
  {
    category: "Therapy",
    title: "Rapid Recovery Gym",
    tabLabel: "Recovery Gym",
    copy: "In-house physical, occupational and speech therapists build the plan around your goals — and work it with you every day.",
    img: therapyGym,
    alt: "A therapist and guest mid-session in the rehabilitation gym.",
  },
  {
    category: "Quiet",
    title: "Onsite Chapel",
    tabLabel: "Onsite Chapel",
    copy: "A quiet room of your own, whenever you need it — for prayer, for family, or for a moment away from the day.",
    img: chapel,
    alt: "The onsite chapel in quiet natural light.",
  },
];

export function V3Tour() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i <= 0 ? ROOMS.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i >= ROOMS.length - 1 ? 0 : i + 1));

  return (
    <section className="section section--alt" id="tour" data-chapter="3">
      <div className="wrap">
        <div className="tour__head">
          <div>
            <p className="eyebrow" data-reveal style={{ marginBottom: "30px" }}>
              03 — Take the tour
            </p>
            <h2 className="h2" style={{ maxWidth: "18ch" }}>
              <span className="mask">
                <span>Six rooms that explain</span>
              </span>
              <span className="mask">
                <span>
                  the <em>difference.</em>
                </span>
              </span>
            </h2>
          </div>
          <div className="tour__count" data-reveal data-delay="140">
            <span>
              <b id="tour-num">{String(activeIdx + 1).padStart(2, "0")}</b> / 06
            </span>
            <span style={{ display: "flex", gap: "10px" }}>
              <button className="iconbtn" onClick={prev} aria-label="Previous room">
                ←
              </button>
              <button className="iconbtn" onClick={next} aria-label="Next room">
                →
              </button>
            </span>
          </div>
        </div>

        <div className="tour" data-reveal data-delay="80">
          <div className="tour__stage" id="tourstage">
            {ROOMS.map((room, i) => (
              <img
                key={room.title}
                className={activeIdx === i ? "is-on" : ""}
                src={room.img}
                width="1200"
                height="750"
                loading="lazy"
                alt={room.alt}
              />
            ))}
          </div>

          <div className="tour__aside">
            <div className="tour__panels" id="tourpanels">
              {ROOMS.map((room, i) => (
                <article
                  key={room.title}
                  className={activeIdx === i ? "is-on" : ""}
                  id={`tp-${i}`}
                  role="tabpanel"
                  aria-labelledby={`tt-${i}`}
                  tabIndex={0}
                >
                  <span>{room.category}</span>
                  <h3 className="h3">{room.title}</h3>
                  <p className="body">{room.copy}</p>
                </article>
              ))}
            </div>

            <div className="tour__tabs" id="tourtabs" role="tablist" aria-label="Resort spaces" aria-orientation="vertical">
              {ROOMS.map((room, i) => (
                <button
                  key={room.title}
                  role="tab"
                  id={`tt-${i}`}
                  aria-controls={`tp-${i}`}
                  aria-selected={activeIdx === i}
                  tabIndex={activeIdx === i ? 0 : -1}
                  onClick={() => setActiveIdx(i)}
                >
                  {room.tabLabel}
                  <i aria-hidden="true"></i>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
