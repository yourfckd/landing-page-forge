import { ArrowRight } from "lucide-react";

const WhatHappensSection = () => {
  const steps = [
    { step: "01", title: "You explain what feels off" },
    { step: "02", title: "We identify the real root issue" },
    { step: "03", title: "You leave with one actionable next step" },
  ];

  const outcomes = [
    "Boundaries",
    "A career pivot plan",
    "A money strategy",
    "A mindset shift",
    "A tough truth",
  ];

  return (
    <section className="py-28 sm:py-36 px-6 gradient-section-alt noise-overlay">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-section mb-20 text-center scroll-fade">
          What Happens When{" "}
          <span className="text-gradient">You Call</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {steps.map((s, i) => (
            <div key={s.step} className="relative scroll-fade" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="card-premium h-full">
                <span className="text-primary font-display text-5xl font-bold opacity-20">{s.step}</span>
                <p className="text-foreground text-lg mt-5 font-medium leading-snug">{s.title}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-5 size-5 text-muted-foreground/40" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center scroll-fade">
          <p className="text-muted-foreground text-lg mb-8">Sometimes that's:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {outcomes.map((item) => (
              <span
                key={item}
                className="bg-secondary border border-border rounded-full px-6 py-2.5 text-foreground/80 text-sm font-medium transition-all duration-300 hover:border-primary/30 hover:bg-secondary/80"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-primary font-display font-semibold text-2xl mt-10">Always clarity.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensSection;
