import { TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MarketHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const indices = [
    { name: "S&P 500", value: "4,783.45", change: "+0.89%", isPositive: true },
    { name: "DOW", value: "37,545.33", change: "+0.45%", isPositive: true },
    { name: "NASDAQ", value: "15,074.57", change: "+1.23%", isPositive: true },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <TrendingUp className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">MarketWatch</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" onClick={() => scrollToSection("home")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("markets")}>
              Markets
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("charts")}>
              Charts
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("watchlist")}>
              Watchlist
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
            <Button variant="default" className="ml-2">
              Sign In
            </Button>
          </nav>

          {/* Market Indices - Desktop only */}
          <div className="hidden lg:flex gap-6">
            {indices.map((index) => (
              <div key={index.name} className="text-sm">
                <div className="text-muted-foreground">{index.name}</div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{index.value}</span>
                  <span className={index.isPositive ? "text-success" : "text-destructive"}>
                    {index.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 border-t border-border pt-4">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                scrollToSection("home");
                setMobileMenuOpen(false);
              }}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                scrollToSection("markets");
                setMobileMenuOpen(false);
              }}
            >
              Markets
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                scrollToSection("charts");
                setMobileMenuOpen(false);
              }}
            >
              Charts
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                scrollToSection("watchlist");
                setMobileMenuOpen(false);
              }}
            >
              Watchlist
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                scrollToSection("about");
                setMobileMenuOpen(false);
              }}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                scrollToSection("contact");
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </Button>
            <Button variant="default" className="w-full">
              Sign In
            </Button>
            
            {/* Mobile Market Indices */}
            <div className="pt-4 space-y-3 border-t border-border">
              {indices.map((index) => (
                <div key={index.name} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{index.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{index.value}</span>
                    <span className={index.isPositive ? "text-success" : "text-destructive"}>
                      {index.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MarketHeader;
