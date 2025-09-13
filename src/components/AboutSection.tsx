import React, { useEffect, useState } from 'react';
import { Users, Fish, Timer, Wrench, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import featureCoop from '@/assets/AncientStatue.png';
import featureAction from '@/assets/GameMenu.png';
import featureTools from '@/assets/CleaningTools.png';
import featureTraversal from '@/assets/Environment.png';

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  
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
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
      setIsTransitioning(false);
    }, 400);
  };

  const prevFeature = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
      setIsTransitioning(false);
    }, 400);
  };

  const goToFeature = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 400);
  };

  // Auto-cycle through features every 6.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextFeature();
      }
    }, 6500);
    
    return () => clearInterval(interval);
  }, [isTransitioning]);

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
        <div className="relative max-w-4xl w-full mx-auto mb-16">
          {/* Image Feature Display with Navigation */}
          <div className="relative z-10">
            <div className="relative underwater-glass border-border/30 hover:border-primary/50 transition-colors rounded-xl overflow-hidden">
              {/* Feature Image */}
              <div className="relative w-full overflow-hidden">
                <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
                  <DialogTrigger asChild>
                    <img
                      src={features[currentIndex].image}
                      alt={features[currentIndex].title}
                      className={`w-full h-full object-cover transition-all duration-1000 ease-in-out transform cursor-pointer hover:scale-105 ${
                        isTransitioning 
                          ? 'opacity-0 scale-110' 
                          : 'opacity-100 scale-100'
                      }`}
                      onClick={() => setIsImageModalOpen(true)}
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                    <div className="relative aspect-[16/9] w-full">
                      <img
                        src={features[currentIndex].image}
                        alt={features[currentIndex].title}
                        className="w-full h-full object-cover rounded-lg"
                        style={{ aspectRatio: '16/9' }}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                
                {/* Left Navigation Button */}
                <button
                  onClick={prevFeature}
                  disabled={isTransitioning}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-50 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                {/* Right Navigation Button */}
                <button
                  onClick={nextFeature}
                  disabled={isTransitioning}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-50 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Next feature"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                {/* Content Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                  <div className={`flex flex-col items-center text-center text-white transition-all duration-1000 ease-in-out transform ${
                    isTransitioning 
                      ? 'opacity-0 translate-y-6' 
                      : 'opacity-100 translate-y-0'
                  }`}>
                    <div className="mb-3">
                      {React.createElement(features[currentIndex].icon, { 
                        className: `h-10 w-10 text-accent mx-auto transition-all duration-800 ease-in-out transform ${
                          isTransitioning ? 'scale-0 rotate-180' : 'scale-100 rotate-0'
                        }` 
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
                  className={`w-3 h-3 rounded-full transition-all duration-500 transform ${
                    index === currentIndex 
                      ? 'bg-accent scale-125 shadow-lg shadow-accent/50' 
                      : 'bg-accent/30 hover:bg-accent/50 hover:scale-110'
                  }`}
                  onClick={() => goToFeature(index)}
                  disabled={isTransitioning}
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