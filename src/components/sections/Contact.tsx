import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      دعنا نتحدث عن مشروعك
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      تواصل معنا اليوم لمناقشة كيف يمكن لخدماتنا أن تساعد عملك على النمو والنجاح.
                    </p>
                    <Button
                      size="lg"
                      onClick={() => navigate("/contact")}
                      className="min-w-[200px]"
                    >
                      ابدأ مشروعك الآن
                    </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
