import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';

const services = [
  {
    title: 'Individual Counseling',
    description: 'Our individual counseling sessions provide a safe and confidential space for you to explore your thoughts, feelings, and behaviors. We work with you to develop coping strategies, build resilience, and achieve your personal goals.',
    image: '/src/assets/individual-counseling.png',

  },
  {
    title: 'Couples Therapy',
    description: 'Our couples therapy sessions are designed to help partners improve communication, resolve conflicts, and strengthen their relationship. We provide a neutral and supportive environment for you to work through your challenges and build a healthier, more fulfilling partnership.',
    image: '/src/assets/couples-therapy.webp',
  },
  {
    title: 'Students Therapy',
    description: 'Our group therapy sessions offer a unique opportunity to connect with others who are facing similar challenges. In a supportive and confidential setting, you can share your experiences, learn from others, and develop new skills for coping and growth.',
    image: '/src/assets/students-therapy.avif',
  },
  {
    title: 'Online Therapy',
    description: 'Our online therapy sessions provide the same high-quality care as our in-person sessions, with the added convenience and flexibility of meeting from the comfort of your own home. We use a secure and confidential platform to ensure your privacy and provide a safe and supportive environment for your therapy journey.',
    image: '/src/assets/online-therapy.jpg',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-background shadow-lg border border-primary rounded-lg mx-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">🌟 Our Services</h2>
        <Tabs defaultValue="Individual Counseling" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-primary/10 p-2 rounded-lg shadow-inner">
            {services.map((service) => (
              <TabsTrigger
                key={service.title}
                value={service.title}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-md py-2 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-primary/20"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList> {/* ✅ Close TabsList here */}

          {services.map((service) => (
            <TabsContent key={service.title} value={service.title}>
              <Card className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {service.image && (
                    <img src={service.image} alt={service.title} className="w-full md:w-1/3 h-auto rounded-lg object-cover" />
                  )}
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
