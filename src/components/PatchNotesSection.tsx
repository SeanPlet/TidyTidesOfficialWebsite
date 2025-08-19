import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, Bug, Wrench, Sparkles } from 'lucide-react';
const PatchNotesSection = () => {
  const patchNotes = [{
    version: "0.3.2",
    date: "March 15, 2024",
    type: "Feature Update",
    changes: [{
      type: "added",
      text: "New whale species: Blue Whale Boss requiring 4-player coordination"
    }, {
      type: "added",
      text: "Bubble-boost mechanic for faster cleaning speeds"
    }, {
      type: "improved",
      text: "Enhanced water physics for more realistic floating"
    }, {
      type: "fixed",
      text: "Fixed bug where fish could accidentally swim (breaking the curse!)"
    }]
  }, {
    version: "0.3.1",
    date: "March 1, 2024",
    type: "Bug Fixes",
    changes: [{
      type: "fixed",
      text: "Soap dispenser now properly refills between whale clients"
    }, {
      type: "fixed",
      text: "Corrected collision detection with whale fins"
    }, {
      type: "improved",
      text: "Optimized multiplayer synchronization"
    }, {
      type: "added",
      text: "New cleaning tools: Kelp Scrubber and Barnacle Blaster"
    }]
  }, {
    version: "0.3.0",
    date: "February 20, 2024",
    type: "Major Update",
    changes: [{
      type: "added",
      text: "Debt system: Track your progress toward freedom!"
    }, {
      type: "added",
      text: "Flying Dutchman storyline and voice acting"
    }, {
      type: "added",
      text: "3 new underwater environments"
    }, {
      type: "improved",
      text: "Completely redesigned UI with oceanic theme"
    }, {
      type: "fixed",
      text: "Resolved issue where whales would float away mid-cleaning"
    }]
  }];
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
      case "Feature Update":
        return <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300">Feature Update</Badge>;
      case "Bug Fixes":
        return <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 hover:border-accent/50 transition-all duration-300">Bug Fixes</Badge>;
      case "Major Update":
        return <Badge className="bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30 hover:border-secondary/50 transition-all duration-300">Major Update</Badge>;
      default:
        return <Badge variant="outline">Update</Badge>;
    }
  };
  return <section className="py-24 ocean-unified section-overlay-light relative">
      <div className="caustic-lights-subtle" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Patch Notes
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Dive into the latest updates and improvements to your underwater cleaning adventure
          </p>
        </div>

        {/* Patch Notes */}
        <div className="max-w-4xl mx-auto space-y-8">
          {patchNotes.map((patch, index) => <Card key={index} className="underwater-glass border-border/30 hover:border-primary/30 transition-all duration-500 animate-fade-in group hover:scale-105 hover:shadow-xl hover:shadow-primary/20" style={{
          animationDelay: `${index * 0.3}s`
        }}>
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
                  {patch.changes.map((change, changeIndex) => <div key={changeIndex} className="flex items-center gap-3 p-3 rounded-lg bg-background/5 hover:bg-primary/10 transition-all duration-300 hover:transform hover:scale-102 cursor-pointer hover:border-l-4 hover:border-primary">
                      <div className="group-hover:animate-pulse">
                        {getTypeIcon(change.type)}
                      </div>
                      <span className="text-foreground/90 leading-relaxed flex-1 group-hover:text-primary transition-colors duration-300">
                        {change.text}
                      </span>
                    </div>)}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-primary/10 border-primary/30 text-primary hover:bg-primary/15 hover:border-primary/40 transition-all duration-300"
          >
            View All Patch Notes
          </Button>
        </div>
        
      </div>
    </section>;
};
export default PatchNotesSection;