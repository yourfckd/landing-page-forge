import { Check, X } from "lucide-react";

const WhatThisIsSection = () => {
  const thisIs = [
    "Real conversation",
    "Clear thinking",
    "Strategic life reset",
  ];

  const thisIsNot = [
    "Therapy",
    "Motivational yelling",
    '"Quit your job tomorrow"',
    "Hustle culture nonsense",
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">
          What This <span className="text-gradient">Is</span> (And Isn't)
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl p-8 border border-primary/20">
            <h3 className="text-primary font-display font-semibold text-xl mb-6">This is:</h3>
            <ul className="space-y-4">
              {thisIs.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/90">
                  <Check className="size-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary rounded-xl p-8 border border-border">
            <h3 className="text-muted-foreground font-display font-semibold text-xl mb-6">This is not:</h3>
            <ul className="space-y-4">
              {thisIsNot.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <X className="size-5 text-muted-foreground/50 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatThisIsSection;
