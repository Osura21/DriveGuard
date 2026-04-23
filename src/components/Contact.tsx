import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Sri Lanka Institute of Information Technology (SLIIT)",
      detail: "New Kandy Road, Malabe, Sri Lanka",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+94 71 492 6074",
      detail: "Mon - Fri, 8:00 AM - 5:00 PM",
    },
    {
      icon: Mail,
      title: "Email",
      content: "neuroride@gmail.com",
      detail: "We'll respond within 24 hours",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday",
      detail: "8:00 AM - 5:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with the NeuroRide team at SLIIT
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you. Whether you have questions about our research,
                want to collaborate, or just want to say hello, feel free to reach out.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={info.title}
                    className="border-2 hover:border-primary transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{info.title}</h4>
                          <p className="text-sm text-foreground">{info.content}</p>
                          <p className="text-xs text-muted-foreground mt-1">{info.detail}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border-2 border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798094179654!2d79.97303731477463!3d6.914693095007267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1635789012345!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SLIIT Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your full name" className="border-2" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="border-2" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="How can we help?" className="border-2" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      className="border-2 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
