const ParodyRevealSection = () => {
  const hotlines = [
    '"I can\'t keep doing this" hotline',
    '"Something needs to change" hotline',
    '"I feel stuck but I don\'t know why" hotline',
  ];

  const weHelp = [
    "What's actually wrong",
    "What's actually in your control",
    "What your next small move should be",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
          Relax. It's Not{" "}
          <span className="text-gradient">That Kind</span> of Hotline.
        </h2>

        <p className="text-muted-foreground text-lg text-center mb-12">It's the:</p>

        <div className="space-y-4 mb-16">
          {hotlines.map((item) => (
            <div
              key={item}
              className="bg-card border border-border rounded-lg px-6 py-4 text-lg text-foreground/90 font-light"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-lg text-center mb-8">
          We help you figure out:
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {weHelp.map((item) => (
            <div
              key={item}
              className="bg-secondary rounded-lg p-6 text-center"
            >
              <p className="text-foreground font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParodyRevealSection;
