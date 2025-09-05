import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logoUrl from "@assets/creative-initial-letter-t-air-travel-logo-design-template-eps10-vector-removebg-preview_1757068670372.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsScrolled(scrollPosition > heroHeight * 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-primary backdrop-blur-md border-b border-primary/20" 
        : "bg-transparent border-b border-white/10"
    }`}>
      <div className="mx-auto px-[124px]">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left side navigation - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6 flex-1">
            <button onClick={() => scrollToSection("home")} className={`${isScrolled ? 'text-white hover:text-blue-200' : 'text-white hover:text-blue-200'} transition-colors font-medium`} data-testid="nav-home">
              Home
            </button>
            <button onClick={() => scrollToSection("activities")} className={`${isScrolled ? 'text-white hover:text-blue-200' : 'text-white hover:text-blue-200'} transition-colors font-medium`} data-testid="nav-activities">
              Activities
            </button>
            <button onClick={() => scrollToSection("destinations")} className={`${isScrolled ? 'text-white hover:text-blue-200' : 'text-white hover:text-blue-200'} transition-colors font-medium`} data-testid="nav-destinations">
              Destinations
            </button>
          </div>
          
          {/* Centered Logo */}
          <div className="flex items-center justify-center flex-1 md:flex-initial">
            <img 
              src={logoUrl} 
              alt="Morocco Cultural Association" 
              className="h-10 w-auto md:h-12"
              data-testid="logo"
            />
          </div>
          
          {/* Right side navigation - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            <button onClick={() => scrollToSection("events")} className={`${isScrolled ? 'text-white hover:text-blue-200' : 'text-white hover:text-blue-200'} transition-colors font-medium`} data-testid="nav-events">
              Events
            </button>
            <button onClick={() => scrollToSection("about")} className={`${isScrolled ? 'text-white hover:text-blue-200' : 'text-white hover:text-blue-200'} transition-colors font-medium`} data-testid="nav-about">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className={`${isScrolled ? 'text-white hover:text-blue-200' : 'text-white hover:text-blue-200'} transition-colors font-medium`} data-testid="nav-contact">
              Contact
            </button>
            <Button className={`${isScrolled ? 'bg-white text-primary hover:bg-blue-50' : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'} rounded-xl px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300`} data-testid="button-join">
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? 'text-white hover:text-blue-200' : 'text-white hover:text-blue-200'} transition-colors`}
              data-testid="button-mobile-menu"
            >
              <Menu className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-primary/95' : 'bg-black/90'} backdrop-blur-md border-b border-white/20`}>
          <div className="px-[124px] pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection("home")} className="block px-3 py-2 text-white hover:text-blue-200 w-full text-left font-medium" data-testid="mobile-nav-home">
              Home
            </button>
            <button onClick={() => scrollToSection("activities")} className="block px-3 py-2 text-white hover:text-blue-200 w-full text-left font-medium" data-testid="mobile-nav-activities">
              Activities
            </button>
            <button onClick={() => scrollToSection("destinations")} className="block px-3 py-2 text-white hover:text-blue-200 w-full text-left font-medium" data-testid="mobile-nav-destinations">
              Destinations
            </button>
            <button onClick={() => scrollToSection("events")} className="block px-3 py-2 text-white hover:text-blue-200 w-full text-left font-medium" data-testid="mobile-nav-events">
              Events
            </button>
            <button onClick={() => scrollToSection("about")} className="block px-3 py-2 text-white hover:text-blue-200 w-full text-left font-medium" data-testid="mobile-nav-about">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="block px-3 py-2 text-white hover:text-blue-200 w-full text-left font-medium" data-testid="mobile-nav-contact">
              Contact
            </button>
            <Button className="w-full mt-4 bg-white text-primary hover:bg-blue-50 rounded-xl" data-testid="mobile-button-join">
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
