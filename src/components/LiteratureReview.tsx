import driverBehavior from "@/assets/driver-behavior.jpg";
import predictiveMaintenance from "@/assets/predictive-maintenance.jpg";
import weatherImpact from "@/assets/weather-impact.jpg";
import fuelEfficiency from "@/assets/fuel-efficiency.jpg";

const LiteratureReview = () => {
  const reviews = [
    {
      title: "Driver Behavior Analysis Systems",
      content: "Modern research in autonomous vehicle systems shows a focus on deeply integrated, proprietary hardware. Our approach bridges this gap by utilizing accessible mobile sensor data to classify driving patterns and enhance safety for all vehicle types.",
      image: driverBehavior,
    },
    {
      title: "Predictive Maintenance Technologies",
      content: "Traditional predictive maintenance relies on expensive onboard diagnostics. Our framework leverages machine learning algorithms to predict component failures based on driving patterns and historical data, making it accessible to older vehicles.",
      image: predictiveMaintenance,
    },
    {
      title: "Weather Impact on Vehicle Safety",
      content: "Environmental conditions significantly affect driving safety. Our system integrates real-time weather data to provide adaptive safety recommendations, helping drivers make informed decisions in challenging conditions.",
      image: weatherImpact,
    },
    {
      title: "Fuel Efficiency Optimization",
      content: "Fuel consumption optimization has traditionally been a manual process. Our AI-driven approach analyzes driving patterns in real-time to provide actionable recommendations, reducing costs and environmental impact.",
      image: fuelEfficiency,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Literature <span className="text-primary">Review</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Research foundations and technological innovations driving NeuroRide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.title}
              className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {review.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {review.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiteratureReview;
