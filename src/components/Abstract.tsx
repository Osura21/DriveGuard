import { BookOpen, BrainCircuit, HeartPulse, ShieldCheck } from "lucide-react";

const Abstract = () => {
  const highlights = [
    { icon: HeartPulse, label: "Physiological Signals", color: "text-rose-500" },
    { icon: BrainCircuit, label: "Multi-Modal AI", color: "text-primary" },
    { icon: ShieldCheck, label: "Real-Time Risk Score", color: "text-emerald-500" },
    { icon: BookOpen, label: "Research Validated", color: "text-indigo-500" },
  ];

  return (
    <section id="abstract" className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Research Abstract</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Multi-Modal Driver & Road Monitoring System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time risk prediction through sensor fusion, visual intelligence, and personalized behavior analysis.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6" />
          </div>

          <div className="rounded-lg border-2 border-primary/20 bg-card p-6 shadow-2xl animate-scale-in md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.32fr]">
              <div className="space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                <p>
                  Road traffic accidents attributable to driver impairment, specifically fatigue, drowsiness, and
                  distraction, represent a persistent global public health crisis. According to the World Health
                  Organization, approximately 1.35 million people die each year in road traffic crashes, with
                  driver-related factors accounting for over 90% of incidents. Existing driver monitoring systems
                  predominantly employ single-modal sensing approaches, which suffer from high false-positive rates,
                  sensitivity to environmental variation, and limited ability to model individualized driving behavior.
                </p>

                <p>
                  DriveGuard proposes a multi-modal, real-time driver and road monitoring system that integrates
                  physiological signals, visual data, environmental context, and steering behavior to produce a fused
                  driving risk score. The architecture includes four tightly coupled modules: fatigue detection using
                  HRV time-domain features and behavioral cues with a Random Forest classifier trained on the SWELL-KW
                  dataset; drowsiness detection using a fine-tuned MobileNetV2 CNN with SpO2 and cabin temperature
                  through Bayesian-weighted fusion; road condition monitoring using YOLOv8 for traffic sign recognition
                  with GPS-derived speed and weather API integration; and personalized behavioral deviation detection
                  using steering wheel angular velocity with Isolation Forest and Local Outlier Factor.
                </p>

                <p>
                  All module outputs are fused through a dynamically weighted aggregation layer that computes a scalar
                  risk score updated at 10 Hz and triggers graduated alerts based on severity thresholds. Experimental
                  evaluation demonstrates fatigue detection accuracy of 89.1% with F1 0.87, drowsiness classification
                  accuracy of 91.3%, traffic sign detection mAP@0.5 of 88.4%, and end-to-end latency of 94 ms on the
                  target hardware platform. Personalized behavioral profiling reduced false-positive alert rates by
                  23.4% compared with non-personalized baselines.
                </p>

                <p className="font-medium text-foreground">
                  Keywords: driver monitoring, fatigue detection, drowsiness detection, heart rate variability, YOLOv8,
                  MobileNetV2, anomaly detection, IoT, sensor fusion, intelligent transportation systems.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-lg border border-border bg-muted/40 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-background ${item.color}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
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

export default Abstract;
