import { Link } from "react-router-dom";

const LongevitySection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container px-4 lg:px-8 max-w-3xl mx-auto text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-8 text-balance">
          This Is a One-Time Decision — Not a Cycle of Replacements
        </h2>

        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
          <p>Most disposable vacuums last 2–3 years.</p>
          <p>A properly rebuilt Kirby or Rainbow can last 20+ years.</p>
          <p className="font-medium text-foreground">
            That's decades of powerful cleaning without the landfill waste or
            repeated purchases.
          </p>
        </div>

        {/* Timeline Comparison Visual */}
        <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border max-w-xl mx-auto mb-10">
          {/* Disposable Row */}
          <div className="mb-6">
            <p className="text-xs font-heading font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
              Disposable Vacuums — 20 Year Cost
            </p>
            <div className="flex gap-1">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-8 rounded bg-destructive/20 border border-destructive/30 flex items-center justify-center"
                >
                  <span className="text-[9px] font-bold text-destructive">
                    ${150 + i * 30}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              7+ replacements = $1,000+ over 20 years
            </p>
          </div>

          {/* Kirby/Rainbow Row */}
          <div>
            <p className="text-xs font-heading font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
              Rebuilt Kirby or Rainbow — 20 Year Cost
            </p>
            <div className="flex gap-1">
              <div className="flex-1 h-8 rounded bg-success/20 border border-success/30 flex items-center justify-center">
                <span className="text-[9px] font-bold text-success">
                  One Purchase
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              1 rebuilt vacuum = decades of reliable cleaning
            </p>
          </div>
        </div>

        <Link
          to="/about"
          className="text-sm font-semibold text-secondary hover:text-accent transition-colors hover:underline"
        >
          Learn Why Rebuilt Makes Sense →
        </Link>
      </div>
    </section>
  );
};

export default LongevitySection;
