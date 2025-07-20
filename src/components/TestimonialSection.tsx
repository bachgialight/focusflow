import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const TestimonialSection = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: t("testimonials.student.name"),
      role: t("testimonials.student.role"),
      avatar: "👩‍🎓",
      rating: 5,
      content: t("testimonials.student.content")
    },
    {
      name: t("testimonials.developer.name"),
      role: t("testimonials.developer.role"),
      avatar: "👨‍💻",
      rating: 5,
      content: t("testimonials.developer.content")
    },
    {
      name: t("testimonials.manager.name"),
      role: t("testimonials.manager.role"),
      avatar: "👩‍💼",
      rating: 5,
      content: t("testimonials.manager.content")
    },
    {
      name: t("testimonials.highschool.name"),
      role: t("testimonials.highschool.role"),
      avatar: "👨‍🎓",
      rating: 5,
      content: t("testimonials.highschool.content")
    }
  ];

  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-inter">
            <span className="text-foreground">{t("testimonials.title")} </span>
            <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
              {t("testimonials.subtitle")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-brand-blue-light/20"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground font-inter">
                        {testimonial.name}
                      </h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand-blue/20" />
                  <p className="text-foreground leading-relaxed pl-6 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};