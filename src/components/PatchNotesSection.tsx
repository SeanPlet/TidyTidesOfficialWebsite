import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, Bug, Wrench, Sparkles } from 'lucide-react';

const PatchNotesSection: React.FC = () => {
  const patchNotes = [
    {
      version: '0.3.5',
      date: 'Sep 15, 2025',
      type: 'Minor Update',
      changes: [
        { type: 'added', text: 'Implemented a whale exit event' },
        { type: 'added', text: 'Power Pearls now randomly spawn in a random location' },
        { type: 'improved', text: 'Replaced the UI with a new user-friendly design' },
        { type: 'fixed', text: 'Changed fishbowl location to resolve collision issues' },
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
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-sour-gummy text-primary mb-6 break-words heading-shadow">Patch Notes</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Dive into the latest updates and improvements to your underwater cleaning adventure
          </p>
        </div>

        {/* Patch Notes */}
        <div className="max-w-4xl mx-auto space-y-8">
          {patchNotes.map((patch, index) => (
            <div key={index} className="relative">
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