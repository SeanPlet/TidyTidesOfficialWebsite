import React from 'react';
import BubbleEffect from '@/components/BubbleEffect';
import InteractiveBubbles from '@/components/InteractiveBubbles';
import OceanNavigation from '@/components/OceanNavigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import PatchNotesSection from '@/components/PatchNotesSection';
import ContactSection from '@/components/ContactSection';
import ScrollProgressBar from '@/components/ScrollProgressBar';
const Index = () => {
  return <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <OceanNavigation />
      
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Global Effects */}
      <BubbleEffect />
      <InteractiveBubbles />
      
      {/* Sections */}
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="patch-notes">
        <PatchNotesSection />
      </section>
      
      <section id="team">
        <TeamSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/30 ocean-abyss relative">
        <div className="caustic-deep" />
        <p className="relative z-10">© 2025 'Tidy Tides Co.' All rights reserved. Made with 🩵 and ☕</p>
      </footer>
    </div>;
};
export default Index;