import { Button } from "@/components/ui/button";
import { Download, Smartphone, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import appstoreImage from "@/assets/appstore_image.png";
import chplayImage from "@/assets/chplay_image.png";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import React, { useRef } from "react";

export const CTASection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleDownloadClick = () => {
    emailInputRef.current?.focus();
    emailInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast({ title: t("cta.email_invalid_title"), description: t("cta.email_invalid_desc"), variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast({ title: t("cta.email_success_title"), description: t("cta.email_success_desc") });
    }, 1200);
  };
  
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-orange relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-inter leading-tight break-words">
              {t("cta.title")}
              <br />
              <span className="text-brand-orange-light">{t("cta.subtitle")}</span>
            </h2>
            
            <p className="text-lg sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              {t("cta.description")}
            </p>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-white/90 shadow-large transition-all duration-300 hover:shadow-xl hover:scale-105 group font-medium px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-base w-full sm:w-auto flex items-center"
              onClick={handleDownloadClick}
            >
              <img src={appstoreImage} alt="App Store" className="w-7 h-auto mr-2" />
              {t("cta.app_store")}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue transition-all duration-300 hover:scale-105 font-medium px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-base w-full sm:w-auto flex items-center"
              onClick={handleDownloadClick}
            >
              <img src={chplayImage} alt="Google Play" className="w-7 h-auto mr-2" />
              {t("cta.google_play")}
            </Button>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center" autoComplete="off">
            <Input
              ref={emailInputRef}
              type="email"
              placeholder={t("cta.email_placeholder") || "Nhập email của bạn"}
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 min-w-0"
              required
            />
            <Button type="submit" size="lg" disabled={loading || !email} className="w-full sm:w-auto">
              {loading ? t("cta.sending") : t("cta.notify_me")}
            </Button>
          </form>

          {/* Additional info */}
          <div className="pt-6 sm:pt-8 space-y-4">
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center text-white/80 text-sm sm:text-sm px-4 sm:px-0">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4" />
                {t("cta.features.free")}
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4" />
                {t("cta.features.no_ads")}
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4" />
                {t("cta.features.offline")}
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4" />
                {t("cta.features.compatible")}
              </div>
            </div>
            
            <p className="text-white/70 text-sm sm:text-sm px-4 sm:px-0">
              {t("cta.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};