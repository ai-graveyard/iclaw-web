import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import VisionSection from "./components/VisionSection";
import ProductSection from "./components/ProductSection";
import IClawDetailSection from "./components/IClawDetailSection";
import UClawDetailSection from "./components/UClawDetailSection";
import FeaturesSection from "./components/FeaturesSection";
import AIPowerSection from "./components/AIPowerSection";
import UseCasesSection from "./components/UseCasesSection";
import DesignSection from "./components/DesignSection";
import SecuritySection from "./components/SecuritySection";
import EcosystemSection from "./components/EcosystemSection";
import ComparisonSection from "./components/ComparisonSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <VisionSection />
      <ProductSection />
      <IClawDetailSection />
      <UClawDetailSection />
      <FeaturesSection />
      <AIPowerSection />
      <UseCasesSection />
      <DesignSection />
      <SecuritySection />
      <EcosystemSection />
      <ComparisonSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
