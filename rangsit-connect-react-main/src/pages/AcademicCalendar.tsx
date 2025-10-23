import { Calendar, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AcademicCalendar = () => {
  const events = [
    {
      month: "May",
      events: [
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
        { date: "August 12", title: "Queen's Birthday", type: "Holiday" },
        { date: "August 25-30", title: "Spring Semester Registration", type: "Registration" },
      ],
    },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "Registration":
        return "bg-primary/10 text-primary border-primary/20";
      case "Exam":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "Holiday":
        return "bg-secondary/10 text-secondary-foreground border-secondary/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <>
      <Navigation />
      <section id="calendar" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Academic Year 2025
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Academic Calendar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Stay on track with important dates and deadlines throughout the academic year
            </p>
            <Button variant="secondary" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download Full Calendar
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {events.map((monthData) => (
              <Card
                key={monthData.month}
                className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-card bg-card"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {monthData.month}
                </h3>
                <div className="space-y-4">
                  {monthData.events.map((event, index) => (
                    <div key={index} className="space-y-2">
                      <div className="text-sm font-semibold text-foreground">
                        {event.date}
                      </div>
                      <div
                        className={`text-sm px-3 py-2 rounded-lg border ${getEventColor(
                          event.type
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
      <Footer />
    </>
  );
};

export default AcademicCalendar;