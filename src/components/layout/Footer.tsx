import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 lg:px-8 section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">About GreatVacs</h3>
            <p className="text-sm text-background/70 leading-relaxed mb-4">
              Since 1998, GreatVacs has been the largest rebuilder of Kirby and
              Rainbow vacuum cleaners in the United States. Quality you can trust.
            </p>
            <p className="text-xs text-background/50 font-heading font-semibold tracking-wider">
              WE KNOW VACUUMS!
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/product" className="text-sm text-background/70 hover:text-background transition-colors">
                  Rebuilt Kirby Vacuums
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-sm text-background/70 hover:text-background transition-colors">
                  Rebuilt Rainbow Vacuums
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-sm text-background/70 hover:text-background transition-colors">
                  Accessories &amp; Parts
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-background/70 hover:text-background transition-colors">
                  Current Sales
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-sm text-background/70 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-background/50" />
                <span>
                  GreatVacs<br />
                  928 Washington St<br />
                  Montpelier, ID 83254
                </span>
              </div>
              <a href="tel:+12088471539" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="h-4 w-4 shrink-0 text-background/50" />
                (208) 847-1539
              </a>
              <a href="mailto:info@greatvacs.com" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail className="h-4 w-4 shrink-0 text-background/50" />
                info@greatvacs.com
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} GreatVacs.com | All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-xs text-background/50 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-xs text-background/50 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {["Visa", "MC", "PayPal", "Amex"].map((p) => (
              <span key={p} className="text-[10px] text-background/40 border border-background/20 rounded px-2 py-0.5 font-heading font-semibold">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
