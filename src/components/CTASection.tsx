import { Button } from "@/components/ui/button";
import { Download, Smartphone, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CTASection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-orange relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-white font-inter leading-tight">
              {t("cta.title")}
              <br />
              <span className="text-brand-orange-light">{t("cta.subtitle")}</span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-white/90 shadow-large transition-all duration-300 hover:shadow-xl hover:scale-105 group font-medium px-8 py-4"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              {t("cta.app_store")}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue transition-all duration-300 hover:scale-105 font-medium px-8 py-4"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              {t("cta.google_play")}
            </Button>
          </div>

          {/* Additional info */}
          <div className="pt-8 space-y-4">
            <div className="flex flex-wrap gap-6 justify-center text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                {t("cta.features.free")}
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                {t("cta.features.no_ads")}
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                {t("cta.features.offline")}
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                {t("cta.features.compatible")}
              </div>
            </div>
            
            <p className="text-white/70 text-sm">
              {t("cta.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};