import { useState, type FormEvent } from "react";

export function V2Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="visit" className="bg-[color:var(--beige)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-14">
        <div className="reveal">
          <p className="eyebrow">Plan Your Visit</p>
          <div className="rule w-24 my-6"></div>
          <h2 className="display text-4xl sm:text-5xl lg:text-[3.8rem]">
            Schedule a<br />
            <span className="italic">private tour.</span>
          </h2>
          <p className="mt-6 text-[color:var(--muted)] max-w-lg">
            Tell us a little about your needs and our Director of Hospitality will be in touch — often the same day.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <div className="flex gap-4 border-t border-[color:var(--line)] pt-5">
              <span className="eyebrow w-24 shrink-0">Call</span>
              <a className="hover:text-[color:var(--ember)] transition" href="tel:+16362261900">
                636-226-1900
              </a>
            </div>
            <div className="flex gap-4 border-t border-[color:var(--line)] pt-5">
              <span className="eyebrow w-24 shrink-0">Visit</span>
              <a
                className="hover:text-[color:var(--ember)] transition"
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/CsEBBzvy5cbjAfKV7"
              >
                5101 Executive Centre Parkway,<br />St. Peters, MO 63376
              </a>
            </div>
            <div className="flex gap-4 border-t border-b border-[color:var(--line)] py-5">
              <span className="eyebrow w-24 shrink-0">Tours</span>
              <span>Daily, 7 days a week</span>
            </div>
          </div>

          <div className="mt-8 w-full aspect-[16/10] overflow-hidden">
            <iframe
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Ignite Medical Resort St. Peters"
              src="https://maps.google.com/maps?q=5101+Executive+Centre+Parkway%2C+St.+Peters%2C+MO+63376&amp;z=15&amp;output=embed"
            ></iframe>
          </div>
        </div>

        <div className="reveal d1">
          {!submitted ? (
            <form id="lead-form" onSubmit={handleSubmit} className="bg-[color:var(--cream)] p-8 sm:p-10">
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
              <input type="hidden" name="source" value="st-peters-landing-page" />
              <input type="hidden" name="subject" value="New tour request — Ignite St. Peters" />
              <p className="display text-3xl">Request Information</p>
              <div className="mt-8 space-y-5">
                <div>
                  <label className="eyebrow" htmlFor="f-name">
                    Name
                  </label>
                  <input
                    id="f-name"
                    name="name"
                    required
                    type="text"
                    className="mt-2 w-full bg-transparent border-b border-[color:var(--line)] py-3 outline-none focus:border-[color:var(--ember)] transition"
                    placeholder="Full name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="eyebrow" htmlFor="f-email">
                      Email
                    </label>
                    <input
                      id="f-email"
                      name="email"
                      required
                      type="email"
                      className="mt-2 w-full bg-transparent border-b border-[color:var(--line)] py-3 outline-none focus:border-[color:var(--ember)] transition"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="eyebrow" htmlFor="f-phone">
                      Phone
                    </label>
                    <input
                      id="f-phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full bg-transparent border-b border-[color:var(--line)] py-3 outline-none focus:border-[color:var(--ember)] transition"
                      placeholder="(636) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="eyebrow" htmlFor="f-interest">
                    I'm interested in
                  </label>
                  <select
                    id="f-interest"
                    name="interest"
                    className="mt-2 w-full bg-transparent border-b border-[color:var(--line)] py-3 outline-none focus:border-[color:var(--ember)] transition"
                  >
                    <option>Short-term rehabilitation</option>
                    <option>Long-term care</option>
                    <option>Specialty clinical program</option>
                    <option>A private tour</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div>
                  <label className="eyebrow" htmlFor="f-msg">
                    Message
                  </label>
                  <textarea
                    id="f-msg"
                    name="message"
                    rows={4}
                    className="mt-2 w-full bg-transparent border-b border-[color:var(--line)] py-3 outline-none focus:border-[color:var(--ember)] transition"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#241D18] text-[#FBF8F3] py-4 text-[11px] tracking-[.24em] uppercase hover:bg-[color:var(--ember)] transition cursor-pointer"
                >
                  Send Request
                </button>
                {error && (
                  <p id="lead-error" className="text-sm text-[color:var(--ember)]">
                    Something went wrong — please call us at 636-226-1900.
                  </p>
                )}
                <p className="text-xs text-[color:var(--muted)]">
                  We accept Medicare, Insurance, Private Pay and Medicaid.
                </p>
              </div>
            </form>
          ) : (
            <div id="lead-form-success" className="bg-[color:var(--cream)] p-10 text-center">
              <p className="display text-4xl">Thank you.</p>
              <p className="mt-3 text-[color:var(--muted)]">We received your request and will be in touch shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
