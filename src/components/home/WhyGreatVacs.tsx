import { Clock, Award, Wrench, TrendingDown } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "25+ Years of Expertise",
    description:
      "Since 1998, we've rebuilt or serviced over 100,000 Kirby and Rainbow vacuums. We know these machines inside and out.",
  },
  {
    icon: Award,
    title: "Only Rebuild the Best",
    description:
      "As the largest rebuilder in the US, we have first pick. We only select vacuums in excellent condition and leave the rest for eBay sellers.",
  },
  {
    icon: Wrench,
    title: "USA Expert Technicians",
    description:
      "Every vacuum is meticulously inspected, rebuilt, and tested by experienced craftsmen who know their trade.",
  },
];

const WhyGreatVacs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container px-4 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] text-center text-primary mb-14 text-balance">
          Why Buy from GreatVacs?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center group cursor-default"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-light-blue mb-6 group-hover:shadow-md transition-shadow">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-light-blue rounded-xl p-8 md:p-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <TrendingDown className="h-6 w-6 text-secondary" />
            <span className="font-heading font-bold text-lg md:text-xl text-foreground">
              VERY Low Return Rate
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Our customers keep what they buy because we deliver quality. That's
            the ultimate proof.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyGreatVacs;
