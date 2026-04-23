import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    project: [
      { label: "About", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Results", href: "#results" },
      { label: "Team", href: "#team" },
    ],
    research: [
      { label: "Abstract", href: "#abstract" },
      { label: "Literature Review", href: "#literature" },
      { label: "Technologies", href: "#technologies" },
      { label: "Milestones", href: "#milestones" },
    ],
    contact: [
      { label: "Email Us", href: "mailto:driveguard@gmail.com" },
      { label: "Visit SLIIT", href: "https://www.sliit.lk" },
      { label: "Resources", href: "#resources" },
      { label: "Contact", href: "#contact" },
    ],
  };

  const navigate = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}driveguard-logo.png`}
                alt="DriveGuard Logo"
                className="h-12 w-12 object-contain drop-shadow-lg"
              />
              <span className="text-2xl font-bold">
                <span className="text-white">Drive</span>
                <span className="text-primary">Guard</span>
              </span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Multi-modal driver and road monitoring for real-time risk prediction. A final year research project by SLIIT students.
            </p>
            <a
              href="mailto:driveguard@gmail.com"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-secondary-foreground/10 px-4 text-sm transition-colors hover:bg-primary"
            >
              <Mail className="h-4 w-4" />
              driveguard@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Project</h3>
            <ul className="space-y-2">
              {footerLinks.project.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Research</h3>
            <ul className="space-y-2">
              {footerLinks.research.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => navigate(link.href)}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/70 text-sm text-center md:text-left">
              Copyright {currentYear} DriveGuard. Final Year Project - Sri Lanka Institute of Information Technology.
            </p>
            <p className="text-secondary-foreground/70 text-sm">Built by the DriveGuard Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
