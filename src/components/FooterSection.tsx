import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="py-16 px-6 bg-card border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
          The Reset Line
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">
          Clarity For When Life Feels <span className="text-gradient">Off</span>.
        </h3>

        <Button variant="heroOutline" size="lg" className="text-lg px-8 py-6 mb-8" asChild>
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
