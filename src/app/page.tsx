import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { EquipmentShowcase } from "@/components/home/EquipmentShowcase";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PartnersSlider } from "@/components/home/PartnersSlider";
import { StatsCounter } from "@/components/home/StatsCounter";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { LatestTech } from "@/components/home/LatestTech";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <EquipmentShowcase />
      <ServiceAreas />
      <ServicesGrid />
      <WhyChooseUs />
      <PartnersSlider />
      <StatsCounter />
      <FeaturedProjects />
      <Testimonials />
      <LatestTech />
      <FAQSection />
      <ContactSection />
    </>
  );
}
