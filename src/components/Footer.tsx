import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Youtube, LinkedinIcon as LinkedIn, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Luxury Car Sales', href: '#' },
    { name: 'Test Drive Booking', href: '#' },
    { name: 'Vehicle Financing', href: '#' },
    { name: 'Trade-In Services', href: '#' },
    { name: 'Maintenance & Care', href: '#' }
  ];

  const brands = [
    { name: 'Rolls-Royce', href: '#' },
    { name: 'Bentley', href: '#' },
    { name: 'Ferrari', href: '#' },
    { name: 'Lamborghini', href: '#' },
    { name: 'McLaren', href: '#' },
    { name: 'Aston Martin', href: '#' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            Stay Connected with <span className="text-accent">LuxeDrive</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive events, and premium automotive insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-background/50 border-border focus:border-accent"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-6">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold mb-4">
                Luxe<span className="text-accent">Drive</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your premier destination for the world's most prestigious automobiles. 
                We curate exceptional vehicles for discerning connoisseurs who appreciate 
                the finest in automotive craftsmanship and engineering excellence.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="p-2 border-border hover:border-accent hover:bg-accent/10">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2 border-border hover:border-accent hover:bg-accent/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2 border-border hover:border-accent hover:bg-accent/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2 border-border hover:border-accent hover:bg-accent/10">
                  <Youtube className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2 border-border hover:border-accent hover:bg-accent/10">
                  <LinkedIn className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-semibold mb-4">Premium Brands</h3>
              <ul className="space-y-2">
                {brands.map((brand) => (
                  <li key={brand.name}>
                    <a
                      href={brand.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {brand.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} LuxeDrive. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;