import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Minh Anh",
      role: "Sinh viên Y khoa",
      avatar: "👩‍🎓",
      rating: 5,
      content: "Nhờ FocusFlow mình tập trung học hơn hẳn! Từ khi dùng app, thời gian ôn thi hiệu quả gấp đôi. Nhạc lo-fi trong app rất hay, giúp mình không bị phân tán bởi tiếng ồn xung quanh."
    },
    {
      name: "Quang Huy",
      role: "Lập trình viên",
      avatar: "👨‍💻",
      rating: 5,
      content: "App tuyệt vời cho dân dev như mình! Pomodoro timer chính xác, nhạc ambient giúp code flow suốt. Thống kê thời gian làm việc giúp mình track productivity rất tốt."
    },
    {
      name: "Thanh Hằng",
      role: "Marketing Manager",
      avatar: "👩‍💼",
      rating: 5,
      content: "FocusFlow đã thay đổi cách làm việc của tôi hoàn toàn. Không còn procrastination, mọi task được hoàn thành đúng hạn. Giao diện đẹp, dễ sử dụng, không quảng cáo phiền phức."
    },
    {
      name: "Văn Đức",
      role: "Học sinh THPT",
      avatar: "👨‍🎓",
      rating: 5,
      content: "Chuẩn bị thi đại học với FocusFlow thật sự hiệu quả. 25 phút tập trung + 5 phút nghỉ vừa đủ để não không bị quá tải. Nhạc thiên nhiên giúp em thư giãn và tập trung hơn."
    }
  ];

  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-inter">
            <span className="text-foreground">Người dùng </span>
            <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
              nói gì
            </span>
            <span className="text-foreground"> về chúng tôi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hàng nghìn người đã trải nghiệm và chia sẻ câu chuyện thành công của họ
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