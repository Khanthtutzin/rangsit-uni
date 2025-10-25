import { Megaphone, Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAnnouncements } from "@/contexts/AnnouncementsContext";

const Announcements = () => {
  const { announcements } = useAnnouncements();

  return (
    <>
      <Navigation />
      <main className="pt-20 lg:pt-0 lg:mr-[80px]">
        <section id="announcements" className="pb-20 lg:pt-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
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
      </main>
      <Footer />
    </>
  );
};

export default Announcements;
