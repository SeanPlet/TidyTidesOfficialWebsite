import React, { useEffect, useState } from 'react';
import { Users, Fish, Timer, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';

import fourFishCharacters from '@/assets/FourPlayerFish.png';
import featureCoop from '@/assets/feature-coop.jpg';
import featureAction from '@/assets/feature-action.jpg';
import featureTools from '@/assets/feature-tools.jpg';
import featureTraversal from '@/assets/feature-traversal.jpg';

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const features = [
    {
      icon: Users,
      title: "4-Player Co-op",
      description: "Team up with friends to tackle the messiest whales in the ocean",
      image: featureCoop
    },
    {
      icon: Timer,
      title: "Fast-Paced Action",
      description: "Race against time to scrub away grime and earn your freedom",
      image: featureAction
    },
    {
      icon: Wrench,
      title: "Tool Time",
      description: "The ocean's messes aren't alike, each needs the right tool",
      image: featureTools
    },
    {
      icon: Fish,
      title: "Whale Traversal",
      description: "Bounce on jellyfish and swing from hooks to traverse massive whales",
      image: featureTraversal
    }
  ];

  const nextFeature = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

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

          {/* Image Feature Display with Navigation */}
          <div className="relative z-10">
            <div className="relative underwater-glass border-border/30 hover:border-primary/50 transition-colors rounded-xl overflow-hidden">
              {/* Feature Image */}
              <div className="relative h-80 w-full">
                <img
                  src={features[currentIndex].image}
                  alt={features[currentIndex].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Left Navigation Button */}
                <button
                  onClick={prevFeature}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                {/* Right Navigation Button */}
                <button
                  onClick={nextFeature}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Next feature"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                {/* Content Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                  <div className="flex flex-col items-center text-center text-white">
                    <div className="mb-3">
                      {React.createElement(features[currentIndex].icon, { 
                        className: "h-10 w-10 text-accent mx-auto transition-all duration-500" 
                      })}
                    </div>
                    <h4 className="text-xl font-bold mb-2 font-sour-gummy">
                      {features[currentIndex].title}
                    </h4>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {features[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>
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