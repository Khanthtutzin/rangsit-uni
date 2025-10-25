import { BookOpen, Library, GraduationCap } from "lucide-react";
import RICImage from "@/assets/building 11.jpg";
import LibraryImage from "@/assets/building 7 2.jpg";
import HeroCampusImage from "@/assets/hero-campus.jpg";

const QuickLinks = () => {
  const links = [
    {
      title: "RIC",
      description: "Research and Development Center - Leading innovation and research initiatives",
      icon: GraduationCap,
      href: "https://rsuip.org/",
      color: "primary",
      image: RICImage,
    },
    {
      title: "RSU Library",
      description: "Access our extensive collection of books, journals, and digital resources",
      icon: Library,
      href: "https://library.rsu.ac.th/",
      color: "secondary",
      image: LibraryImage,
    },
    {
      title: "RSU Intranet",
      description: "Student portal for courses, grades, and university services",
      icon: BookOpen,
      href: "https://intranet.rsu.ac.th/",
      color: "accent",
      image: HeroCampusImage,
    },
  ];

  return (
    <section id="quick-links" className="py-20 bg-muted/30">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            Quick Access
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate to our essential services and resources
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
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
                <div
                  className="relative bg-card h-full border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-elegant cursor-pointer overflow-hidden hover:bg-soft-purple"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
                >
                  <img
                    src={link.image}
                    alt={link.title}
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-card">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors uppercase">
                        {link.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
