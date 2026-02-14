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
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">
          What Happens When{" "}
          <span className="text-gradient">You Call</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="bg-secondary rounded-xl p-8 h-full border border-border hover:border-primary/30 transition-colors">
                <span className="text-primary font-display text-4xl font-bold opacity-30">{s.step}</span>
                <p className="text-foreground text-lg mt-4 font-medium">{s.title}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-5 size-5 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-6">Sometimes that's:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {outcomes.map((item) => (
              <span
                key={item}
                className="bg-secondary border border-border rounded-full px-5 py-2 text-foreground/80 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-primary font-display font-semibold text-xl mt-8">Always clarity.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensSection;
