import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, Award, Users } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const courses = [
  {
    id: 1,
    title: "أساسيات التسويق الرقمي",
    description: "تعلم أساسيات التسويق الرقمي وكيفية بناء استراتيجية تسويقية ناجحة",
    duration: "8 أسابيع",
    level: "مبتدئ",
    students: 120,
    image: "/course-digital-marketing.jpg",
    topics: [
      "مقدمة في التسويق الرقمي",
      "تحليل السوق والمنافسين",
      "بناء استراتيجية تسويقية",
      "قياس وتحليل النتائج"
    ]
  },
  {
    id: 2,
    title: "إدارة وسائل التواصل الاجتماعي",
    description: "تعلم كيفية إدارة حسابات التواصل الاجتماعي وبناء جمهور متفاعل",
    duration: "6 أسابيع",
    level: "متوسط",
    students: 85,
    image: "/course-social-media.jpg",
    topics: [
      "استراتيجيات المحتوى",
      "إدارة المجتمع",
      "الإعلانات المدفوعة",
      "تحليل الأداء"
    ]
  },
  {
    id: 3,
    title: "تحسين محركات البحث (SEO)",
    description: "تعلم أساسيات وتقنيات تحسين محركات البحث لتحسين ظهور موقعك",
    duration: "10 أسابيع",
    level: "متقدم",
    students: 65,
    image: "/course-seo.jpg",
    topics: [
      "أساسيات SEO",
      "تحسين المحتوى",
      "بناء الروابط",
      "تحسين الأداء التقني"
    ]
  },
  {
    id: 4,
    title: "إنشاء المحتوى الإبداعي",
    description: "تعلم كيفية إنشاء محتوى جذاب ومؤثر لمختلف المنصات الرقمية",
    duration: "8 أسابيع",
    level: "متوسط",
    students: 95,
    image: "/course-content-creation.jpg",
    topics: [
      "استراتيجية المحتوى",
      "كتابة المحتوى",
      "التصوير والتحرير",
      "تصميم الجرافيك"
    ]
  }
];

const Courses = () => {
  const language = document.documentElement.dir === 'rtl' ? 'ar' : 'en';

  return (
    <div className="min-h-screen bg-background pt-16">
      
        <PageHeader
          title={language === 'ar' ? 'الدورات التدريبية' : 'Training Courses'}
          subtitle={language === 'ar'
            ? 'تعلم مهارات جديدة وطور قدراتك مع خبرائنا'
            : 'Learn new skills and develop your capabilities with our experts'}
        />
      

      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-60" />
                <Badge className="absolute top-4 right-4 bg-primary text-white">
                  {course.level}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm">{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">{course.students} طالب</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold mb-2">المواضيع الرئيسية:</h4>
                  <ul className="space-y-1">
                    {course.topics.map((topic, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  سجل الآن
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
