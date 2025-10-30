import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAnnouncements } from "@/contexts/AnnouncementsContext";
import { Skeleton } from "@/components/ui/skeleton";

const Announcements = () => {
  const { announcements, loading } = useAnnouncements();

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

            {loading ? (
              <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                {[...Array(3)].map((_, index) => (
                  <Card key={index} className="overflow-hidden border-2 bg-card group">
                    <div className="grid md:grid-cols-3">
                      <div className="md:col-span-1">
                        <Skeleton className="h-full w-full" />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <Skeleton className="h-4 w-1/4 mb-2" />
                        <Skeleton className="h-6 w-3/4 mb-3" />
                        <Skeleton className="h-4 w-1/2 mb-4" />
                        <Skeleton className="h-4 w-1/4" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                {announcements.map((announcement) => (
                  <Card
                    key={announcement.id}
                    className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-card bg-card group"
                  >
                    <div className="grid md:grid-cols-3">
                      <div className="md:col-span-1">
                        <img
                          src={announcement.image_url}
                          alt={announcement.title}
                          className="object-contain h-full w-full"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-2">
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

                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {announcement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {announcement.subtitle}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{announcement.date}</span>
                        </div>

                        <button className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

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
