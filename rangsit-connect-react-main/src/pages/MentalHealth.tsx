import React from 'react';
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rangsit-her.webp";
import ServicesSection from '@/components/ServicesSection';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const MentalHealth: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[120vh]">
      <Navigation />
      <main className="flex-grow pt-20 lg:pt-0 lg:mr-[80px]">
        <div className="container mx-auto px-4 py-8">
          <Card className="relative p-24 text-center overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-0">
              <img src={heroImage} alt="Rangsit University" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
            <div className="relative z-10 text-white">
              <h1 className="text-4xl font-bold mb-2">Rangsit Mental Health</h1>
              <h2 className="text-2xl text-white/90 mb-4">Your mind, our care</h2>
              <p className="text-lg mb-6">
                Struggling with stress, anxiety, or relationship challenges? Our licensed therapists are here to provide compassionate, confidential support. Affordable care that fits your needs, available both onsite and online.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" size="lg">Book a consultation</Button>
                <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white hover:text-primary">Message us on Facebook</Button>
              </div>
            </div>
          </Card>
        </div>
        <ServicesSection />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default MentalHealth;
