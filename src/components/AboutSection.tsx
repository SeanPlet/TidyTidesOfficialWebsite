import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogOverlay } from '@/components/ui/dialog';

import featureCoop from '@/assets/AncientStatue.png';
import featureAction from '@/assets/GameMenu.png';
import featureTools from '@/assets/CleaningTools.png';
import featureTraversal from '@/assets/Environment.png';
import bubbleImage from '@/assets/Bubble_1.png';
import bubbleImage2 from '@/assets/Bubble_2.png';

const ANIM_MS = 1800 as const;
type FadeStage = 'idle' | 'start' | 'run';

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeStage, setFadeStage] = useState<FadeStage>('idle');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const features = [
    { image: featureCoop },
    { image: featureAction },
    { image: featureTools },
    { image: featureTraversal },
  ];

  const beginFade = (nextIndex: number) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(nextIndex);
    setIsTransitioning(true);
    setFadeStage('start');
    requestAnimationFrame(() => setFadeStage('run'));
    setTimeout(() => {
      setIsTransitioning(false);
      setFadeStage('idle');
    }, ANIM_MS);
  };

  const nextFeature = () => {
    if (isTransitioning) return;
    const next = (currentIndex + 1) % features.length;
    beginFade(next);
  };

  const prevFeature = () => {
    if (isTransitioning) return;
    const prev = (currentIndex - 1 + features.length) % features.length;
    beginFade(prev);
  };

  const goToFeature = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    beginFade(index);
  };

  useEffect(() => {
    if (isImageModalOpen) return;
    const interval = setInterval(() => {
      if (!isTransitioning) nextFeature();
    }, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning, isImageModalOpen, currentIndex]);

  return (
    <section className="py-16 ocean-shallow relative overflow-hidden">
      <div className="caustic-shallow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-sour-gummy text-primary mb-6 break-words heading-shadow">
            The Story
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20 relative">
          <img 
            src={bubbleImage} 
            alt="Decorative bubbles" 
            className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 opacity-80 animate-pulse" 
            style={{ transform: 'translate(-50%, -25%)' }}
          />
          <img 
            src={bubbleImage2} 
            alt="Decorative bubbles" 
            className="absolute bottom-0 right-0 w-10 h-10 md:w-14 md:h-14 opacity-70 animate-bounce" 
            style={{ transform: 'translate(50%, 25%)' }}
          />
          <p className="text-xl text-foreground/90 leading-relaxed">
            The crew ruined Davy Jones' Flying Dutchman whale-taxi business and were cursed with the inability to swim. As punishment, they were trapped in a giant glass fishbowl at the bottom of the ocean, forced to clean whales for eternity until their debt is paid off. The only way out is to scrub their way to freedom, one whale at a time.
          </p>
        </div>

        {/* Wider gallery container */}
        <div className="relative max-w-7xl mx-auto mb-2">
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevFeature}
              disabled={isTransitioning}
              className="underwater-glass border-2 border-border/30 hover:border-accent shadow-lg hover:shadow-accent/30 disabled:opacity-50 text-foreground p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Much bigger gallery box */}
            <div className="flex-1 w-full max-w-6xl">
              <div className="relative underwater-glass border-2 border-border/30 hover:border-accent shadow-lg hover:shadow-accent/30 transition-all duration-300 rounded-xl overflow-hidden">
                {/* Taller, responsive height instead of fixed 16:9 */}
                <div className="relative w-full overflow-hidden h-[220px] sm:h-[360px] md:h-[480px] lg:h-[560px] xl:h-[640px]">
                  {isTransitioning ? (
                    <>
                      <img
                        src={features[prevIndex].image}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                          transitionProperty: 'opacity',
                          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                          transitionDuration: `${ANIM_MS}ms`,
                          opacity: fadeStage === 'start' ? 1 : 0,
                          willChange: 'opacity',
                        }}
                        draggable={false}
                        alt=""
                      />
                      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
                        <DialogTrigger asChild>
                          <img
                            src={features[currentIndex].image}
                            className="relative z-10 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            style={{
                              transitionProperty: 'opacity',
                              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                              transitionDuration: `${ANIM_MS}ms`,
                              opacity: fadeStage === 'start' ? 0 : 1,
                              willChange: 'opacity',
                            }}
                            onClick={() => setIsImageModalOpen(true)}
                            draggable={false}
                            alt=""
                          />
                        </DialogTrigger>
                        <DialogOverlay className="bg-white/40 backdrop-blur-sm" />
                        <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none flex items-center justify-center">
                          <div className="relative w-full h-[70vh] flex items-center justify-center aspect-[16/9]">
                            <img
                              src={features[currentIndex].image}
                              className="w-full h-full object-cover rounded-lg"
                              style={{ aspectRatio: '16/9' }}
                              alt=""
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </>
                  ) : (
                    <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
                      <DialogTrigger asChild>
                        <img
                          src={features[currentIndex].image}
                          className="relative z-10 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                          onClick={() => setIsImageModalOpen(true)}
                          draggable={false}
                          alt=""
                        />
                      </DialogTrigger>
                      <DialogOverlay className="bg-white/40 backdrop-blur-sm" />
                      <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none flex items-center justify-center">
                        <div className="relative w-full h-[70vh] flex items-center justify-center aspect-[16/9]">
                          <img
                            src={features[currentIndex].image}
                            className="w-full h-full object-cover rounded-lg"
                            style={{ aspectRatio: '16/9' }}
                            alt=""
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>

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
