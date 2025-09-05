import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background with animation */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-30"></div>
      
      {/* Hero background image with modern overlay */}
      <div 
        style={{
          backgroundImage: "url('https://pixabay.com/get/g974fd60cc577be0eec7c9aea47536513f979baff9d79157dcd92f4ceb2ad60d9c99978f72aa6c1ac6bd1182add170096ab003de72158f82349cb06040c3fbdef_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
        className="absolute inset-0 mix-blend-overlay opacity-40"
      ></div>
      
      {/* Modern content container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
            Cultural Association
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-8 serif leading-tight" data-testid="text-hero-title">
          Discover
          <br />
          <span className="text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Morocco</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
          Immerse yourself in authentic Moroccan culture through curated experiences, 
          connecting international students with Morocco's rich heritage and traditions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={() => scrollToSection("activities")}
            className="bg-white text-primary hover:bg-white/90 px-10 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            data-testid="button-explore-activities"
          >
            Explore Experiences
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            data-testid="button-join-community"
          >
            Join Community
          </Button>
        </div>
      </div>
      
      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
