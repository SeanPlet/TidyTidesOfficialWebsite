import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, BookOpen, FileText, Users, Mail, Anchor } from 'lucide-react';

const OceanNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'Story', icon: BookOpen },
    { id: 'patch-notes', label: 'Updates', icon: FileText },
    { id: 'team', label: 'Crew', icon: Users },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Account for fixed nav height
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 underwater-glass border-b border-border/30 backdrop-blur-xl">
      <div className="caustic-shallow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <Anchor className="h-6 w-6 text-accent animate-pulse" />
            <span className="text-lg font-bold text-primary">Tidy Tides Co.</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-4 py-2 rounded-full transition-all duration-300
                    ${isActive 
                      ? 'bg-primary/20 text-primary border border-primary/30 shadow-lg shadow-primary/20' 
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/10'
                    }
                  `}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full animate-pulse" />
                  )}
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:bg-primary/10"
            >
              <Anchor className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border/30 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-around">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex flex-col items-center px-2 py-1 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'bg-primary/20 text-primary' 
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/10'
                    }
                  `}
                >
                  <item.icon className="h-4 w-4 mb-1" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default OceanNavigation;