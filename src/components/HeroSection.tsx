import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 70% 50% at 50% 40%, hsl(38 92% 56% / 0.06) 0%, transparent 70%)"
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-40" style={{
        background: "linear-gradient(to top, hsl(228 14% 5%), transparent)"
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <p className="text-muted-foreground text-sm tracking-[0.35em] uppercase mb-8 section-fade font-medium">
          The Wake-Up Call Hotline
        </p>

        <h1 className="text-hero mb-8 section-fade section-fade-delay-1">
          Feel Like Everything's{" "}
          <span className="text-gradient">Falling Apart?</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-5 section-fade section-fade-delay-2 max-w-2xl mx-auto leading-relaxed">
          Career. Money. Relationships. Motivation.
        </p>

        <p className="text-lg text-secondary-foreground/70 mb-14 section-fade section-fade-delay-2 max-w-xl mx-auto leading-relaxed">
          Take a breath.<br />
          You're not broken. You're just at a turning point.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center section-fade section-fade-delay-3">
          <Button variant="hero" size="lg" className="text-lg px-12 py-7" asChild>
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

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce section-fade section-fade-delay-4">
        <div className="w-7 h-11 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
