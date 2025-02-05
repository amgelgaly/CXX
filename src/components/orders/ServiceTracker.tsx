import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  onUpdate: (id: number, title: string, description: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(service.title);
  const [description, setDescription] = useState(service.description);
  const navigate = useNavigate();

  const handleSubmit = () => {
    onUpdate(service.id, title, description);
    setIsEditing(false);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // تجنب التنقل عند الضغط على زر التعديل أو النافذة المنبثقة
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('dialog')) {
      return;
    }
    // التنقل إلى صفحة تفاصيل الخدمة
    navigate(`/service-details/${service.id}`);
  };

  return (
    <div className="cursor-pointer" onClick={handleCardClick}>
      <Card className="w-full hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
          <Dialog open={isEditing} onOpenChange={setIsEditing}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Pencil className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>تعديل الخدمة</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="title" className="text-right">العنوان</label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-right"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="description" className="text-right">الوصف</label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="text-right"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button onClick={() => setIsEditing(false)} variant="outline">
                  إلغاء
                </Button>
                <Button onClick={handleSubmit}>
                  حفظ التغييرات
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 text-right">{service.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const ServiceTracker: React.FC = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: "تصميم المواقع",
      description: "تصميم وتطوير مواقع الويب باستخدام أحدث التقنيات"
    },
    {
      id: 2,
      title: "تطوير التطبيقات",
      description: "تطوير تطبيقات الهواتف الذكية لنظامي Android و iOS"
    },
    {
      id: 3,
      title: "التسويق الرقمي",
      description: "خدمات التسويق الرقمي وإدارة وسائل التواصل الاجتماعي"
    },
    {
      id: 4,
      title: "تحسين محركات البحث",
      description: "تحسين ظهور موقعك في نتائج محركات البحث"
    }
  ]);

  const handleUpdateService = (id: number, title: string, description: string) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, title, description } : service
    ));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-right">تتبع الخدمات</CardTitle>
          <Button onClick={() => navigate('/request')}>اطلب خدمة جديدة</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onUpdate={handleUpdateService}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceTracker;
