
import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const therapists = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Lead Psychologist',
    bio: 'Dr. Johnson has over 15 years of experience in clinical psychology, specializing in cognitive-behavioral therapy (CBT) and mindfulness-based approaches.',
    image: '/placeholder.svg',
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Child and Adolescent Psychologist',
    bio: 'Dr. Chen is dedicated to helping young people navigate the challenges of growing up. He specializes in play therapy and family counseling.',
    image: '/placeholder.svg',
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Couples and Family Therapist',
    bio: 'Dr. Rodriguez helps couples and families build stronger, healthier relationships. She is an expert in communication strategies and conflict resolution.',
    image: '/placeholder.svg',
  },
];

const TherapistsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Meet Our Therapists</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Our team of dedicated and experienced therapists is here to support you on your journey to mental well-being.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist) => (
            <Card key={therapist.name} className="p-8 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <Avatar className="w-24 h-24 mx-auto mb-6">
                <AvatarImage src={therapist.image} alt={therapist.name} />
                <AvatarFallback>{therapist.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-2">{therapist.name}</h3>
              <p className="text-primary mb-4">{therapist.title}</p>
              <p className="text-muted-foreground text-sm">{therapist.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapistsSection;
