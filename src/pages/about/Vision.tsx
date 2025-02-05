import React from 'react';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/layout/PageHeader';

const Vision = () => {
  const navigate = useNavigate();

  const visionPoints = [
    {
      title: 'الريادة في التسويق الرقمي',
      description: 'نسعى لأن نكون الرواد في تقديم حلول تسويقية مبتكرة تجمع بين الإبداع البشري وقوة الذكاء الاصطناعي.'
    },
    {
      title: 'التميز في الخدمة',
      description: 'نهدف إلى تقديم خدمات استثنائية تتجاوز توقعات عملائنا وتساعدهم في تحقيق أهدافهم.'
    },
    {
      title: 'الابتكار المستمر',
      description: 'نلتزم بالتطوير المستمر لخدماتنا وحلولنا لمواكبة التطورات التقنية والتسويقية.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <PageHeader 
          title="رؤيتنا"
          subtitle="نحو مستقبل رقمي مبتكر"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              كيف نحقق رؤيتنا
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span className="text-gray-600">الاستثمار في أحدث تقنيات الذكاء الاصطناعي والتحليل</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span className="text-gray-600">تطوير كوادر بشرية مبدعة ومتخصصة</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span className="text-gray-600">بناء شراكات استراتيجية مع الشركات الرائدة</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span className="text-gray-600">التركيز على التطوير المستمر والابتكار</span>
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Vision;
