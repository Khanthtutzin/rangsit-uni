import { BookOpen, Library, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const QuickLinks = () => {
  const links = [
    {
      title: "RIC",
      description: "Research and Development Center - Leading innovation and research initiatives",
      icon: GraduationCap,
      href: "https://rsuip.org/",
      color: "primary",
    },
    {
      title: "RSU Library",
      description: "Access our extensive collection of books, journals, and digital resources",
      icon: Library,
      href: "https://library.rsu.ac.th/",
      color: "secondary",
    },
    {
      title: "RSU Intranet",
      description: "Student portal for courses, grades, and university services",
      icon: BookOpen,
      href: "https://intranet.rsu.ac.th/",
      color: "accent",
    },
  ];

  return (
    <section id="quick-links" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate to our essential services and resources
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-8 h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant cursor-pointer bg-card">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
