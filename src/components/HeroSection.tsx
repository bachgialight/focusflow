import { Button } from "@/components/ui/button";
import { Download, Play, Star, X } from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";
import focusMondo from "@/assets/focus_mondo.png";
import React from "react";

export const HeroSection = () => {
  const [show, setShow] = React.useState(true);
  if (!show) return null;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue-light via-background to-brand-orange-light">
      {/* Logo + Close button */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <img
          src={focusMondo}
          alt="Focus Mondo Logo"
          className="w-12 h-12 rounded-full shadow-lg cursor-pointer border-2 border-white hover:scale-105 transition-transform"
          onClick={() => setShow(false)}
          title="Click để đóng banner này"
        />
        <button
          onClick={() => setShow(false)}
          className="ml-2 p-1 rounded-full bg-white/80 hover:bg-white text-brand-blue shadow transition-colors"
          title="Đóng banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
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
              #1 App tập trung hiệu quả
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-inter">
              <span className="text-foreground">Tập trung & </span>
              <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
                thư giãn
              </span>
              <br />
              <span className="text-foreground">Tối ưu thời gian của bạn</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Pomodoro + Âm nhạc thư giãn – Giải pháp đơn giản giúp bạn làm việc hiệu quả hơn mỗi ngày.
            </p>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue/90 shadow-medium transition-all duration-300 hover:shadow-large group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Tải trên App Store
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Google Play
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue">50K+</div>
              <div className="text-sm text-muted-foreground">Người dùng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue">4.9★</div>
              <div className="text-sm text-muted-foreground">Đánh giá</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue">100M+</div>
              <div className="text-sm text-muted-foreground">Phút tập trung</div>
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