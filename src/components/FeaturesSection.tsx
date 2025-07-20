import { Clock, Music, BarChart3, Moon, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Clock,
      title: t("features.pomodoro.title"),
      description: t("features.pomodoro.description")
    },
    {
      icon: Music,
      title: t("features.music.title"),
      description: t("features.music.description")
    },
    {
      icon: BarChart3,
      title: t("features.stats.title"),
      description: t("features.stats.description")
    },
    {
      icon: Moon,
      title: t("features.dark_mode.title"),
      description: t("features.dark_mode.description")
    },
    {
      icon: Zap,
      title: t("features.smooth.title"),
      description: t("features.smooth.description")
    },
    {
      icon: Shield,
      title: t("features.security.title"),
      description: t("features.security.description")
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-background" id="features">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-inter break-words">
            <span className="text-foreground">{t("features.title")} </span>
            <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
              {t("features.subtitle")}
            </span>
          </h2>
          <p className="text-lg sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            {t("features.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-brand-blue-light/30"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground font-inter break-words">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};