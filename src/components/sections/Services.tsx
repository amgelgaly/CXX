import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, PenTool, Search, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Digital Marketing",
    titleAr: "التسويق الرقمي",
    description: "Strategic campaigns that drive growth and engagement across digital platforms.",
    descriptionAr: "حملات استراتيجية تدفع النمو والمشاركة عبر المنصات الرقمية.",
    features: ["إدارة حملات الإعلانات", "تحليل البيانات", "استراتيجيات التسويق", "تحسين معدل التحويل"],
    icon: Megaphone,
    path: "/services/digital-marketing",
    image: "/images/digital-marketing.jpg"
  },
  {
    title: "Content Creation",
    titleAr: "إنشاء المحتوى",
    description: "Compelling content that tells your story and connects with your audience.",
    descriptionAr: "محتوى مقنع يروي قصتك ويتواصل مع جمهورك.",
    features: ["كتابة المحتوى", "تصميم الجرافيك", "إنتاج الفيديو", "التحرير والمونتاج"],
    icon: PenTool,
    path: "/services/content-creation",
    image: "/images/content-creation.jpg"
  },
  {
    title: "SEO Optimization",
    titleAr: "تحسين محركات البحث",
    description: "Data-driven SEO strategies to improve your visibility and rankings.",
    descriptionAr: "استراتيجيات تحسين محركات البحث المدفوعة بالبيانات لتحسين ظهورك وترتيبك.",
    features: ["تحليل الكلمات المفتاحية", "تحسين المحتوى", "بناء الروابط", "تحسين السرعة"],
    icon: Search,
    path: "/services/seo",
    image: "/images/seo.jpg"
  },
  {
    title: "Social Media",
    titleAr: "وسائل التواصل الاجتماعي",
    description: "Expert social media management to build and engage your community.",
    descriptionAr: "إدارة احترافية لوسائل التواصل الاجتماعي لبناء مجتمعك والتفاعل معه.",
    features: ["إدارة المنصات", "تصميم المحتوى", "جدولة المنشورات", "تحليل الأداء"],
    icon: Share2,
    path: "/services/social-media",
    image: "/images/social-media.jpg"
  },
];

const Services = () => {
  const navigate = useNavigate();
  const language = document.documentElement.dir === 'rtl' ? 'ar' : 'en';

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'حلول تسويقية شاملة مصممة لتلبية احتياجاتك'
              : 'Comprehensive marketing solutions tailored to your needs'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-[#fc2f2f] cursor-pointer"
              onClick={() => navigate(service.path)}
            >
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-[#fc2f2f] rounded-xl flex items-center justify-center mb-2">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {language === 'ar' ? service.titleAr : service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-lg text-gray-600">
                  {language === 'ar' ? service.descriptionAr : service.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    {language === 'ar' ? 'المميزات الرئيسية:' : 'Key Features:'}
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <div className="min-w-[6px] h-[6px] rounded-full bg-[#fc2f2f]" />
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full bg-gray-900 hover:bg-[#fc2f2f] text-white transition-colors group-hover:bg-[#fc2f2f]"
                >
                  {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
