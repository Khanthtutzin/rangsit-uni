import { Bus, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ShuttleBus = () => {
  const routes = [
    {
      name: "Route A",
      from: "Main Campus",
      to: "Downtown Station",
      frequency: "Every 30 minutes",
      hours: "7:00 AM - 5:00 PM",
      stops: ["Main Gate", "Building 8", "Library", "Sports Complex", "Downtown"],
    },
    {
      name: "Route B",
      from: "Main Campus",
      to: "Student Dormitories",
      frequency: "Every 20 minutes",
      hours: "7:00 AM - 5:00 PM",
      stops: ["Main Gate", "Academic Center", "Canteen B9", "Dorm Complex A", "Dorm Complex B"],
    },
  ];

  return (
    <>
      <Navigation />
      <section id="shuttle" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Bus className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold">
                Campus Transportation
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Shuttle Bus Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Free shuttle bus service for students and staff around campus and nearby areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {routes.map((route) => (
              <Card
                key={route.name}
                className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant bg-card"
              >
                <div className="flex items-center justify-between mb-6">
                  <Badge className="text-base px-4 py-2 shadow-card">
                    {route.name}
                  </Badge>
                  <Bus className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Route</div>
                      <div className="font-semibold text-foreground">
                        {route.from} → {route.to}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Schedule</div>
                      <div className="font-semibold text-foreground">
                        {route.frequency}
                      </div>
                      <div className="text-sm text-muted-foreground">{route.hours}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">

                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-2">Stops</div>
                      <div className="flex flex-wrap gap-2">
                        {route.stops.map((stop, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                          >
                            {stop}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bus className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Live Bus Tracking Available
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Download the RSU Campus App to track shuttle buses in real-time, view
                    schedules, and receive notifications about delays or route changes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShuttleBus;
