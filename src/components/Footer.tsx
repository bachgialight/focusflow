import { Heart, Mail, Globe, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-foreground text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-2xl font-bold font-inter">
              <span className="text-brand-blue">Focus</span>
              <span className="text-brand-orange">Flow</span>
            </h3>
            <p className="text-white/70 leading-relaxed text-base sm:text-base">
              {t("footer.description")}
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-lg font-semibold">{t("footer.product")}</h4>
            <ul className="space-y-2 text-white/70 text-base sm:text-base">
              <li><a href="#features" className="hover:text-brand-blue transition-colors">{t("footer.features")}</a></li>
              <li><a href="#benefits" className="hover:text-brand-blue transition-colors">{t("footer.benefits")}</a></li>
              <li><a href="#testimonials" className="hover:text-brand-blue transition-colors">{t("footer.testimonials")}</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">{t("footer.updates")}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-lg font-semibold">{t("footer.support")}</h4>
            <ul className="space-y-2 text-white/70 text-base sm:text-base">
              <li><a href="#" className="hover:text-brand-blue transition-colors">{t("footer.help")}</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">{t("footer.contact")}</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">{t("footer.privacy")}</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">{t("footer.terms")}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-lg font-semibold">{t("footer.company")}</h4>
            <ul className="space-y-2 text-white/70 text-base sm:text-base">
              <li><a href="#" className="hover:text-brand-blue transition-colors">{t("footer.about")}</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">{t("footer.careers")}</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">{t("footer.blog")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 sm:gap-6 text-white/70 text-sm sm:text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 sm:w-4 sm:h-4 text-red-500" />
                {t("footer.made_with_love")}
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 sm:w-4 sm:h-4" />
                {t("footer.data_security")}
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <a href="mailto:hello@focusflow.app" className="text-white/70 hover:text-brand-blue transition-colors">
                <Mail className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-brand-blue transition-colors">
                <Globe className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="text-center mt-4 sm:mt-6 text-white/50 text-sm sm:text-sm">
            {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
};