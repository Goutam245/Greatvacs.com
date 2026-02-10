import { Calendar, ShieldCheck, MapPin, Headset } from "lucide-react";

const guarantees = [
  {
    icon: Calendar,
    title: "60-Day Money-Back Guarantee",
    description: "Don't love it? Full refund within 60 days.",
  },
  {
    icon: ShieldCheck,
    title: "5-Year Motor Warranty",
    description: "Comprehensive coverage on all rebuilt units.",
  },
  {
    icon: MapPin,
    title: "Ships from the USA",
    description: "Fast shipping from Montpelier, Idaho.",
  },
  {
    icon: Headset,
    title: "Real Human Support",
    description: "Questions? Talk to real people who care.",
  },
];

const RiskReversal = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container px-4 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] text-center text-primary-foreground mb-14 text-balance">
          Try It in Your Home — Risk Free
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item) => (
            <div key={item.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-5">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-base text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-primary-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;
