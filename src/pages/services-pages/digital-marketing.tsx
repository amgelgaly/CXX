import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Megaphone, BarChart, Target, Users, ArrowRight, ArrowLeft } from 'lucide-react';

const features = [
  {
    icon: Megaphone,
    title: "حملات إعلانية مستهدفة",
    description: "نصمم حملات إعلانية مخصصة تصل إلى جمهورك المستهدف بدقة."
  },
  {
    icon: BarChart,
    title: "تحليل البيانات",
    description: "نحلل أداء حملاتك باستمرار لتحسين النتائج وزيادة العائد على الاستثمار."
  },
  {
    icon: Target,
    title: "استراتيجيات التسويق",
    description: "نطور استراتيجيات تسويقية شاملة تتناسب مع أهداف عملك."
  },
  {
    icon: Users,
    title: "تحسين معدل التحويل",
    description: "نعمل على تحسين معدلات التحويل لزيادة المبيعات والعملاء."
  }
];

const workMethodology = [
  {
    title: "تحليل السوق",
    description: "دراسة شاملة للسوق والمنافسين وتحديد الفرص المتاحة"
  },
  {
    title: "تطوير الاستراتيجية",
    description: "وضع خطة تسويقية متكاملة تتناسب مع أهدافك"
  },
  {
    title: "التنفيذ والمراقبة",
    description: "تنفيذ الحملات ومراقبة الأداء بشكل مستمر"
  },
  {
    title: "التحسين المستمر",
    description: "تحليل النتائج وتحسين الأداء بناءً على البيانات"
  }
];

const packages = [
  {
    title: "الباقة الأساسية",
    price: "1,500 ريال/شهرياً",
    features: [
      "إدارة حملات إعلانية على منصة واحدة",
      "تقارير أداء شهرية",
      "تحسين معدل التحويل الأساسي",
      "دعم عبر البريد الإلكتروني"
    ]
  },
  {
    title: "الباقة المتقدمة",
    price: "3,000 ريال/شهرياً",
    features: [
      "إدارة حملات على منصتين",
      "تقارير أداء أسبوعية",
      "تحسين معدل التحويل المتقدم",
      "دعم عبر الهاتف والبريد الإلكتروني",
      "استراتيجية تسويقية شاملة"
    ]
  },
  {
    title: "الباقة الاحترافية",
    price: "5,000 ريال/شهرياً",
    features: [
      "إدارة حملات على جميع المنصات",
      "تقارير أداء يومية",
      "تحسين معدل التحويل المتقدم",
      "دعم على مدار الساعة",
      "استراتيجية تسويقية شاملة",
      "تحليل المنافسين",
      "اجتماعات دورية"
    ]
  }
];

const DigitalMarketing = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Digital Marketing page accessed:', location.pathname);
  }, [location.pathname]);

  const previousWorks = [
    {
      image: '/project1.jpg', // Replace with actual image paths
      title: 'Project Title 1',
      description: 'A brief description of the first previous work.'
    },
    {
      image: '/project2.jpg',
      title: 'Project Title 2',
      description: 'A brief description of the second previous work.'
    },
    {
      image: '/project3.jpg',
      title: 'Project Title 3',
      description: 'A brief description of the third previous work.'
    },
    // Add more previous works as needed
  ];

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">التسويق الرقمي</h1>
              <p className="text-xl text-gray-300">
                نقدم حلولاً تسويقية رقمية متكاملة تساعد شركتك على النمو وتحقيق أهدافها في العالم الرقمي
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/images/digital-marketing.jpg" 
                alt="التسويق الرقمي" 
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
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">خدماتنا في التسويق الرقمي</h2>
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
          <h2 className="text-3xl font-bold mb-6">ابدأ رحلة نجاحك الرقمي اليوم</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            دعنا نساعدك في تحقيق أهدافك التسويقية وتنمية عملك في العالم الرقمي
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

      <h2 className="text-2xl font-bold mb-4 text-center">Our Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {previousWorks.map((work, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <Image src={work.image} alt={work.title} className="h-48 w-full object-cover rounded-lg" />
              <CardTitle className="text-center">{work.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">{work.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketing;
