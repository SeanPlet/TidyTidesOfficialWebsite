import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogOverlay } from '@/components/ui/dialog';

import featureCoop from '@/assets/AncientStatue.png';
import featureAction from '@/assets/GameMenu.png';
import featureTools from '@/assets/CleaningTools.png';
import featureTraversal from '@/assets/Environment.png';

import toolPlunger from '@/assets/Tool-Plunger.png';
import toolVacuum from '@/assets/Tool-Vacuum.png';
import toolHose from '@/assets/Tool-Hose.png';
import toolBrush from '@/assets/Tool-Sponge.png';
import toolHook from '@/assets/Tool-Hook.png';

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

        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-xl text-foreground/90 leading-relaxed">
            The crew ruined Davy Jones’ Flying Dutchman whale-taxi business and were cursed with the inability to swim. As punishment, they were trapped in a giant glass fishbowl at the bottom of the ocean, forced to clean whales for eternity until their debt is paid off. The only way out is to scrub their way to freedom, one whale at a time.
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

        {/* Tools Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold font-sour-gummy text-primary mb-4 heading-shadow">
              The Right Tool for the Job
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              No grime is the same – each mess requires its own special touch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="underwater-glass border-2 border-border/30 hover:border-accent shadow-lg hover:shadow-accent/30 transition-all duration-300 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <img src={toolPlunger} alt="Plunger tool" className="w-12 h-12" />
                <h4 className="text-xl font-bold text-primary font-sour-gummy">Plunger</h4>
              </div>
              <p className="text-foreground/80">Removes stubborn barnacles with powerful suction action</p>
            </div>

            <div className="underwater-glass border-2 border-border/30 hover:border-accent shadow-lg hover:shadow-accent/30 transition-all duration-300 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <img src={toolVacuum} alt="Vacuum tool" className="w-12 h-12" />
                <h4 className="text-xl font-bold text-primary font-sour-gummy">Vacuum</h4>
              </div>
              <p className="text-foreground/80">Sucks up clingy algae clusters in hard-to-reach crevices</p>
            </div>

            <div className="underwater-glass border-2 border-border/30 hover:border-accent shadow-lg hover:shadow-accent/30 transition-all duration-300 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <img src={toolHose} alt="Hose tool" className="w-12 h-12" />
                <h4 className="text-xl font-bold text-primary font-sour-gummy">Hose</h4>
              </div>
              <p className="text-foreground/80">Sprays away slick oil spills with high-pressure streams</p>
            </div>

            <div className="underwater-glass border-2 border-border/30 hover:border-accent shadow-lg hover:shadow-accent/30 transition-all duration-300 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <img src={toolBrush} alt="Brush tool" className="w-12 h-12" />
                <h4 className="text-xl font-bold text-primary font-sour-gummy">Brush</h4>
              </div>
              <p className="text-foreground/80">Scrubs through thick, crusty mud with abrasive bristles</p>
            </div>
          </div>

          <div className="underwater-glass border-2 border-border/30 hover:border-accent shadow-lg hover:shadow-accent/30 transition-all duration-300 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <img src={toolHook} alt="Hook tool" className="w-12 h-12" />
              <h4 className="text-xl font-bold text-primary font-sour-gummy">Navigation Tools</h4>
            </div>
            <p className="text-foreground/80">
              To reach those hard-to-get spots, make use of tires, jellyfish, and fishing hooks to navigate your way around the giant whale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;