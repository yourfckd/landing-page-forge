const WhoThisIsForSection = () => {
  const traits = [
    "Feel lost but high-functioning",
    "Look fine on the outside",
    "Feel restless on the inside",
    "Know they're capable of more",
    "Are quietly unhappy",
  ];

  return (
    <section className="py-28 sm:py-36 px-6 gradient-section noise-overlay">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-section mb-5 scroll-fade">
          Who This Is <span className="text-gradient">For</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-16 scroll-fade">
          For high-functioning humans having a quiet crisis.
        </p>

        <div className="space-y-4">
          {traits.map((trait, i) => (
            <div
              key={trait}
              className="card-premium text-left scroll-fade"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <p className="text-foreground/90 text-lg">
                People who {trait.toLowerCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
