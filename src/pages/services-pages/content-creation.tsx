import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PenTool, Image, Video, Edit, ArrowRight, ArrowLeft } from 'lucide-react';

const features = [
  {
    icon: PenTool,
    title: "كتابة المحتوى",
    description: "نقدم محتوى عالي الجودة يجذب جمهورك المستهدف ويحسن ترتيب موقعك."
  },
  {
    icon: Image,
    title: "تصميم الجرافيك",
    description: "نصمم رسومات وصور جذابة تعزز رسالتك وتحسن تجربة المستخدم."
  },
  {
    icon: Video,
    title: "إنتاج الفيديو",
    description: "ننتج مقاطع فيديو احترافية تروي قصة علامتك التجارية بشكل مؤثر."
  },
  {
    icon: Edit,
    title: "التحرير والمونتاج",
    description: "نقدم خدمات تحرير وتنقيح احترافية لضمان جودة المحتوى."
  }
];

const workMethodology = [
  {
    title: "فهم الاحتياجات",
    description: "دراسة متطلباتك وأهدافك وجمهورك المستهدف"
  },
  {
    title: "تطوير الاستراتيجية",
    description: "وضع خطة محتوى متكاملة تناسب أهدافك"
  },
  {
    title: "إنتاج المحتوى",
    description: "إنشاء محتوى إبداعي يتناسب مع هويتك"
  },
  {
    title: "المراجعة والتحسين",
    description: "مراجعة وتحسين المحتوى بناءً على النتائج"
  }
];

const packages = [
  {
    title: "الباقة الأساسية",
    price: "3,000 ريال/شهرياً",
    features: [
      "4 مقالات شهرياً",
      "10 تصاميم جرافيك",
      "فيديو واحد",
      "تحسين SEO أساسي",
      "دعم عبر البريد الإلكتروني"
    ]
  },
  {
    title: "الباقة المتقدمة",
    price: "6,000 ريال/شهرياً",
    features: [
      "8 مقالات شهرياً",
      "20 تصميم جرافيك",
      "فيديوهين",
      "تحسين SEO متقدم",
      "دعم عبر الهاتف والبريد",
      "تقارير أداء شهرية"
    ]
  },
  {
    title: "الباقة الاحترافية",
    price: "10,000 ريال/شهرياً",
    features: [
      "12 مقال شهرياً",
      "تصاميم جرافيك غير محدودة",
      "4 فيديوهات",
      "تحسين SEO شامل",
      "دعم على مدار الساعة",
      "تقارير أداء أسبوعية",
      "استراتيجية محتوى متكاملة"
    ]
  }
];

const ContentCreation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Content Creation page accessed:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2 hover:bg-gray-100"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>رجوع</span>
        </Button>
      </div>

      {/* Hero Section with Image */}
      <div className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fc2f2f_1px,transparent_1px),linear-gradient(to_bottom,#fc2f2f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1]" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">إنشاء المحتوى</h1>
              <p className="text-xl text-gray-300">
                نبتكر محتوى إبداعي يروي قصة علامتك التجارية ويتواصل مع جمهورك بشكل فعال
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/images/content-creation.jpg" 
                alt="إنشاء المحتوى" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">منهجية العمل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workMethodology.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-[#fc2f2f] mb-2">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">خدماتنا في إنشاء المحتوى</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-[#fc2f2f] transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#fc2f2f] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">باقات الأسعار</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-center text-[#fc2f2f] mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#fc2f2f] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-[#fc2f2f] hover:bg-[#fc2f2f]/90" onClick={() => navigate('/request')}>
                    اطلب الخدمة الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">ابدأ في إنشاء محتوى مميز</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            دعنا نساعدك في إنشاء محتوى يميز علامتك التجارية ويجذب جمهورك المستهدف
          </p>
          <Button
            size="lg"
            className="bg-[#fc2f2f] hover:bg-[#fc2f2f]/90 text-white px-8 py-6 text-lg rounded-xl"
            onClick={() => navigate('/request')}
          >
            احصل على استشارة مجانية
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
