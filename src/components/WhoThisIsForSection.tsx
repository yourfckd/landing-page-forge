const WhoThisIsForSection = () => {
  const traits = [
    "Feel lost but high-functioning",
    "Look fine on the outside",
    "Feel restless on the inside",
    "Know they're capable of more",
    "Are quietly unhappy",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Who This Is <span className="text-gradient">For</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          For high-functioning humans having a quiet crisis.
        </p>

        <div className="space-y-3">
          {traits.map((trait, i) => (
            <div
              key={trait}
              className="bg-card border border-border rounded-lg px-6 py-4 text-foreground/90 text-lg transition-colors hover:border-primary/40"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              People who {trait.toLowerCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
