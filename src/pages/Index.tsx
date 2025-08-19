import React from 'react';
import BubbleEffect from '@/components/BubbleEffect';
import InteractiveBubbles from '@/components/InteractiveBubbles';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import PatchNotesSection from '@/components/PatchNotesSection';
import ContactSection from '@/components/ContactSection';
import ScrollProgressBar from '@/components/ScrollProgressBar';
const Index = () => {
  return <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Global Effects */}
      <BubbleEffect />
      <InteractiveBubbles />
      
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <PatchNotesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/30">
        <p>© 2025 'Tidy Tides Co. All rights reserved. Made with 🩵 and ☕</p>
      </footer>
    </div>;
};
export default Index;