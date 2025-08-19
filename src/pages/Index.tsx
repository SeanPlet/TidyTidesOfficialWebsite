import React from 'react';
import BubbleEffect from '@/components/BubbleEffect';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import PatchNotesSection from '@/components/PatchNotesSection';
import ContactSection from '@/components/ContactSection';
import ScrollProgressBar from '@/components/ScrollProgressBar';
const Index = () => {
  return <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Global Effects */}
      <BubbleEffect />
      
      {/* Sections */}
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="patches">
        <PatchNotesSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/30">
        <p>© 2025 Tidy Tides Co. All rights reserved. Made with 🩵 and ☕</p>
      </footer>
    </div>;
};
export default Index;