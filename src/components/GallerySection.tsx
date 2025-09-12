import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Camera, Play, Maximize2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Enhanced screenshot data with gaming stats
  const screenshots = [
    {
      id: 1,
      title: 'Deep Sea Exploration',
      image: '/placeholder.svg',
      description: 'Navigate through mysterious underwater caverns',
      stats: { likes: 1247, views: 8432 },
      featured: true,
      type: 'gameplay'
    },
    {
      id: 2,
      title: 'Coral Reef Adventures',
      image: '/placeholder.svg',
      description: 'Swim alongside colorful marine life in vibrant reefs',
      stats: { likes: 892, views: 5621 },
      featured: false,
      type: 'environment'
    },
    {
      id: 3,
      title: 'Treasure Discovery',
      image: '/placeholder.svg',
      description: 'Uncover ancient treasures hidden in shipwrecks',
      stats: { likes: 2156, views: 12843 },
      featured: false,
      type: 'achievement'
    },
    {
      id: 4,
      title: 'Bioluminescent Depths',
      image: '/placeholder.svg',
      description: 'Experience the magical glow of deep-sea creatures',
      stats: { likes: 1678, views: 9234 },
      featured: false,
      type: 'cinematic'
    },
    {
      id: 5,
      title: 'Underwater Combat',
      image: '/placeholder.svg',
      description: 'Epic battles with legendary sea monsters',
      stats: { likes: 3421, views: 18765 },
      featured: true,
      type: 'action'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'gameplay': return 'from-blue-500 to-cyan-500';
      case 'environment': return 'from-green-500 to-emerald-500';
      case 'achievement': return 'from-yellow-500 to-orange-500';
      case 'cinematic': return 'from-purple-500 to-pink-500';
      case 'action': return 'from-red-500 to-orange-500';
      default: return 'from-primary to-primary-foreground';
    }
  };

  return (
    <section className="py-20 ocean-abyss relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="caustic-deep" />
      
      {/* Floating Bubbles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative mb-8">
            <h2 className="text-5xl md:text-7xl font-bold font-sour-gummy bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] animate-pulse">
              ⟨ GALLERY ⟩
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            🌊 Immerse yourself in breathtaking visuals from our underwater realm 🌊
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
              <span>Gameplay</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
              <span>Environment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
              <span>Cinematic</span>
            </div>
          </div>
        </div>

        {/* Enhanced Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={screenshot.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="group relative">
                    <Card 
                      className={`
                        relative overflow-hidden cursor-pointer transition-all duration-500 transform
                        ${hoveredCard === screenshot.id ? 'scale-105 rotate-1' : 'hover:scale-102'}
                        ${screenshot.featured ? 'ring-2 ring-primary/50 ring-offset-2 ring-offset-background' : ''}
                        bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm 
                        border-2 border-transparent hover:border-primary/30
                        shadow-2xl hover:shadow-primary/20
                      `}
                      onMouseEnter={() => setHoveredCard(screenshot.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {screenshot.featured && (
                        <div className="absolute -top-3 -right-3 z-20">
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                            ⭐ FEATURED
                          </div>
                        </div>
                      )}
                      
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          {/* Image Container */}
                          <div className="aspect-video relative bg-gradient-to-br from-primary/30 via-primary/10 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                            <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(screenshot.type)} opacity-20`} />
                            <Camera className="h-16 w-16 text-primary/60 group-hover:scale-125 transition-transform duration-500" />
                            
                            {/* Floating Action Buttons */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <div className="flex gap-3">
                                <Button 
                                  size="sm" 
                                  className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30 text-white shadow-lg transform hover:scale-110 transition-all"
                                >
                                  <Play className="h-4 w-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30 text-white shadow-lg transform hover:scale-110 transition-all"
                                >
                                  <Maximize2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          
                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTypeColor(screenshot.type)} text-white shadow-lg`}>
                                {screenshot.type.toUpperCase()}
                              </span>
                              <div className="flex items-center gap-3 text-white/80 text-sm">
                                <div className="flex items-center gap-1">
                                  <Heart className="h-3 w-3" />
                                  <span>{screenshot.stats.likes}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Play className="h-3 w-3" />
                                  <span>{screenshot.stats.views}</span>
                                </div>
                              </div>
                            </div>
                            <h3 className="font-bold font-sour-gummy text-white text-lg mb-1 group-hover:text-primary transition-colors">
                              {screenshot.title}
                            </h3>
                            <p className="text-sm text-white/90 group-hover:text-white transition-colors">
                              {screenshot.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced Navigation */}
            <CarouselPrevious className="
              -left-16 w-12 h-12 bg-gradient-to-r from-primary to-accent 
              text-primary-foreground border-2 border-primary/30 shadow-2xl 
              hover:scale-110 hover:shadow-primary/30 transition-all duration-300
              backdrop-blur-sm
            " />
            <CarouselNext className="
              -right-16 w-12 h-12 bg-gradient-to-r from-primary to-accent 
              text-primary-foreground border-2 border-primary/30 shadow-2xl 
              hover:scale-110 hover:shadow-primary/30 transition-all duration-300
              backdrop-blur-sm
            " />
          </Carousel>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-16 space-y-6">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Camera className="h-4 w-4 animate-pulse" />
              <span>4K Screenshots Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4 animate-pulse" />
              <span>Video Clips Coming Soon</span>
            </div>
          </div>
          
          <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            🎮 View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;