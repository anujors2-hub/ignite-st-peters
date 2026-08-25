import firepitImage from "@/assets/v2/great-room.jpg";

export function V3Statement() {
  return (
    <section className="bleed" aria-label="Extinguishing the stereotype">
      <img src={firepitImage} width="2000" height="1125" loading="lazy" alt="The lobby fire pit at dusk." />
      <div className="bleed__scrim" aria-hidden="true"></div>
      <div className="bleed__body">
        <p className="eyebrow" data-reveal style={{ marginBottom: "34px" }}>
          Extinguishing the stereotype
        </p>
        <h2 className="h2 h2--lg">
          <span className="mask">
            <span>Your place of</span>
          </span>
          <span className="mask">
            <span>
              <em>healing</em> — where
            </span>
          </span>
          <span className="mask">
            <span>recovery meets luxury.</span>
          </span>
        </h2>
        <p className="lede" data-reveal data-delay="260" style={{ fontSize: "calc(19px * var(--tsc))" }}>
          From top-tier private rooms and a specialty coffee café to chef-prepared meals and a full-service spa, every
          detail is designed for comfort and care. Our Director of Hospitality keeps family and friends updated on
          your progress, ensuring peace of mind throughout your stay.
        </p>
      </div>
    </section>
  );
}
