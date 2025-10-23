import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";


import AdministrationProcess from "@/components/AdministrationProcess";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <QuickLinks />

      <AdministrationProcess />


      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
