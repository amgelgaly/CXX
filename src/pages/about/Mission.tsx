import React from 'react';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Users, Heart, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/layout/PageHeader';

const Mission = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: 'التميز',
      description: 'نسعى دائماً لتقديم أفضل الحلول وأكثرها فعالية لعملائنا'
    },
    {
      icon: Users,
      title: 'العمل الجماعي',
      description: 'نؤمن بقوة العمل الجماعي وتكامل المهارات لتحقيق النتائج المرجوة'
    },
    {
      icon: Heart,
      title: 'الشغف',
      description: 'نعمل بشغف وحماس لتحقيق رؤيتنا وخدمة عملائنا'
    },
    {
      icon: Shield,
      title: 'المصداقية',
      description: 'نلتزم بالشفافية والمصداقية في جميع تعاملاتنا'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <PageHeader 
          title="رسالتنا"
          subtitle="نحو تحقيق النجاح المشترك"
        />
      </div>

      <Container className="py-16">
        <Button
          variant="ghost"
          className="mb-8 flex items-center gap-2 hover:bg-gray-100"
          onClick={() => navigate('/about')}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>رجوع</span>
        </Button>

        <Card className="p-8 bg-white mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            رسالتنا
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            تمكين الشركات والمؤسسات من تحقيق أقصى إمكاناتها التسويقية من خلال توظيف أحدث التقنيات والاستراتيجيات المبتكرة، مع الحفاظ على اللمسة الإنسانية في كل ما نقدمه.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              التزامنا تجاه عملائنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  الجودة والتميز
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">تقديم خدمات عالية الجودة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">الالتزام بالمواعيد المحددة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">المتابعة المستمرة والدعم الفني</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  النمو والتطور
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">تحديث مستمر للخدمات والحلول</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">مواكبة أحدث التقنيات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">تطوير مهارات فريق العمل</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Mission;
