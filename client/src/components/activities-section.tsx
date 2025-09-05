import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Activity } from "@shared/schema";

export default function ActivitiesSection() {
  const { data: activities, isLoading } = useQuery<Activity[]>({
    queryKey: ["/api/activities"],
  });

  if (isLoading) {
    return (
      <section id="activities" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold serif text-primary mb-4">Our Activities</h2>
            <div className="h-6 bg-muted animate-pulse rounded mx-auto max-w-2xl"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-background rounded-xl p-6 space-y-4">
                <div className="w-16 h-16 bg-muted animate-pulse rounded-xl"></div>
                <div className="h-6 bg-muted animate-pulse rounded"></div>
                <div className="h-20 bg-muted animate-pulse rounded"></div>
                <div className="flex justify-between">
                  <div className="h-4 w-16 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 w-20 bg-muted animate-pulse rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const getIconColorClass = (category: string) => {
    switch (category) {
      case "Adventure":
        return "bg-primary/10 text-primary";
      case "Cultural":
        return "bg-secondary/10 text-secondary";
      case "Culinary":
        return "bg-accent/10 text-accent";
      case "Educational":
        return "bg-secondary/10 text-secondary";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section id="activities" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold serif text-primary mb-4" data-testid="text-activities-title">
            Our Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-activities-description">
            Immerse yourself in Moroccan culture through our diverse range of educational and recreational activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities?.map((activity) => (
            <div 
              key={activity.id} 
              className="modern-card p-8 card-hover group"
              data-testid={`card-activity-${activity.id}`}
            >
              <div className={`w-16 h-16 ${getIconColorClass(activity.category)} rounded-xl flex items-center justify-center mb-4`}>
                <i className={`${activity.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold serif text-foreground mb-3" data-testid={`text-activity-title-${activity.id}`}>
                {activity.title}
              </h3>
              <p className="text-muted-foreground mb-4" data-testid={`text-activity-description-${activity.id}`}>
                {activity.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-accent font-semibold" data-testid={`text-activity-duration-${activity.id}`}>
                  {activity.duration}
                </span>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary/80 font-medium p-0"
                  data-testid={`button-learn-more-${activity.id}`}
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
