import React, { useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Courses from "@/components/sections/Courses";
import Contact from '@/pages/contact/Contact';
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from '@/pages/home/Index';
import AboutPage from '@/pages/about/About';
import Login from '@/pages/auth/Login';
import Dashboard from '@/pages/orders/Dashboard';
import Profile from '@/pages/auth/Profile';
import Request from '@/pages/orders/Request';
import OrderSchedulePage from '@/pages/orders/order-schedule';
import ServiceDetailsPage from '@/pages/services-pages/service-details';
import ContentCreation from '@/pages/services-pages/content-creation';
import DigitalMarketing from '@/pages/services-pages/digital-marketing';
import Seo from '@/pages/services-pages/seo';
import SocialMedia from '@/pages/services-pages/social-media';
import ServicesPage from '@/pages/services-pages/Services';
import CoursesPage from '@/pages/courses/Courses';
import Blog from '@/pages/blog/Blog';
import BlogPost from '@/pages/blog/BlogPost';
import NotFound from '@/pages/error/NotFound';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import ErrorBoundary from '@/components/error/ErrorBoundary'; // Import ErrorBoundary
import Footer from "@/components/layout/Footer";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary> {/* Wrap Routes with ErrorBoundary */}
        <Navbar />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/request" element={<Request />} />
          <Route path="/order-schedule" element={<ProtectedRoute><OrderSchedulePage /></ProtectedRoute>} />
          <Route path="/service-details/:id" element={<ProtectedRoute><ServiceDetailsPage /></ProtectedRoute>} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/content-creation" element={<ContentCreation />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<Seo />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
