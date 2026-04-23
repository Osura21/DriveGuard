import { BellRing, BrainCircuit, Camera, CloudSun, Gauge, HeartPulse, Route, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: HeartPulse,
      title: "Fatigue Detection",
      description: "Analyzes HRV time-domain features and behavioral cues to identify long-term fatigue patterns during driving.",
      stats: "89.1% accuracy",
    },
    {
      icon: Camera,
      title: "Drowsiness Detection",
      description: "Uses MobileNetV2 visual classification with SpO2 and cabin temperature inputs for stronger drowsiness decisions.",
      stats: "91.3% accuracy",
    },
    {
      icon: CloudSun,
      title: "Road & Weather Monitoring",
      description: "Combines YOLOv8 traffic sign detection, GPS speed estimation, and weather API data for real-time in-vehicle alerts.",
      stats: "88.4% mAP@0.5",
    },
    {
      icon: BrainCircuit,
      title: "Personalized Behavior Model",
      description: "Learns each driver's steering baseline and flags unusual maneuvers using ensemble anomaly detection.",
      stats: "23.4% fewer false alerts",
    },
    {
      icon: Gauge,
      title: "10 Hz Risk Scoring",
      description: "Fuses module outputs into a continuously updated scalar risk score for quick decision-making.",
      stats: "94 ms latency",
    },
    {
      icon: BellRing,
      title: "Graduated Alerts",
      description: "Triggers clean, severity-based warnings that help drivers understand the risk and react immediately.",
      stats: "Live alerts",
    },
    {
      icon: Route,
      title: "Trip Review Dashboard",
      description: "Presents route history, high-risk moments, alert causes, and safety trends for evaluators and supervisors.",
      stats: "Clear reports",
    },
    {
      icon: ShieldAlert,
      title: "Proactive Accident Prevention",
      description: "Moves from passive monitoring to early risk prediction for intelligent transportation safety.",
      stats: "Safety first",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Platform Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete safety workflow covering fatigue, drowsiness, road conditions, personalized behavior, and real-time risk alerts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="border-2 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl animate-scale-in group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <div className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {feature.stats}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
