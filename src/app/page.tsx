import { HeroMonolith } from "@/components/home/HeroMonolith";
import { WorkShowcase } from "@/components/home/WorkShowcase";
import { AppsShelf } from "@/components/home/AppsShelf";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { LabSection } from "@/components/home/LabSection";
import { InstrumentBand } from "@/components/home/InstrumentBand";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main id="content">
      <HeroMonolith />
      <WorkShowcase />
      <AppsShelf />
      <ServicesGrid />
      <LabSection />
      <InstrumentBand />
      <ContactSection />
    </main>
  );
}
