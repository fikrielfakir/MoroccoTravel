import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center pattern-overlay">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div 
        style={{
          backgroundImage: "url('https://pixabay.com/get/g974fd60cc577be0eec7c9aea47536513f979baff9d79157dcd92f4ceb2ad60d9c99978f72aa6c1ac6bd1182add170096ab003de72158f82349cb06040c3fbdef_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="absolute inset-0 mix-blend-overlay opacity-60"
      ></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 serif" data-testid="text-hero-title">
          WE DREAM <span className="text-accent">BIG</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-description">
          Discover the magic of Morocco through authentic cultural experiences, breathtaking adventures, and unforgettable journeys
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection("activities")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            data-testid="button-explore-activities"
          >
            Explore Activities
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
            data-testid="button-join-community"
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
}
