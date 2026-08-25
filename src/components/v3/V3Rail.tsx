import { useState, useEffect } from "react";

const CHAPTERS = [
  { id: "top", num: "0", label: "Arrival" },
  { id: "belief", num: "1", label: "Belief" },
  { id: "care", num: "2", label: "Care" },
  { id: "tour", num: "3", label: "Resort" },
  { id: "stories", num: "4", label: "Stories" },
  { id: "visit", num: "5", label: "Visit" },
];

export function V3Rail() {
  const [activeChap, setActiveChap] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);

      const sections = CHAPTERS.map((c) => document.getElementById(c.id));
      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveChap(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`rail ${visible ? "is-in" : ""}`} id="rail" aria-label="Page sections">
      {CHAPTERS.map((c, i) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          data-chap={c.num}
          aria-current={activeChap === i ? "true" : undefined}
        >
          <span>{c.label}</span>
          <i aria-hidden="true"></i>
        </a>
      ))}
    </nav>
  );
}
