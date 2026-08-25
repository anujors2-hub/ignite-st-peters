import igniteLogo from "@/assets/v2/ignite-logo.jpg";

export function V2Footer() {
  return (
    <footer className="bg-[#241D18] text-[#E7DDCE]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={igniteLogo} alt="Ignite Medical Resorts" className="h-12 w-12 object-contain" />
          <p className="display text-3xl mt-6 text-white">
            Ignite Medical Resort<br />
            <span className="italic">St. Peters</span>
          </p>
          <p className="mt-4 text-sm text-[#E7DDCE]/60 max-w-md">
            5101 Executive Centre Parkway, St. Peters, MO 63376 ·{" "}
            <a href="tel:+16362261900" className="text-[#F5B335]">
              636-226-1900
            </a>
          </p>
        </div>
        <div>
          <p className="eyebrow text-[#F5B335]">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-[#E7DDCE]/70">
            <li>
              <a href="#experience" className="hover:text-white transition">
                The Resort
              </a>
            </li>
            <li>
              <a href="#care" className="hover:text-white transition">
                Clinical Care
              </a>
            </li>
            <li>
              <a href="#amenities" className="hover:text-white transition">
                Amenities
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white transition">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-[#F5B335]">Connect</p>
          <ul className="mt-5 space-y-3 text-sm text-[#E7DDCE]/70">
            <li>
              <a
                href="https://www.facebook.com/ignitemedicalresorts/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ignitemedicalresorts/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ignite-medical-resorts/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.ignitemedicalresorts.com/join-team-ignite.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Join Team Ignite
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-8 text-[11px] leading-relaxed text-[#E7DDCE]/45">
          Ignite Medical Resorts® is a service mark owned by an Illinois Corporation, but used by a group of limited
          liability companies and corporations. Each Ignite Medical Resorts facility® is independently owned and
          operated. Not all services, programs and amenities mentioned herein are available at each location.
        </div>
      </div>
    </footer>
  );
}
