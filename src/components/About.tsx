import { AlertTriangle, Lightbulb, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const sections = [
    {
      icon: Target,
      title: "Objectives",
      content: "Develop a multi-modal driver and road monitoring system that fuses physiological signals, camera input, weather context, GPS speed, and steering behavior into a real-time risk score updated at 10 Hz.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: AlertTriangle,
      title: "The Problem",
      content: "Fatigue, drowsiness, and distraction remain major accident factors, while many existing systems depend on a single sensor. That creates false positives, poor environmental robustness, and weak personalization for real drivers.",
      gradient: "from-sky-600 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Our Solution",
      content: "DriveGuard combines Random Forest fatigue detection, MobileNetV2 drowsiness recognition, YOLOv8 road-sign monitoring, and anomaly-based steering deviation detection into clear graduated alerts.",
      gradient: "from-primary-glow to-emerald-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">DriveGuard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A clean, research-driven system for proactive accident prevention in intelligent transportation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card
                key={section.title}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
