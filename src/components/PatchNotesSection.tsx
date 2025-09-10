import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, Bug, Wrench, Sparkles } from 'lucide-react';

import fish from '@/assets/PatchNotesFish.png';

type PatchNotesSectionProps = {
  fishOffsetX?: number;
  fishOffsetY?: number;
};

const PatchNotesSection: React.FC<PatchNotesSectionProps> = ({
  fishOffsetX = 785,
  fishOffsetY = -90,
}) => {
  const patchNotes = [
    {
      version: '0.3.4',
      date: 'Sep 1, 2025',
      type: 'Minor Update',
      changes: [
        { type: 'added', text: 'Added stone characters of our character across the level' },
        { type: 'added', text: 'Additional jellyfish for the player to use to navigate the whale' },
        { type: 'improved', text: 'Make the fire hydrant hose more accurate' },
        { type: 'fixed', text: 'Fixed a bug where the player could fall through the mesh and get stuck' },
      ],
    },
    {
      version: '0.2.1',
      date: 'Aug 18, 2025',
      type: 'Bug Fixes',
      changes: [
        { type: 'fixed', text: 'Resolved duplicate customization menu from displaying' },
        { type: 'fixed', text: 'Fixed the issue where players can go above the rappel hooks' },
        { type: 'improved', text: 'Optimized fishbowl collisions' },
        { type: 'added', text: 'New SFX whenever the player runs into the glass fishbowl' },
      ],
    },
    {
      version: '0.1.0',
      date: 'Aug 4, 2025',
      type: 'Major Update',
      changes: [
        { type: 'added', text: 'Added passive crabs that walk around the level' },
        { type: 'added', text: 'Added the announcer system to react to player interactions' },
        { type: 'added', text: 'Added new traversal mechanics' },
        { type: 'improved', text: 'Added a "Thank you" message after a user submits feedback' },
        { type: 'fixed', text: 'Resolved issue where player could not enter the manager room' },
      ],
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'added':
        return <Plus className="h-4 w-4 text-primary" />;
      case 'fixed':
        return <Bug className="h-4 w-4 text-accent" />;
      case 'improved':
        return <Wrench className="h-4 w-4 text-secondary" />;
      default:
        return <Sparkles className="h-4 w-4 text-primary" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Bug Fixes':
        return (
          <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 hover:border-accent/50 transition-all duration-300">
            Bug Fixes
          </Badge>
        );
      case 'Minor Update':
        return (
          <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 hover:border-accent/50 transition-all duration-300">
            Minor Update
          </Badge>
        );  
      case 'Major Update':
        return (
          <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 hover:border-accent/50 transition-all duration-300">
            Major Update
          </Badge>
        );
      default:
        return <Badge variant="outline">Update</Badge>;
    }
  };

  return (
    <section className="py-16 ocean-medium relative overflow-hidden">
      <div className="caustic-medium" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-sour-gummy text-primary mb-6 break-words text-outline">Patch Notes</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Dive into the latest updates and improvements to your underwater cleaning adventure
          </p>
        </div>

        {/* Patch Notes */}
        <div className="max-w-4xl mx-auto space-y-8">
          {patchNotes.map((patch, index) => (
            <div key={index} className="relative">
              {/* Mascot behind the FIRST card only */}
              {index === 0 && (
                <div
                  className="absolute top-0 left-0 pointer-events-none select-none hidden md:block"
                  style={{ transform: `translate(${fishOffsetX}px, ${fishOffsetY}px)` }}
                >
                  <div className="relative z-0">
                    {/* Glow BEHIND the fish (no animation) */}
                    <div
                      aria-hidden="true"
                      className="absolute -z-10 rounded-full blur-2xl"
                      style={{
                        width: '12rem',
                        height: '12rem',
                        top: '-1.5rem',
                        left: '-1.25rem',
                        background:
                          'radial-gradient(closest-side, rgba(217, 240, 12, 0.55), rgba(147,197,253,0))',
                      }}
                    />
                    {/* Fish ABOVE the glow */}
                    <img
                      src={fish}
                      alt=""
                      aria-hidden="true"
                      className="relative z-10 w-24 md:w-32 lg:w-40 float-gentle"
                    />
                  </div>
                </div>
              )}

              <Card
                className="relative z-10 underwater-glass border-border/30 hover:border-primary/30 transition-all duration-500 animate-fade-in group hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardHeader className="border-b border-border/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle className="text-2xl font-bold text-primary">
                      Version {patch.version}
                    </CardTitle>
                    <div className="flex items-center gap-4">
                      {getTypeBadge(patch.type)}
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {patch.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    {patch.changes.map((change, changeIndex) => (
                      <div
                        key={changeIndex}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/5 hover:bg-primary/10 transition-all duration-300 hover:transform hover:scale-102 cursor-pointer hover:border-l-4 hover:border-primary"
                      >
                        <div className="group-hover:animate-pulse">{getTypeIcon(change.type)}</div>
                        <span className="text-foreground/90 leading-relaxed flex-1 group-hover:text-primary transition-colors duration-300">
                          {change.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="bg-primary/10 border-primary/30 text-primary hover:bg-primary/15 hover:border-primary/40 hover:scale-105 transition-all duration-300"
          >
            View All Patch Notes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatchNotesSection;