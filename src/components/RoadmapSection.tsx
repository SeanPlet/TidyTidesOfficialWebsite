import React from 'react';
import { CheckCircle, Circle, Clock, Rocket, Users, GamepadIcon, TestTube } from 'lucide-react';

const RoadmapSection = () => {
  const milestones = [
    {
      title: "Project Started",
      description: "Tidy Tides Co. concept was born",
      date: "Q1 2024",
      status: "completed",
      icon: Rocket
    },
    {
      title: "Team Assembly",
      description: "Core development team came together",
      date: "Q2 2024", 
      status: "completed",
      icon: Users
    },
    {
      title: "Core Development",
      description: "Building the underwater cleaning mechanics",
      date: "Q3 2024",
      status: "completed", 
      icon: GamepadIcon
    },
    {
      title: "Alpha Testing",
      description: "Opening up testing to early players",
      date: "Q1 2025",
      status: "upcoming",
      icon: TestTube
    },
    {
      title: "Beta Release",
      description: "Expanded testing with more features",
      date: "Q2 2025",
      status: "future",
      icon: Circle
    }
  ];

  return (
    <section className="py-16 ocean-medium relative">
      <div className="caustic-light" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Project Roadmap
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Follow our journey from concept to community - see where we've been and what's coming next
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30" />
            
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isCompleted = milestone.status === 'completed';
              const isUpcoming = milestone.status === 'upcoming';
              
              return (
                <div key={index} className="relative flex items-start mb-12 last:mb-0 float-gentle" style={{
                  animationDelay: `${index * 0.2}s`
                }}>
                  {/* Timeline dot */}
                  <div className={`
                    relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 
                    ${isCompleted 
                      ? 'bg-accent/20 border-accent text-accent' 
                      : isUpcoming 
                        ? 'bg-primary/20 border-primary text-primary animate-pulse' 
                        : 'bg-muted/20 border-muted text-muted-foreground'
                    }
                  `}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className={`
                      rounded-lg p-6 border transition-all duration-300 hover:scale-105
                      ${isCompleted 
                        ? 'bg-accent/5 border-accent/20' 
                        : isUpcoming 
                          ? 'bg-primary/5 border-primary/20 shadow-lg' 
                          : 'bg-muted/5 border-muted/20'
                      }
                    `}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <span className={`
                          text-sm font-medium px-3 py-1 rounded-full
                          ${isCompleted 
                            ? 'bg-accent/20 text-accent' 
                            : isUpcoming 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-muted/20 text-muted-foreground'
                          }
                        `}>
                          {milestone.date}
                        </span>
                      </div>
                      <p className="text-foreground/70 mb-3">
                        {milestone.description}
                      </p>
                      {isUpcoming && (
                        <div className="flex items-center text-primary text-sm font-medium">
                          <Clock className="h-4 w-4 mr-2" />
                          Coming Soon!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;