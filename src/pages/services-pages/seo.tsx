import PageHeader from '@/components/layout/PageHeader';
// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, LineChart, Link2, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "تحليل الكلمات المفتاحية",
    description: "نحدد أفضل الكلمات المفتاحية التي تستهدف جمهورك وتحسن ظهورك في نتائج البحث."
  },
  {
    icon: LineChart,
    title: "تحسين المحتوى",
    description: "نقوم بتحسين محتوى موقعك ليتوافق مع معايير محركات البحث ويجذب الزوار."
  },
  {
    icon: Link2,
    title: "بناء الروابط",
    description: "نطور استراتيجية لبناء روابط قوية تعزز سلطة موقعك وتحسن ترتيبه."
  },
  {
    icon: Zap,
    title: "تحسين السرعة",
    description: "نعمل على تحسين سرعة موقعك وأدائه لتحسين تجربة المستخدم وترتيب الموقع."
  }
];

const workMethodology = [
  {
    title: "التحليل الشامل",
    description: "تحليل الموقع الحالي وتحديد نقاط القوة والضعف"
  },
  {
    title: "البحث والتخطيط",
    description: "دراسة الكلمات المفتاحية وتطوير استراتيجية التحسين"
  },
  {
    title: "التنفيذ والتحسين",
    description: "تطبيق التحسينات التقنية وتحسين المحتوى"
  },
  {
    title: "المراقبة والتطوير",
    description: "متابعة النتائج وتحديث الاستراتيجية بشكل مستمر"
  }
];

const packages = [
  {
    title: "الباقة الأساسية",
    price: "2,000 ريال/شهرياً",
    features: [
      "تحليل الكلمات المفتاحية الأساسي",
      "تحسين 10 صفحات",
      "تقرير شهري",
      "دعم عبر البريد الإلكتروني"
    ]
  },
  {
    title: "الباقة المتقدمة",
    price: "4,000 ريال/شهرياً",
    features: [
      "تحليل الكلمات المفتاحية المتقدم",
      "تحسين 25 صفحة",
      "تقارير أسبوعية",
      "دعم عبر الهاتف والبريد",
      "بناء الروابط الأساسي"
    ]
  },
  {
    title: "الباقة الاحترافية",
    price: "7,000 ريال/شهرياً",
    features: [
      "تحليل شامل للكلمات المفتاحية",
      "تحسين غير محدود للصفحات",
      "تقارير مخصصة",
      "دعم على مدار الساعة",
      "بناء روابط متقدم",
      "تحسين تقني شامل",
      "استراتيجية محتوى متكاملة"
    ]
  }
];

const Seo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('SEO page accessed:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <PageHeader 
          title="تحسين محركات البحث"
          subtitle="حسن ظهور موقعك في نتائج البحث وزد من وصول عملائك المحتملين"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">تحسين محركات البحث</h1>
                <p className="text-xl text-gray-300">
                  نساعدك في تحسين ظهور موقعك في نتائج البحث وزيادة الزيارات العضوية من خلال استراتيجيات SEO المتقدمة
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="/images/seo.jpg" 
                  alt="تحسين محركات البحث" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">خدماتنا في تحسين محركات البحث</h2>
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
                    <Button
                      className="w-full mt-8 bg-[#fc2f2f] hover:bg-[#fc2f2f]/90"
                      onClick={() => navigate('/request')}
                    >
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
            <h2 className="text-3xl font-bold mb-6">حسن ظهور موقعك اليوم</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              دعنا نساعدك في تحسين ترتيب موقعك في محركات البحث وزيادة الزيارات العضوية
            </p>
            <Button
              size="lg"
              className="bg-[#fc2f2f] hover:bg-[#fc2f2f]/90 text-white px-8 py-6 text-lg rounded-xl"
              onClick={() => navigate('/request')}
            >
              احصل على تحليل مجاني لموقعك
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seo;
