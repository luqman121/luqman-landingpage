import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import IntegrationsSection from "@/components/IntegrationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <IntegrationsSection />
      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
