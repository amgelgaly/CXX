import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Marketing Mosaic
            </h3>
            <p className="text-gray-300 leading-relaxed">
              نحول استراتيجيتك التسويقية من خلال منصتنا المبتكرة لتحقيق أقصى نجاح لعملك
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary/90">روابط سريعة</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/60"></span>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/60"></span>
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/60"></span>
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/60"></span>
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary/90">معلومات التواصل</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3 hover:text-primary transition-colors duration-300">
                <svg className="w-5 h-5 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                info@marketingmosaic.com
              </li>
              <li className="flex items-center gap-3 hover:text-primary transition-colors duration-300">
                <svg className="w-5 h-5 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +966 555 123 4567
              </li>
              <li className="flex items-center gap-3 hover:text-primary transition-colors duration-300">
                <svg className="w-5 h-5 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                الرياض، المملكة العربية السعودية
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary/90">تابعنا على</h3>
            <div className="flex gap-6">
              <a href="#" className="bg-gray-800/50 p-3 rounded-lg text-gray-300 hover:text-primary hover:bg-gray-800 transition-all duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="bg-gray-800/50 p-3 rounded-lg text-gray-300 hover:text-primary hover:bg-gray-800 transition-all duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="bg-gray-800/50 p-3 rounded-lg text-gray-300 hover:text-primary hover:bg-gray-800 transition-all duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="bg-gray-800/50 p-3 rounded-lg text-gray-300 hover:text-primary hover:bg-gray-800 transition-all duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/60">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Marketing Mosaic. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
