import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Get in Touch
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Begin Your <span className="text-accent">Journey</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience automotive excellence? Our team of luxury vehicle specialists 
            is here to guide you through your next acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50 animate-slide-up">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Showroom Location</h3>
                      <p className="text-muted-foreground">
                        123 Luxury Boulevard<br />
                        Beverly Hills, CA 90210<br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone & WhatsApp</h3>
                      <p className="text-muted-foreground">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email Address</h3>
                      <p className="text-muted-foreground">
                        hello@luxedrive.com<br />
                        sales@luxedrive.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 7:00 PM<br />
                        Saturday: 10:00 AM - 6:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-border/50 luxury-shadow animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold mb-6">
                  Schedule a <span className="text-accent">Consultation</span>
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-background/50 border-border focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-background/50 border-border focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="bg-background/50 border-border focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-background/50 border-border focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      Vehicle of Interest
                    </label>
                    <Input
                      id="interest"
                      placeholder="e.g., Ferrari 812 Superfast, Rolls-Royce Phantom"
                      className="bg-background/50 border-border focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, preferred viewing time, or any specific questions..."
                      rows={4}
                      className="bg-background/50 border-border focus:border-accent resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground py-3"
                    >
                      Schedule Call
                    </Button>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Our team typically responds within 2 hours during business hours. 
                    For urgent inquiries, please call us directly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;