import { CheckCircle2 } from "lucide-react";

const Milestones = () => {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Research & Planning",
      date: "January 2024",
      description: "Literature review, problem identification, and project scope definition. Topic assessment and initial research documentation.",
      status: "completed",
    },
    {
      phase: "Phase 2",
      title: "Proposal Development",
      date: "February 2024",
      description: "Project proposals submitted by all team members. Methodology defined and approved by supervisors.",
      status: "completed",
    },
    {
      phase: "Phase 3",
      title: "Data Collection & Preprocessing",
      date: "March - April 2024",
      description: "Mobile sensor data collection, historical vehicle data aggregation, and API integration for weather data.",
      status: "completed",
    },
    {
      phase: "Phase 4",
      title: "Model Development",
      date: "May - June 2024",
      description: "Machine learning model training for all four modules. Performance optimization and accuracy testing.",
      status: "completed",
    },
    {
      phase: "Phase 5",
      title: "System Integration",
      date: "July - August 2024",
      description: "Backend API development, mobile application creation, and integration of all components.",
      status: "completed",
    },
    {
      phase: "Phase 6",
      title: "Testing & Validation",
      date: "September 2024",
      description: "Comprehensive testing with real-world data. Performance metrics evaluation and system refinement.",
      status: "completed",
    },
    {
      phase: "Phase 7",
      title: "Documentation & Presentation",
      date: "October 2024",
      description: "Final report compilation, research paper preparation, and presentation materials development.",
      status: "in-progress",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-primary">Milestones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey from concept to completion
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary/30" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.phase}
                className="relative mb-12 ml-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[52px] w-4 h-4 rounded-full ${
                  milestone.status === "completed" ? "bg-primary" : "bg-primary/50"
                } border-4 border-background`} />
                
                {/* Content Card */}
                <div className={`bg-card border-2 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl ${
                  milestone.status === "in-progress" ? "border-primary shadow-lg" : "border-border"
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-sm font-semibold text-primary">{milestone.phase}</span>
                      <h3 className="text-2xl font-bold mt-1">{milestone.title}</h3>
                    </div>
                    {milestone.status === "completed" && (
                      <CheckCircle2 className="h-8 w-8 text-green-500 flex-shrink-0" />
                    )}
                    {milestone.status === "in-progress" && (
                      <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold flex-shrink-0">
                        In Progress
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{milestone.date}</p>
                  <p className="text-foreground/80 leading-relaxed">
                    {milestone.description}
                  </p>
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
