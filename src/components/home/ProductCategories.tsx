import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import kirbyImg from "@/assets/kirby-category.webp";
import rainbowImg from "@/assets/rainbow-category.webp";

const products = [
  {
    title: "Rebuilt Kirby Vacuums",
    description:
      "Built to last decades. Powerful suction, perfect for pet hair and deep cleaning. Rated #1 Most Dependable Vacuum in the World.",
    image: kirbyImg,
    imageAlt: "Rebuilt Kirby vacuum cleaner with accessories",
    features: [
      "Made in USA",
      "25+ year lifespan common",
      "5-Year Warranty + 60-Day Money Back",
      '#1 Most Dependable Overall Vacuum (Consumer Reports)',
    ],
    links: [
      "5 Things You Never Knew a Kirby Could Do",
      "Are Kirby Vacuums Worth the Money?",
      "Fun Story About Kirby Vacuums",
    ],
    cta: "Shop Kirby Vacuums",
  },
  {
    title: "Rebuilt Rainbow Vacuums",
    description:
      "Water-based filtration system. Exceptional for allergies and air quality. Rated #1 Most Dependable Canister Vacuum.",
    image: rainbowImg,
    imageAlt: "Rebuilt Rainbow vacuum cleaner with water filtration",
    features: [
      "Made in USA",
      "25+ year lifespan common",
      "5-Year Warranty + 60-Day Money Back",
      "#1 Canister Vacuum (Consumer Reports)",
    ],
    links: [
      "Best Model of Rainbow Vacuum",
      "5 Things You Never Knew a Rainbow Could Do",
      "Are Rainbow Vacuums Worth the Money?",
    ],
    cta: "Shop Rainbow Vacuums",
  },
];

const ProductCategories = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container px-4 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] text-center text-foreground mb-14">
          Choose Your Vacuum
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-64 md:h-80 object-contain p-6 group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button asChild variant="default" size="lg" className="w-full mb-6">
                  <Link to="/product">
                    {product.cta}
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>

                {/* Quick Links */}
                <div className="space-y-1.5">
                  {product.links.map((link) => (
                    <Link
                      key={link}
                      to="/product"
                      className="block text-xs text-secondary hover:text-accent transition-colors hover:underline"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
