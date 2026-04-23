import { Brain, Wrench, Cloud, Fuel } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Driver Behavior Analysis",
      description: "Advanced AI algorithms classify driving styles using mobile sensor data (GPS, accelerometer), providing real-time insights into driving patterns and safety metrics.",
      stats: "95% accuracy",
    },
    {
      icon: Wrench,
      title: "Predictive Maintenance",
      description: "Forecast vehicle component failures before they occur based on driving patterns and historical data, reducing unexpected breakdowns and maintenance costs.",
      stats: "70% cost reduction",
    },
    {
      icon: Cloud,
      title: "Weather Impact Analysis",
      description: "Real-time weather data integration provides adaptive safety recommendations, helping drivers navigate challenging environmental conditions with confidence.",
      stats: "Real-time updates",
    },
    {
      icon: Fuel,
      title: "Fuel Efficiency Optimization",
      description: "Regression models analyze driving behavior to provide actionable tips for optimizing fuel consumption, promoting sustainable and cost-effective driving.",
      stats: "25% fuel savings",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four interconnected modules working together for comprehensive vehicle intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in group bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {feature.stats}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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

export default Features;
