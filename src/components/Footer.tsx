import { Heart, Mail, Globe, Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-inter">
              <span className="text-brand-blue">Focus</span>
              <span className="text-brand-orange">Flow</span>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Ứng dụng Pomodoro kết hợp nhạc thư giãn, giúp bạn tối ưu thời gian và tăng cường sự tập trung hiệu quả.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Sản phẩm</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#features" className="hover:text-brand-blue transition-colors">Tính năng</a></li>
              <li><a href="#benefits" className="hover:text-brand-blue transition-colors">Lợi ích</a></li>
              <li><a href="#testimonials" className="hover:text-brand-blue transition-colors">Đánh giá</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Cập nhật</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hỗ trợ</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Báo lỗi</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Pháp lý</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                Made with love in Vietnam
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Bảo mật dữ liệu
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="mailto:hello@focusflow.app" className="text-white/70 hover:text-brand-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-brand-blue transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center mt-6 text-white/50 text-sm">
            © 2024 FocusFlow. Tất cả quyền được bảo lưu.
          </div>
        </div>
      </div>
    </footer>
  );
};