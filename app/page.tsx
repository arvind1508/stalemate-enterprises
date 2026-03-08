import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import PortfolioGallery from "@/components/PortfolioGallery";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServicesGrid from "@/components/ServicesGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection id="about" />
      <ServicesGrid id="services" />
      <PortfolioGallery id="projects" limit={6} />
      <ProcessTimeline id="process" />
      <ContactForm id="contact" />
    </>
  );
}
