import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="relative py-28 sm:py-36 px-6 overflow-hidden noise-overlay">
      {/* Full-width gradient background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, hsl(228 14% 5%) 0%, hsl(228 14% 9%) 40%, hsl(228 14% 7%) 100%)"
      }} />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 40% at 50% 60%, hsl(38 92% 56% / 0.05) 0%, transparent 70%)"
      }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center scroll-fade">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          The Reset Line
        </p>
        <h3 className="text-section mb-8">
          Clarity For When Life Feels <span className="text-gradient">Off</span>.
        </h3>

        <Button variant="heroOutline" size="lg" className="text-lg px-10 py-7 mb-10" asChild>
          <a href="tel:3234993825">
            <Phone className="!size-5" />
            323-499-FUCK
          </a>
        </Button>

        <p className="text-text-dim text-sm">
          © {new Date().getFullYear()} YourFucked.com — For High-Functioning Humans Having a Quiet Crisis.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
