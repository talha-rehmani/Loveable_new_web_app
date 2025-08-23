import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, Zap } from 'lucide-react';
import ferrariImage from '@/assets/ferrari-812.jpg';
import bentleyImage from '@/assets/bentley-continental.jpg';
import lamborghiniImage from '@/assets/lamborghini-huracan.jpg';

const FeaturedCars = () => {
  const featuredCars = [
    {
      id: 1,
      name: 'Ferrari 812 Superfast',
      brand: 'Ferrari',
      price: '$335,000',
      image: ferrariImage,
      specs: {
        power: '789 HP',
        speed: '211 mph',
        acceleration: '2.9s'
      },
      status: 'Available',
      featured: true
    },
    {
      id: 2,
      name: 'Bentley Continental GT',
      brand: 'Bentley',
      price: '$230,000',
      image: bentleyImage,
      specs: {
        power: '626 HP',
        speed: '208 mph',
        acceleration: '3.7s'
      },
      status: 'Available',
      featured: false
    },
    {
      id: 3,
      name: 'Lamborghini Huracán',
      brand: 'Lamborghini',
      price: '$248,000',
      image: lamborghiniImage,
      specs: {
        power: '631 HP',
        speed: '202 mph',
        acceleration: '3.2s'
      },
      status: 'Reserved',
      featured: true
    }
  ];

  return (
    <section id="collection" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Premium Collection
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="text-accent">Automobiles</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked selection of the world's most coveted luxury vehicles, 
            each representing the pinnacle of automotive excellence and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <Card 
              key={car.id} 
              className={`group overflow-hidden bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-500 luxury-shadow hover:luxury-shadow animate-slide-up ${
                car.featured ? 'lg:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      car.status === 'Available' 
                        ? 'bg-green-500/20 text-green-400 border-green-400/30' 
                        : 'bg-orange-500/20 text-orange-400 border-orange-400/30'
                    }`}
                  >
                    {car.status}
                  </Badge>

                  {/* Featured Badge */}
                  {car.featured && (
                    <Badge className="absolute top-4 right-4 bg-accent/20 text-accent border-accent/30">
                      Featured
                    </Badge>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button size="sm" variant="secondary" className="flex-1 glass-effect">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="glass-effect border-accent/30 text-accent">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">{car.brand}</span>
                    <span className="text-2xl font-bold text-accent">{car.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                    {car.name}
                  </h3>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Zap className="w-4 h-4 text-accent" />
                      </div>
                      <div className="text-sm font-semibold">{car.specs.power}</div>
                      <div className="text-xs text-muted-foreground">Power</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold">{car.specs.speed}</div>
                      <div className="text-xs text-muted-foreground">Top Speed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold">{car.specs.acceleration}</div>
                      <div className="text-xs text-muted-foreground">0-60 mph</div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
                    disabled={car.status === 'Reserved'}
                  >
                    {car.status === 'Available' ? 'Book Test Drive' : 'Join Waitlist'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
          >
            View Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;