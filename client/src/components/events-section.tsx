import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import type { Event } from "@shared/schema";

export default function EventsSection() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  if (isLoading) {
    return (
      <section id="events" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold serif text-primary mb-4">Upcoming Events</h2>
            <div className="h-6 bg-muted animate-pulse rounded mx-auto max-w-2xl"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-background rounded-xl p-6 border border-border space-y-4">
                <div className="flex space-x-4">
                  <div className="w-20 h-20 bg-muted animate-pulse rounded-lg"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-6 bg-muted animate-pulse rounded"></div>
                    <div className="h-16 bg-muted animate-pulse rounded"></div>
                    <div className="flex justify-between">
                      <div className="h-4 w-24 bg-muted animate-pulse rounded"></div>
                      <div className="h-8 w-20 bg-muted animate-pulse rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const formatDate = (date: Date) => {
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en', { month: 'short' }).toUpperCase()
    };
  };

  const getEventColorClass = (category: string) => {
    switch (category) {
      case "Adventure":
        return "bg-primary text-primary-foreground";
      case "Cultural":
        return "bg-secondary text-secondary-foreground";
      case "Culinary":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <section id="events" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold serif text-primary mb-4" data-testid="text-events-title">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-events-description">
            Join us for our scheduled activities and cultural events throughout the year
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events?.map((event) => {
            const { day, month } = formatDate(new Date(event.date));
            
            return (
              <div 
                key={event.id} 
                className="modern-card p-8 card-hover group"
                data-testid={`card-event-${event.id}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${getEventColorClass(event.category)} rounded-lg p-3 text-center min-w-[80px]`}>
                    <div className="text-2xl font-bold serif" data-testid={`text-event-day-${event.id}`}>
                      {day}
                    </div>
                    <div className="text-sm" data-testid={`text-event-month-${event.id}`}>
                      {month}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold serif text-foreground mb-2" data-testid={`text-event-title-${event.id}`}>
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-3" data-testid={`text-event-description-${event.id}`}>
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center" data-testid={`text-event-duration-${event.id}`}>
                          <Clock className="mr-1 w-4 h-4" />
                          {event.duration}
                        </span>
                        <span className="flex items-center" data-testid={`text-event-spots-${event.id}`}>
                          <Users className="mr-1 w-4 h-4" />
                          {event.spotsLeft} spots left
                        </span>
                      </div>
                      <Button 
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        data-testid={`button-register-${event.id}`}
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
