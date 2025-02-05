import React from 'react';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Users, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/layout/PageHeader';

const Goals = () => {
  const navigate = useNavigate();

  const goals = [
    {
      icon: Target,
      title: 'تطوير حلول تسويقية متكاملة',
      description: 'نهدف إلى تطوير حلول تسويقية شاملة تجمع بين الابتكار والفعالية، مع التركيز على تحقيق نتائج ملموسة لعملائنا.',
      achievements: [
        'إطلاق منصة تحليلات متقدمة',
        'تطوير نظام إدارة الحملات الذكي',
        'تحسين تجربة العملاء'
      ]
    },
    {
      icon: Users,
      title: 'بناء شراكات استراتيجية',
      description: 'نسعى لبناء علاقات طويلة المدى مع عملائنا، قائمة على الثقة المتبادلة والنمو المستدام.',
      achievements: [
        'توسيع شبكة الشركاء',
        'تعزيز العلاقات مع العملاء',
        'تطوير برامج الولاء'
      ]
    },
    {
      icon: Lightbulb,
      title: 'الاستثمار في التقنيات الحديثة',
      description: 'نستثمر بشكل مستمر في أحدث التقنيات والأدوات التسويقية لضمان تقديم أفضل الخدمات لعملائنا.',
      achievements: [
        'تبني تقنيات الذكاء الاصطناعي',
        'تطوير أدوات تحليل البيانات',
        'تحديث البنية التحتية التقنية'
      ]
    },
    {
      icon: TrendingUp,
      title: 'تطوير الكفاءات',
      description: 'نركز على تطوير كفاءات تسويقية محترفة قادرة على قيادة المستقبل وتحقيق نتائج استثنائية.',
      achievements: [
        'برامج تدريب مستمرة',
        'استقطاب المواهب المتميزة',
        'تطوير المهارات القيادية'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <PageHeader 
          title="أهدافنا"
          subtitle="خطواتنا نحو التميز والريادة"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {goal.description}
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">الإنجازات:</h4>
                    <ul className="space-y-2">
                      {goal.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              مؤشرات النجاح
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-gray-600">رضا العملاء</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">مشروع ناجح</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">شريك استراتيجي</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">نمو سنوي</div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Goals;
