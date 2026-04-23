import { CheckCircle2, Clock3 } from "lucide-react";

const Milestones = () => {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Topic Assessment & Planning",
      date: "August 2025",
      description: "Defined the DriveGuard scope, research problem, objectives, module breakdown, and evaluation direction.",
      status: "completed",
    },
    {
      phase: "Phase 2",
      title: "Proposal Development",
      date: "September 2025",
      description: "Prepared individual proposal reports and the group proposal presentation for the multi-modal monitoring system.",
      status: "completed",
    },
    {
      phase: "Phase 3",
      title: "Dataset Study & Preprocessing",
      date: "October - November 2025",
      description: "Reviewed public and custom datasets, including SWELL-KW, visual drowsiness data, road-sign inputs, weather data, and steering behavior traces.",
      status: "completed",
    },
    {
      phase: "Phase 4",
      title: "Model Development",
      date: "December 2025 - January 2026",
      description: "Developed Random Forest fatigue detection, MobileNetV2 drowsiness classification, YOLOv8 road-sign detection, and anomaly detection models.",
      status: "completed",
    },
    {
      phase: "Phase 5",
      title: "System Integration",
      date: "February 2026",
      description: "Integrated module outputs into a dynamic risk-score layer and connected alerts with mobile and web interfaces.",
      status: "completed",
    },
    {
      phase: "Phase 6",
      title: "Testing & Evaluation",
      date: "March 2026",
      description: "Measured accuracy, F1 score, mAP@0.5, latency, and false-positive reduction against baseline approaches.",
      status: "completed",
    },
    {
      phase: "Phase 7",
      title: "Final Documentation & Presentation",
      date: "April 2026",
      description: "Completed final resources, progress presentations, and polished project website for evaluation.",
      status: "in-progress",
    },
  ];

  return (
    <section id="milestones" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Project Timeline</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-primary">Milestones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DriveGuard's development journey from August 2025 through final evaluation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary/30" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.phase}
                className="relative mb-12 ml-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute -left-[52px] w-4 h-4 rounded-full border-4 border-background ${
                    milestone.status === "completed" ? "bg-primary" : "bg-primary/50"
                  }`}
                />

                <div
                  className={`rounded-lg border-2 bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-xl ${
                    milestone.status === "in-progress" ? "border-primary shadow-lg" : "border-border"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="text-sm font-semibold text-primary">{milestone.phase}</span>
                      <h3 className="text-2xl font-bold mt-1">{milestone.title}</h3>
                    </div>
                    {milestone.status === "completed" ? (
                      <CheckCircle2 className="h-8 w-8 text-emerald-500 flex-shrink-0" />
                    ) : (
                      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                        <Clock3 className="h-4 w-4" />
                        In Progress
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 mb-3">{milestone.date}</p>
                  <p className="text-foreground/80 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
