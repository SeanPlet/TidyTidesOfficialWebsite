import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Waves, Timer, Fish } from 'lucide-react';
import cleaningCrew from '@/assets/cleaning-crew.jpg';
import whaleClient from '@/assets/whale-client.jpg';
const AboutSection = () => {
  const features = [{
    icon: Users,
    title: "4-Player Co-op",
    description: "Team up with friends to tackle the messiest whales in the ocean"
  }, {
    icon: Timer,
    title: "Fast-Paced Action",
    description: "Race against time to scrub away grime and earn your freedom"
  }, {
    icon: Fish,
    title: "Cursed Crew",
    description: "Play as fish who can't swim - trapped in a cleaning nightmare"
  }, {
    icon: Waves,
    title: "Underwater Chaos",
    description: "Navigate chaotic underwater environments while staying afloat"
  }];
  return <section className="py-24 ocean-deep relative">
      <div className="caustic-lights" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            The Story
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </div>

        {/* Story Content */}
        

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => <Card key={index} className="underwater-glass border-border/30 hover:border-primary/50 transition-colors wave-motion" style={{
          animationDelay: `${index * 0.5}s`
        }}>
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h4>
                <p className="text-foreground/80">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Whale Client Showcase */}
        
      </div>
    </section>;
};
export default AboutSection;