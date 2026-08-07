import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      data-revealed={revealed}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
