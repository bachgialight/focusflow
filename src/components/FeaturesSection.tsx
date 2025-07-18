import { Clock, Music, BarChart3, Moon, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Bộ đếm Pomodoro linh hoạt",
      description: "Tùy chỉnh thời gian làm việc và nghỉ ngơi theo nhu cầu cá nhân. Từ 15-60 phút cho mỗi phiên tập trung."
    },
    {
      icon: Music,
      title: "Kho nhạc thư giãn phong phú",
      description: "Lo-fi, âm thanh thiên nhiên, piano classical và ambient music giúp bạn tập trung tối đa."
    },
    {
      icon: BarChart3,
      title: "Thống kê chi tiết",
      description: "Theo dõi thói quen tập trung, thời gian làm việc hiệu quả và tiến độ cá nhân qua biểu đồ trực quan."
    },
    {
      icon: Moon,
      title: "Chế độ Dark/Light",
      description: "Giao diện thân thiện với mắt, tự động chuyển đổi theo thời gian hoặc tùy chỉnh theo sở thích."
    },
    {
      icon: Zap,
      title: "Trải nghiệm mượt mà",
      description: "Không quảng cáo làm phân tán, giao diện đơn giản, tối ưu cho việc tập trung lâu dài."
    },
    {
      icon: Shield,
      title: "Bảo mật tuyệt đối",
      description: "Dữ liệu cá nhân được bảo vệ an toàn, hoạt động offline, không thu thập thông tin không cần thiết."
    }
  ];

  return (
    <section className="py-24 bg-background" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-inter">
            <span className="text-foreground">Tính năng </span>
            <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
              nổi bật
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mọi thứ bạn cần để tối ưu hóa thời gian và tăng cường sự tập trung trong một ứng dụng duy nhất
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