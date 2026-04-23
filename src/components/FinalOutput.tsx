import { Database, Monitor, Server, Smartphone } from "lucide-react";
import driverBehavior from "@/assets/driver-behavior.jpg";
import predictiveMaintenance from "@/assets/predictive-maintenance.jpg";
import fuelEfficiency from "@/assets/fuel-efficiency.jpg";

const FinalOutput = () => {
  const outputs = [
    {
      icon: Smartphone,
      title: "Driver Alert Mobile App",
      description: "A Flutter mobile experience for real-time risk display, sensor-aware alerts, and driver-facing safety feedback.",
      image: fuelEfficiency,
    },
    {
      icon: Server,
      title: "AI Risk Prediction Pipeline",
      description: "Four model modules fused into a dynamic risk-score layer for fatigue, drowsiness, road, weather, and steering behavior analysis.",
      image: predictiveMaintenance,
    },
    {
      icon: Monitor,
      title: "Research Web Interface",
      description: "A clean React website presenting the abstract, literature review, milestones, team, results, and downloadable documents.",
      image: driverBehavior,
    },
  ];

  return (
    <section id="output" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Deliverables</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Final <span className="text-primary">Output</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete research project package with AI modules, mobile alerts, web presentation, and evaluation resources.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {outputs.map((output, index) => {
            const Icon = output.icon;
            return (
              <div
                key={output.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 border-2 border-border transition-all duration-300 hover:border-primary">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={output.image}
                      alt={output.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{output.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{output.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-card border-2 border-primary/20 rounded-lg p-8 md:p-12 max-w-5xl mx-auto animate-scale-in">
          <div className="flex items-start gap-4 mb-6">
            <Database className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-3">System Architecture</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DriveGuard integrates physiological monitoring, camera-based inference, road and weather context,
                steering behavior analysis, and a risk-score engine into one coherent safety platform.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Key Components:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  HRV, SpO2, cabin temperature, GPS, and steering inputs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  MobileNetV2 and YOLOv8 visual intelligence modules
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Isolation Forest and Local Outlier Factor anomaly detection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  10 Hz weighted fusion layer with graduated alert thresholds
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Deliverables:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Flutter driver monitoring application
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  React project website and documentation hub
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Trained models and evaluation results
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Proposal, progress, and assessment PDFs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalOutput;
