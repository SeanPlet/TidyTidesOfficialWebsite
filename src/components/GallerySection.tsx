import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Camera, ImageIcon } from 'lucide-react';

const GallerySection = () => {
  // Placeholder screenshots - these can be replaced with actual uploaded images
  const screenshots = [
    {
      id: 1,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 1',
      caption: 'Four players cleaning a massive whale together'
    },
    {
      id: 2,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 2', 
      caption: 'Using fire hydrant hose to clean tough grime'
    },
    {
      id: 3,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 3',
      caption: 'Traversing the whale using jellyfish platforms'
    },
    {
      id: 4,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 4',
      caption: 'Characters trapped in the glass fishbowl'
    },
    {
      id: 5,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 5',
      caption: 'Stone character statues across the level'
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

        {/* Gallery Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {screenshots.map((screenshot) => (
                <CarouselItem key={screenshot.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="underwater-glass border-border/30 hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                    <CardContent className="p-0">
                      <div className="relative aspect-video bg-background/10 rounded-lg overflow-hidden">
                        {/* Placeholder for screenshot */}
                        <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                          <div className="text-center">
                            <ImageIcon className="h-16 w-16 text-primary/40 mx-auto mb-2" />
                            <p className="text-sm text-foreground/60 px-4">
                              Screenshot will appear here
                            </p>
                          </div>
                        </div>
                        
                        {/* Image overlay for when real images are added */}
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onLoad={(e) => {
                            // Show image once it loads (when real images are added)
                            if (e.currentTarget.naturalWidth > 1) {
                              e.currentTarget.style.opacity = '1';
                              if (e.currentTarget.previousElementSibling) {
                                (e.currentTarget.previousElementSibling as HTMLElement).style.display = 'none';
                              }
                            }
                          }}
                        />
                        
                        {/* Caption overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm text-foreground/90 font-medium">
                            {screenshot.caption}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation buttons */}
            <CarouselPrevious className="underwater-glass border-border/30 hover:border-primary/50 hover:bg-primary/10" />
            <CarouselNext className="underwater-glass border-border/30 hover:border-primary/50 hover:bg-primary/10" />
          </Carousel>
          
          {/* Navigation dots/indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {screenshots.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary/50 transition-colors duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full underwater-glass border border-border/30">
            <Camera className="h-5 w-5 text-accent" />
            <span className="text-foreground/80">
              Want to see your screenshots here? Share them with us!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;