import { useEffect } from "react";
import { V2SiteHeader } from "@/components/v2/V2SiteHeader";
import { V2Hero } from "@/components/v2/V2Hero";
import { V2Marquee } from "@/components/v2/V2Marquee";
import { V2Intro } from "@/components/v2/V2Intro";
import { V2Suites } from "@/components/v2/V2Suites";
import { V2Programs } from "@/components/v2/V2Programs";
import { V2Innovation } from "@/components/v2/V2Innovation";
import { V2Amenities } from "@/components/v2/V2Amenities";
import { V2Dining } from "@/components/v2/V2Dining";
import { V2Gallery } from "@/components/v2/V2Gallery";
import { V2SparkBack } from "@/components/v2/V2SparkBack";
import { V2Contact } from "@/components/v2/V2Contact";
import { V2Footer } from "@/components/v2/V2Footer";

export default function V2App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".v2-page .reveal");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => io.unobserve(el));
      io.disconnect();
    };
  }, []);

  return (
    <div className="v2-page antialiased">
      <V2SiteHeader />
      <main>
        <V2Hero />
        <V2Marquee />
        <V2Intro />
        <V2Suites />
        <V2Programs />
        <V2Innovation />
        <V2Amenities />
        <V2Dining />
        <V2Gallery />
        <V2SparkBack />
        <V2Contact />
      </main>
      <V2Footer />
    </div>
  );
}
