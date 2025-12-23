import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ANCSection from "@/components/ANCSection";
import BatterySection from "@/components/BatterySection";
import DriverSection from "@/components/DriverSection";
import ControlsSection from "@/components/ControlsSection";
import ColorsSection from "@/components/ColorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ANCSection />
      <BatterySection />
      <DriverSection />
      <ControlsSection />
      <ColorsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
