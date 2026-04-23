import { TrendingUp, Users, Shield, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import resultsImage from "@/assets/results-impact.webp";

const Results = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "95%",
      label: "Classification Accuracy",
      description: "High precision in driver behavior analysis",
    },
    {
      icon: Shield,
      value: "70%",
      label: "Reduced Maintenance Costs",
      description: "Through predictive failure detection",
    },
    {
      icon: Leaf,
      value: "25%",
      label: "Fuel Efficiency Gain",
      description: "Optimized consumption patterns",
    },
    {
      icon: Users,
      value: "100+",
      label: "Test Participants",
      description: "Real-world validation and feedback",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Results & <span className="text-primary">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Demonstrating significant improvements in safety, efficiency, and sustainability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img
              src={resultsImage}
              alt="Results Dashboard"
              className="rounded-2xl shadow-2xl border-2 border-primary/20"
            />
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div>
              <h3 className="text-3xl font-bold mb-4">Key Achievements</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our integrated machine learning framework has demonstrated exceptional performance across all four modules,
                validating the effectiveness of our accessible, low-cost approach to vehicle intelligence.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Behavior Classification</h4>
                  <p className="text-sm text-muted-foreground">
                    Successfully categorized driving styles with 95% accuracy, enabling personalized safety recommendations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Predictive Accuracy</h4>
                  <p className="text-sm text-muted-foreground">
                    Component failure predictions achieved 85% accuracy, significantly reducing unexpected breakdowns
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Environmental Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Fuel optimization strategies reduced consumption by up to 25%, lowering emissions and costs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={metric.label}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <h4 className="font-semibold mb-2">{metric.label}</h4>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
