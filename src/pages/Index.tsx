import MarketHeader from "@/components/MarketHeader";
import HeroSection from "@/components/HeroSection";
import LiveTicker from "@/components/LiveTicker";
import StockChart from "@/components/StockChart";
import MarketOverview from "@/components/MarketOverview";

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
            <StockChart />
          </div>
          <div className="lg:col-span-1">
            <MarketOverview />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
