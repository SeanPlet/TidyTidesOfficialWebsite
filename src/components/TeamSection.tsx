import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Music, Gamepad2, Zap } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Marina Deepcode",
      role: "Lead Developer",
      icon: Code,
      description: "Dives deep into the codebase to bring the underwater world to life",
      specialties: ["Gameplay Programming", "Physics Systems", "Co-op Networking"]
    },
    {
      name: "Coral Brushstroke",
      role: "Art Director",
      icon: Palette,
      description: "Creates the vibrant underwater visuals and character designs",
      specialties: ["Character Design", "Environment Art", "Visual Effects"]
    },
    {
      name: "Echo Soundwave",
      role: "Audio Designer",
      icon: Music,
      description: "Crafts the immersive underwater soundscape and whale songs",
      specialties: ["Sound Effects", "Music Composition", "Audio Implementation"]
    },
    {
      name: "Finn Gameflow",
      role: "Game Designer",
      icon: Gamepad2,
      description: "Designs the chaotic cleaning mechanics and level progression",
      specialties: ["Level Design", "Gameplay Balance", "Player Experience"]
    },
    {
      name: "Splash Sparkle",
      role: "VFX Artist",
      icon: Zap,
      description: "Makes the bubbles pop and the water effects mesmerize",
      specialties: ["Particle Systems", "Lighting Effects", "Animation"]
    }
  ];

  return (
    <section className="py-24 ocean-abyss relative">
      <div className="caustic-lights" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Meet the Crew
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            The talented crew bringing Tidy Tides Co. to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.slice(0, 3).map((member, index) => (
            <Card key={index} className="underwater-glass border-border/30 hover:border-accent/50 transition-all duration-300 float-gentle" style={{ animationDelay: `${index * 0.3}s` }}>
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.icon className="h-10 w-10 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                
                <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
                  {member.role}
                </Badge>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.slice(3).map((member, index) => (
            <Card key={index + 3} className="underwater-glass border-border/30 hover:border-accent/50 transition-all duration-300 wave-motion" style={{ animationDelay: `${(index + 3) * 0.3}s` }}>
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.icon className="h-10 w-10 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                
                <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
                  {member.role}
                </Badge>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;