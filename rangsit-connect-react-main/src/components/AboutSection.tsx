import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="p-8 border-2">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Happy me Clinic</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to Happy me Clinic, a place where your mental well-being is our priority. Our team of licensed therapists and counselors are dedicated to providing you with the highest quality of care in a safe and supportive environment.
              </p>
              <p className="text-muted-foreground">
                We offer a wide range of services to help you navigate life's challenges, from individual counseling to couples therapy and more. Our goal is to empower you with the tools and resources you need to live a happier, healthier life.
              </p>
            </div>
            <div>
              <img src="https://via.placeholder.com/500x300" alt="About Happy me Clinic" className="rounded-lg" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
