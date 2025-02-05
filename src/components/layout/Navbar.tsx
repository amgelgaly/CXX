import { Menu, X, Sun, Moon, Languages, LogOut, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = {
    ar: {
      services: 'خدماتنا',
      courses: 'الدورات',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      start: 'ابدأ الآن',
      dashboard: 'لوحة التحكم',
      profile: 'الملف الشخصي',
      logout: 'تسجيل الخروج',
      request: 'طلب خدمة',
      orderSchedule: 'جدولة الطلبات',
      about: 'من نحن',
    },
    en: {
      services: 'Our Services',
      courses: 'Courses',
      blog: 'Blog',
      contact: 'Contact',
      start: 'Get Started',
      dashboard: 'Dashboard',
      profile: 'Profile',
      logout: 'Logout',
      request: 'Request Service',
      orderSchedule: 'Order Schedule',
      about: 'About Us',
    }
  };

  const navLinks = isAuthenticated
    ? [
        { path: '/dashboard', label: menuItems[language].dashboard },
        { path: '/courses', label: menuItems[language].courses },
        { path: '/request', label: menuItems[language].request },
        { path: '/profile', label: menuItems[language].profile },
      ]
    : [
        { path: '/services', label: menuItems[language].services },
        { path: '/about', label: menuItems[language].about },
        { path: '/courses', label: menuItems[language].courses },
        { path: '/blog', label: menuItems[language].blog },
        { path: '/contact', label: menuItems[language].contact },
      ];

  return (
    <nav className="sticky top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 py-2">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => handleNavigation(isAuthenticated ? '/dashboard' : '/')}
              className="text-2xl font-bold text-primary"
            >
              A.Z
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  variant="ghost"
                  onClick={() => handleNavigation(link.path)}
                  className={`text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-primary' : ''
                  }`}
                >
                  {link.label}
                </Button>
              ))}


              {isAuthenticated ? (
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors duration-200 mr-2 rtl:ml-2"
                >
                  <LogOut className="h-4 w-4 mx-2" />
                  {menuItems[language].logout}
                </Button>
              ) : (
                <Button
                  variant="default"
                  onClick={() => handleNavigation('/login')}
                  className="bg-primary text-white hover:bg-primary/90 transition-colors duration-200 mr-2 rtl:ml-2"
                >
                  {menuItems[language].start}
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-1 rtl:space-x-reverse border-r dark:border-gray-700 mr-2 pr-2 rtl:border-l rtl:border-r-0 rtl:ml-2 rtl:pl-2">
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                size="icon"
                className="p-2"
              >
                <Languages className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                onClick={toggleDarkMode}
                size="icon"
                className="p-2"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                size="icon"
                className="p-2"
              >
                <Languages className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                onClick={toggleDarkMode}
                size="icon"
                className="p-2"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </Button>
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 ms-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant="ghost"
                onClick={() => handleNavigation(link.path)}
                className={`w-full text-start text-gray-900 dark:text-gray-100 hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : ''
                }`}
              >
                {link.label}
              </Button>
            ))}

            <Button
              variant="ghost"
              onClick={() => handleNavigation('/order-schedule')}
              className="w-full text-start text-gray-900 dark:text-gray-100 hover:text-primary"
            >
              <ShoppingCart className="h-4 w-4 mx-2" />
              {menuItems[language].orderSchedule}
            </Button>

            {isAuthenticated ? (
              <Button
                variant="outline"
                onClick={handleLogout}
                className="w-full text-start text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 mx-2" />
                {menuItems[language].logout}
              </Button>
            ) : (
              <Button
                onClick={() => handleNavigation('/login')}
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                {menuItems[language].start}
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
