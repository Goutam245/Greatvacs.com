import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  ShieldCheck,
  Calendar,
  MapPin,
  Headset,
  Check,
  ArrowRight,
  Truck,
  Package,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import kirbyImg from "@/assets/kirby-category.webp";
import rainbowImg from "@/assets/rainbow-category.webp";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [kirbyImg, rainbowImg];

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-muted py-3">
          <div className="container px-4 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="hover:text-secondary transition-colors cursor-pointer">Shop Kirby Vacuums</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium">Kirby Avalir 2 Rebuilt</span>
            </nav>
          </div>
        </div>

        {/* Product Overview */}
        <section className="section-padding-sm bg-background">
          <div className="container px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Image Gallery - 3 cols */}
              <div className="lg:col-span-3">
                <div className="bg-muted rounded-xl overflow-hidden mb-4">
                  <img
                    src={productImages[selectedImage]}
                    alt="Kirby Avalir 2 professionally rebuilt vacuum cleaner"
                    className="w-full h-[350px] md:h-[500px] object-contain p-8"
                  />
                </div>
                <div className="flex gap-3">
                  {productImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === i
                          ? "border-secondary shadow-md"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <img src={img} alt={`Product view ${i + 1}`} className="w-full h-full object-contain p-1 bg-muted" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info - 2 cols */}
              <div className="lg:col-span-2">
                <h1 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
                  Kirby Avalir 2 — Professionally Rebuilt
                </h1>

                <span className="inline-flex items-center gap-1.5 bg-success/10 text-success text-xs font-heading font-bold px-3 py-1.5 rounded-full mb-5">
                  <Check className="h-3.5 w-3.5" />
                  Professionally Rebuilt &amp; Tested
                </span>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-heading font-extrabold text-3xl md:text-4xl text-secondary">
                      $899
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      $2,799
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-success">
                    YOU SAVE: $1,900 (68%)
                  </p>
                </div>

                {/* Condition Explanation */}
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This Kirby Avalir 2 has been professionally rebuilt and
                    tested to qualify for our 5-year warranty and 60-day
                    money-back guarantee.
                  </p>
                </div>

                {/* Add to Cart */}
                <Button variant="default" size="xl" className="w-full mb-5">
                  Add to Cart 🛒
                </Button>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: ShieldCheck, label: "5-Year Motor Warranty" },
                    { icon: Calendar, label: "60-Day Money-Back" },
                    { icon: MapPin, label: "Ships from USA" },
                    { icon: Headset, label: "Real Support Available" },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-2">
                      <badge.icon className="h-4 w-4 text-success shrink-0" />
                      <span className="text-xs font-medium text-foreground">{badge.label}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="border-t border-border pt-6 space-y-2.5">
                  {[
                    ["Model", "Kirby Avalir 2"],
                    ["Condition", "Professionally Rebuilt"],
                    ["Includes", "Standard attachments"],
                    ["Made in", "USA"],
                    ["Ships from", "Montpelier, Idaho"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Review Link */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">4.8/5</span>
                  <span className="text-sm text-muted-foreground">(1,247 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You're Getting */}
        <section className="section-padding-sm bg-background border-t border-border">
          <div className="container px-4 lg:px-8 max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 text-center">
              What You'll Receive
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {[
                  "Rebuilt Kirby Avalir 2 vacuum",
                  "Standard attachments (hose, wands, floor nozzle)",
                  "Freshly serviced and tested",
                  "Ready to use out of the box",
                  "5-Year warranty certificate",
                  "User manual",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-muted rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Ships within 2-3 business days</p>
                    <p className="text-xs text-muted-foreground">From our facility in Idaho</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Free ground shipping</p>
                    <p className="text-xs text-muted-foreground">Delivery in 3-7 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Buy Rebuilt */}
        <section className="section-padding-sm bg-light-blue">
          <div className="container px-4 lg:px-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10 text-center">
              Why Buy Rebuilt?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Same Core Machine", text: "Identical engineering and performance as new units" },
                { title: "Hundreds Less", text: "Save $1,500+ compared to dealer demo pricing" },
                { title: "Built to Last", text: "These machines are designed for 20+ years of service" },
                { title: "Real Warranty", text: "5-year comprehensive coverage — better than new" },
              ].map((item) => (
                <div key={item.title} className="text-center bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-heading font-bold text-sm text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="section-padding-sm bg-background">
          <div className="container px-4 lg:px-8 max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
              What Customers Are Saying
            </h2>

            {/* Overall Rating */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>
              <p className="font-heading font-bold text-lg text-foreground">4.8 out of 5</p>
              <p className="text-sm text-muted-foreground">Based on 1,247 verified reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="max-w-sm mx-auto mb-10 space-y-2">
              {[
                { stars: 5, pct: 82 },
                { stars: 4, pct: 12 },
                { stars: 3, pct: 4 },
                { stars: 2, pct: 1 },
                { stars: 1, pct: 1 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-sm">
                  <span className="w-12 text-right text-muted-foreground">{row.stars} star</span>
                  <div className="flex-1 bg-muted rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-warning rounded-full transition-all duration-500"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-10 text-muted-foreground text-xs">{row.pct}%</span>
                </div>
              ))}
            </div>

            {/* Featured Reviews */}
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Better than New!",
                  text: "I had a Kirby demo in my home and loved it but couldn't justify $3,000. Found GreatVacs and got essentially the same vacuum for under $1,000. Works perfectly and the warranty is actually better!",
                  author: "Jennifer M.",
                },
                {
                  title: "25 Years and Still Going",
                  text: "My old Kirby finally died after 25 years. Bought this rebuilt unit and it's like having my old one back in its prime. GreatVacs knows what they're doing.",
                  author: "Robert T.",
                },
                {
                  title: "Amazing Customer Service",
                  text: "Had questions before buying. Called and spoke with a real person who knew everything about the product. No pressure, just helpful.",
                  author: "Maria L.",
                },
                {
                  title: "Best Money I've Spent",
                  text: "Saved over $2,000 compared to the dealer quote. The vacuum arrived in perfect condition. Can't recommend GreatVacs enough.",
                  author: "David K.",
                },
              ].map((review) => (
                <div key={review.author} className="bg-card border border-border rounded-xl p-5">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
                    ))}
                  </div>
                  <h4 className="font-heading font-bold text-sm mb-1.5">"{review.title}"</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground">— {review.author}</span>
                    <span className="text-[10px] font-heading font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">
                      Verified Purchase
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs + FAQ */}
        <section className="section-padding-sm bg-muted">
          <div className="container px-4 lg:px-8 max-w-3xl mx-auto">
            {/* Technical Specifications */}
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6 text-center">
              Technical Specifications
            </h2>
            <Accordion type="multiple" className="mb-14">
              <AccordionItem value="general" className="bg-card rounded-lg mb-2 border px-4">
                <AccordionTrigger className="font-heading font-semibold text-sm">
                  General Specifications
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Brand", "Kirby"],
                      ["Model", "Avalir 2"],
                      ["Type", "Upright, Multi-Surface"],
                      ["Weight", "24 lbs"],
                      ["Cord Length", "30 feet"],
                      ["Made in", "USA"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between py-1 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{k}</span>
                        <span className="font-medium text-foreground">{v}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="performance" className="bg-card rounded-lg mb-2 border px-4">
                <AccordionTrigger className="font-heading font-semibold text-sm">
                  Performance
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Motor", "7 amp, lifetime lubricated"],
                      ["Suction Power", "Industry-leading"],
                      ["Filtration", "HEPA-level micron filtration"],
                      ["Cleaning Path", "12 inches"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between py-1 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{k}</span>
                        <span className="font-medium text-foreground">{v}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="warranty" className="bg-card rounded-lg mb-2 border px-4">
                <AccordionTrigger className="font-heading font-semibold text-sm">
                  Warranty &amp; Guarantee
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Motor Warranty", "5 years"],
                      ["Parts Coverage", "5 years"],
                      ["Money-Back Guarantee", "60 days"],
                      ["Return Shipping", "Free (if applicable)"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between py-1 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{k}</span>
                        <span className="font-medium text-foreground">{v}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* FAQ */}
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6 text-center">
              Common Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  q: "Is this vacuum used?",
                  a: 'These are professionally rebuilt units. Each vacuum is completely disassembled, cleaned, inspected, and rebuilt with any necessary new parts. They function like new and come with a 5-year warranty — better than buying new from a dealer.',
                },
                {
                  q: "What if I don't like it?",
                  a: "60-day money-back guarantee, no questions asked. If it's not right for you, return it for a full refund. We even cover return shipping.",
                },
                {
                  q: "How long will this vacuum last?",
                  a: "Kirby and Rainbow vacuums are built to last 20-30+ years with proper maintenance. We commonly see these machines still running strong after 25 years. This is a one-time purchase, not a disposable vacuum.",
                },
                {
                  q: "Is this really covered under warranty?",
                  a: "Yes. Every rebuilt vacuum comes with our comprehensive 5-year bumper-to-bumper warranty. That's 2 years longer than buying new from a Kirby dealer.",
                },
                {
                  q: "What's the difference between this and buying on eBay?",
                  a: 'GreatVacs is the largest rebuilder in the US. We professionally rebuild, test, and warranty every unit. eBay sellers typically just resell used vacuums "as-is" with no warranty or quality control.',
                },
                {
                  q: "Do you ship to my state?",
                  a: "We ship to all 50 states from our facility in Idaho. Ground shipping is free and typically takes 3-7 business days.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border px-4">
                  <AccordionTrigger className="font-heading font-semibold text-sm text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-primary">
          <div className="container px-4 lg:px-8 text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              Still Deciding?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Try it in your home for 60 days — risk free.
            </p>
            <Button variant="cta" size="xl" className="mb-6">
              Add to Cart — $899
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-primary-foreground/60 mb-4">
              <span>✓ 60-Day Money Back</span>
              <span>✓ 5-Year Warranty</span>
              <span>✓ Free Shipping</span>
            </div>
            <p className="text-xs text-primary-foreground/50">
              Questions? Call us at{" "}
              <a href="tel:+12088471539" className="underline hover:text-primary-foreground transition-colors">
                (208) 847-1539
              </a>{" "}
              — real humans ready to help.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Product;
