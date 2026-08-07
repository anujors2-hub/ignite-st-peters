import { SiteHeader } from "@/components/stpeters/SiteHeader";
import { Hero } from "@/components/stpeters/Hero";
import { OutcomesBand } from "@/components/stpeters/OutcomesBand";
import { Programs } from "@/components/stpeters/Programs";
import { RoomExplorer } from "@/components/stpeters/RoomExplorer";
import { Amenities } from "@/components/stpeters/Amenities";
import { Innovation } from "@/components/stpeters/Innovation";
import { GuestStory } from "@/components/stpeters/GuestStory";
import { Awards } from "@/components/stpeters/Awards";
import { Dining } from "@/components/stpeters/Dining";
import { LongTermCare } from "@/components/stpeters/LongTermCare";
import { TourFooter } from "@/components/stpeters/TourFooter";

export default function App() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <OutcomesBand />
        <Programs />
        <RoomExplorer />
        <Amenities />
        <Innovation />
        <GuestStory />
        <Awards />
        <Dining />
        <LongTermCare />
      </main>
      <TourFooter />
    </div>
  );
}
