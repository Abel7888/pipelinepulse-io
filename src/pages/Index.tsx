import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FunctionalitySection from "@/components/FunctionalitySection";
import ValueSection from "@/components/ValueSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <FunctionalitySection />
      <ValueSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default Index;