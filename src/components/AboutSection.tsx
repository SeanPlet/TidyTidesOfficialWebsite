import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, Waves, Timer, Fish } from 'lucide-react';
import cleaningCrew from '@/assets/cleaning-crew.jpg';
import whaleClient from '@/assets/whale-client.jpg';
const AboutSection = () => {
  const features = [{
    icon: Users,
    title: "4-Player Co-op",
    description: "Team up with friends to tackle the messiest whales in the ocean",
    details: "Work together with up to 3 friends in seamless online co-op. Coordinate your cleaning efforts, share tools, and compete for the highest cleaning scores. Each player can specialize in different cleaning techniques for maximum efficiency."
  }, {
    icon: Timer,
    title: "Fast-Paced Action",
    description: "Race against time to scrub away grime and earn your freedom",
    details: "Each whale cleaning session is a frantic race against the clock. The longer you take, the more dirt accumulates! Master quick cleaning combos, power-ups, and speed bonuses to complete your tasks before time runs out."
  }, {
    icon: Fish,
    title: "Cursed Crew",
    description: "Play as fish who can't swim - trapped in a cleaning nightmare",
    details: "Experience the unique challenge of being aquatic creatures who've lost their natural abilities. Use special flotation devices, air bubbles, and creative movement techniques to navigate while cleaning the massive whales."
  }, {
    icon: Waves,
    title: "Underwater Chaos",
    description: "Navigate chaotic underwater environments while staying afloat",
    details: "Battle strong underwater currents, avoid dangerous sea creatures, and work around constantly changing water pressure. The ocean environment itself becomes both your biggest challenge and most beautiful backdrop."
  }];
  return <section className="py-24 ocean-deep relative">
      <div className="caustic-lights" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            The Story
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <Card className="underwater-glass border-border/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  The Curse
                </h3>
                <p className="text-lg text-foreground/90 leading-relaxed">After destroying the Flying Dutchman's whale-taxi business, you and your crew have been cursed to lose your ability to swim. Now you must work off your debt through endless whale cleaning.</p>
              </CardContent>
            </Card>

            <Card className="underwater-glass border-border/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  The Prison
                </h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Trapped in a giant glass fishbowl at the bottom of the ocean, you're forced to clean 
                  whales for eternity... or until your debt is paid off. The only way out is to clean 
                  your way to freedom, one whale at a time.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img src={cleaningCrew} alt="Cleaning Crew" className="rounded-lg shadow-2xl float-gentle" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>

        {/* Interactive Features Grid */}
        <Accordion type="single" collapsible className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <AccordionItem 
              key={index} 
              value={`feature-${index}`}
              className="underwater-glass border-border/30 hover:border-primary/50 transition-colors wave-motion rounded-lg overflow-hidden"
              style={{
                animationDelay: `${index * 0.5}s`
              }}
            >
              <AccordionTrigger className="p-6 text-center hover:no-underline [&[data-state=open]>div>svg]:rotate-180">
                <div className="flex flex-col items-center w-full">
                  <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-foreground/80 mb-2">
                    {feature.description}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4 border-t border-border/20">
                  <p className="text-foreground/90 leading-relaxed">
                    {feature.details}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Whale Client Showcase */}
        
      </div>
    </section>;
};
export default AboutSection;