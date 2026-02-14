import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const LeadCaptureSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert("Thanks! We'll send you the guide.");
    setEmail("");
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Not Ready To <span className="text-gradient">Call?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-2">
          Get the Life Reset Starter Guide — a short PDF that helps you:
        </p>
        <ul className="text-muted-foreground text-left max-w-sm mx-auto space-y-2 mb-8 mt-6">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            Diagnose what's actually wrong
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            Separate emotions from strategy
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            Build a 30-day reset plan
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-card border-border h-12 text-foreground placeholder:text-muted-foreground"
          />
          <Button variant="hero" size="lg" type="submit" className="h-12">
            <Mail className="!size-4" />
            Send Me The Guide
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
