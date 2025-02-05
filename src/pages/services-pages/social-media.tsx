import { useEffect, useState } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2, Calendar, MessageCircle, BarChart2, ArrowRight, ArrowLeft } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const features = [
  {
    icon: Share2,
    title: "إدارة المنصات",
    description: "نتولى إدارة حساباتك على جميع منصات التواصل الاجتماعي بشكل احترافي."
  },
  {
    icon: Calendar,
    title: "جدولة المنشورات",
    description: "نخطط ونجدول المحتوى بشكل استراتيجي لضمان التفاعل الأمثل."
  },
  {
    icon: MessageCircle,
    title: "التفاعل مع الجمهور",
    description: "نتفاعل مع متابعيك ونبني مجتمعًا نشطًا حول علامتك التجارية."
  },
  {
    icon: BarChart2,
    title: "تحليل الأداء",
    description: "نراقب ونحلل أداء حساباتك لتحسين النتائج باستمرار."
  }
];

const workMethodology = [
  {
    title: "تحليل الحسابات",
    description: "دراسة حساباتك الحالية وتحليل المنافسين"
  },
  {
    title: "تطوير الاستراتيجية",
    description: "وضع خطة محتوى وتفاعل مناسبة لكل منصة"
  },
  {
    title: "إدارة المحتوى",
    description: "إنشاء ونشر محتوى جذاب ومتفاعل"
  },
  {
    title: "المتابعة والتحسين",
    description: "تحليل النتائج وتحسين الأداء بشكل مستمر"
  }
];

const packages = [
  {
    title: "الباقة الأساسية",
    price: "2,500 ريال/شهرياً",
    features: [
      "إدارة منصتين اجتماعيتين",
      "15 منشور شهرياً",
      "تصميم بوستات أساسي",
      "تقرير أداء شهري",
      "دعم عبر البريد الإلكتروني"
    ]
  },
  {
    title: "الباقة المتقدمة",
    price: "5,000 ريال/شهرياً",
    features: [
      "إدارة 4 منصات اجتماعية",
      "30 منشور شهرياً",
      "تصميم بوستات احترافي",
      "تقارير أداء أسبوعية",
      "دعم عبر الهاتف والبريد",
      "إدارة الإعلانات الأساسية"
    ]
  },
  {
    title: "الباقة الاحترافية",
    price: "8,000 ريال/شهرياً",
    features: [
      "إدارة جميع المنصات",
      "منشورات يومية",
      "تصميم بوستات مخصص",
      "تقارير أداء يومية",
      "دعم على مدار الساعة",
      "إدارة إعلانات متقدمة",
      "استراتيجية تسويق متكاملة"
    ]
  }
];

const SocialMedia = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    console.log('Social Media page accessed:', location.pathname);
  }, [location.pathname]);

  const handleContactClick = () => {
    navigate('/contact', { state: { service: 'social-media' } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <PageHeader 
          title="إدارة وسائل التواصل الاجتماعي"
          subtitle="نساعدك في بناء وتعزيز تواجدك على منصات التواصل الاجتماعي"
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">إدارة وسائل التواصل الاجتماعي</h1>
                <p className="text-xl text-gray-300">
                  نساعدك في بناء وتنمية حضورك على منصات التواصل الاجتماعي وتحقيق أهدافك التسويقية
                </p>
              </div>
              <div className="flex-1 relative">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-xl">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                  </div>
                )}
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-xl">
                    <p className="text-gray-300">عذراً، تعذر تحميل الصورة</p>
                  </div>
                )}
                <img 
                  src="/images/social-media.jpg" 
                  alt="إدارة وسائل التواصل الاجتماعي" 
                  className={`rounded-xl shadow-lg w-full ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">خدماتنا في إدارة وسائل التواصل الاجتماعي</h2>
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

        {/* Platforms Section */}
        <div className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">المنصات التي ندعمها</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Facebook", icon: FaFacebook },
                { name: "Instagram", icon: FaInstagram },
                { name: "Twitter", icon: FaTwitter },
                { name: "LinkedIn", icon: FaLinkedin }
              ].map((platform, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4"><platform.icon /></div>
                  <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">باقات الأسعار</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`bg-white transform transition-all duration-300 hover:scale-105 ${
                    index === 1 ? 'border-2 border-[#fc2f2f]' : ''
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">{pkg.title}</CardTitle>
                    <div className="text-3xl font-bold text-center text-[#fc2f2f] mt-4">{pkg.price}</div>
                    {index === 1 && (
                      <div className="bg-[#fc2f2f] text-white text-sm px-4 py-1 rounded-full mx-auto mt-2">
                        الأكثر شعبية
                      </div>
                    )}
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
                      className={`w-full mt-8 ${
                        index === 1
                          ? 'bg-[#fc2f2f] hover:bg-[#fc2f2f]/90'
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
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

        {/* Stats Section */}
        <div className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "90%", label: "رضا العملاء" },
                { number: "500+", label: "حملة ناجحة" },
                { number: "1M+", label: "متابع تم الوصول إليهم" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#fc2f2f] mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">طور حضورك على وسائل التواصل الاجتماعي</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              دعنا نساعدك في بناء علامة تجارية قوية وجذب المزيد من العملاء عبر منصات التواصل الاجتماعي
            </p>
            <Button
              size="lg"
              className="bg-[#fc2f2f] hover:bg-[#fc2f2f]/90 text-white px-8 py-6 text-lg rounded-xl"
              onClick={() => navigate('/request')}
            >
              ابدأ الآن
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
