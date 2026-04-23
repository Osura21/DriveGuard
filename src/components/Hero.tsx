import { Activity, ArrowRight, Camera, Gauge, Map, ShieldCheck } from "lucide-react";
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
          alt="DriveGuard road monitoring dashboard concept"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-primary/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center gap-2 mb-6 animate-slide-in-left">
            <ShieldCheck className="h-8 w-8 text-primary animate-bounce-slow" />
            <span className="text-primary font-semibold text-lg">Real-time road risk intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            DriveGuard{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              protects every trip
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Real-Time Driver and Road Monitoring for Risk Prediction
          </p>
          
          <p className="text-lg text-foreground/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            DriveGuard combines driver attention analysis, road-scene monitoring, vehicle movement signals, and weather-aware
            context to predict risk before it becomes an accident. The platform is designed for a mobile-first safety workflow
            with fast alerts, clear dashboards, and evidence-based research documentation.
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

        <div className="hidden lg:block animate-slide-in-right">
          <div className="rounded-lg border border-primary/20 bg-background/85 p-6 shadow-2xl backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Live Risk Score</p>
                <p className="text-5xl font-bold text-primary">18%</p>
              </div>
              <div className="rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600">
                Low Risk
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Camera, label: "Driver attention", value: "Stable", width: "78%" },
                { icon: Map, label: "Road condition", value: "Clear lane", width: "86%" },
                { icon: Gauge, label: "Speed behavior", value: "Normal", width: "70%" },
                { icon: Activity, label: "Alert readiness", value: "Active", width: "92%" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-lg bg-muted/60 p-4">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-background">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow" style={{ width: item.width }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
