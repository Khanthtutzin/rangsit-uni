import { useState } from "react";
import { Menu, X } from "lucide-react";
import rangsitLogo from "@/assets/RSA-logo-new.svg";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Canteen", href: "/canteen" },
    { name: "Announcements", href: "/announcements" },
    { name: "Clubs", href: "/clubs" },
    { name: "Academic Calendar", href: "/calendar" },
    { name: "Shuttle Bus", href: "/shuttle-bus" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-auto py-4 flex-wrap">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={rangsitLogo} alt="RSA Logo" className="w-16 h-16 object-contain" />
            <div className="hidden md:block">
              <div className="font-serif text-xl font-bold text-primary fancy-header uppercase">
                Rangsit Student Aid
              </div>
              <div className="text-xs text-muted-foreground font-medium uppercase">
                Together for a Better Student Life
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Desktop Navigation */}
            <div className="flex items-center gap-1 flex-wrap">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-2 py-1 text-xs font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted uppercase ${
                    pathname === link.href
                      ? "bg-[hsl(var(--primary)_/_0.8)] text-primary-foreground"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/admin-login">
                <Button size="sm" className="shadow-card hover:shadow-elegant uppercase">
                  Login
                </Button>
              </Link>
              <Link to="https://rsuip.org/application-form/" target="_blank">
                <Button size="sm" className="shadow-card hover:shadow-elegant uppercase">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
