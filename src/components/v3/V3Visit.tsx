import { useState } from "react";
import exteriorDay from "@/assets/courtyard.jpg";

interface V3VisitProps {
  textSize: "standard" | "large";
  setTextSize: (s: "standard" | "large") => void;
  motion: "full" | "calm";
  setMotion: (m: "full" | "calm") => void;
}

export function V3Visit({ textSize, setTextSize, motion, setMotion }: V3VisitProps) {
  return (
    <section className="section section--alt visit" id="visit" data-chapter="5">
      <div className="wrap">
        <p className="eyebrow" data-reveal style={{ marginBottom: "clamp(34px,4vw,56px)" }}>
          05 — Plan your visit
        </p>
        <h2 className="h2 h2--xl" style={{ marginBottom: "clamp(50px,6vw,88px)" }}>
          <span className="mask">
            <span>Come see it</span>
          </span>
          <span className="mask">
            <span>
              before you <em>decide.</em>
            </span>
          </span>
        </h2>

        <div className="split split--even">
          <div>
            <p className="lede" data-reveal style={{ marginBottom: "44px", maxWidth: "48ch" }}>
              Tours run seven days a week, and we welcome unannounced visits. Bring your questions — and your family.
            </p>
            <div className="visit__actions" data-reveal data-delay="100">
              <a className="btn btn--primary" href="tel:+16362261900" data-cta="call-visit">
                Call 636&nbsp;226&nbsp;1900
              </a>
              <a
                className="btn btn--ghost"
                href="https://maps.app.goo.gl/CsEBBzvy5cbjAfKV7"
                target="_blank"
                rel="noopener noreferrer"
                data-cta="directions"
              >
                Get Directions
              </a>
            </div>
            <dl className="visit__meta" data-reveal data-delay="160">
              <div>
                <dt>Address</dt>
                <dd>
                  <a href="https://maps.app.goo.gl/CsEBBzvy5cbjAfKV7" target="_blank" rel="noopener noreferrer">
                    5101 Executive Centre Parkway<br />St. Peters, MO 63376
                  </a>
                </dd>
              </div>
              <div>
                <dt>Accepted</dt>
                <dd className="chips">
                  <span>Medicare</span>
                  <span>Medicaid</span>
                  <span>Insurance</span>
                  <span>Private Pay</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="frame frame--4x3" data-clip>
            <img
              className="frame__zoom"
              src={exteriorDay}
              width="1200"
              height="900"
              loading="lazy"
              alt="The resort entrance in daylight."
            />
          </div>
        </div>

        <footer className="ftr">
          <p className="logo" style={{ color: "var(--ink-alt)" }}>
            <b>IGNITE</b>
            <i aria-hidden="true"></i>
            <span>MEDICAL RESORTS</span>
          </p>
          <nav aria-label="Footer">
            <a href="/our-resorts.htm">Resorts</a>
            <a href="/in-the-news.htm">In the News</a>
            <a href="/join-team-ignite.htm">Careers</a>
            <a href="/privacy-policy.htm">Privacy</a>
            <a href="/web-accessibility.htm">Accessibility</a>
          </nav>
          <div className="prefs">
            <button
              id="pref-text"
              aria-pressed={textSize === "large"}
              onClick={() => setTextSize(textSize === "large" ? "standard" : "large")}
            >
              Larger text
            </button>
            <button
              id="pref-motion"
              aria-pressed={motion === "calm"}
              onClick={() => setMotion(motion === "calm" ? "full" : "calm")}
            >
              Reduce motion
            </button>
          </div>
        </footer>
        <p className="legal">
          Ignite Medical Resorts ® is a service mark owned by an Illinois Corporation (“Registrant”), but used by a
          group of limited liability companies and corporations. The Registrant provides consulting and marketing
          services and does not own, operate, manage or control the operations of any of the individual facilities.
          Each Ignite Medical Resorts facility ® is independently owned and operated. Not all services, programs and
          amenities mentioned herein are available at each Ignite Medical Resorts ® location.
        </p>
      </div>
    </section>
  );
}
