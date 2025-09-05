export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl relative z-10">
        <div className="modern-card p-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold serif text-gradient mb-8" data-testid="text-mission-title">
            Bridging Cultures Through Experience
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto" data-testid="text-mission-description">
            Our association connects students and cultural enthusiasts with the rich heritage of Morocco. Through carefully curated trips, educational activities, and cultural exchanges, we create lasting memories while fostering understanding between diverse communities.
          </p>
        </div>
      </div>
    </section>
  );
}
