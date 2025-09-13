import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, Fish, Timer, Wrench } from 'lucide-react';

import fourFishCharacters from '@/assets/FourPlayerFish.png';

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  // Auto-cycle through features every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-16 ocean-shallow relative overflow-hidden">
      <div className="caustic-shallow" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-sour-gummy text-primary mb-6 break-words heading-shadow">
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

        {/* Features Carousel */}
        <div className="relative max-w-2xl mx-auto mb-16">
          {/* Mascot floating above carousel */}
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none select-none hidden sm:block">
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

          {/* Single Feature Display */}
          <div className="relative z-10">
            <div className="underwater-glass border-border/30 hover:border-primary/50 transition-colors rounded-xl p-8 text-center min-h-[300px] flex flex-col justify-center items-center">
              <div className="mb-6">
                {React.createElement(features[currentIndex].icon, { 
                  className: "h-16 w-16 text-accent mx-auto mb-4 transition-all duration-500" 
                })}
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4 font-sour-gummy">
                {features[currentIndex].title}
              </h4>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {features[currentIndex].description}
              </p>
            </div>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-accent scale-125' 
                      : 'bg-accent/30 hover:bg-accent/50'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`View feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;