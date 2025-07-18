import { Brain, Target, TrendingUp, Heart } from "lucide-react";
import appFeaturesMockup from "@/assets/app-features-mockup.png";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Tăng sự tập trung",
      description: "Kỹ thuật Pomodoro được chứng minh khoa học giúp não bộ duy trì sự tập trung cao trong thời gian dài hơn."
    },
    {
      icon: Target,
      title: "Quản lý thời gian thông minh",
      description: "Chia nhỏ công việc thành các khối thời gian hợp lý, tránh tình trạng kiệt sức và procrastination."
    },
    {
      icon: TrendingUp,
      title: "Xây dựng thói quen hiệu quả",
      description: "Theo dõi tiến độ hằng ngày, tạo động lực và duy trì thói quen học tập làm việc bền vững."
    },
    {
      icon: Heart,
      title: "Giảm stress, tăng wellbeing",
      description: "Âm nhạc thư giãn kết hợp nghỉ ngơi đều đặn giúp giảm căng thẳng và cải thiện sức khỏe tinh thần."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-brand-blue-light/50 to-brand-orange-light/30" id="benefits">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          <div className="space-y-12 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-inter">
                <span className="text-foreground">Lợi ích </span>
                <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
                  tuyệt vời
                </span>
                <br />
                <span className="text-foreground">cho người dùng</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Không chỉ là một ứng dụng, mà là người bạn đồng hành trong hành trình phát triển bản thân
              </p>
            </div>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground font-inter">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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