import { BrainCircuit, Code, Globe, Scan, Smartphone, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Technologies = () => {
  const technologies = [
    {
      icon: Code,
      title: "Python",
      description: "Model training, data preprocessing, risk-score logic, and backend research utilities.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Scan,
      title: "YOLOv8",
      description: "Real-time road-sign and road-context detection for in-vehicle safety alerts.",
      color: "from-cyan-500 to-sky-600",
    },
    {
      icon: Smartphone,
      title: "Flutter",
      description: "Mobile application experience for sensor capture, alerts, and driver interaction.",
      color: "from-sky-500 to-indigo-600",
    },
    {
      icon: Globe,
      title: "React (Web)",
      description: "Responsive project website and dashboard-style presentation interface.",
      color: "from-indigo-500 to-blue-700",
    },
    {
      icon: Workflow,
      title: "TensorFlow",
      description: "Deep learning workflow for visual classification and model deployment preparation.",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: BrainCircuit,
      title: "MobileNetV2",
      description: "Efficient CNN architecture for drowsiness classification on resource-aware devices.",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Implementation Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies <span className="text-primary">Used</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The core tools behind DriveGuard's computer vision, mobile experience, and web presentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={tech.title}
                className="relative overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-bl-full bg-gradient-to-br ${tech.color} opacity-10 transition-transform duration-500 group-hover:scale-150`} />
                <CardHeader className="relative">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${tech.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
