import { Smartphone, Monitor, Server, Database } from "lucide-react";
import driverBehavior from "@/assets/driver-behavior.jpg";
import predictiveMaintenance from "@/assets/predictive-maintenance.jpg";
import fuelEfficiency from "@/assets/fuel-efficiency.jpg";

const FinalOutput = () => {
  const outputs = [
    {
      icon: Smartphone,
      title: "Mobile Application",
      description: "Cross-platform app with real-time driver behavior monitoring, predictive maintenance alerts, and fuel efficiency recommendations.",
      image: fuelEfficiency,
    },
   
    {
      icon: Server,
      title: "ML Model Pipeline",
      description: "Production-ready machine learning models for behavior classification, predictive maintenance, and fuel optimization.",
      image: predictiveMaintenance,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Final <span className="text-primary">Output</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete system implementation delivering intelligent vehicle monitoring across multiple platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {outputs.map((output, index) => {
            const Icon = output.icon;
            return (
              <div
                key={output.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 border-2 border-border hover:border-primary transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={output.image}
                      alt={output.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {output.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {output.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto animate-scale-in">
          <div className="flex items-start gap-4 mb-6">
            <Database className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-3">System Architecture</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The NeuroRide system integrates mobile sensor data collection, cloud-based machine learning processing,
                and real-time analytics to deliver a comprehensive vehicle intelligence platform.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Key Components:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Mobile sensor data collection (GPS, accelerometer)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Real-time weather API integration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Machine learning model deployment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  RESTful API backend services
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Deliverables:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Fully functional mobile applications
                </li>
                {/* <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Web-based admin dashboard
                </li> */}
                
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Trained ML models and APIs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Comprehensive documentation
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
