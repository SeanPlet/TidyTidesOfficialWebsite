import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Waves, Timer, Wrench } from 'lucide-react';
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
    icon: Wrench,
    title: "Tool Time",
    description: "Different grime, different gear. Algae, barnacles, and slime won't clean themselves"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <Card className="underwater-glass border-border/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  The Curse
                </h3>
                <p className="text-lg text-foreground/90 leading-relaxed">After destroying the Flying Dutchman's whale-taxi business, you and your crew have been cursed to lose your ability to swim. Now you must work off your debt through endless whale cleaning.</p>
              </CardContent>
            </Card>

            <Card className="underwater-glass border-border/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  The Prison
                </h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Trapped in a giant glass fishbowl at the bottom of the ocean, you're forced to clean 
                  whales for eternity... or until your debt is paid off. The only way out is to clean 
                  your way to freedom, one whale at a time.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img src={cleaningCrew} alt="Cleaning Crew" className="rounded-lg shadow-2xl float-gentle" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>

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