export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold serif text-primary mb-6" data-testid="text-about-title">
              About Our Association
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description-1">
              Founded in 2015, our Morocco Cultural Association has been bridging cultures and creating meaningful connections between international students and Morocco's rich cultural heritage.
            </p>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-about-description-2">
              We believe that true understanding comes through authentic experiences. Our carefully curated programs combine adventure, education, and cultural immersion to create transformative journeys that last a lifetime.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold serif text-primary mb-2" data-testid="text-stat-members">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold serif text-primary mb-2" data-testid="text-stat-trips">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Successful Trips</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold serif text-primary mb-2" data-testid="text-stat-years">
                  8
                </div>
                <div className="text-sm text-muted-foreground">Years Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold serif text-primary mb-2" data-testid="text-stat-partners">
                  25+
                </div>
                <div className="text-sm text-muted-foreground">Local Partners</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Association group photo at historic Moroccan site" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-about-group"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-xl pattern-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
