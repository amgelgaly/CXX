import React from 'react';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain, Rocket, Network, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/layout/PageHeader';

const Future = () => {
  const navigate = useNavigate();

  const initiatives = [
    {
      icon: Brain,
      title: 'الذكاء الاصطناعي في التسويق',
      description: 'توظيف تقنيات الذكاء الاصطناعي المتقدمة لتحسين كفاءة الحملات التسويقية وتحقيق نتائج أفضل.',
      features: [
        'تحليل سلوك المستخدم',
        'توقع اتجاهات السوق',
        'تحسين استهداف الجمهور'
      ]
    },
    {
      icon: Rocket,
      title: 'الابتكار المستمر',
      description: 'تطوير حلول مبتكرة تواكب التغيرات المتسارعة في عالم التسويق الرقمي وتلبي احتياجات السوق المتجددة.',
      features: [
        'تطوير منتجات جديدة',
        'تحسين تجربة المستخدم',
        'أتمتة العمليات'
      ]
    },
    {
      icon: Network,
      title: 'التكامل التقني',
      description: 'دمج التقنيات الحديثة مع الاستراتيجيات التسويقية التقليدية لخلق تجربة تسويقية متكاملة وفعالة.',
      features: [
        'تكامل المنصات',
        'تحليل البيانات الموحد',
        'إدارة الحملات المتكاملة'
      ]
    },
    {
      icon: Shield,
      title: 'الخصوصية والأمان',
      description: 'الالتزام بأعلى معايير الخصوصية والأمان في استخدام التقنيات الحديثة والذكاء الاصطناعي.',
      features: [
        'حماية بيانات العملاء',
        'الامتثال للمعايير العالمية',
        'تشفير البيانات'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <PageHeader 
          title="مستقبل التسويق والذكاء الاصطناعي"
          subtitle="نبني مستقبل التسويق الرقمي"
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
            رؤيتنا للمستقبل
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            في ظل التطور المتسارع للذكاء الاصطناعي، نحن ندرك أهمية الدور الحيوي الذي نلعبه في تشكيل مستقبل التسويق. نؤمن أن النجاح يكمن في التوازن بين قوة الذكاء الاصطناعي والإبداع البشري.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {initiative.description}
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">المميزات الرئيسية:</h4>
                    <ul className="space-y-2">
                      {initiative.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
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
              التزامنا المستقبلي
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  التطوير المستمر
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">الاستثمار في البحث والتطوير</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">تطوير حلول مبتكرة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">مواكبة التطورات التقنية</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  تمكين العملاء
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">توفير أدوات تحليل متقدمة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">تقديم حلول مخصصة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-600">دعم النمو المستدام</span>
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

export default Future;
