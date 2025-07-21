import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const ctaRef = useRef<HTMLDivElement>(null);

  const handleDownloadClick = () => {
    toast({ title: t("cta.download_toast") });
    setTimeout(() => {
      ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onDownloadClick={handleDownloadClick} />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialSection />
      <CTASection ref={ctaRef} />
      <Footer />
    </div>
  );
};

export default Index;
