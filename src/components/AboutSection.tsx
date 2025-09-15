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
    if (isImageModalOpen) return;
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextFeature();
      }
    }, 6500);

    return () => clearInterval(interval);
  }, [isTransitioning, isImageModalOpen]);

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

        {/* Image Gallery */}
        <div className="relative max-w-4xl mx-auto mb-2">
          <div className="flex items-center justify-center gap-6">
            {/* Left Navigation Button */}
            <button
              onClick={prevFeature}
              disabled={isTransitioning}
              className="underwater-glass border-2 border-border/30 hover:border-accent shadow-lg hover:shadow-accent/30 disabled:opacity-50 text-foreground p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Central Image Gallery */}
            <div className="flex-1 max-w-2xl">
              <div className="relative underwater-glass border-2 border-border/30 hover:border-accent shadow-lg hover:shadow-accent/30 transition-all duration-300 rounded-xl overflow-hidden">
                <div className="relative w-full overflow-hidden">
                  <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
                    <DialogTrigger asChild>
                      <img
                        src={features[currentIndex].image}
                        alt={features[currentIndex].title}
                        className={`w-full h-full object-cover transition-all duration-700 cubic-bezier(0.25, 0.46, 0.45, 0.94) transform cursor-pointer hover:scale-105 ${
                          isTransitioning 
                            ? 'opacity-0 scale-95 blur-sm' 
                            : 'opacity-100 scale-100 blur-0'
                        }`}
                        onClick={() => setIsImageModalOpen(true)}
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none flex items-center justify-center">
                      <div className="relative w-full h-[70vh] flex items-center justify-center aspect-[16/9]">
                        <img
                          src={features[currentIndex].image}
                          alt={features[currentIndex].title}
                          className="w-full h-full object-cover rounded-lg"
                          style={{ aspectRatio: '16/9' }}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              {/* Indicator dots */}
              <div className="flex justify-center mt-6 space-x-3">
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

            {/* Right Navigation Button */}
            <button
              onClick={nextFeature}
              disabled={isTransitioning}
              className="underwater-glass border-2 border-border/30 hover:border-accent shadow-lg hover:shadow-accent/30 disabled:opacity-50 text-foreground p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next feature"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;