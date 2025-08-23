import LuxuryNavbar from '@/components/LuxuryNavbar';
import HeroSection from '@/components/HeroSection';
import FeaturedCars from '@/components/FeaturedCars';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <LuxuryNavbar />
      <HeroSection />
      <FeaturedCars />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
