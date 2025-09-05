import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MissionSection from "@/components/mission-section";
import FeaturedDestinations from "@/components/featured-destinations";
import ActivitiesSection from "@/components/activities-section";
import PhotoGallery from "@/components/photo-gallery";
import EventsSection from "@/components/events-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <FeaturedDestinations />
      <ActivitiesSection />
      <PhotoGallery />
      <EventsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
