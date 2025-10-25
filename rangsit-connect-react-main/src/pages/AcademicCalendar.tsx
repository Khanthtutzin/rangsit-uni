/**
 * AcademicCalendar component displays the university's academic calendar,
 * including important dates, events, and holidays.
 * Users can view events categorized by month and download the full calendar.
 */
// Import necessary icons from lucide-react for UI elements
import { Calendar, Download } from "lucide-react";
// Import UI components from the local components library
import { Card } from "@/components/ui/card"; // Card component for displaying event information
import { Button } from "@/components/ui/button"; // Button component for actions like downloading the calendar
import Navigation from "@/components/Navigation"; // Navigation bar component
import Footer from "@/components/Footer"; // Footer component

// Define the AcademicCalendar functional component
const AcademicCalendar = () => {
  // Define an array of 'events' which represents the academic calendar data
  const events = [
    {
      // Each object in the array represents a month
      month: "May",
      events: [
        // Each 'event' object within a month has a date, title, and type
        { date: "May 15-19", title: "Fall Semester Registration", type: "Registration" },
        { date: "May 20", title: "University Fair", type: "Event" },
      ],
    },
    {
      month: "June",
      events: [
        { date: "June 1", title: "Fall Semester Begins", type: "Academic" },
        { date: "June 15", title: "Add/Drop Period Ends", type: "Academic" },
      ],
    },
    {
      month: "July",
      events: [
        { date: "July 4", title: "Independence Day Holiday", type: "Holiday" },
        { date: "July 20", title: "Midterm Examinations Begin", type: "Exam" },
      ],
    },
    {
      month: "August",
      events: [
        { date: "August 12", title: "Queen\'s Birthday", type: "Holiday" },
        { date: "August 25-30", title: "Spring Semester Registration", type: "Registration" },
      ],
    },
  ];

  // Helper function to determine the CSS classes for an event based on its type
  const getEventColor = (type: string) => {
    // Uses a switch statement to return different color schemes for different event types
    switch (type) {
      case "Registration":
        // Returns classes for registration events (e.g., light blue background, primary text)
        return "bg-primary/10 text-primary border-primary/20";
      case "Exam":
        // Returns classes for exam events (e.g., light red background, destructive text)
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "Holiday":
        // Returns classes for holiday events (e.g., light secondary background, secondary-foreground text)
        return "bg-secondary/10 text-secondary-foreground border-secondary/20";
      default:
        // Default classes for any other event types
        return "bg-muted text-muted-foreground border-border";
    }
  };

  // The component's render method
  return (
    <> {/* React Fragment to return multiple elements */}
      {/* Renders the top navigation bar */}
      <Navigation />
      {/* Main section for the academic calendar content */}
      <section id="calendar" className="py-20 bg-muted/30">
        {/* Container for responsive layout */}
        <div className="container mx-auto px-8">
          {/* Section for the title and description */}
          <div className="text-center mb-16">
            {/* Main heading for the academic calendar */}
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Academic Calendar
            </h2>
            {/*  Description text */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Stay on track with important dates and deadlines throughout the academic year
            </p>
            {/* Button to download the full calendar */}
            <Button variant="secondary" size="lg" className="gap-2">
              {/* Download icon */}
              <Download className="w-5 h-5" />
              Download Full Calendar
            </Button>
          </div>

          {/* Grid layout for displaying monthly event cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Maps through the 'events' array to render a Card for each month */}
            {events.map((monthData) => (
              // Card component for a specific month's events
              <Card
                key={monthData.month} // Unique key for list rendering
                className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-card bg-card hover:bg-soft-purple"
              >
                {/* Month title */}
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {monthData.month}
                </h3>
                {/* Container for the events within the month */}
                <div className="space-y-4">
                  {/* Maps through the events of the current month */}
                  {monthData.events.map((event, index) => (
                    // Div for each individual event
                    <div key={index} className="space-y-2">
                      {/* Displays the date of the event */}
                      <div className="text-sm font-semibold text-foreground">
                        {event.date}
                      </div>
                      {/* Displays the event title with dynamic styling based on event type */}
                      <div
                        className={`text-sm px-3 py-2 rounded-lg border ${getEventColor(
                          event.type // Calls helper function to get color classes
                        )} font-medium`}
                      >
                        {event.title}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Renders the footer */}
      <Footer />
    </>
  );
};

// Exports the AcademicCalendar component for use in other parts of the application
export default AcademicCalendar;
