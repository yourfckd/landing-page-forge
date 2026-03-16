import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const LeadCaptureSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll send you the guide.");
    setEmail("");
  };

  return (
    <section className="py-28 sm:py-36 px-6 gradient-section noise-overlay">
      <div className="max-w-xl mx-auto text-center scroll-fade">
        <h2 className="text-section mb-5">
          Not Ready To <span className="text-gradient">Call?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-3">
          Get the Life Reset Starter Guide — a short PDF that helps you:
        </p>
        <ul className="text-muted-foreground text-left max-w-sm mx-auto space-y-3 mb-10 mt-8">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-0.5 text-lg">•</span>
            <span className="text-base">Diagnose what's actually wrong</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-0.5 text-lg">•</span>
            <span className="text-base">Separate emotions from strategy</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-0.5 text-lg">•</span>
            <span className="text-base">Build a 30-day reset plan</span>
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-card border-border h-14 text-foreground placeholder:text-muted-foreground rounded-full px-6 text-base"
          />
          <Button variant="hero" size="lg" type="submit" className="h-14 px-8">
            <Mail className="!size-4" />
            Send Me The Guide
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
