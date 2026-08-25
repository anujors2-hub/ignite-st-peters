import suiteImage from "@/assets/v2/suite-private.jpg";
import { Reveal } from "./V2Reveal";

const FEATURES = [
  "Amenity-rich private rooms",
  "Adjoining suites available",
  "Recliners & hotel linens",
  "Made-to-order room service",
];

export function V2Suites() {
  return (
    <section className="bg-v2-sand">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal className="group overflow-hidden">
          <img
            src={suiteImage}
            alt="Private guest suite at Ignite Medical Resorts"
            className="h-[62vh] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="v2-eyebrow">The Suites</p>
          <div className="v2-rule my-6 w-24" />
          <h2 className="font-v2-display text-4xl sm:text-5xl lg:text-[4.2rem]">
            Private &amp; adjoining
            <br />
            <span className="italic">suites.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-v2-muted">
            Recovery is a journey of both body and mind — and our boutique resort experience is designed to nurture both.
            Guests enjoy private and adjoining suites thoughtfully appointed with recliners, where comfort meets convenience.
          </p>

          <ul className="mt-10 grid gap-x-10 gap-y-4 text-sm text-v2-ink sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 border-b border-v2-ink/12 pb-3"
              >
                <span className="text-v2-ember">—</span>
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
