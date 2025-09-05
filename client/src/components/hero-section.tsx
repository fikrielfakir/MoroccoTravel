import { Button } from "@/components/ui/button";
import logoUrl from "@assets/creative-initial-letter-t-air-travel-logo-design-template-eps10-vector-removebg-preview_1757068670372.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4" 
          type="video/mp4" 
        />
        <source 
          src="https://videos.pexels.com/video-files/5532351/5532351-hd_1920_1080_30fps.mp4" 
          type="video/mp4" 
        />
        {/* Fallback image if video fails to load */}
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="absolute inset-0 w-full h-full"
        ></div>
      </video>
      
      {/* Dark blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/50"></div>
      
      {/* Content container */}
      <div className="relative z-10 text-center px-[124px] max-w-none">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            <img 
              src={logoUrl} 
              alt="Morocco Cultural Association" 
              className="h-12 w-auto"
            />
          </div>
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4 serif tracking-wider hero-text-shadow" data-testid="text-hero-title">
          MOROCCO
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-12 font-light tracking-wide serif hero-text-shadow" data-testid="text-hero-subtitle">
          Cultural Heritage Experience
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={() => scrollToSection("destinations")}
            className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg font-semibold rounded-none uppercase tracking-wider shadow-2xl transition-all duration-300 transform hover:scale-105"
            data-testid="button-discover"
          >
            DISCOVER
          </Button>
        </div>
      </div>
      
      {/* Decorative Moroccan pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-primary via-primary/95 to-primary overflow-hidden border-t-2 border-white/20">
        <div className="h-full w-full moroccan-border opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-repeat-x opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='20' viewBox='0 0 80 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' fill-rule='evenodd'%3E%3Cpath d='M20 10 L10 5 L20 0 L30 5 Z M60 10 L50 5 L60 0 L70 5 Z M40 15 L30 10 L40 5 L50 10 Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 20px'
          }}></div>
        </div>
      </div>
    </section>
  );
}
