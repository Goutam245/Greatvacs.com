import { Star } from "lucide-react";

const stats = [
  { number: "100,000+", label: "Vacuums Rebuilt or Serviced" },
  { number: "25+", label: "Years in Business" },
  { number: "10,000+", label: "Five-Star Customer Reviews" },
];

const reviews = [
  {
    rating: 5,
    title: "Better than New!",
    text: "I had a Kirby demo in my home and loved it but couldn't justify $3,000. Found GreatVacs and got essentially the same vacuum for $1,300. Works perfectly and the warranty is actually better!",
    author: "Jennifer M.",
    badge: "Verified Purchase",
  },
  {
    rating: 5,
    title: "25 Years and Still Going",
    text: "My old Kirby finally died after 25 years. Bought this rebuilt unit and it's like having my old one back in its prime. GreatVacs knows what they're doing.",
    author: "Robert T.",
    badge: "Verified Purchase",
  },
  {
    rating: 5,
    title: "Amazing Customer Service",
    text: "Had questions before buying. Called and spoke with a real person who knew everything about the product. No pressure, just helpful. The vacuum arrived perfect.",
    author: "Maria L.",
    badge: "Verified Purchase",
  },
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container px-4 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading font-extrabold text-4xl md:text-5xl text-secondary mb-2 animate-counter">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
              {index < stats.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Reviews */}
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-center text-foreground mb-10">
          What Our Customers Say
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-warning text-warning"
                  />
                ))}
              </div>

              <h4 className="font-heading font-bold text-sm mb-2 text-foreground">
                "{review.title}"
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {review.text}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">
                  — {review.author}
                </span>
                <span className="text-[10px] font-heading font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">
                  {review.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
