import therapyGym from "@/assets/v2/therapy-gym.jpg";

export function V2Innovation() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={therapyGym}
        alt="Ignite Medical Resorts therapy gym"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#241D18]/75"></div>
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 py-24 lg:py-36 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 reveal">
          <p className="eyebrow text-[#F5B335]">Igniting Innovation</p>
          <h2 className="display text-white text-4xl sm:text-5xl lg:text-[4.2rem] mt-6">
            World-class outcomes,<br />
            <span className="italic">world-class technology.</span>
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 reveal d1">
          <p className="text-[#F2ECE2]/85 text-lg font-light leading-relaxed">
            Our St. Peters location features the latest physical therapy techniques supported by advanced electronic
            medical records, including specialized wound care software. Patients benefit from continuous monitoring of
            heart rate, respiratory function and oxygen saturation, along with proactive fall and wound prevention.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="border-t border-white/20 pt-4">
              <p className="text-white text-sm tracking-[.18em] uppercase">Onsite Pharmacy</p>
              <p className="text-[#E7DDCE]/65 text-sm mt-2">Immediate access to medications.</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-white text-sm tracking-[.18em] uppercase">In-House Lab</p>
              <p className="text-[#E7DDCE]/65 text-sm mt-2">Diagnostics that adjust plans in real time.</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-white text-sm tracking-[.18em] uppercase">Advanced EMR</p>
              <p className="text-[#E7DDCE]/65 text-sm mt-2">Precision records across every discipline.</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-white text-sm tracking-[.18em] uppercase">Fall Prevention</p>
              <p className="text-[#E7DDCE]/65 text-sm mt-2">Proactive monitoring, day and night.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
