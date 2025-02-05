import { useEffect } from "react";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 px-4 py-24 md:py-32"
    >
      <div className="container max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
          اتصل بنا
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          نحن هنا للإجابة على استفساراتك ومساعدتك في كل ما تحتاج
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
