import { useState, useEffect, useRef } from "react";
import therapyImage from "@/assets/guest-story.jpg";

export function V3Outcomes() {
  const [count92, setCount92] = useState(0);
  const [count7, setCount7] = useState(0);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);

          const dur = 1400;
          const startTime = performance.now();

          const frame = (now: number) => {
            const progress = Math.min((now - startTime) / dur, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount92(Math.floor(ease * 92));
            setCount7(Math.floor(ease * 7));
            if (progress < 1) requestAnimationFrame(frame);
            else {
              setCount92(92);
              setCount7(7);
            }
          };
          requestAnimationFrame(frame);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [animated]);

  return (
    <section ref={sectionRef} className="section section--alt" aria-label="Outcomes">
      <div className="wrap">
        <dl className="statgrid">
          <div data-reveal>
            <dd>
              <b>{count92}%</b>
              <span>
                Return home <abbr title="Figure pending clinical sign-off">*</abbr>
              </span>
            </dd>
          </div>
          <div data-reveal data-delay="90">
            <dd>
              <b>{count7}</b>
              <span>Specialty programs</span>
            </dd>
          </div>
          <div data-reveal data-delay="180">
            <dd>
              <b>4.8</b>
              <span>Guest rating</span>
            </dd>
          </div>
          <div data-reveal data-delay="270">
            <dd>
              <b>
                24<small>/7</small>
              </b>
              <span>Clinical monitoring</span>
            </dd>
          </div>
        </dl>

        <div className="split split--media" style={{ marginTop: "clamp(70px,9vw,140px)" }}>
          <div className="frame frame--4x5" data-clip>
            <img
              className="frame__zoom"
              src={therapyImage}
              width="900"
              height="1125"
              loading="lazy"
              alt="A physical therapist steadying a guest during a walking session."
            />
          </div>
          <div>
            <h2 className="h2" style={{ marginBottom: "40px", maxWidth: "21ch" }}>
              <span className="mask">
                <span>Rehabilitation, without</span>
              </span>
              <span className="mask">
                <span>giving up the life</span>
              </span>
              <span className="mask">
                <span>
                  <em>you like.</em>
                </span>
              </span>
            </h2>
            <p className="lede" data-reveal data-delay="120" style={{ marginBottom: "26px", maxWidth: "58ch" }}>
              Residents of St.&nbsp;Peters and the surrounding communities rehab in a five-star hotel environment:
              amenity-rich private rooms, a Starbucks café, an onsite restaurant with an executive chef, a full-service
              spa, and an onsite chapel.
            </p>
            <p className="lede" data-reveal data-delay="200" style={{ marginBottom: "40px", maxWidth: "58ch" }}>
              We've merged advanced physical therapy with luxuries unique to the industry — including an always-available
              Director of Hospitality ready to provide concierge services and to keep loved ones updated on your
              progress.
            </p>
            <p className="footnote" data-reveal data-delay="260">
              * Return-to-home rate to be confirmed with the clinical team before publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
