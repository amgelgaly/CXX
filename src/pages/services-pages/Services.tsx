import React from 'react';
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, PenTool, Search, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";

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
    <div className="min-h-screen bg-gray-50 pt-16">
      
        <PageHeader
          title={language === 'ar' ? 'خدماتنا' : 'Our Services'}
          subtitle={language === 'ar'
            ? 'حلول تسويقية شاملة مصممة لتلبية احتياجاتك'
            : 'Comprehensive marketing solutions tailored to your needs'}
        />
      

      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-[#FF1744] cursor-pointer"
              onClick={() => navigate(service.path)}
            >
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-[#FF1744] rounded-xl flex items-center justify-center mb-2">
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
                        <div className="min-w-[6px] h-[6px] rounded-full bg-[#FF1744]" />
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <Button 
                    className="w-full bg-gray-900 hover:bg-[#FF1744] text-white transition-colors group-hover:bg-[#FF1744]"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.path);
                    }}
                  >
                    {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </Button>
                  
                  <Button 
                    className="w-full bg-[#FF1744] hover:bg-[#FF1744]/90 text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/request', { state: { serviceType: service.path.split('/').pop() } });
                    }}
                  >
                    {language === 'ar' ? 'اطلب الخدمة' : 'Request Service'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
