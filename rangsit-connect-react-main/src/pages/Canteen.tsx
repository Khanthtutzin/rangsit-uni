import { UtensilsCrossed, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Canteen = () => {
  const canteens = [
    {
      name: "Building 6 Canteen",
      code: "B6",
      description: "Modern food court with diverse Thai and international cuisine",
      hours: "7:00 AM - 4:00 PM",
      location: "Building 6, Ground Floor",
      features: ["Thai Food", "International", "Vegetarian Options", "Air Conditioned"],
    },
    {
      name: "Building 9 Canteen",
      code: "B9",
      description: "Traditional Thai restaurant and casual dining area",
      hours: "7:00 AM - 8:00 PM",
      location: "Building 9, Ground Floor ",
      features: ["Thai Cuisine", "Fast Food", "Beverages", "Outdoor Seating"],
    },
  ];

  return (
    <>
      <Navigation />
      <section id="canteen" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <UtensilsCrossed className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold">
                Campus Dining
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Canteen Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy delicious meals at our modern campus dining facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {canteens.map((canteen) => (
              <Card
                key={canteen.code}
                className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant bg-card"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-lg mb-3">
                      <span className="text-lg font-bold text-primary">
                        {canteen.code}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {canteen.name}
                    </h3>
                    <p className="text-muted-foreground">{canteen.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{canteen.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{canteen.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {canteen.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Menu
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Canteen;
