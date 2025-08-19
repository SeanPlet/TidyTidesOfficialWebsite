import React from 'react';
import BubbleEffect from '@/components/BubbleEffect';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import PatchNotesSection from '@/components/PatchNotesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Global Effects */}
      <BubbleEffect />
      
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <PatchNotesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/30">
        <p>&copy; 2024 Tidy Tides Co. All rights reserved. Made with 🌊 and ☕</p>
      </footer>
    </div>
  );
};

export default Index;
