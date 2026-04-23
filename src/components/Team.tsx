import { Linkedin, Github, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Helper: show up to 2 initials if no image is provided
const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("") || "?";

// If you're using Next.js, you can swap <img> for next/image easily.
// import Image from "next/image";

const Team = () => {
  const team = [
    {
      name: "Munasinghe M.M.A.D.",
      role: "Sri Lanka Institute of Information Technology",
      id: "IT21269820 ",
      email: "it21269820@my.sliit.lk",
      linkedin: "https://www.linkedin.com/in/anjana-munasinghe-00123523b",
      github: "https://github.com/Anjanadinuwan",
      image: "/neuro-ride-hub/team/munasinghe.jpg",
    },
    {
      name: "Rashmika K.M.G.K",
      role: "Sri Lanka Institute of Information Technology",
      id: "IT21389924",
      email: "it21389924@my.sliit.lk",
      linkedin: "https://www.linkedin.com/in/kalana-rashmika-6a4718289/",
      github: "https://github.com/kalanarashmika",
      image: "/neuro-ride-hub/team/rashmika.jpg",
    },
    {
      name: "Wijesingha W.M.R",
      role: "Sri Lanka Institute of Information Technology",
      id: "IT21251382",
      email: "it21251382@my.sliit.lk",
      linkedin: "https://linkedin.com",
      github: "https://github.com/Ravindu-Wijesingha",
      image: "/neuro-ride-hub/team/wijesingha.jpg",
    },
    {
      name: "Moraes V.J",
      role: "Sri Lanka Institute of Information Technology",
      id: "IT21274534",
      email: "it21274534@my.sliit.lk",
      linkedin: "https://linkedin.com",
      github: "https://github.com/JaanukaMoraes",
      image: "/neuro-ride-hub/team/moraes.jpg",
    },
    {
      name: "Mr. H. M. Samadhi Chathuranga Rathnayake",
      role: "Sri Lanka Institute of Information Technology",
      id: "Supervisor",
      email: "samadhi.r@sliit.lk",
            linkedin: "https://www.linkedin.com/in/samadhi-chathuranga-rathnayake/",

      image: "/neuro-ride-hub/team/supervicer.jpg",
    },
    {
      name: "Ms. Aparna",
      role: "Sri Lanka Institute of Information Technology",
      id: "Co-Supervisor",
      email: "aparna.j@sliit.lk",
      image: "/neuro-ride-hub/team/cosuper.jpeg",
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated researchers and engineers from SLIIT working together to revolutionize autonomous driving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={member.id}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl animate-scale-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-primary to-primary-glow h-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <CardContent className="pt-6 text-center relative -mt-16">
                {/* Avatar: prefers photo; falls back to initials */}
                {member.image ? (
                  // For Next.js replace with <Image src={member.image} alt={member.name} width={96} height={96} .../>
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-background shadow-lg group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null; // prevent loop
                      img.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
                        member.name
                      )}`;
                    }}
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white border-4 border-background group-hover:scale-110 transition-transform duration-300">
                    {initials(member.name)}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.id}</p>
                <p className="text-sm text-primary font-medium mb-4">{member.role}</p>

                <div className="flex justify-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                    asChild
                  >
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
