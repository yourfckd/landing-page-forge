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
    <section className="py-28 sm:py-36 px-6 gradient-section-alt noise-overlay">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-section mb-20 text-center scroll-fade">
          What This <span className="text-gradient">Is</span> (And Isn't)
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-premium border-primary/20 scroll-fade">
            <h3 className="text-primary font-display font-semibold text-xl mb-8">This is:</h3>
            <ul className="space-y-5">
              {thisIs.map((item) => (
                <li key={item} className="flex items-center gap-4 text-foreground/90 text-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="size-4 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-premium scroll-fade" style={{ transitionDelay: "0.1s" }}>
            <h3 className="text-muted-foreground font-display font-semibold text-xl mb-8">This is not:</h3>
            <ul className="space-y-5">
              {thisIsNot.map((item) => (
                <li key={item} className="flex items-center gap-4 text-muted-foreground text-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <X className="size-4 text-muted-foreground/50" />
                  </div>
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
