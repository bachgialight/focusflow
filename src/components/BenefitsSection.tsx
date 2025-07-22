import { Brain, Target, TrendingUp, Heart, Moon } from "lucide-react";
import appFeaturesMockup from "@/assets/app-features-mockup.png";
import { useTranslation } from "react-i18next";

export const BenefitsSection = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: Brain,
      title: t("benefits.focus.title"),
      description: t("benefits.focus.description")
    },
    {
      icon: Target,
      title: t("benefits.time.title"),
      description: t("benefits.time.description")
    },
    {
      icon: TrendingUp,
      title: t("benefits.habit.title"),
      description: t("benefits.habit.description")
    },
    {
      icon: Heart,
      title: t("benefits.wellbeing.title"),
      description: t("benefits.wellbeing.description")
    },
    {
      icon: Moon,
      title: t("benefits.sleep_music.title"),
      description: t("benefits.sleep_music.description")
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-blue-light/50 to-brand-orange-light/30" id="benefits">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 rounded-3xl blur-2xl"></div>
            <img 
              src={appFeaturesMockup} 
              alt="App Features Showcase" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-large"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 sm:space-y-12 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-inter break-words">
                <span className="text-foreground">{t("benefits.title")} </span>
                <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
                  {t("benefits.subtitle")}
                </span>
              </h2>
              <p className="text-lg sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-2 sm:px-0">
                {t("benefits.description")}
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 sm:gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-blue to-brand-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-7 h-7 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground font-inter break-words">
                      {benefit.title}
                    </h3>
                    <p className="text-base sm:text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};