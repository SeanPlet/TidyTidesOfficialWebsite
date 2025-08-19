import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Music, Gamepad2, Zap } from 'lucide-react';
const TeamSection = () => {
  const teamMembers = [{
    name: "Marina Deepcode",
    role: "Lead Developer",
    icon: Code,
    description: "Dives deep into the codebase to bring the underwater world to life",
    specialties: ["Gameplay Programming", "Physics Systems", "Co-op Networking"]
  }, {
    name: "Coral Brushstroke",
    role: "Art Director",
    icon: Palette,
    description: "Creates the vibrant underwater visuals and character designs",
    specialties: ["Character Design", "Environment Art", "Visual Effects"]
  }, {
    name: "Echo Soundwave",
    role: "Audio Designer",
    icon: Music,
    description: "Crafts the immersive underwater soundscape and whale songs",
    specialties: ["Sound Effects", "Music Composition", "Audio Implementation"]
  }, {
    name: "Finn Gameflow",
    role: "Game Designer",
    icon: Gamepad2,
    description: "Designs the chaotic cleaning mechanics and level progression",
    specialties: ["Level Design", "Gameplay Balance", "Player Experience"]
  }, {
    name: "Splash Sparkle",
    role: "VFX Artist",
    icon: Zap,
    description: "Makes the bubbles pop and the water effects mesmerize",
    specialties: ["Particle Systems", "Lighting Effects", "Animation"]
  }];
  return <section className="py-24 ocean-abyss relative">
      <div className="caustic-lights" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Meet the Crew
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            The talented team swimming against the current to bring Tidy Tides Co. to life
          </p>
        </div>

        {/* Team Grid - Single Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {teamMembers.map((member, index) => <div key={index} className="flex flex-col items-center space-y-3 animate-fade-in opacity-0 float-gentle hover-scale group cursor-pointer" style={{
          animationDelay: `${index * 0.3}s`,
          animationFillMode: 'forwards',
          transform: 'translateY(30px)'
        }}>
              <div className="relative">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent/30 group-hover:border-accent group-hover:bg-accent/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/20">
                  <member.icon className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Animated ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 group-hover:scale-125 group-hover:border-accent/40 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              </div>
              
              <div className="text-center transition-all duration-300 group-hover:scale-105">
                <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <Badge className="bg-accent/20 text-accent border-accent/30 text-sm group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  {member.role}
                </Badge>
                
                {/* Description on hover */}
                <p className="text-xs text-foreground/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-32">
                  {member.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TeamSection;