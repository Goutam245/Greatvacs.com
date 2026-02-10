import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ShoppingCart, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/greatvacs-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop Kirby", path: "/product" },
  { label: "Shop Rainbow", path: "/product" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/about#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Sale Banner */}
      {showBanner && (
        <div className="bg-warning text-foreground text-center text-sm py-2.5 px-4 relative z-50">
          <span className="font-semibold">
            SPRING SALE: Save $75 on Any Rebuilt Kirby or Rainbow Vacuum — Limited Time!
          </span>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
            aria-label="Dismiss sale banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 bg-background transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "border-b border-border"
        }`}
      >
        <div className="container flex items-center justify-between h-20 px-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="GreatVacs - We Know Vacuums!"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-semibold font-heading tracking-wide transition-colors hover:text-secondary ${
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+12088471539"
              className="flex items-center gap-2 text-sm font-bold text-primary font-heading hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              (208) 847-1539
            </a>
            <button className="relative p-2 hover:bg-muted rounded-md transition-colors" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5 text-foreground" />
              <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <a href="tel:+12088471539" className="p-2" aria-label="Call us">
              <Phone className="h-5 w-5 text-primary" />
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="p-2" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 pt-12">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 text-base font-semibold font-heading rounded-md transition-colors hover:bg-muted ${
                        location.pathname === link.path
                          ? "text-secondary bg-muted"
                          : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 px-4 space-y-4">
                  <a
                    href="tel:+12088471539"
                    className="flex items-center gap-2 text-sm font-bold text-primary font-heading"
                  >
                    <Phone className="h-4 w-4" />
                    (208) 847-1539
                  </a>
                  <p className="text-xs text-muted-foreground">
                    Real humans ready to help
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
