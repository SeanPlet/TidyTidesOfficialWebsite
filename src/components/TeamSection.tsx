import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Music, Gamepad2, Zap } from 'lucide-react';
const TeamSection = () => {
  const teamMembers = [{
    name: "Plet2428",
    role: "Developer",
    icon: Code,
    description: "Dives deep into the codebase to bring the underwater world to life",
    specialties: ["Gameplay Programming", "Physics Systems", "Co-op Networking"]
  }, {
    name: "Venom1283",
    role: "Developer",
    icon: Code,
    description: "Creates the vibrant underwater visuals and character designs",
    specialties: ["Character Design", "Environment Art", "Visual Effects"]
  }, {
    name: "Bluffbi",
    role: "Developer",
    icon: Code,
    description: "Crafts the immersive underwater soundscape and whale songs",
    specialties: ["Sound Effects", "Music Composition", "Audio Implementation"]
  }, {
    name: "Marlou",
    role: "Developer",
    icon: Code,
    description: "Designs the chaotic cleaning mechanics and level progression",
    specialties: ["Level Design", "Gameplay Balance", "Player Experience"]
  }, {
    name: "Chantallion",
    role: "Designer",
    icon: Palette,
    description: "Makes the bubbles pop and the water effects mesmerize",
    specialties: ["Particle Systems", "Lighting Effects", "Animation"]
  }];
  return <section className="py-24 ocean-deep relative">
      <div className="caustic-lights" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Meet the Crew
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">The talented team swimming against the current to bring 'Tidy Tides Co.' to life</p>
        </div>

        {/* Team Grid - Single Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {teamMembers.map((member, index) => <div key={index} className="flex flex-col items-center space-y-3 float-gentle" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="relative">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent/30 hover:border-accent/60 transition-colors">
                  <member.icon className="h-8 w-8 text-accent" />
                </div>
                
              </div>
              
              <div className="text-center">
                <h3 className="text-sm font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                  {member.role}
                </Badge>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TeamSection;