import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Courses from "@/components/sections/Courses";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const IndexPage = () => {
  return (
    <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pt-16"
          >
            <Hero />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-background"
          >
            <div className="container py-24 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"> </h2>
              </div>
              <Separator className="my-8" />
              <Services />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="container py-24 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"></h2>
              </div>
              <Separator className="my-8" />
              <Courses />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Contact />
          </motion.div>
        </div>
  );
};

export default IndexPage;
