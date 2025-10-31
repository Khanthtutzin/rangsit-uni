/**
 * Canteen component displays information about the university's canteen services.
 * It lists available canteens, their operating hours, locations, and features.
 */
// Import necessary icons from lucide-react for UI elements
import { UtensilsCrossed, MapPin, Clock } from "lucide-react";
// Import UI components from the local components library
import { Card } from "@/components/ui/card";     // Card component for displaying individual canteen details
import { Button } from "@/components/ui/button"; // Button component for actions like 'View Menu'
import Navigation from "@/components/Navigation"; // Navigation bar component
import Footer from "@/components/Footer";       // Footer component

// Define the Canteen functional component
const Canteen = () => {
  // Define an array of 'canteens' data
  const canteens = [
    {
      // Each object represents a single canteen
      name: "Building 6 Canteen",
      code: "B6", // Unique code for the canteen
      description: "Modern food court with diverse Thai and international cuisine",
      hours: "7:00 AM - 4:00 PM",
      location: "Building 6, Ground Floor",
      features: ["Thai Food", "International", "Vegetarian Options", "Air Conditioned"], // Array of features
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

  // The component's render method
  return (
    <> {/* React Fragment to return multiple elements */}
      {/* Renders the top navigation bar */}
      <Navigation />
      <main className="pt-20 lg:pt-0 lg:mr-[80px]">
        {/* Main section for the canteen services content */}
        <section id="canteen" className="pb-20 lg:pt-20 bg-background">
          {/* Container for responsive layout */}
          <div className="container mx-auto px-4">
            {/* Section for the main title and description */}
            <div className="text-center mb-16">
              {/* Main heading for the canteen services page */}
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                Canteen Services
              </h2>
              {/* Description text */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enjoy delicious meals at our modern campus dining facilities
              </p>
            </div>

            {/* Grid layout for displaying canteen cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Maps through the 'canteens' array to render a Card for each canteen */}
              {canteens.map((canteen) => (
                // Card component for an individual canteen
                <Card
                  key={canteen.code} // Unique key for list rendering
                  className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant bg-card"
                >
                  {/* Container for canteen code and name */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      {/* Displays the canteen code as a badge */}
                      <div className="inline-block px-3 py-1 bg-primary/10 rounded-lg mb-3">
                        <span className="text-lg font-bold text-primary">
                          {canteen.code}
                        </span>
                      </div>
                      {/* Canteen name */}
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {canteen.name}
                      </h3>
                      {/* Canteen description */}
                      <p className="text-muted-foreground">{canteen.description}</p>
                    </div>
                  </div>

                  {/* Container for canteen hours and location */}
                  <div className="space-y-4 mb-6">
                    {/* Displays canteen operating hours */}
                    <div className="flex items-center gap-3 text-foreground">
                      <Clock className="w-5 h-5 text-primary" /> {/* Clock icon */}
                      <span className="text-sm font-medium">{canteen.hours}</span>
                    </div>
                    {/* Displays canteen location */}
                    <div className="flex items-center gap-3 text-foreground">
                      <MapPin className="w-5 h-5 text-primary" /> {/* Map pin icon */}
                      <span className="text-sm font-medium">{canteen.location}</span>
                    </div>
                  </div>

                  {/* Container for canteen features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {/* Maps through canteen features to display them as tags */}
                      {canteen.features.map((feature) => (
                        <span
                          key={feature} // Unique key for list rendering
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button to view the canteen menu */}
                  <Button variant="outline" className="w-full">
                    View Menu
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Renders the footer */}
      <Footer />
    </>
  );
};

// Exports the Canteen component for use in other parts of the application
export default Canteen;
