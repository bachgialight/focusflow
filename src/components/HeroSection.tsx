import { Button } from "@/components/ui/button";
import { Download, Play, Star } from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue-light via-background to-brand-orange-light">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-blue rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-brand-orange rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-blue rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center bg-brand-blue-light rounded-full px-4 py-2 text-sm font-medium text-brand-blue border border-brand-blue/20">
              <Star className="w-4 h-4 mr-2 fill-current" />
              {t("hero.badge")}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-inter">
              <span className="text-foreground">{t("hero.title")} </span>
              <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
                {t("hero.subtitle")}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("hero.description")}
            </p>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue/90 shadow-medium transition-all duration-300 hover:shadow-large group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              {t("hero.app_store")}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              {t("hero.google_play")}
            </Button>
          </div>

          {/* Language Switcher */}
          <div className="pt-4 flex gap-2 justify-center lg:justify-start">
            <button onClick={() => i18n.changeLanguage("vi")}
              className={`px-3 py-1 rounded ${i18n.language === "vi" ? "bg-brand-blue text-white" : "bg-white text-brand-blue border border-brand-blue"}`}
            >{t("language.vietnamese")}</button>
            <button onClick={() => i18n.changeLanguage("en")}
              className={`px-3 py-1 rounded ${i18n.language === "en" ? "bg-brand-blue text-white" : "bg-white text-brand-blue border border-brand-blue"}`}
            >{t("language.english")}</button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue">50K+</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.users")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue">4.9★</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.rating")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue">100M+</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.minutes")}</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 rounded-3xl blur-2xl scale-110"></div>
            <img 
              src={heroPhoneMockup} 
              alt="FocusFlow App Interface" 
              className="relative z-10 max-w-sm lg:max-w-md h-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};