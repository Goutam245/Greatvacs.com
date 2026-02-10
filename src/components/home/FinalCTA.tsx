import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_70%)]" />

      <div className="relative z-10 container px-4 lg:px-8 text-center max-w-3xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] text-primary-foreground mb-6 text-balance">
          Ready to Make the Smart Choice?
        </h2>

        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
          Join thousands of satisfied customers who chose quality over hype.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
            <Link to="/product">
              Shop Rebuilt Kirby Vacuums
              <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="cta"
            size="xl"
            className="w-full sm:w-auto"
          >
            <Link to="/product">
              Shop Rebuilt Rainbow Vacuums
              <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-primary-foreground/60">
          <span>60-Day Money Back</span>
          <span className="hidden sm:inline">|</span>
          <span>5-Year Warranty</span>
          <span className="hidden sm:inline">|</span>
          <span>Free Shipping</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
