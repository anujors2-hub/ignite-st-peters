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
  return (
    <div className="v2-root bg-v2-cream text-v2-ink">
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
