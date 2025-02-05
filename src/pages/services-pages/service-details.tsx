import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Service Details</h1>
      <p>Service ID: {id}</p>
    </div>
  );
};

export default ServiceDetailsPage;
