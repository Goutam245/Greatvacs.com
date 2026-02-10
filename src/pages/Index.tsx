import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PriceComparison from "@/components/home/PriceComparison";
import WhyGreatVacs from "@/components/home/WhyGreatVacs";
import ProductCategories from "@/components/home/ProductCategories";
import RiskReversal from "@/components/home/RiskReversal";
import LongevitySection from "@/components/home/LongevitySection";
import SocialProof from "@/components/home/SocialProof";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PriceComparison />
        <WhyGreatVacs />
        <ProductCategories />
        <RiskReversal />
        <LongevitySection />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
