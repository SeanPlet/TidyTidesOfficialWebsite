import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play } from 'lucide-react';
import underwaterHero from '@/assets/underwater-hero.jpg';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center ocean-surface">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
      backgroundImage: `url(${underwaterHero})`
    }} />
      
      {/* Caustic Light Effects */}
      <div className="caustic-lights" />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 float-gentle">
          <img src="/lovable-uploads/e3893670-1ae5-43cd-bdc3-a513bc008677.png" alt="Tidy Tides Co. Logo" className="h-32 mx-auto drop-shadow-2xl" />
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 drop-shadow-lg">
          Dive Into The
          <span className="block text-accent">Chaos</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          A fast-paced, four-player cooperative cleaning adventure in the depths of the ocean
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full">
            <Play className="mr-2 h-5 w-5" />
            Watch Trailer
          </Button>
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold rounded-full">
            <ExternalLink className="mr-2 h-5 w-5" />
            Join Discord
          </Button>
        </div>

        {/* Game Status */}
        

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;