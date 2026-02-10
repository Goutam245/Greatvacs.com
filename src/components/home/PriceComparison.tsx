import { Check, X as XIcon, BadgeCheck } from "lucide-react";

const PriceComparison = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container px-4 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] text-center text-foreground mb-14 text-balance">
          Buying a High-End Vacuum? You Have Options.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* New from Dealer Card */}
          <div className="bg-card rounded-xl p-8 border-l-4 border-destructive shadow-sm">
            <p className="text-xs font-heading font-semibold tracking-wider text-muted-foreground mb-3 uppercase">
              New from Dealer
            </p>
            <p className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              $2,500 – $3,000
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XIcon className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-sm">3–4 Year Warranty</span>
                  <p className="text-xs text-muted-foreground mt-0.5">Standard manufacturer coverage</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-sm">3–30 Day Return</span>
                  <p className="text-xs text-muted-foreground mt-0.5">Limited return window</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-sm">High-Pressure In-Home Demo</span>
                  <p className="text-xs text-muted-foreground mt-0.5">Multi-hour sales presentation</p>
                </div>
              </li>
            </ul>
          </div>

          {/* GreatVacs Rebuilt Card */}
          <div className="bg-card rounded-xl p-8 border-l-4 border-success shadow-md relative">
            <span className="absolute -top-3 right-6 bg-success text-success-foreground text-xs font-heading font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <BadgeCheck className="h-3.5 w-3.5" />
              Recommended
            </span>
            <p className="text-xs font-heading font-semibold tracking-wider text-muted-foreground mb-3 uppercase">
              Rebuilt from GreatVacs
            </p>
            <div className="flex items-baseline gap-3 mb-1">
              <p className="font-heading font-extrabold text-3xl md:text-4xl text-foreground">
                $1,200 – $1,500
              </p>
            </div>
            <p className="text-sm font-semibold text-success mb-6">
              Save $2,000!
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-sm">5-Year Bumper-to-Bumper Warranty</span>
                  <p className="text-xs text-muted-foreground mt-0.5">Longer than buying new</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-sm">60-Day Money Back Promise</span>
                  <p className="text-xs text-muted-foreground mt-0.5">Try it risk-free in your home</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-sm">No Pressure, Shop Online</span>
                  <p className="text-xs text-muted-foreground mt-0.5">Buy at your own pace</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Statement */}
        <p className="text-center text-base md:text-lg text-muted-foreground mt-12 max-w-2xl mx-auto leading-relaxed">
          If Kirby and Rainbow vacuums last for decades, why not buy a rebuilt
          unit and save thousands? Most smart buyers choose rebuilt… and put the
          $2,000 they saved into their kids' college fund 🎓
        </p>
      </div>
    </section>
  );
};

export default PriceComparison;
