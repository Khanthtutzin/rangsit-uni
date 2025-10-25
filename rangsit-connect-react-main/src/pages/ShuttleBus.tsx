/**
 * ShuttleBus component displays information about the university's shuttle bus services.
 * It lists different bus routes, their frequencies, operating hours, and stops.
 * It also promotes the university app for live bus tracking.
 */
// Import necessary icons from lucide-react for UI elements
import { Bus, MapPin, Clock } from "lucide-react";
// Import UI components from the local components library
import { Card } from "@/components/ui/card";   // Card component for displaying individual bus routes
import { Badge } from "@/components/ui/badge"; // Badge component for displaying route names
import Navigation from "@/components/Navigation"; // Navigation bar component
import Footer from "@/components/Footer";       // Footer component

// Define the ShuttleBus functional component
const ShuttleBus = () => {
  // Define an array of 'routes' data, each representing a shuttle bus route
  const routes = [
    {
      name: "Route A",
      from: "Main Campus",
      to: "Downtown Station",
      frequency: "Every 30 minutes",
      hours: "7:00 AM - 5:00 PM",
      stops: ["Main Gate", "Building 8", "Library", "Sports Complex", "Downtown"], // Array of stops for the route
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

  // The component's render method
  return (
    <> {/* React Fragment to return multiple elements */}
      {/* Renders the top navigation bar */}
      <Navigation />
      {/* Main section for the shuttle bus service content */}
      <section id="shuttle" className="py-20 bg-background">
        {/* Container for responsive layout */}
        <div className="container mx-auto px-8">
          {/* Section for the main title and description */}
          <div className="text-center mb-16">
            {/* Main heading for the shuttle bus service page */}
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Shuttle Bus Service
            </h2>
            {/* Description text */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Free shuttle bus service for students and staff around campus and nearby areas
            </p>
          </div>

          {/* Grid layout for displaying shuttle bus route cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Maps through the 'routes' array to render a Card for each bus route */}
            {routes.map((route) => (
              // Card component for an individual shuttle bus route
              <Card
                key={route.name} // Unique key for list rendering
                className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant bg-card hover:bg-soft-purple"
              >
                {/* Container for route name badge and bus icon */}
                <div className="flex items-center justify-between mb-6">
                  {/* Route name displayed as a badge */}
                  <Badge className="text-base px-4 py-2 shadow-card">
                    {route.name}
                  </Badge>
                  {/* Bus icon */}
                  <Bus className="w-8 h-8 text-primary" />
                </div>

                {/* Container for route details (from/to, frequency, hours) */}
                <div className="space-y-4 mb-6">
                  {/* Displays the route's origin and destination */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> {/* Map pin icon */}
                    <div>
                      <div className="text-sm text-muted-foreground">Route</div>
                      <div className="font-semibold text-foreground">
                        {route.from} → {route.to}
                      </div>
                    </div>
                  </div>

                  {/* Displays the route's frequency and operating hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> {/* Clock icon */}
                    <div>
                      <div className="text-sm text-muted-foreground">Schedule</div>
                      <div className="font-semibold text-foreground">
                        {route.frequency}
                      </div>
                      <div className="text-sm text-muted-foreground">{route.hours}</div>
                    </div>
                  </div>

                  {/* Displays the route's stops */}
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-2">Stops</div>
                      <div className="flex flex-wrap gap-2">
                        {/* Maps through the stops array to display each stop as a tag */}
                        {route.stops.map((stop, index) => (
                          <span
                            key={index} // Unique key for list rendering
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

          {/* Section promoting live bus tracking via the RSU Campus App */}
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                {/* Bus icon for the live tracking promotion */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bus className="w-6 h-6 text-primary" />
                </div>
                {/* Text content for the live tracking promotion */}
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
      {/* Renders the footer */}
      <Footer />
    </>
  );
};

// Exports the ShuttleBus component for use in other parts of the application
export default ShuttleBus;
