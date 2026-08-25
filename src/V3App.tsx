import { useState, useEffect } from "react";
import { V3Header } from "@/components/v3/V3Header";
import { V3Rail } from "@/components/v3/V3Rail";
import { V3Hero } from "@/components/v3/V3Hero";
import { V3Pillars } from "@/components/v3/V3Pillars";
import { V3Belief } from "@/components/v3/V3Belief";
import { V3Outcomes } from "@/components/v3/V3Outcomes";
import { V3Programs } from "@/components/v3/V3Programs";
import { V3Tour } from "@/components/v3/V3Tour";
import { V3Statement } from "@/components/v3/V3Statement";
import { V3Stories } from "@/components/v3/V3Stories";
import { V3Visit } from "@/components/v3/V3Visit";
import { V3StickyBar } from "@/components/v3/V3StickyBar";

export default function V3App() {
  const [textSize, setTextSize] = useState<"standard" | "large">(() => {
    try {
      const saved = localStorage.getItem("ignite.prefs.v3.textsize");
      return saved === "large" ? "large" : "standard";
    } catch {
      return "standard";
    }
  });

  const [motion, setMotion] = useState<"full" | "calm">(() => {
    try {
      const saved = localStorage.getItem("ignite.prefs.v3.motion");
      return saved === "calm" ? "calm" : "full";
    } catch {
      return "full";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("ignite.prefs.v3.textsize", textSize);
    } catch {}
  }, [textSize]);

  useEffect(() => {
    try {
      localStorage.setItem("ignite.prefs.v3.motion", motion);
    } catch {}
  }, [motion]);

  // Scroll progress & reveals
  useEffect(() => {
    const handleScroll = () => {
      const prog = document.getElementById("prog");
      if (prog) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? (window.scrollY / h) * 100 : 0;
        prog.style.width = `${p}%`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Reveals observer
    const targets = document.querySelectorAll(".v3-page [data-reveal], .v3-page .mask > span, .v3-page [data-clip]");

    if (motion === "calm") {
      targets.forEach((el) => el.classList.add("is-in"));
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseFloat(el.getAttribute("data-delay") || "0");
            if (delay > 0) {
              setTimeout(() => el.classList.add("is-in"), delay);
            } else {
              el.classList.add("is-in");
            }
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        const delay = parseFloat((el as HTMLElement).getAttribute("data-delay") || "0");
        if (delay > 0) {
          setTimeout(() => el.classList.add("is-in"), delay);
        } else {
          el.classList.add("is-in");
        }
      } else {
        io.observe(el);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      io.disconnect();
    };
  }, [motion]);

  return (
    <div
      className="v3-page"
      data-palette="ivory"
      data-textsize={textSize === "large" ? "large" : undefined}
      data-motion={motion === "calm" ? "calm" : undefined}
    >
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true"></div>
      <div className="prog" id="prog" aria-hidden="true"></div>

      <V3Header />
      <V3Rail />

      <main id="main">
        <V3Hero />
        <V3Pillars />
        <V3Belief />
        <V3Outcomes />
        <V3Programs />
        <V3Tour />
        <V3Statement />
        <V3Stories />
        <V3Visit
          textSize={textSize}
          setTextSize={setTextSize}
          motion={motion}
          setMotion={setMotion}
        />
      </main>

      <V3StickyBar />
    </div>
  );
}
