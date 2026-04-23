import fatigueImage from "@/assets/driveguard-fatigue.png";
import drowsinessImage from "@/assets/driveguard-drowsiness.png";
import roadWeatherImage from "@/assets/driveguard-road-weather.png";
import behaviorDeviationImage from "@/assets/driveguard-behavior-deviation.png";

const LiteratureReview = () => {
  const reviews = [
    {
      title: "Fatigue Detection System for Long-Term Driver Monitoring",
      content:
        "Fatigue detection research shows that physiological indicators such as heart rate variability, combined with behavioral patterns, can identify driver impairment more reliably than visual observation alone during long driving periods.",
      image: fatigueImage,
    },
    {
      title: "Multi-Sensor Driver Drowsiness Detection",
      content:
        "Multi-sensor drowsiness studies combine facial cues, SpO2, cabin temperature, and contextual signals to reduce false positives caused by lighting, camera angle, and individual driver differences.",
      image: drowsinessImage,
    },
    {
      title: "Road-Sign and Weather-Condition Monitoring",
      content:
        "Real-time traffic sign recognition with weather-aware speed and visibility analysis supports safer in-vehicle alerts, especially when environmental conditions change rapidly.",
      image: roadWeatherImage,
    },
    {
      title: "Personalized Driver Behavioural Deviation Detection",
      content:
        "Personalized behavioral baselines help distinguish normal driver style from abnormal maneuvers, allowing anomaly detection models to provide more relevant and less intrusive warnings.",
      image: behaviorDeviationImage,
    },
  ];

  return (
    <section id="literature" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Research Foundation</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Literature <span className="text-primary">Review</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four focused research areas that shape DriveGuard's multi-modal risk prediction pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <article
              key={review.title}
              className="group relative overflow-hidden rounded-lg border-2 border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {review.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{review.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiteratureReview;
