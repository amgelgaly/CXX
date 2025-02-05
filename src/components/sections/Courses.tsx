import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, Award, Users } from "lucide-react";

const featuredCourses = [
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
      "تحليل السوق والمنافسين"
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
      "إدارة المجتمع"
    ]
  }
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            دوراتنا التدريبية
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            دورات تدريبية متخصصة في مجال التسويق الرقمي، مصممة لمساعدتك في تطوير مهاراتك وتحقيق أهدافك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCourses.map((course) => (
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
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/courses')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            عرض جميع الدورات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
