import { useState, type FormEvent } from "react";
import { ADDRESS, MAP_EMBED, MAP_URL, PHONE, PHONE_HREF } from "./data";
import { Reveal } from "./V2Reveal";

export function V2Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    const form = e.currentTarget;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({}));
      if (data.success) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="visit" className="bg-v2-beige">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <p className="v2-eyebrow">Plan Your Visit</p>
          <div className="v2-rule my-6 w-24" />
          <h2 className="font-v2-display text-4xl sm:text-5xl lg:text-[3.8rem]">
            Schedule a
            <br />
            <span className="italic">private tour.</span>
          </h2>
          <p className="mt-6 max-w-lg text-v2-muted">
            Tell us a little about your needs and our Director of Hospitality will be in touch — often the same day.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <div className="flex gap-4 border-t border-v2-ink/12 pt-5">
              <span className="v2-eyebrow w-24 shrink-0">Call</span>
              <a href={PHONE_HREF} className="transition hover:text-v2-ember">
                {PHONE}
              </a>
            </div>
            <div className="flex gap-4 border-t border-v2-ink/12 pt-5">
              <span className="v2-eyebrow w-24 shrink-0">Visit</span>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-v2-ember"
              >
                5101 Executive Centre Parkway,
                <br />
                St. Peters, MO 63376
              </a>
            </div>
            <div className="flex gap-4 border-t border-b border-v2-ink/12 py-5">
              <span className="v2-eyebrow w-24 shrink-0">Tours</span>
              <span>Daily, 7 days a week</span>
            </div>
          </div>

          <div className="mt-8 aspect-[16/10] w-full overflow-hidden">
            <iframe
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Ignite Medical Resort St. Peters"
              src={MAP_EMBED}
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          {!sent ? (
            <form id="v2-lead-form" onSubmit={onSubmit} className="bg-v2-cream p-8 sm:p-10">
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
              <input type="hidden" name="source" value="st-peters-v2-landing-page" />
              <input type="hidden" name="subject" value="New tour request — Ignite St. Peters V2" />

              <p className="font-v2-display text-3xl">Request Information</p>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="v2-eyebrow" htmlFor="v2-name">Name</label>
                  <input
                    id="v2-name"
                    name="name"
                    required
                    type="text"
                    className="mt-2 w-full border-b border-v2-ink/12 bg-transparent py-3 outline-none transition focus:border-v2-ember"
                    placeholder="Full name"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="v2-eyebrow" htmlFor="v2-email">Email</label>
                    <input
                      id="v2-email"
                      name="email"
                      required
                      type="email"
                      className="mt-2 w-full border-b border-v2-ink/12 bg-transparent py-3 outline-none transition focus:border-v2-ember"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="v2-eyebrow" htmlFor="v2-phone">Phone</label>
                    <input
                      id="v2-phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full border-b border-v2-ink/12 bg-transparent py-3 outline-none transition focus:border-v2-ember"
                      placeholder="(636) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="v2-eyebrow" htmlFor="v2-interest">I'm interested in</label>
                  <select
                    id="v2-interest"
                    name="interest"
                    className="mt-2 w-full border-b border-v2-ink/12 bg-transparent py-3 outline-none transition focus:border-v2-ember"
                  >
                    <option>Short-term rehabilitation</option>
                    <option>Long-term care</option>
                    <option>Specialty clinical program</option>
                    <option>A private tour</option>
                    <option>Careers</option>
                  </select>
                </div>

                <div>
                  <label className="v2-eyebrow" htmlFor="v2-msg">Message</label>
                  <textarea
                    id="v2-msg"
                    name="message"
                    rows={4}
                    className="mt-2 w-full border-b border-v2-ink/12 bg-transparent py-3 outline-none transition focus:border-v2-ember"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-v2-ink py-4 text-[11px] tracking-[.24em] uppercase text-v2-cream transition hover:bg-v2-ember"
                >
                  Send Request
                </button>

                {error && (
                  <p className="text-sm text-v2-ember">
                    Something went wrong — please call us at {PHONE}.
                  </p>
                )}

                <p className="text-xs text-v2-muted">
                  We accept Medicare, Insurance, Private Pay and Medicaid.
                </p>
              </div>
            </form>
          ) : (
            <div className="bg-v2-cream p-10 text-center">
              <p className="font-v2-display text-4xl">Thank you.</p>
              <p className="mt-3 text-v2-muted">
                We received your request and will be in touch shortly.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
