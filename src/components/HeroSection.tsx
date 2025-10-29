import { ArrowRight, TrendingUp, LineChart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  const scrollToMarkets = () => {
    const element = document.getElementById("markets");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Data",
      description: "Get instant updates on stock prices and market movements",
    },
    {
      icon: LineChart,
      title: "Advanced Charts",
      description: "Visualize market trends with interactive charts",
    },
    {
      icon: Bell,
      title: "Price Alerts",
      description: "Stay informed with customizable notifications",
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Track Markets in Real-Time
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Monitor stock prices, analyze trends, and make informed investment decisions with our comprehensive market dashboard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToMarkets} className="text-lg px-8">
              Explore Markets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6 text-center hover:bg-secondary/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
