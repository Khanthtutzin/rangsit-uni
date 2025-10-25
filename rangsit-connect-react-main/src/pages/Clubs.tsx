/**
 * Clubs component displays a list of student clubs and organizations available at the university.
 * It provides details about each club, including its name, category, number of members, and a brief description.
 */
// Import necessary icons from lucide-react for general UI elements
import { Users, Music, Camera, Code, Heart, Mic, Trophy, Medal, Award } from "lucide-react";
// Import specific icons from react-icons for sports categories
import { MdOutlineSportsBasketball, MdOutlineSportsTennis } from "react-icons/md";
import { GiShuttlecock } from "react-icons/gi";
import { FaTableTennis } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
// Import UI components from the local components library
import { Card } from "@/components/ui/card";     // Card component for displaying individual club details
import { Button } from "@/components/ui/button"; // Button component for actions like 'Learn More'
import Navigation from "@/components/Navigation"; // Navigation bar component
import Footer from "@/components/Footer";       // Footer component

// Define the Clubs functional component
const Clubs = () => {
  // Define an array of 'clubs' data
  const clubs = [
    {
      // Each object represents a single student club
      name: "RIC Culture Club",
      icon: AiOutlineGlobal, // Icon component associated with the club
      members: "150+",      // Number of members in the club
      description: "Explore and celebrate diversity through cultural events, workshops, and discussions.",
      category: "Culture",   // Category of the club
    },
    {
      name: "RIC Badminton Club",
      icon: GiShuttlecock,
      members: "120+",
      description: "Join us for friendly matches, practice your skills, and compete in tournaments.",
      category: "Sports",
    },
    {
      name: "RIC Dance Club",
      icon: Users,
      members: "200+",
      description: "Express yourself through various dance styles, from hip-hop to contemporary.",
      category: "Arts",
    },
    {
      name: "RIC Music Club",
      icon: Music,
      members: "180+",
      description: "A community for musicians and music lovers to play, create, and share music.",
      category: "Music",
    },
    {
      name: "RIC Football Club",
      icon: IoMdFootball,
      members: "90+",
      description: "Hit the pitch with fellow football enthusiasts for regular games and training.",
      category: "Sports",
    },
    {
      name: "RIC Basketball Club",
      icon: MdOutlineSportsBasketball,
      members: "50+",
      description: "Shoot some hoops, improve your game, and be part of a dynamic team.",
      category: "Sports",
    },
    {
      name: "RIC Table Tennis Club",
      icon: FaTableTennis,
      members: "50+",
      description: "Enjoy fast-paced games of table tennis, suitable for all skill levels.",
      category: "Sports",
    },
  ];

  // The component's render method
  return (
    <> {/* React Fragment to return multiple elements */}
      {/* Renders the top navigation bar */}
      <Navigation />
      {/* Main section for the student clubs content */}
      <section id="clubs" className="py-20 bg-background">
        {/* Container for responsive layout */}
        <div className="container mx-auto px-4">
          {/* Section for the main title and description */}
          <div className="text-center mb-16">
            {/* Main heading for the student clubs page */}
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Student Clubs & Organizations
            </h2>
            {/* Description text */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a vibrant community and explore your passions beyond the classroom
            </p>
          </div>

          {/* Grid layout for displaying club cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Maps through the 'clubs' array to render a Card for each club */}
            {clubs.map((club) => {
              // Dynamically assign the icon component based on the club's icon property
              const Icon = club.icon;
              return (
                // Card component for an individual club
                <Card
                  key={club.name} // Unique key for list rendering
                  className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant bg-card group cursor-pointer"
                >
                  {/* Container for club icon and basic info */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Club icon displayed within a styled circle */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card">
                      {/* Renders the dynamic icon component */}
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    {/* Container for club name, category, and members */}
                    <div className="flex-1">
                      {/* Club name */}
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {club.name}
                      </h3>
                      {/* Container for club category and member count */}
                      <div className="flex items-center gap-2">
                        {/* Club category displayed as a badge */}
                        <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground font-medium">
                          {club.category}
                        </span>
                        {/* Club member count */}
                        <span className="text-xs text-muted-foreground">
                          {club.members} members
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Club description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {club.description}
                  </p>

                  {/* Button to learn more about the club */}
                  <Button variant="ghost" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Renders the footer */}
      <Footer />
    </>
  );
};

// Exports the Clubs component for use in other parts of the application
export default Clubs;
