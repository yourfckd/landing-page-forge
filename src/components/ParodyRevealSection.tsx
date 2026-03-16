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
    <section className="py-28 sm:py-36 px-6 gradient-section noise-overlay">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-section mb-10 text-center scroll-fade">
          Relax. It's Not{" "}
          <span className="text-gradient">That Kind</span> of Hotline.
        </h2>

        <p className="text-muted-foreground text-lg text-center mb-14 scroll-fade">It's the:</p>

        <div className="space-y-4 mb-20 max-w-2xl mx-auto">
          {hotlines.map((item, i) => (
            <div
              key={item}
              className="card-premium scroll-fade"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="text-lg text-foreground/90 font-light">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-lg text-center mb-10 scroll-fade">
          We help you figure out:
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {weHelp.map((item, i) => (
            <div
              key={item}
              className="card-premium text-center scroll-fade gradient-radial-subtle"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="text-foreground font-medium text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParodyRevealSection;
