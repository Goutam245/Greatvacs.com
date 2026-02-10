import { Link } from "react-router-dom";
import {
  Check,
  Wrench,
  ShieldCheck,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Headset,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container px-4 lg:px-8 text-center">
            <p className="text-xs text-primary-foreground/60 font-heading font-semibold tracking-wider mb-3 uppercase">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link> &gt; About Us
            </p>
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
              About GreatVacs
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto">
              25+ Years of Rebuilding Excellence
            </p>
          </div>
        </section>

        {/* Opening Statement */}
        <section className="section-padding bg-background">
          <div className="container px-4 lg:px-8 max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary mb-8">
              About GreatVacs
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              GreatVacs specializes in professionally rebuilt high-end vacuum
              cleaners for customers who want long-term performance without
              paying new demo prices.
            </p>
            <p className="text-base md:text-lg text-foreground font-medium">
              We don't sell everything.
              <br />
              We focus on doing a few things extremely well.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="section-padding bg-muted">
          <div className="container px-4 lg:px-8 max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-12">
              What We Do Differently
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "We rebuild high-end vacuums designed to last decades",
                "As the largest rebuilder, we get first pick of the best units",
                "Every machine is reconditioned, inspected, and tested",
                "Real 5-year warranties and 60-day return policies",
                "No high-pressure sales tactics",
                "Transparent, honest product descriptions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-card rounded-lg p-5 border border-border">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Matters */}
        <section className="section-padding bg-background">
          <div className="container px-4 lg:px-8 max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-6">
              Experience Matters
            </h2>
            <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
              Over the past 25+ years, GreatVacs has rebuilt or serviced more
              than 100,000 vacuum cleaners. That experience means:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Wrench,
                  title: "We Know What Fails",
                  text: "Our technicians have seen every issue and know exactly what needs attention.",
                },
                {
                  icon: ShieldCheck,
                  title: "We Know What Lasts",
                  text: "Decades of rebuilding teach us which components ensure longevity.",
                },
                {
                  icon: Award,
                  title: "We Know What's Worth Rebuilding",
                  text: "Not every vacuum makes the cut. We're selective about what we rebuild.",
                },
              ].map((col) => (
                <div key={col.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-light-blue mb-5">
                    <col.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                    {col.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {col.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Rebuilt */}
        <section className="section-padding bg-light-blue">
          <div className="container px-4 lg:px-8 max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-8">
              Why Rebuilt?
            </h2>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Most vacuums today are made overseas and designed to be replaced
                every few years. High-end machines like Kirby and Rainbow are
                built differently — and clean way better — and can last decades
                when properly rebuilt.
              </p>
              <p className="font-medium text-foreground text-lg">
                Rebuilding isn't about cutting corners.
                <br />
                It's about making a smarter long-term decision.
              </p>
            </div>
          </div>
        </section>

        {/* Our Operation */}
        <section className="section-padding bg-background" id="contact">
          <div className="container px-4 lg:px-8 max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-12">
              Our Operation
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <ul className="space-y-4">
                {[
                  "Based in the United States",
                  "Vacuums rebuilt and tested by experienced technicians",
                  "Orders shipped directly from our facility",
                  "Real people available if you need help",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <h3 className="font-heading font-bold text-lg mb-4">
                  GreatVacs
                </h3>
                <address className="not-italic space-y-3 text-sm text-primary-foreground/80">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>
                      928 Washington St
                      <br />
                      Montpelier, ID 83254
                    </span>
                  </div>
                  <a
                    href="tel:+12088471539"
                    className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    (208) 847-1539
                  </a>
                  <a
                    href="mailto:info@greatvacs.com"
                    className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    info@greatvacs.com
                  </a>
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="section-padding bg-primary">
          <div className="container px-4 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-12">
              Our Promise
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Calendar, title: "60-Day Money-Back Guarantee" },
                { icon: ShieldCheck, title: "5-Year Motor Warranty" },
                { icon: Award, title: "Clear, Honest Descriptions" },
                { icon: Headset, title: "No High-Pressure Tactics" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-4">
                    <item.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-heading font-bold text-primary-foreground">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-background">
          <div className="container px-4 lg:px-8 text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
              Ready to Choose the Right Vacuum for Your Family?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button asChild variant="default" size="xl">
                <Link to="/product">
                  Shop Rebuilt Kirby Vacuums
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="xl">
                <Link to="/product">
                  Shop Rebuilt Rainbow Vacuums
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>100,000+ Rebuilt</span>
              <span>•</span>
              <span>25+ Years</span>
              <span>•</span>
              <span>10,000+ Reviews</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
