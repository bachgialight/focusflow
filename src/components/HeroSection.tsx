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

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center bg-brand-blue-light rounded-full px-4 sm:px-4 py-2 text-sm sm:text-sm font-medium text-brand-blue border border-brand-blue/20">
              <Star className="w-4 h-4 sm:w-4 sm:h-4 mr-2 fill-current" />
              {t("hero.badge")}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-inter break-words">
              <span className="text-foreground">{t("hero.title")} </span>
              <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
                {t("hero.subtitle")}
              </span>
            </h1>
            
            <p className="text-lg sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              {t("hero.description")}
            </p>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue/90 shadow-medium transition-all duration-300 hover:shadow-large group text-base sm:text-base py-3 sm:py-4"
            >
              <Download className="w-5 h-5 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
              {t("hero.app_store")}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 text-base sm:text-base py-3 sm:py-4"
            >
              <Play className="w-5 h-5 sm:w-5 sm:h-5 mr-2" />
              {t("hero.google_play")}
            </Button>
          </div>

          {/* Language Switcher */}
          <div className="pt-4 flex gap-3 justify-center lg:justify-start px-4 sm:px-0">
            <button onClick={() => i18n.changeLanguage("vi")}
              className={`px-4 sm:px-3 py-2 rounded text-sm sm:text-sm ${i18n.language === "vi" ? "bg-brand-blue text-white" : "bg-white text-brand-blue border border-brand-blue"}`}
            >{t("language.vietnamese")}</button>
            <button onClick={() => i18n.changeLanguage("en")}
              className={`px-4 sm:px-3 py-2 rounded text-sm sm:text-sm ${i18n.language === "en" ? "bg-brand-blue text-white" : "bg-white text-brand-blue border border-brand-blue"}`}
            >{t("language.english")}</button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-6 sm:pt-8 px-4 sm:px-0">
            <div className="text-center">
              <div className="text-3xl sm:text-3xl font-bold text-brand-blue">0+</div>
              <div className="text-sm sm:text-sm text-muted-foreground">{t("hero.stats.users")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-3xl font-bold text-brand-blue">0★</div>
              <div className="text-sm sm:text-sm text-muted-foreground">{t("hero.stats.rating")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-3xl font-bold text-brand-blue">0+</div>
              <div className="text-sm sm:text-sm text-muted-foreground">{t("hero.stats.minutes")}</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center order-first lg:order-last">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 rounded-3xl blur-2xl scale-110"></div>
            <img 
              src={heroPhoneMockup} 
              alt="FocusFlow App Interface" 
              className="relative z-10 w-80 sm:w-96 md:w-[420px] lg:w-[480px] xl:w-[520px] h-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};