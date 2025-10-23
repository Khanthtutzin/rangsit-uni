import { Megaphone, Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Announcements = () => {
  const announcements = [
    {
      title: "Fall Semester Registration Opens",
      date: "May 15, 2025",
      category: "Academic",
      description:
        "Registration for Fall 2025 semester is now open. Students can register for courses through the RSU Portal.",
      urgent: true,
    },
    {
      title: "Annual University Fair 2025",
      date: "May 20, 2025",
      category: "Event",
      description:
        "Join us for the annual university fair featuring exhibitions, performances, and guest speakers from various industries.",
      urgent: false,
    },
    {
      title: "Scholarship Applications Available",
      date: "May 10, 2025",
      category: "Financial Aid",
      description:
        "Merit-based and need-based scholarships for the upcoming academic year are now available. Apply before the deadline.",
      urgent: true,
    },
    {
      title: "Library Extended Hours",
      date: "May 8, 2025",
      category: "Facilities",
      description:
        "The RSU Library will extend operating hours during exam period. Open 24/7 from May 25 - June 10.",
      urgent: false,
    },
  ];

  return (
    <>
      <Navigation />
      <section id="announcements" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Megaphone className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Latest Updates
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Announcements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest news and updates from Rangsit University
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {announcements.map((announcement, index) => (
              <Card
                key={index}
                className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-card bg-card group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    variant={announcement.urgent ? "default" : "secondary"}
                    className="shadow-sm"
                  >
                    {announcement.category}
                  </Badge>
                  {announcement.urgent && (
                    <Badge variant="destructive" className="shadow-sm">
                      Urgent
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {announcement.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{announcement.date}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {announcement.description}
                </p>

                <button className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Announcements
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Announcements;