import { Button } from '@/components/ui/button';
import { ChevronDown, Play } from 'lucide-react';
import heroImage from '@/assets/hero-luxury-car.jpg';
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxury Car Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80 mx-0 py-[2px]" />
      </div>

      {/* Background Text - Watermark Style */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-display font-bold text-accent/15 select-none tracking-[0.3em] transform rotate-[-8deg] translate-y-8">
          MONEY TALKS
        </h2>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-8 py-[50px]">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Experience the
            <span className="block text-accent luxury-gradient bg-clip-text text-transparent">
              Art of Driving
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Discover unparalleled luxury in every detail</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold gold-shadow transition-all duration-300 hover:scale-105">
              Explore Collection
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-4 text-lg flex items-center gap-2 glass-effect">
              <Play className="w-5 h-5" />
              Watch Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Premium Brands</div>
            </div>
            <div className="text-center animate-slide-up" style={{
            animationDelay: '0.1s'
          }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Luxury Vehicles</div>
            </div>
            <div className="text-center animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center animate-slide-up" style={{
            animationDelay: '0.3s'
          }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-accent" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float hidden lg:block" style={{
      animationDelay: '1s'
    }} />
    </section>;
};
export default HeroSection;