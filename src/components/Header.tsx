import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card mx-4 mt-4 rounded-2xl border-primary/10">
        <div className="container px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-gradient">
                BPME
              </span>
            </a>

            {/* Desktop Navigation */}

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://businesspsychologist.me/"
                target="_blank" // opens in a new tab
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </a>
              <Button size="sm">Download App</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border/50">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-4">
                  <Button variant="ghost" size="sm" className="justify-start">
                    Sign In
                  </Button>
                  <Button size="sm">Download App</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
