import { useState } from "react";
import storyPortrait from "@/assets/guest-story.jpg";

const STORIES = [
  {
    quote: "“I dreaded the phone call about where Mom would go after her hip. Then we walked in and there was a café, and a chef, and a woman whose entire job was to text me updates. She came home in five weeks.”",
    author: "Karen M. · Daughter · O'Fallon, MO",
  },
  {
    quote: "“The dialysis was in the building. That one fact changed everything — no van, no waiting, no losing half the day. I could do therapy in the morning and still eat dinner by the fire pit.”",
    author: "Ronald T. · Guest · St. Charles, MO",
  },
  {
    quote: "“My father is a proud man. He would not have accepted a facility. He accepted this, because it felt like a hotel he'd chosen — and the therapists never once let him coast.”",
    author: "Dana W. · Daughter · St. Peters, MO",
  },
];

const AWARDS = [
  { source: "Newsweek", label: "Best Nursing Homes" },
  { source: "U.S. News", label: "Best Short-Term Rehab" },
  { source: "St. Louis Business Journal", label: "Fastest Growing" },
  { source: "Google Reviews", label: "4.8 avg · 300+ reviews" },
];

export function V3Stories() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i <= 0 ? STORIES.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i >= STORIES.length - 1 ? 0 : i + 1));

  return (
    <section className="section" id="stories" data-chapter="4">
      <div className="wrap">
        <p className="eyebrow" data-reveal style={{ marginBottom: "clamp(40px,5vw,76px)" }}>
          04 — Guest stories
        </p>

        <div className="split split--story">
          <div className="frame frame--3x4" data-clip>
            <img
              className="frame__zoom"
              src={storyPortrait}
              width="900"
              height="1200"
              loading="lazy"
              alt="A guest and her daughter sitting together in the resort lounge."
            />
          </div>
          <div>
            <div className="quotes" id="quotes">
              {STORIES.map((story, i) => (
                <figure key={i} className={activeIdx === i ? "is-on" : ""}>
                  <blockquote>{story.quote}</blockquote>
                  <figcaption>{story.author}</figcaption>
                </figure>
              ))}
            </div>
            <div className="quotes__nav">
              <button
                className="iconbtn iconbtn--light"
                onClick={prev}
                aria-label="Previous story"
              >
                ←
              </button>
              <button
                className="iconbtn iconbtn--light"
                onClick={next}
                aria-label="Next story"
              >
                →
              </button>
              <div className="quotes__dots" id="quotedots" role="tablist" aria-label="Guest stories">
                {STORIES.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={activeIdx === i}
                    aria-label={`Story ${i + 1}`}
                    onClick={() => setActiveIdx(i)}
                  >
                    <i aria-hidden="true"></i>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="awards" data-reveal>
          {AWARDS.map((award) => (
            <div key={award.source}>
              <b>{award.source}</b>
              <span>{award.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
