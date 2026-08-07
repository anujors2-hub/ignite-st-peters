import { useState, type FormEvent } from "react";
import { ADDRESS, MAP_URL, PHONE, PHONE_HREF } from "./data";
import { Reveal } from "./Reveal";

const FIELDS = [
  { name: "name", label: "Your name", type: "text", placeholder: "Jane Doe" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "(636) 000-0000" },
  { name: "email", label: "Email", type: "email", placeholder: "jane@email.com" },
  { name: "relation", label: "Relationship to guest", type: "text", placeholder: "Daughter, spouse, self…" },
];

export function TourFooter() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <footer id="visit" className="bg-ink pt-28 lg:pt-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
          <Reveal>
            <p className="eyebrow mb-6 text-ember">Plan your visit</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] text-on-ink">
              Come see it for yourself.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-on-ink-muted">
              Tours run seven days a week. Bring the family, sit by the fire pit, meet the therapy
              team, and ask us anything.
            </p>

            <dl className="mt-12 space-y-8 border-t border-on-ink/15 pt-10">
              <div>
                <dt className="eyebrow text-on-ink-muted">Call us</dt>
                <dd className="mt-2">
                  <a href={PHONE_HREF} className="font-display text-4xl text-on-ink transition-colors hover:text-ember-soft">
                    {PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-on-ink-muted">Visit us</dt>
                <dd className="mt-2">
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-2xl leading-snug text-on-ink transition-colors hover:text-ember-soft"
                  >
                    {ADDRESS}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-on-ink-muted">Tour hours</dt>
                <dd className="mt-2 text-base text-on-ink-muted">Daily, 8:00 AM – 7:00 PM</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="border border-on-ink/15 p-8 lg:p-12">
              <p className="eyebrow text-ember">Request a private tour</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {FIELDS.map((field) => (
                  <label key={field.name} className="block">
                    <span className="eyebrow text-[0.6rem] text-on-ink-muted">{field.label}</span>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.name !== "email"}
                      className="mt-3 w-full border-b border-on-ink/25 bg-transparent pb-3 text-on-ink placeholder:text-on-ink-muted/50 focus:border-ember focus:outline-none"
                    />
                  </label>
                ))}
                <label className="block sm:col-span-2">
                  <span className="eyebrow text-[0.6rem] text-on-ink-muted">How can we help?</span>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about the care you're looking for."
                    className="mt-3 w-full resize-none border-b border-on-ink/25 bg-transparent pb-3 text-on-ink placeholder:text-on-ink-muted/50 focus:border-ember focus:outline-none"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="eyebrow mt-10 w-full rounded-full bg-ember px-8 py-4 text-primary-foreground transition-colors hover:bg-ember-soft hover:text-ink"
              >
                {sent ? "Thank you — we'll call you shortly" : "Request my tour"}
              </button>
              <p className="mt-4 text-xs text-on-ink-muted">
                Demo form — not yet connected to a mailbox.
              </p>
            </form>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-6 border-t border-on-ink/15 py-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <p className="text-xs leading-relaxed text-on-ink-muted/80">
            Ignite Medical Resorts ® is a service mark owned by an Illinois Corporation
            (“Registrant”), but used by a group of limited liability companies and corporations.
            The Registrant provides consulting and marketing services and does not own, operate,
            manage or control the operations of any of the individual facilities.
          </p>
          <div className="flex gap-6">
            {["Facebook", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#top"
                className="eyebrow text-[0.6rem] text-on-ink-muted transition-colors hover:text-ember-soft"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
