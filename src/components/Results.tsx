import { Activity, BellOff, Gauge, Scan, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import resultsImage from "@/assets/driveguard-results-impact.png";

const Results = () => {
  const metrics = [
    {
      icon: ShieldCheck,
      value: "89.1%",
      label: "Fatigue Accuracy",
      description: "Random Forest fatigue detection with F1 score of 0.87.",
    },
    {
      icon: Activity,
      value: "91.3%",
      label: "Drowsiness Accuracy",
      description: "MobileNetV2 classification on the held-out test set.",
    },
    {
      icon: Scan,
      value: "88.4%",
      label: "Traffic Sign mAP@0.5",
      description: "YOLOv8 validation score for road-sign recognition.",
    },
    {
      icon: Gauge,
      value: "94 ms",
      label: "System Latency",
      description: "End-to-end latency on the target hardware platform.",
    },
  ];

  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Evaluation</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Results & <span className="text-primary">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DriveGuard demonstrates real-time performance and stronger alert quality through multi-modal fusion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img
              src={resultsImage}
              alt="DriveGuard results dashboard"
              className="rounded-lg shadow-2xl border-2 border-primary/20"
            />
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div>
              <h3 className="text-3xl font-bold mb-4">Key Achievements</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The system validates the value of fusing physiological signals, visual intelligence, environmental
                context, and personalized steering behavior into a single real-time risk score.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Dynamic Risk Fusion</h4>
                  <p className="text-sm text-muted-foreground">
                    All four modules feed a weighted aggregation layer that updates the risk score at 10 Hz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Lower False Positives</h4>
                  <p className="text-sm text-muted-foreground">
                    Personalized behavioral profiling reduced false-positive alert rates by 23.4% over non-personalized baselines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted">
                <BellOff className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Cleaner Driver Warnings</h4>
                  <p className="text-sm text-muted-foreground">
                    Graduated alert levels help drivers understand whether risk is low, moderate, high, or critical.
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
                className="border-2 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300">
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
