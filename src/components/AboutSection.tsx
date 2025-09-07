import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Fish, Timer, Wrench } from 'lucide-react';

import fourFishCharacters from '@/assets/FourPlayerFish.png';

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "4-Player Co-op",
      description: "Team up with friends to tackle the messiest whales in the ocean"
    },
    {
      icon: Timer,
      title: "Fast-Paced Action",
      description: "Race against time to scrub away grime and earn your freedom"
    },
    {
      icon: Wrench,
      title: "Tool Time",
      description: "The ocean's messes aren't alike, each needs the right tool"
    },
    {
      icon: Fish,
      title: "Whale Traversal",
      description: "Bounce on jellyfish and swing from hooks to traverse massive whales"
    }
  ];

  return (
    <section className="py-16 ocean-shallow relative overflow-hidden">
      <div className="caustic-shallow" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-sour-gummy text-primary mb-6 break-words" style={{WebkitTextStroke: '4.6px #004258'}}>
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
            <div key={index} className="relative overflow-visible">
              {/* Mascot behind the first card */}
              {index === 0 && (
                <div className="absolute lg:-top-28  sm:-top-24 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none select-none hidden sm:block">
                  <div className="relative z-0">
                    {/* Glow behind the fish */}
                    <div
                      aria-hidden="true"
                      className="absolute -z-10 rounded-full blur-2xl"
                      style={{
                        width: '24rem',
                        height: '20rem',
                        top: '-2rem',
                        left: '-4rem',
                        background:
                          'radial-gradient(closest-side, rgba(255,255,255,0.9), rgba(147,197,253,0.6), rgba(147,197,253,0)'
                      }}
                    />
                    {/* Fish ABOVE the glow */}
                    <img
                      src={fourFishCharacters}
                      alt="Character illustration"
                      className="relative z-10 w-56 h-auto object-contain opacity-90 float-gentle max-w-none"
                    />
                  </div>
                </div>
              )}

              <Card
                className="underwater-glass border-border/30 hover:border-primary/50 transition-colors wave-motion relative z-10 overflow-visible"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;