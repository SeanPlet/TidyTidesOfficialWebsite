import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ImageIcon, Maximize2 } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder screenshots - these can be replaced with actual uploaded images
  const screenshots = [
    {
      id: 1,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 1',
      caption: 'Four players cleaning a massive whale together',
      featured: true
    },
    {
      id: 2,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 2', 
      caption: 'Using fire hydrant hose to clean tough grime',
      featured: false
    },
    {
      id: 3,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 3',
      caption: 'Traversing the whale using jellyfish platforms',
      featured: false
    },
    {
      id: 4,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 4',
      caption: 'Characters trapped in the glass fishbowl',
      featured: true
    },
    {
      id: 5,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 5',
      caption: 'Stone character statues across the level',
      featured: false
    },
    {
      id: 6,
      src: '/placeholder.svg',
      alt: 'Gameplay Screenshot 6',
      caption: 'Cleaning tools and equipment scattered around',
      featured: false
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

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {screenshots.map((screenshot, index) => (
              <div 
                key={screenshot.id}
                className={`relative group cursor-pointer animate-fade-in ${
                  screenshot.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(screenshot.id)}
              >
                <Card className="h-full underwater-glass border-border/30 hover:border-primary/50 transition-all duration-500 group-hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <div className={`relative bg-background/10 overflow-hidden ${
                      screenshot.featured ? 'aspect-video' : 'aspect-square'
                    }`}>
                      {/* Placeholder background */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/5">
                        <div className="text-center">
                          <ImageIcon className={`text-primary/40 mx-auto mb-2 ${
                            screenshot.featured ? 'h-24 w-24' : 'h-16 w-16'
                          }`} />
                          <p className="text-sm text-foreground/60 px-4">
                            {screenshot.caption}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <Maximize2 className="h-8 w-8 text-white mx-auto mb-2" />
                          <p className="text-white font-medium">View Full Size</p>
                        </div>
                      </div>
                      
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for full-size viewing */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-foreground/80 hover:text-foreground text-xl font-bold z-10"
              >
                ✕
              </button>
              <div className="underwater-glass rounded-lg overflow-hidden">
                <div className="aspect-video bg-background/20 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="h-32 w-32 text-primary/40 mx-auto mb-4" />
                    <p className="text-lg text-foreground/80 mb-2">
                      {screenshots.find(s => s.id === selectedImage)?.caption}
                    </p>
                    <p className="text-sm text-foreground/60">
                      Full resolution screenshot will appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;