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

  // Main scroll loop & reveals
  useEffect(() => {
    const isCalm = motion === "calm" || window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const prog = document.getElementById("prog");
    const hdr = document.getElementById("hdr");
    const rail = document.getElementById("rail");
    const bar = document.getElementById("stickybar");
    const par = document.getElementById("hero-par");
    const body = document.getElementById("hero-body");
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    const chapters = Array.from(document.querySelectorAll<HTMLElement>("#rail a"));

    let raf: number | null = null;
    let solid = false;
    let barIn = false;
    let chapNow = -1;

    const paint = () => {
      raf = null;
      const y = window.scrollY || 0;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight - vh;

      if (prog) prog.style.width = (docH > 0 ? (y / docH) * 100 : 0).toFixed(2) + "%";

      const wantSolid = y > vh * 0.8;
      if (wantSolid !== solid) {
        solid = wantSolid;
        if (hdr) hdr.classList.toggle("is-solid", wantSolid);
      }

      const wantBar = y > vh * 0.9;
      if (wantBar !== barIn) {
        barIn = wantBar;
        if (bar) bar.classList.toggle("is-in", wantBar);
      }

      if (!isCalm && y < vh * 1.3) {
        if (par) par.style.transform = `translate3d(0, ${(y * 0.18).toFixed(1)}px, 0)`;
        if (body) body.style.transform = `translate3d(0, ${(-y * 0.06).toFixed(1)}px, 0)`;
      }

      let active = 0;
      sections.forEach((s, i) => {
        if (s.getBoundingClientRect().top <= vh * 0.45) active = i;
      });
      if (active !== chapNow) {
        chapNow = active;
        chapters.forEach((c, i) => c.setAttribute("aria-current", i === active ? "true" : "false"));
      }

      if (rail) rail.classList.toggle("is-in", y > vh * 0.6);
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    paint();

    // Reveals logic matching main.js
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".v3-page [data-reveal], .v3-page .mask > span, .v3-page [data-clip]")
    );

    if (isCalm) {
      targets.forEach((el) => el.classList.add("is-in"));
    } else {
      // Hero reveals play on load with delay
      document
        .querySelectorAll<HTMLElement>(".hero [data-reveal], .hero .mask > span")
        .forEach((el) => {
          const wait = parseFloat(el.getAttribute("data-delay") || "0") + 140;
          setTimeout(() => el.classList.add("is-in"), wait);
        });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            io.unobserve(el);
            const wait = parseFloat(el.getAttribute("data-delay") || "0");
            if (!wait) el.classList.add("is-in");
            else setTimeout(() => el.classList.add("is-in"), wait);
          });
        },
        { threshold: 0, rootMargin: "0px 0px -8% 0px" }
      );

      targets.forEach((el) => {
        if (!el.closest(".hero")) {
          io.observe(el);
        }
      });

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        io.disconnect();
      };
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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
