/**
 * This page displays a list of undergraduate international programs offered by Rangsit University.
 * Each program is presented with its name and an associated image.
 */
// Import UI components from the local components library for card display
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Import Navigation and Footer components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// Import various image assets for each international program
import IB from "@/assets/IB.png"   // Image for International Business
import CA from "@/assets/CA.png"   // Image for Communication Arts
import ICT from "@/assets/ICT.png" // Image for Information and Communication Technology
import CE from "@/assets/CE.png"   // Image for Civil Engineering
import THS from "@/assets/THS.png" // Image for Tourism, Hospitality and Sports
import DD from "@/assets/DD.png"   // Image for Digital Design
import CS from "@/assets/CS.jpg"   // Image for Computer Science
import IRD from "@/assets/IRD.png" // Image for International Relations And Development
import FD from "@/assets/FD.png"   // Image for Fashion Design
import ID from "@/assets/ID.png"   // Image for Interior Design
import En from "@/assets/En.png"   // Image for Electrical Engineering
import DI from "@/assets/DI.jpg"   // Image for Digital Innovation
import BS from "@/assets/BS.png"   // Image for Biomedical Science

// Define an array of 'programs' data, each representing an international program
const programs = [
  {
    name: "Bachelor of Business Administration in International Business",
    image: IB, // Associated image for the program
  },
  {
    name: "Bachelor of Science Computer Science",
    image: CS,
  },
  {
    name: "Bachelor of Arts Tourism, Hostpitality and Sports",
    image: THS,
  },
  {
    name: "Bachelor of Arts in Communication Arts",
    image: CA,
  },
  {
    name: "Bachelor of Engineering in Civil Engineering",
    image: CE,
  },
  {
    name: "Bachelor of Science in Information and Communication Technology",
    image: ICT,
  },
  {
    name: "Bachelor of Fine Arts in Digital Design",
    image: DD,
  },
  {
    name: "Bachelor of Arts International Relations And Development",
    image: IRD,
  },
  {
    name: "Bachelor of Fine Arts Fashion Design",
    image: FD,
  },
  {
    name: "Bachelor of Fine Arts Interior Design",
    image: ID,
  },
  {
    name: "Bachelor of Engineering Electrical Engineering",
    image: En,
  },
  {
    name: "Bachelor of Science Digital Innovation",
    image: DI,
  },
  {
    name: "Bachelor of Science Biomedical Science",
    image: BS,
  },
];

// Define the InternationalPrograms functional component
const InternationalPrograms = () => {
  // The component's render method
  return (
    // Main container div for the entire page, ensuring minimum screen height and setting background color
    <div className="min-h-screen bg-background">
      {/* Renders the top navigation bar */}
      <Navigation />
      {/* Container for the main content of the page, with responsive padding */}
      <div className="container mx-auto px-4">
        {/* Main heading for the international programs section */}
        <h1 className="text-5xl font-bold mb-8 pt-24">Undergraduate International Programs</h1>
        {/* Grid layout for displaying program cards, responsive across different screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Maps through the 'programs' array to render a Card for each program */}
          {programs.map((program) => (
            // Card component for an individual program
            <Card key={program.name}> {/* Unique key for list rendering */}
              {/* CardHeader for the program image */}
              <CardHeader>
                {/* Program image, with alt text for accessibility and styling for containment */}
                <img src={program.image} alt={program.name} className="w-full h-48 object-contain" />
              </CardHeader>
              {/* CardContent for the program title */}
              <CardContent>
                {/* Program title */}
                <CardTitle>{program.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Renders the footer section */}
      <Footer />
    </div>
  );
};

// Exports the InternationalPrograms component for use in other parts of the application
export default InternationalPrograms;
