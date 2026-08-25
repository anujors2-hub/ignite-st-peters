import suitePrivate from "@/assets/v2/suite-private.jpg";

export function V2Suites() {
  return (
    <section className="bg-[color:var(--sand)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="img-zoom reveal">
          <img
            src={suitePrivate}
            alt="Private guest suite at Ignite Medical Resorts"
            className="w-full h-[62vh] object-cover"
            loading="lazy"
          />
        </div>
        <div className="reveal d1">
          <p className="eyebrow">The Suites</p>
          <div className="rule w-24 my-6"></div>
          <h2 className="display text-4xl sm:text-5xl lg:text-[4.2rem]">
            Private &amp; adjoining<br />
            <span className="italic">suites.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[color:var(--muted)] font-light max-w-xl">
            Recovery is a journey of both body and mind — and our boutique resort experience is designed to nurture both.
            Guests enjoy private and adjoining suites thoughtfully appointed with recliners, where comfort meets convenience.
          </p>
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-4 text-sm text-[color:var(--ink)]">
            <li className="flex gap-3 border-b border-[color:var(--line)] pb-3">
              <span className="text-[color:var(--ember)]">—</span> Amenity-rich private rooms
            </li>
            <li className="flex gap-3 border-b border-[color:var(--line)] pb-3">
              <span className="text-[color:var(--ember)]">—</span> Adjoining suites available
            </li>
            <li className="flex gap-3 border-b border-[color:var(--line)] pb-3">
              <span className="text-[color:var(--ember)]">—</span> Recliners &amp; hotel linens
            </li>
            <li className="flex gap-3 border-b border-[color:var(--line)] pb-3">
              <span className="text-[color:var(--ember)]">—</span> Made-to-order room service
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
