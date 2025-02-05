import React from 'react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/layout/PageHeader";

const serviceTypes = {
  'digital-marketing': 'التسويق الرقمي',
  'content-creation': 'إنشاء المحتوى',
  'seo': 'تحسين محركات البحث',
  'social-media': 'وسائل التواصل الاجتماعي'
};

const Request = () => {
  const location = useLocation();
  const serviceType = location.state?.serviceType || '';
  const language = document.documentElement.dir === 'rtl' ? 'ar' : 'en';

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 pt-16">
        
          <PageHeader
            title={language === 'ar' ? 'طلب خدمة' : 'Request Service'}
            subtitle={language === 'ar'
              ? 'يرجى ملء النموذج التالي وسنقوم بالتواصل معك في أقرب وقت ممكن'
              : 'Please fill out the form below and we will contact you as soon as possible'}
          />
        

        <div className="container max-w-[800px] mx-auto px-4 py-8">

          <Card className="border-2 border-gray-100">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl text-center">تفاصيل الطلب</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* نوع الخدمة */}
              <div className="space-y-2">
                <Label htmlFor="service-type" className="text-lg font-medium text-right block">
                  نوع الخدمة <span className="text-[#fc2f2f]">*</span>
                </Label>
                <select 
                  id="service-type"
                  className="w-full p-3 border-2 rounded-lg text-right bg-white"
                  defaultValue={serviceType}
                  required
                >
                  <option value="">اختر نوع الخدمة</option>
                  {Object.entries(serviceTypes).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              {/* معلومات الاتصال */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-medium text-right block">
                    الاسم <span className="text-[#fc2f2f]">*</span>
                  </Label>
                  <Input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border-2 text-right" 
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-medium text-right block">
                    البريد الإلكتروني <span className="text-[#fc2f2f]">*</span>
                  </Label>
                  <Input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border-2 text-right" 
                    placeholder="example@domain.com"
                    required
                  />
                </div>
              </div>

              {/* رقم الهاتف والميزانية */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg font-medium text-right block">
                    رقم الهاتف <span className="text-[#fc2f2f]">*</span>
                  </Label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 border-2 text-right" 
                    placeholder="05xxxxxxxx"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-lg font-medium text-right block">
                    الميزانية المتوقعة
                  </Label>
                  <Input 
                    type="text" 
                    id="budget" 
                    className="w-full p-3 border-2 text-right" 
                    placeholder="حدد ميزانيتك التقريبية"
                  />
                </div>
              </div>

              {/* تفاصيل المشروع */}
              <div className="space-y-2">
                <Label htmlFor="details" className="text-lg font-medium text-right block">
                  تفاصيل المشروع <span className="text-[#fc2f2f]">*</span>
                </Label>
                <Textarea 
                  id="details" 
                  className="w-full p-3 border-2 text-right min-h-[150px]" 
                  placeholder="اشرح تفاصيل مشروعك واحتياجاتك بشكل واضح"
                  required
                  rows={5}
                />
              </div>

              {/* المدة المتوقعة */}
              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-lg font-medium text-right block">
                  المدة المتوقعة للتنفيذ
                </Label>
                <select 
                  id="timeline"
                  className="w-full p-3 border-2 rounded-lg text-right bg-white"
                >
                  <option value="">حدد المدة المتوقعة</option>
                  <option value="1-month">شهر واحد</option>
                  <option value="2-months">شهرين</option>
                  <option value="3-months">ثلاثة أشهر</option>
                  <option value="more">أكثر من ذلك</option>
                </select>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-[#fc2f2f] hover:bg-[#fc2f2f]/90 text-white text-lg py-6"
                >
                  إرسال الطلب
                </Button>
                <p className="text-gray-500 text-sm text-center mt-4">
                  * الحقول المطلوبة
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Request;
