import { useQuery } from "@tanstack/react-query";
import type { Destination } from "@shared/schema";

export default function FeaturedDestinations() {
  const { data: destinations, isLoading } = useQuery<Destination[]>({
    queryKey: ["/api/destinations"],
  });

  if (isLoading) {
    return (
      <section id="destinations" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold serif text-primary mb-4">Featured Destinations</h2>
            <div className="h-6 bg-muted animate-pulse rounded mx-auto max-w-2xl"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-80 bg-muted animate-pulse rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const featured = destinations?.slice(0, 4) || [];
  const additional = destinations?.slice(4) || [];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold serif text-primary mb-4" data-testid="text-destinations-title">
            Featured Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-destinations-description">
            Explore Morocco's most captivating locations through our guided cultural experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featured.map((destination) => (
            <div 
              key={destination.id} 
              className="relative h-80 rounded-2xl overflow-hidden card-hover group cursor-pointer shadow-lg"
              data-testid={`card-destination-${destination.id}`}
            >
              <img 
                src={destination.imageUrl} 
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold serif mb-1" data-testid={`text-destination-name-${destination.id}`}>
                  {destination.name}
                </h3>
                <p className="text-sm opacity-90" data-testid={`text-destination-location-${destination.id}`}>
                  {destination.location}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold">
                {destination.category}
              </div>
            </div>
          ))}
        </div>

        {additional.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additional.map((destination) => (
              <div 
                key={destination.id} 
                className="relative h-64 rounded-xl overflow-hidden card-hover group cursor-pointer"
                data-testid={`card-destination-${destination.id}`}
              >
                <img 
                  src={destination.imageUrl} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold serif mb-1" data-testid={`text-destination-name-${destination.id}`}>
                    {destination.name}
                  </h3>
                  <p className="text-sm opacity-90" data-testid={`text-destination-location-${destination.id}`}>
                    {destination.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
