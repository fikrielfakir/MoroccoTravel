import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Mountain } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Mountain className="text-primary text-2xl" />
            <span className="text-xl font-bold serif text-primary">Morocco Cultural Association</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-home">
              Home
            </button>
            <button onClick={() => scrollToSection("activities")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-activities">
              Activities
            </button>
            <button onClick={() => scrollToSection("destinations")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-destinations">
              Destinations
            </button>
            <button onClick={() => scrollToSection("events")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-events">
              Events
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-about">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors" data-testid="nav-contact">
              Contact
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-join">
              Join Us
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary"
              data-testid="button-mobile-menu"
            >
              <Menu className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection("home")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left" data-testid="mobile-nav-home">
              Home
            </button>
            <button onClick={() => scrollToSection("activities")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left" data-testid="mobile-nav-activities">
              Activities
            </button>
            <button onClick={() => scrollToSection("destinations")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left" data-testid="mobile-nav-destinations">
              Destinations
            </button>
            <button onClick={() => scrollToSection("events")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left" data-testid="mobile-nav-events">
              Events
            </button>
            <button onClick={() => scrollToSection("about")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left" data-testid="mobile-nav-about">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left" data-testid="mobile-nav-contact">
              Contact
            </button>
            <Button className="w-full mt-4 bg-primary text-primary-foreground" data-testid="mobile-button-join">
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
