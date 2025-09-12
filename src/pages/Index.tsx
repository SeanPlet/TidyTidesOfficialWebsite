import React from 'react';
import BubbleEffect from '@/components/BubbleEffect';
import InteractiveBubbles from '@/components/InteractiveBubbles';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import PatchNotesSection from '@/components/PatchNotesSection';
import ContactSection from '@/components/ContactSection';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SouthAfricanFlag from '../assets/SouthAfricanFlag.png';

const Index = () => {
  return <div className="min-h-screen overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Global Effects */}
      <BubbleEffect />
      <InteractiveBubbles />
      
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <PatchNotesSection />
      <TeamSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/30 ocean-abyss relative">
        <div className="caustic-deep" />
          <p className="relative z-10">
            © 2025 'Tidy Tides Co.' All rights reserved. Made with 💙 and ☕ from
            <span className="inline-block align-middle ml-1" title="South Africa">
              <img
                src={SouthAfricanFlag}
                alt="South African flag"
                width={24}
                height={16}
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
              />
            </span>
            .
          </p>      
      </footer>
    </div>;
};
export default Index;