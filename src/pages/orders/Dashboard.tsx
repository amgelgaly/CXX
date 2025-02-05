import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import KanbanBoard from '@/components/kanban/KanbanBoard';
import { BookOpen, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from "@/components/layout/PageHeader";

const services = [
  {
    id: 1,
    title: "تحسين محركات البحث",
    description: "تحسين موقعك للظهور في نتائج البحث",
    status: "جاري",
  },
  {
    id: 2,
    title: "إدارة وسائل التواصل الاجتماعي",
    description: "إدارة حسابات التواصل الاجتماعي الخاصة بك",
    status: "مكتمل",
  },
  {
    id: 3,
    title: "التسويق بالمحتوى",
    description: "إنشاء محتوى جذاب لموقعك",
    status: "قيد الانتظار",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      
        <PageHeader
          title="لوحة التحكم"
          subtitle="قم بإدارة مهامك ومشاريعك بكفاءة"
        />
      

      <div className="container px-4 py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {/* Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate('/order-schedule')}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-bold">الخدمات المطلوبة</CardTitle>
                  <Briefcase className="h-8 w-8 text-[#fc2f2f]" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">استعرض وادر جميع الخدمات المتاحة</p>
                </CardContent>
              </Card>

              <Card 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate('/courses')}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-bold">الكورسات</CardTitle>
                  <BookOpen className="h-8 w-8 text-[#fc2f2f]" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">تصفح الكورسات التدريبية المتاحة</p>
                </CardContent>
              </Card>
            </div>

            {/* Statistics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#fc2f2f]/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">المهام الجديدة</h3>
                <p className="text-3xl font-bold text-[#fc2f2f]">5</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">قيد التنفيذ</h3>
                <p className="text-3xl font-bold text-yellow-600">3</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">مكتملة</h3>
                <p className="text-3xl font-bold text-green-600">8</p>
              </div>
            </div>

            {/* Kanban Board */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
