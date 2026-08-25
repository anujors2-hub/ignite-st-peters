import { useState, useEffect } from "react";

export function V3StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`stickybar ${visible ? "is-in" : ""}`} id="stickybar">
      <a href="tel:+16362261900" data-cta="call-sticky">
        Call
      </a>
      <a href="#visit" data-cta="tour-sticky">
        Schedule a Tour
      </a>
    </div>
  );
}
