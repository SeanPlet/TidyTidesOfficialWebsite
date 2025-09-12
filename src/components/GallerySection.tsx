import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Camera } from 'lucide-react';

const GallerySection = () => {
  // Placeholder screenshots - users can replace these with actual game screenshots
  const screenshots = [
    {
      id: 1,
      title: 'Ocean Exploration',
      image: '/placeholder.svg',
      description: 'Dive deep into the mysterious ocean depths'
    },
    {
      id: 2,
      title: 'Underwater Adventure',
      image: '/placeholder.svg',
      description: 'Navigate through coral reefs and marine life'
    },
    {
      id: 3,
      title: 'Sea Creatures',
      image: '/placeholder.svg',
      description: 'Encounter fascinating sea creatures on your journey'
    },
    {
      id: 4,
      title: 'Treasure Hunt',
      image: '/placeholder.svg',
      description: 'Discover hidden treasures in the ocean floor'
    },
    {
      id: 5,
      title: 'Marine Ecosystem',
      image: '/placeholder.svg',
      description: 'Experience the rich underwater ecosystem'
    }
  ];

  return (
    <section className="py-20 ocean-depths relative overflow-hidden">
      <div className="caustic-subtle" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sour-gummy mb-6 text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Game Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into the visual journey of our underwater adventure. Explore stunning screenshots from the depths of our ocean world.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {screenshots.map((screenshot) => (
                <CarouselItem key={screenshot.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-lg">
                          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            <Camera className="h-12 w-12 text-primary/60" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className="font-semibold font-sour-gummy mb-1">{screenshot.title}</h3>
                              <p className="text-sm text-white/90">{screenshot.description}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-card/80 backdrop-blur-sm border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" />
            <CarouselNext className="bg-card/80 backdrop-blur-sm border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Camera className="h-4 w-4" />
            Screenshots showcase in-game footage and may not represent the final product
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;