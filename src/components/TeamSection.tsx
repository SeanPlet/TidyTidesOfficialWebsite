import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, Guitar, Car, Gamepad2, MicVocal, BicepsFlexed, Palette } from 'lucide-react';

type Member = {
  name: string;
  role: string;
  icon: React.ElementType;
  badgeIcon: React.ElementType;
};

const TeamSection = () => {
  const teamMembers: Member[] = [
    { name: 'Plet2428',    role: 'Developer', icon: Guitar,        badgeIcon: Code },
    { name: 'Venom1283',   role: 'Developer', icon: Car,           badgeIcon: Code },
    { name: 'Bluffbi',     role: 'Developer', icon: Gamepad2,      badgeIcon: Code },
    { name: 'Marlou',      role: 'Developer', icon: BicepsFlexed,  badgeIcon: Code  },
    { name: 'Chantallion', role: 'Designer',  icon: MicVocal,      badgeIcon: Palette  },
  ];

  return (
    <section className="py-16 ocean-deep relative">
      <div className="caustic-medium" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-sour-gummy text-primary mb-6 break-words" style={{WebkitTextStroke: '4.6px #004258'}}>
            Meet the Crew
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            The talented team swimming against the current to bring &apos;Tidy Tides Co.&apos; to life
          </p>
        </div>

        {/* Team Grid - Single Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 float-gentle"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Avatar + corner badge */}
              <div className="relative">
                {/* Big circle */}
                <div
                  className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center
                             border-2 border-accent/30 transition-all
                             hover:border-accent/60 hover:ring-2 hover:ring-accent/40"
                >
                  <member.icon className="h-8 w-8 text-accent transition-transform hover:scale-110" />
                </div>

                {/* Small circle at TOP-RIGHT (non-clickable, highlights on hover) */}
                <div
                  className="absolute top-0 right-0 translate-x-[65%] -translate-y-[45%]
                             w-6 h-6 rounded-full flex items-center justify-center z-10 select-none
                             border border-accent/50 bg-accent/30 transition-all duration-300
                             cursor-default
                             hover:bg-accent/50 hover:border-accent/70 hover:scale-110 hover:ring-2 hover:ring-accent/40"
                  aria-hidden="true"
                  title={member.role}
                >
                  <member.badgeIcon className="h-3 w-3 text-accent" />
                </div>
              </div>

              {/* Name + role */}
              <div className="text-center">
                <h3 className="text-sm font-semibold font-sour-gummy text-primary mb-1" style={{WebkitTextStroke: '4.6px #004258'}}>
                  {member.name}
                </h3>
                <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 hover:border-accent/50 transition-all duration-300 text-xs">
                  {member.role}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;