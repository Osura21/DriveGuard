import { BookOpen, Database, Cpu, TrendingUp } from "lucide-react";

const Abstract = () => {
  const highlights = [
    { icon: Database, label: "Mobile Sensor Data", color: "text-blue-500" },
    { icon: Cpu, label: "Machine Learning", color: "text-primary" },
    { icon: TrendingUp, label: "High Accuracy", color: "text-green-500" },
    { icon: BookOpen, label: "Research-Based", color: "text-purple-500" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Abstract</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-primary/20 animate-scale-in">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Modern vehicles have proliferated faster than the deployment of intelligent monitoring systems,
              leaving a gap in road-safety assurance, maintenance planning, and fuel efficiency. This work
              presents a low-cost, hardware-agnostic framework that predicts driver behavior and vehicle
              maintenance needs using only commodity data sources—smartphone sensors (GPS and accelerometer),
              historical vehicle logs, and real-time weather feeds.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Our pipeline integrates four interoperable modules: (1) <span className="font-semibold">Driving-style
              classification</span>, which converts raw sensor traces into engineered temporal features (e.g., speed
              variance, longitudinal/lateral acceleration, jerk, stop–go bursts, idling ratio, and overspeed index)
              and trains lightweight classifiers to label trips; (2) <span className="font-semibold">Predictive
              maintenance</span>, which fuses usage summaries (mileage, engine-on time, fault-code history) with
              driver-style embeddings to estimate component wear and remaining useful life; (3)
              <span className="font-semibold"> Weather-aware safety</span>, which consumes real-time conditions
              (rain, visibility, wind, temperature) to compute a context score that dynamically adjusts driver alerts
              and route recommendations; and (4) <span className="font-semibold">Fuel-consumption optimization</span>,
              which learns personalized regression models to forecast trip-level consumption and propose actionable
              strategies (e.g., speed banding, throttle smoothness, idle reduction).
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              We evaluate the system using cross-driver splits and k-fold validation, reporting F1 for behavior
              classification and MAE for maintenance and fuel predictions, and benchmark against rule-based
              baselines. Ablation analyses show that (i) temporal dynamics of acceleration/jerk are decisive for
              behavior labeling, (ii) personalized maintenance models outperform fleet-level heuristics, and (iii)
              incorporating weather improves both safety prompts and fuel forecasts.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90">
              A Flutter mobile app collects sensor data and provides on-device or edge-assisted inference; Firebase
              manages secure storage and configuration; and a React web console offers fleet analytics. The results
              demonstrate high accuracy for behavior classification and precise, timely maintenance and fuel
              estimates—delivered without expensive in-vehicle hardware. The proposed approach is scalable,
              privacy-preserving, and immediately deployable, offering a practical path toward safer and more
              sustainable transportation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-3 ${item.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default Abstract;
