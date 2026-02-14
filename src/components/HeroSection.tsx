import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 section-fade">
          The Wake-Up Call Hotline
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 section-fade section-fade-delay-1">
          Feel Like Everything's{" "}
          <span className="text-gradient">Falling Apart?</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-4 section-fade section-fade-delay-2">
          Career. Money. Relationships. Motivation.
        </p>

        <p className="text-lg text-secondary-foreground/80 mb-10 section-fade section-fade-delay-2">
          Take a breath.<br />
          You're not broken. You're just at a turning point.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center section-fade section-fade-delay-3">
          <Button variant="hero" size="lg" className="text-lg px-10 py-6" asChild>
            <a href="tel:3234993825">
              <Phone className="!size-5" />
              Call 323-499-FUCK
            </a>
          </Button>
          <p className="text-muted-foreground text-sm">
            5-minute clarity call. No judgment. No sales pressure.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
