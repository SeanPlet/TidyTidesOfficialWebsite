import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Fish, Timer, Wrench } from 'lucide-react';

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
    description: "The ocean's messes aren't alike, each needs the right tool"
  }, {
    icon: Fish,
    title: "Whale Traversal",
    description: "Bounce on jellyfish and swing from hooks to traverse massive whales"
  }];
  return <section className="py-16 ocean-shallow relative">
      <div className="caustic-shallow" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 break-words">
            The Story
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-xl text-foreground/90 leading-relaxed">
            The crew ruined the Flying Dutchman's whale-taxi business and were cursed with the inability to swim. As punishment, they were trapped in a giant glass fishbowl at the bottom of the ocean, forced to clean whales for eternity until their debt is paid off. The only way out is to scrub their way to freedom, one whale at a time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              {/* Background image for first card */}
              {index === 0 && (
                <img 
                  src="/lovable-uploads/42760621-1ed0-4d02-a1e0-e44d76b90546.png" 
                  alt="Character illustration" 
                  className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] object-cover rounded-lg opacity-50 z-0"
                />
              )}
              <Card className="underwater-glass border-border/30 hover:border-primary/50 transition-colors wave-motion relative z-10 bg-background/70 backdrop-blur-sm" style={{
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
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default AboutSection;