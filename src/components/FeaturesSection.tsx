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
    <section className="py-24 bg-background" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-inter">
            <span className="text-foreground">{t("features.title")} </span>
            <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
              {t("features.subtitle")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-brand-blue-light/30"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground font-inter">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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