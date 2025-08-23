import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, Star, Users } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Industry Excellence',
      description: 'Recognized leader in luxury automotive retail with multiple industry awards.'
    },
    {
      icon: Shield,
      title: 'Certified Authenticity',
      description: 'Every vehicle undergoes rigorous certification ensuring authenticity and quality.'
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'White-glove service experience tailored to discerning clientele.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Passionate automotive specialists with decades of combined experience.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Our Legacy
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Crafting Automotive 
              <span className="block text-accent">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over a decade, LuxeDrive has been the premier destination for automotive enthusiasts 
              seeking the extraordinary. We don't just sell cars; we curate experiences that celebrate 
              the artistry, engineering, and heritage of the world's most prestigious marques.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment extends beyond the transaction. We build lasting relationships with 
              collectors, enthusiasts, and connoisseurs who share our passion for automotive excellence. 
              Every vehicle in our collection tells a story of innovation, craftsmanship, and the 
              relentless pursuit of perfection.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years of Excellence</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Satisfied Clients</div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <Card 
                key={index} 
                className="group bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl lg:text-3xl font-display font-bold mb-8">
            Our <span className="text-accent">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-xl font-semibold mb-3 text-accent">Authenticity</h4>
              <p className="text-muted-foreground">
                Every vehicle is verified and authenticated, ensuring you receive genuine luxury automobiles.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-xl font-semibold mb-3 text-accent">Excellence</h4>
              <p className="text-muted-foreground">
                We maintain the highest standards in everything we do, from curation to customer service.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h4 className="text-xl font-semibold mb-3 text-accent">Trust</h4>
              <p className="text-muted-foreground">
                Building lasting relationships through transparency, integrity, and unwavering commitment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;