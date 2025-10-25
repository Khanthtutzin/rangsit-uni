/**
 * Announcements component displays a list of university announcements.
 * It categorizes announcements, highlights urgent ones, and provides details like date and description.
 */
// Import necessary icons from lucide-react for UI elements
import { Megaphone, Calendar, ArrowRight } from "lucide-react";
// Import UI components from the local components library
import { Card } from "@/components/ui/card";     // Card component for displaying individual announcements
import { Button } from "@/components/ui/button"; // Button component for actions like 'View All Announcements'
import { Badge } from "@/components/ui/badge";   // Badge component for categorizing and highlighting announcements
import Navigation from "@/components/Navigation"; // Navigation bar component
import Footer from "@/components/Footer";       // Footer component

// Define the Announcements functional component
const Announcements = () => {
  // Define an array of 'announcements' data
  const announcements = [
    {
      // Each object represents a single announcement
      title: "Fall Semester Registration Opens",
      date: "May 15, 2025",
      category: "Academic",
      description:
        "Registration for Fall 2025 semester is now open. Students can register for courses through the RSU Portal.",
      urgent: true, // Boolean to indicate if the announcement is urgent
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

  // The component's render method
  return (
    <> {/* React Fragment to return multiple elements */}
      {/* Renders the top navigation bar */}
      <Navigation />
      <main className="pt-20 lg:pt-0 lg:mr-[80px]">
        {/* Main section for the announcements content */}
        <section id="announcements" className="pb-20 lg:pt-20 bg-muted/30">
          {/* Container for responsive layout */}
          <div className="container mx-auto px-4">
            {/* Section for the main title and description */}
            <div className="text-center mb-16">
              {/* Main heading for the announcements page */}
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                Announcements
              </h2>
              {/* Description text */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay informed with the latest news and updates from Rangsit University
              </p>
            </div>

            {/* Grid layout for displaying announcement cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Maps through the 'announcements' array to render a Card for each announcement */}
              {announcements.map((announcement, index) => (
                // Card component for an individual announcement
                <Card
                  key={index} // Unique key for list rendering
                  className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-card bg-card group cursor-pointer"
                >
                  {/* Container for category and urgent badges */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Badge for the announcement category, variant changes based on urgency */}
                    <Badge
                      variant={announcement.urgent ? "default" : "secondary"} // Conditional styling for urgent announcements
                      className="shadow-sm"
                    >
                      {announcement.category}
                    </Badge>
                    {/* Renders an 'Urgent' badge only if the announcement is marked as urgent */}
                    {announcement.urgent && (
                      <Badge variant="destructive" className="shadow-sm">
                        Urgent
                      </Badge>
                    )}
                  </div>

                  {/* Announcement title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {announcement.title}
                  </h3>

                  {/* Container for the announcement date */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    {/* Calendar icon */}
                    <Calendar className="w-4 h-4" />
                    {/* Announcement date */}
                    <span>{announcement.date}</span>
                  </div>

                  {/* Announcement description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {announcement.description}
                  </p>

                  {/* Button to read more details about the announcement */}
                  <button className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    {/* Arrow icon */}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Card>
              ))}
            </div>

            {/* Section for the 'View All Announcements' button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Announcements
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Renders the footer */}
      <Footer />
    </>
  );
};

// Exports the Announcements component for use in other parts of the application
export default Announcements;
