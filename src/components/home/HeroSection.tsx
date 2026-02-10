import { Link } from "react-router-dom";
import { ShieldCheck, Calendar, Flag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/60" />

      {/* Content */}
      <div className="relative z-10 container px-4 lg:px-8 text-center max-w-4xl mx-auto py-20">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-primary-foreground mb-6 text-balance">
          Premium Rebuilt Kirby &amp; Rainbow Vacuums
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-light mb-10 max-w-2xl mx-auto text-balance">
          Save $2,000+ on Professionally Rebuilt Machines Built to Last Decades
        </p>

        {/* Value Props */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10">
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm font-medium">5-Year Warranty</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-primary-foreground/30" />
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <Calendar className="h-5 w-5" />
            <span className="text-sm font-medium">60-Day Money Back</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-primary-foreground/30" />
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <Flag className="h-5 w-5" />
            <span className="text-sm font-medium">Made in USA</span>
          </div>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
            <Link to="/product">
              Shop Rebuilt Kirby Vacuums
              <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="xl"
            className="w-full sm:w-auto"
          >
            <Link to="/product">
              Shop Rebuilt Rainbow Vacuums
              <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </Button>
        </div>

        {/* Trust Line */}
        <p className="text-xs sm:text-sm text-primary-foreground/60">
          Over 100,000 Vacuums Rebuilt Since 1998 &nbsp;|&nbsp; Rated #1 Most
          Dependable
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
