import { Target, AlertCircle, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const sections = [
    {
      icon: Target,
      title: "Objectives",
      content: "To create a robust, integrated machine learning framework that operates with data from mobile phones and accessible sources. Our system comprises four interconnected modules: Driver Behavior Analysis, Predictive Maintenance, Weather Impact Analysis, and Fuel Efficiency Prediction.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: AlertCircle,
      title: "The Problem",
      content: "Modern vehicles lack intelligent monitoring systems, creating significant gaps in road safety and operational efficiency. The average driver faces unmonitored driving habits that pose safety risks, unexpected mechanical failures resulting in costly downtime, and suboptimal fuel consumption with financial and environmental impacts.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Lightbulb,
      title: "Our Solution",
      content: "NeuroRide provides an affordable, scalable, and non-invasive solution using simple, widely available data sources. By leveraging mobile phone sensors (GPS, accelerometer), historical vehicle logs, and real-time weather APIs, we deliver advanced safety and efficiency features to all vehicles, including older and non-connected models.",
      gradient: "from-primary-glow to-yellow-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">NeuroRide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the technological divide with intelligent, accessible vehicle monitoring
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
