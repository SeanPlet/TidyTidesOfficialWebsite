import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ImageIcon, Play } from 'lucide-react';

const GallerySection = () => {
  // Placeholder screenshots - these can be replaced with actual uploaded images
  const screenshots = [
    {
      id: 1,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 1',
      title: 'Co-op Cleaning',
      description: 'Four players tackle massive whale together'
    },
    {
      id: 2,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 2', 
      title: 'Power Tools',
      description: 'Fire hydrant hose cuts through tough grime'
    },
    {
      id: 3,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 3',
      title: 'Whale Traversal',
      description: 'Bouncing on jellyfish platforms'
    },
    {
      id: 4,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 4',
      title: 'Glass Prison',
      description: 'Trapped in the ocean depths'
    },
    {
      id: 5,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 5',
      title: 'Ancient Statues',
      description: 'Stone characters scattered across levels'
    },
  ];

  return (
    <section className="py-16 ocean-deep relative overflow-hidden">
      <div className="caustic-deep" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 break-words">
            Screenshots
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Dive into the chaotic underwater world of whale cleaning
          </p>
        </div>

        {/* Compact Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={screenshot.id} className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="group relative overflow-hidden bg-gradient-to-br from-background/40 to-background/20 border border-primary/20 hover:border-accent/40 transition-all duration-500">
                      <CardContent className="p-0">
                        {/* Image container */}
                        <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/10 via-background/5 to-accent/10 overflow-hidden">
                          {/* Animated background pattern */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          
                          {/* Content */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <div className="relative">
                              <ImageIcon className="h-12 w-12 text-primary/60 mx-auto mb-3 group-hover:text-accent transition-colors duration-300" />
                              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            
                            <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                              {screenshot.title}
                            </h3>
                            <p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                              {screenshot.description}
                            </p>
                          </div>
                          
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="transform scale-75 group-hover:scale-100 transition-transform duration-300">
                              <Play className="h-8 w-8 text-accent drop-shadow-lg" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom accent bar */}
                        <div className="h-1 bg-gradient-to-r from-primary/40 to-accent/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static translate-y-0 bg-background/20 border-primary/30 hover:bg-primary/10 hover:border-accent/50 text-primary hover:text-accent" />
              
              {/* Dots indicator */}
              <div className="flex gap-2">
                {screenshots.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-primary/30 hover:bg-accent/60 transition-all duration-300"
                  />
                ))}
              </div>
              
              <CarouselNext className="relative static translate-y-0 bg-background/20 border-primary/30 hover:bg-primary/10 hover:border-accent/50 text-primary hover:text-accent" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;