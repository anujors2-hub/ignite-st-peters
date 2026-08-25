import { useState } from "react";
import therapyGym from "@/assets/v2/therapy-gym.jpg";
import therapyTech from "@/assets/v2/therapy-tech.jpg";
import teamIgnite from "@/assets/v2/team-ignite.jpg";
import guestStory from "@/assets/guest-story.jpg";
import conciergeDesk from "@/assets/v2/concierge-desk.jpg";
import suitePrivate from "@/assets/v2/suite-private.jpg";
import heroLobby from "@/assets/v2/hero-lobby.jpg";

const PROGRAMS = [
  {
    num: "01",
    title: "Orthopedic Rehabilitation",
    copy: "Joint replacement, fracture and post-surgical recovery, with daily physical and occupational therapy toward getting you back on your feet.",
    img: therapyTech,
    alt: "A therapist guiding a guest through joint-replacement recovery exercises.",
  },
  {
    num: "02",
    title: "Stroke Recovery",
    copy: "Physical, occupational and speech therapy, coordinated by one team around a single goal: regaining independence at home.",
    img: teamIgnite,
    alt: "A speech therapist working one-to-one with a guest at a table.",
  },
  {
    num: "03",
    title: "Cardiac Care",
    copy: "Continuous monitoring of heart rate and oxygen saturation, with conditioning built precisely to your tolerance.",
    img: therapyGym,
    alt: "A nurse checking a guest's heart-rate monitor during light conditioning.",
  },
  {
    num: "04",
    title: "Pulmonary Rehabilitation",
    copy: "Respiratory function monitored around the clock, with breathing and endurance work every single day.",
    img: guestStory,
    alt: "A guest practising breathing exercises with a respiratory therapist.",
  },
  {
    num: "05",
    title: "Wound Care",
    copy: "Specialized wound care tailored to the individual, backed by proactive prevention protocols and same-day adjustments.",
    img: conciergeDesk,
    alt: "A clinician's gloved hands preparing a sterile dressing tray.",
  },
  {
    num: "06",
    title: "Infection Management",
    copy: "In-house lab analyzers and diagnostics mean our team can identify an infection and adjust treatment the same day.",
    img: heroLobby,
    alt: "The in-house laboratory analyser running same-day diagnostics.",
  },
  {
    num: "07",
    title: "Renal Disease & Dialysis",
    copy: "In-house dialysis, so treatment never means a transport van, a waiting room and a lost afternoon.",
    img: suitePrivate,
    alt: "The in-house dialysis suite with a reclining treatment chair.",
  },
];

const SPECS = [
  { text: "Advanced electronic medical records", delay: 0 },
  { text: "Continuous cardiac & respiratory monitoring", delay: 60 },
  { text: "Onsite pharmacy", delay: 120 },
  { text: "In-house lab analyzers & diagnostics", delay: 180 },
  { text: "Specialized wound care software", delay: 240 },
  { text: "Proactive fall & wound prevention", delay: 300 },
];

export function V3Programs() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="section" id="care" data-chapter="2">
      <div className="wrap">
        <div className="split split--even" style={{ alignItems: "end", marginBottom: "clamp(48px,6vw,86px)" }}>
          <div>
            <p className="eyebrow" data-reveal style={{ marginBottom: "32px" }}>
              02 — Specialty programs
            </p>
            <h2 className="h2" style={{ maxWidth: "15ch" }}>
              <span className="mask">
                <span>The clinical work</span>
              </span>
              <span className="mask">
                <span>
                  comes <em>first.</em>
                </span>
              </span>
            </h2>
          </div>
          <p
            className="lede"
            data-reveal
            data-delay="140"
            style={{ fontSize: "calc(19px * var(--tsc))", maxWidth: "52ch", color: "rgba(var(--ink-rgb),.76)" }}
          >
            Seven programs, every one delivered on site by our own therapists, on a plan built around your
            capabilities. Select a program to read more.
          </p>
        </div>

        <div className="split split--care">
          <div className="proglist" id="proglist" role="tablist" aria-label="Specialty programs" aria-orientation="vertical">
            {PROGRAMS.map((prog, i) => (
              <button
                key={prog.num}
                role="tab"
                id={`pt-${i}`}
                aria-controls={`pp-${i}`}
                aria-selected={activeIdx === i}
                tabIndex={activeIdx === i ? 0 : -1}
                onClick={() => setActiveIdx(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActiveIdx((prev) => (prev + 1) % PROGRAMS.length);
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActiveIdx((prev) => (prev - 1 + PROGRAMS.length) % PROGRAMS.length);
                  }
                }}
              >
                <i>{prog.num}</i>
                <strong>{prog.title}</strong>
              </button>
            ))}
          </div>

          <div className="progpanel">
            <div className="progpanel__stage" id="progstage">
              {PROGRAMS.map((prog, i) => (
                <img
                  key={prog.num}
                  className={activeIdx === i ? "is-on" : ""}
                  src={prog.img}
                  width="1200"
                  height="900"
                  loading="lazy"
                  alt={prog.alt}
                />
              ))}
            </div>
            <div className="progpanel__copy" id="progcopy">
              {PROGRAMS.map((prog, i) => (
                <article
                  key={prog.num}
                  className={activeIdx === i ? "is-on" : ""}
                  id={`pp-${i}`}
                  role="tabpanel"
                  aria-labelledby={`pt-${i}`}
                  tabIndex={0}
                >
                  <span>Program {prog.num}</span>
                  <p className="body">{prog.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <ul className="speclist" aria-label="Clinical infrastructure">
          {SPECS.map((spec) => (
            <li key={spec.text} data-reveal data-delay={spec.delay || undefined}>
              {spec.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
