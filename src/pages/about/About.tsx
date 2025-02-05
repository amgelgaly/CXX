import React from 'react';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import { Separator } from "@/components/ui/separator";


const AboutPage = () => {


  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      
        <PageHeader
          title="من نحن"
          subtitle="صفحة من نحن"
        />
      

      <Container className="py-8">


        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">About</div>
              <div className="text-gray-600">Page</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Content</div>
              <div className="text-gray-600">For About Page</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Example</div>
              <div className="text-gray-600">About Content</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
