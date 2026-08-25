import { MARQUEE_ITEMS } from "./data";

export function V2Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden bg-v2-ink py-4 text-v2-beige">
      <div className="flex w-max animate-v2-marquee gap-16 text-[11px] tracking-[.34em] uppercase opacity-80">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            {i < items.length - 1 && <span className="ml-16">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
