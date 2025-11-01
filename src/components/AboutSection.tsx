import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Data",
      description: "Access up-to-the-minute market data and stock prices from major exchanges worldwide."
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Built with security and reliability in mind, trusted by thousands of investors."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized trading platform."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a vibrant community of investors sharing insights and strategies."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About MarketWatch</h2>
            <p className="text-muted-foreground text-lg">
              Your trusted companion for navigating the financial markets
            </p>
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  MarketWatch is a comprehensive financial platform designed to empower investors with real-time market data, 
                  advanced charting tools, and actionable insights. Whether you're a seasoned trader or just starting your 
                  investment journey, we provide the tools you need to make informed decisions.
                </p>
                <p className="text-lg">
                  Our platform aggregates data from major stock exchanges worldwide, delivering accurate and timely information 
                  on stocks, indices, and market trends. With an intuitive interface and powerful analytics, MarketWatch makes 
                  it easy to track your portfolio, analyze market movements, and stay ahead of the curve.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
