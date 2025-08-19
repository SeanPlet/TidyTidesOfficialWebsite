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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/30 hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 animate-fade-in opacity-0"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent/30 group-hover:border-accent/60 group-hover:scale-110 transition-all duration-300 mx-auto">
                    <member.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {member.name}
                </h3>
                
                <Badge className="bg-accent/20 text-accent border-accent/30 mb-3">
                  {member.role}
                </Badge>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <div key={idx} className="text-xs text-accent/80 bg-accent/10 rounded-full px-2 py-1 inline-block mr-1">
                      {specialty}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};
export default TeamSection;