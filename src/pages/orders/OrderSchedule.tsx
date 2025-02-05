import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EnhancedKanbanBoard from "@/components/kanban/EnhancedKanbanBoard";

const initialTasks = [
  {
    id: 1,
    title: "تصميم موقع إلكتروني",
    description: "تصميم موقع احترافي متجاوب مع جميع الأجهزة",
    status: "قيد الانتظار",
    priority: "high" as const,
    dueDate: "2024-02-15",
    assignee: "أحمد محمد",
    labels: ["تصميم", "برمجة"]
  },
  {
    id: 2,
    title: "حملة تسويقية",
    description: "إطلاق حملة تسويقية على وسائل التواصل الاجتماعي",
    status: "جاري التنفيذ",
    priority: "medium" as const,
    dueDate: "2024-02-20",
    assignee: "سارة أحمد",
    labels: ["تسويق", "سوشيال ميديا"]
  },
  {
    id: 3,
    title: "تحسين SEO",
    description: "تحسين ظهور الموقع في محركات البحث",
    status: "مكتمل",
    priority: "low" as const,
    dueDate: "2024-02-10",
    assignee: "محمد علي",
    labels: ["SEO", "تحسين"]
  }
];

const OrderSchedule = () => {
  return (
    <div className="container mx-auto py-8 pt-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mt-4">جدولة الطلبات</CardTitle>
        </CardHeader>
        <CardContent>
          <EnhancedKanbanBoard initialTasks={initialTasks} />
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSchedule;
