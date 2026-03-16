import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg tracking-tight text-foreground">
          YourFucked<span className="text-primary">.com</span>
        </a>

        <Button variant="hero" size="sm" className="text-sm px-6" asChild>
          <a href="tel:3234993825">
            <Phone className="!size-3.5" />
            Call Now
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
