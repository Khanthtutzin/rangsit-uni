import React from 'react';
import { Card } from '@/components/ui/card';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">📞 Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-bold mb-4">Our Address</h3>
            <p className="text-muted-foreground">123 Main Street<br />Bangkok, Thailand 10110</p>
            <h3 className="text-xl font-bold mt-8 mb-4">Opening Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
          </Card>
          <Card className="p-8">
            <h3 className="text-xl font-bold mb-4">Location</h3>
            {/* Placeholder for a map */}
            <div className="bg-gray-300 h-64 rounded-lg"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
