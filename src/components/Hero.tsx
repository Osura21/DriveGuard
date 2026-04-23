import { ArrowRight, Brain, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="NeuroRide Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/75 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center gap-2 mb-6 animate-slide-in-left">
            <Brain className="h-8 w-8 text-primary animate-bounce-slow" />
            <span className="text-primary font-semibold text-lg">AI-Powered Driving Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              NeuroRide
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Predicting Driver Behavior and Vehicle Maintenance Using Simple Data
          </p>
          
          <p className="text-lg text-foreground/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            A revolutionary machine learning framework that democratizes advanced safety and efficiency features for all vehicles,
            leveraging mobile sensor data and real-time analytics to enhance driving safety and optimize vehicle performance.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={scrollToAbout}
            >
              Explore Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => document.querySelector("#resources")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 animate-bounce-slow hidden lg:block">
        <Car className="h-16 w-16 text-primary/30" />
      </div>
    </section>
  );
};

export default Hero;
