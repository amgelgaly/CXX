import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a4a4a_1px,transparent_1px),linear-gradient(to_bottom,#4a4a4a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1] dark:opacity-[0.2]" />
      
      <div className="relative container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 animate-fade-up">
                  نحول رؤيتك الرقمية إلى واقع
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  نساعد الشركات على النمو في العصر الرقمي من خلال حلول تسويقية مبتكرة وفعالة.
                </p>
        <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={() => navigate("/login")}
          >
            ابدأ الآن
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8"
            onClick={() => navigate("/services")}
          >
            استكشف خدماتنا
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
