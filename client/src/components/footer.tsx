import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logoUrl from "@assets/creative-initial-letter-t-air-travel-logo-design-template-eps10-vector-removebg-preview_1757068670372.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoUrl} 
                alt="Morocco Cultural Association" 
                className="h-8 w-auto"
                data-testid="footer-logo"
              />
              <span className="text-xl font-bold serif text-primary" data-testid="text-footer-logo">
                Morocco Cultural Association
              </span>
            </div>
            <p className="text-background/80 mb-4 max-w-md" data-testid="text-footer-description">
              Connecting cultures through authentic Moroccan experiences. Join us in exploring the beauty and richness of Morocco's heritage.
            </p>
            <div className="flex space-x-4">
              <button className="text-background/60 hover:text-primary transition-colors" data-testid="link-footer-facebook">
                <Facebook className="text-lg" />
              </button>
              <button className="text-background/60 hover:text-primary transition-colors" data-testid="link-footer-instagram">
                <Instagram className="text-lg" />
              </button>
              <button className="text-background/60 hover:text-primary transition-colors" data-testid="link-footer-twitter">
                <Twitter className="text-lg" />
              </button>
              <button className="text-background/60 hover:text-primary transition-colors" data-testid="link-footer-youtube">
                <Youtube className="text-lg" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-background/80 hover:text-primary transition-colors"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("activities")}
                  className="text-background/80 hover:text-primary transition-colors"
                  data-testid="link-footer-activities"
                >
                  Activities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("destinations")}
                  className="text-background/80 hover:text-primary transition-colors"
                  data-testid="link-footer-destinations"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("events")}
                  className="text-background/80 hover:text-primary transition-colors"
                  data-testid="link-footer-events"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-background/80 hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-background/80 hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li data-testid="text-service-cultural-tours">Cultural Tours</li>
              <li data-testid="text-service-desert-expeditions">Desert Expeditions</li>
              <li data-testid="text-service-language-exchange">Language Exchange</li>
              <li data-testid="text-service-cooking-classes">Cooking Classes</li>
              <li data-testid="text-service-art-workshops">Art Workshops</li>
              <li data-testid="text-service-student-programs">Student Programs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm" data-testid="text-footer-copyright">
            © 2023 Morocco Cultural Association. All rights reserved. | 
            <button className="hover:text-primary transition-colors ml-1" data-testid="link-privacy">
              Privacy Policy
            </button> | 
            <button className="hover:text-primary transition-colors ml-1" data-testid="link-terms">
              Terms of Service
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
