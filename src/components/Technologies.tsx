import { Code, Database, Smartphone, Globe, Scan, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Technologies = () => {
  const technologies = [
    {
      icon: Code,
      title: "Python",
      description:
        "Core scripting for data pipelines, backend utilities, and ML glue code",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Scan,
      
      title: "OpenCV",
      description:
        "Computer vision processing for detection, tracking, and on-device inference",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Flame,
      title: "Firebase",
      description:
        "Authentication, realtime database, and cloud functions for rapid delivery",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Smartphone,
      title: "Flutter",
      description:
        "High‑performance cross‑platform mobile apps with a native feel",
      color: "from-sky-500 to-sky-600",
    },
    {
      icon: Globe,
      title: "React (Web)",
      description:
        "Responsive web frontend with modern tooling and component libraries",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "Schema design, ETL, and lifecycle governance for analytics‑ready data",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies <span className="text-primary">Used</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The core stack powering the platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={tech.title}
                className="relative border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tech.color} opacity-10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}
                />
                <CardHeader className="relative">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground">{tech.description}</p>
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
