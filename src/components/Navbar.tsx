import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/98 backdrop-blur-lg shadow-lg border-b border-border/50"
          : "bg-gradient-to-b from-primary/95 to-primary/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md">
              <span className="text-xl font-bold text-accent-foreground">T+</span>
            </div>
            <span className={cn(
              "text-xl md:text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-primary" : "text-primary-foreground"
            )}>
              Think<span className="text-accent">Plus</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 group",
                  isActive(link.to)
                    ? "text-accent"
                    : isScrolled 
                      ? "text-foreground hover:text-accent" 
                      : "text-primary-foreground/90 hover:text-accent"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all duration-300",
                  isActive(link.to) ? "w-2/3" : "w-0 group-hover:w-2/3"
                )}/>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button className="gradient-accent font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2.5 rounded-lg transition-all duration-300 hover:scale-110",
              isScrolled 
                ? "hover:bg-accent/10" 
                : "hover:bg-primary-foreground/10"
            )}
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in border-t border-border/10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300",
                    isActive(link.to)
                      ? "text-accent bg-accent/15 shadow-sm"
                      : isScrolled
                        ? "text-foreground hover:text-accent hover:bg-accent/10"
                        : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="gradient-accent font-semibold mt-3 w-full shadow-md hover:shadow-lg transition-all">
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
