import heroExterior from "@/assets/courtyard.jpg";

export function V3Hero() {
  return (
    <section className="hero" id="top" data-chapter="0">
      <div className="hero__par" id="hero-par">
        <div className="hero__drift">
          <picture>
            <img
              className="hero__media"
              src={heroExterior}
              width="2400"
              height="1350"
              fetchPriority="high"
              alt="The Ignite Medical Resort St. Peters entrance at dusk, warmly lit."
            />
          </picture>
        </div>
      </div>
      <div className="hero__scrim" aria-hidden="true"></div>
      <div className="hero__scrim2" aria-hidden="true"></div>

      <div className="hero__body" id="hero-body">
        <p className="hero__place">
          <span className="mask">
            <span>St.&nbsp;Peters, Missouri</span>
          </span>
        </p>
        <h1 className="display">
          <span className="mask">
            <span>Get your</span>
          </span>
          <span className="mask">
            <span>
              <em>spark</em> back.
            </span>
          </span>
        </h1>
        <div className="hero__foot">
          <p className="lede" data-reveal data-delay="480">
            Skilled nursing and advanced physical therapy, delivered inside a five-star resort. Private suites, a
            Starbucks café, an executive chef, in-house dialysis — and a concierge whose whole job is keeping your
            family close.
          </p>
          <div className="hero__actions" data-reveal data-delay="600">
            <a className="btn btn--primary" href="#visit" data-cta="tour-hero">
              Schedule a Private Tour
            </a>
            <a className="btn btn--ghost" href="tel:+16362261900" data-cta="call-hero">
              Call 636&nbsp;226&nbsp;1900
            </a>
          </div>
        </div>
      </div>

      <div className="hero__cue" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
}
