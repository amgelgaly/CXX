import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import ServiceTracker from '@/components/orders/ServiceTracker';

const ServiceTrackingDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2 text-right">تتبع الخدمة #{id}</h1>
          <p className="text-gray-600 text-right">تفاصيل وحالة الخدمة</p>
        </CardContent>
      </Card>
      
      <ServiceTracker />
    </div>
  );
};

export default ServiceTrackingDetail;
