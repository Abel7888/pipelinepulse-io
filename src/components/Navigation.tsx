import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Functionality", href: "#functionality" },
    { name: "Value Delivered", href: "#value" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/${href}`;
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">
              DrugPipe Intelligence
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Sign In
            </Button>
            <Link to="/dashboard">
              <Button className="btn-hero">
                Go to Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-primary transition-smooth"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
              <Link to="/dashboard" className="block">
                <Button className="w-full btn-hero">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;