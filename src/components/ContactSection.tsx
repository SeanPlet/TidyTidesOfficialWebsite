import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, MessageCircle, Users, Bell, Phone } from 'lucide-react';
const ContactSection = () => {
  return <section className="py-24 relative">
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
          <Card className="underwater-glass border-border/30 hover:border-primary/50 transition-all duration-300 flex flex-col">
            <CardContent className="p-8 text-center flex flex-col flex-1">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0001 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">
                Join Our Discord
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed flex-1">
                Connect with fellow players, share feedback, participate in beta testing, 
                and get exclusive sneak peeks of upcoming features.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Join 10+ community members</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Bell className="h-4 w-4" />
                  <span>Get notified of updates instantly</span>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full w-full mt-auto" onClick={() => window.open('https://discord.gg/tidytidesco', '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Join Discord Server
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="underwater-glass border-border/30 hover:border-accent/50 transition-all duration-300 flex flex-col">
            <CardContent className="p-8 text-center flex flex-col flex-1">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-accent mb-4">
                Email the Team
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed flex-1">
                Have questions, suggestions, or business inquiries? Reach out to us directly 
                and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>General inquiries & support</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MessageCircle className="h-4 w-4" />
                  <span>Tell us a fin-tastic pun</span>
                </div>
              </div>
              
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-full w-full mt-auto" onClick={() => window.open('mailto:team@tidytidesco.com', '_blank')}>
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