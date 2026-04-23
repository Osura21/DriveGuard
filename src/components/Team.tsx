import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("") || "DG";

const Team = () => {
  const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;
  const team = [
    {
      name: "Samoda T.W.O",
      id: "IT22257468",
      role: "Road & Weather Monitoring Module",
      email: "IT22257468@my.sliit.lk",
      image: assetUrl("team/it22257468.png"),
    },
    {
      name: "D.L.R Dilochana",
      id: "IT22211514",
      role: "Fatigue Detection Module",
      email: "IT22211514@my.sliit.lk",
      image: assetUrl("team/it22211514.png"),
    },
    {
      name: "Pinsara T.H.A.K",
      id: "IT22255860",
      role: "Drowsiness Detection Module",
      email: "IT22255860@my.sliit.lk",
      image: assetUrl("team/it22255860.png"),
    },
    {
      name: "Senadheera S.C.C",
      id: "IT22134226",
      role: "Behavioral Deviation Detection Module",
      email: "IT22134226@my.sliit.lk",
      image: assetUrl("team/it22134226.png"),
    },
    {
      name: "MS. Manori Gamage",
      id: "Supervisor",
      role: "Project Supervisor",
      email: "manori.g@sliit.lk",
      image: assetUrl("team/manori-gamage.jpg"),
    },
    {
      name: "MR. Nelum Amarasena",
      id: "Co-Supervisor",
      role: "Project Co-Supervisor",
      email: "nelum.a@sliit.lk",
      image: assetUrl("team/nelum-amarasena.jpg"),
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Research Team</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DriveGuard is developed by SLIIT researchers working across AI, IoT, computer vision, and driver safety.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={member.id}
              className="overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-28 overflow-hidden bg-gradient-to-br from-secondary via-primary to-primary-glow">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.18)_45%,transparent_46%)]" />
              </div>

              <CardContent className="relative -mt-14 text-center pt-0">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto mb-4 h-28 w-28 rounded-full border-4 border-background object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
                  onError={(event) => {
                    const img = event.currentTarget;
                    img.onerror = null;
                    img.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(initials(member.name))}`;
                  }}
                />

                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.id}</p>
                <p className="min-h-10 text-sm font-medium text-primary mb-3">{member.role}</p>
                <p className="mb-5 text-xs text-muted-foreground break-all">{member.email}</p>

                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                  asChild
                >
                  <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
