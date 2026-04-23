import { Github, Linkedin, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    project: [
      { label: "About", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Team", href: "#team" },
      { label: "Resources", href: "#resources" },
    ],
    research: [
      { label: "Abstract", href: "#about" },
      { label: "Literature Review", href: "#features" },
      { label: "Methodology", href: "#features" },
      { label: "Results", href: "#contact" },
    ],
    contact: [
      { label: "Email Us", href: "mailto:neuroride@gmail.com" },
      { label: "Visit SLIIT", href: "https://www.sliit.lk" },
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="NeuroRide Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold">
                <span className="text-white">Neuro</span>
                <span className="text-primary">Ride</span>
              </span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Revolutionizing vehicle intelligence through accessible machine learning solutions.
              A final year project by SLIIT students.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:neuroride@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Project Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Project</h3>
            <ul className="space-y-2">
              {footerLinks.project.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Research</h3>
            <ul className="space-y-2">
              {footerLinks.research.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/70 text-sm text-center md:text-left">
              © {currentYear} NeuroRide. Final Year Project - Sri Lanka Institute of Information Technology
            </p>
            <p className="text-secondary-foreground/70 text-sm flex items-center gap-2">
              Built by the NeuroRide Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
