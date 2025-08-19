import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, MessageCircle, Users, Bell } from 'lucide-react';
const ContactSection = () => {
  return <section className="py-24 ocean-abyss relative">
      <div className="caustic-lights" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Stay Connected
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Join our community and be the first to know about updates, beta tests, and release dates
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Discord */}
          <Card className="underwater-glass border-border/30 hover:border-primary/50 transition-all duration-300 float-gentle">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">
                Join Our Discord
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Connect with fellow players, share feedback, participate in beta testing, 
                and get exclusive sneak peeks of upcoming features.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Join 500+ community members</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Bell className="h-4 w-4" />
                  <span>Get notified of updates instantly</span>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full w-full" onClick={() => window.open('https://discord.gg/tidytidesco', '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Join Discord Server
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="underwater-glass border-border/30 hover:border-accent/50 transition-all duration-300 wave-motion">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-accent mb-4">
                Email the Team
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Have questions, suggestions, or business inquiries? Reach out to us directly 
                and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>📧 General inquiries</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>🎮 Press & partnerships</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>🐛 Bug reports</span>
                </div>
              </div>
              
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-full w-full" onClick={() => window.open('mailto:team@tidytidesco.com', '_blank')}>
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup */}
        
      </div>
    </section>;
};
export default ContactSection;