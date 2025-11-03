import MarketHeader from "@/components/MarketHeader";
import HeroSection from "@/components/HeroSection";
import LiveTicker from "@/components/LiveTicker";
import StockChart from "@/components/StockChart";
import MarketOverview from "@/components/MarketOverview";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MarketHeader />
      <HeroSection />
      
      <div id="markets">
        <LiveTicker />
      </div>
      
      <main id="charts" className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <StockChart 
              symbol="AAPL" 
              name="Apple Inc." 
              basePrice={150} 
              change={2.45} 
              changePercent={1.65} 
            />
            <StockChart 
              symbol="TSLA" 
              name="Tesla Inc." 
              basePrice={245} 
              change={-5.20} 
              changePercent={-2.08} 
            />
            <StockChart 
              symbol="GOOGL" 
              name="Alphabet Inc." 
              basePrice={138} 
              change={3.85} 
              changePercent={2.87} 
            />
          </div>
          <div id="watchlist" className="lg:col-span-1">
            <MarketOverview />
          </div>
        </div>
      </main>

      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
