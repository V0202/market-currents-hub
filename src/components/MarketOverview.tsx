import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StockCard from "./StockCard";
import nvdaLogo from "@/assets/logos/nvda.png";
import amdLogo from "@/assets/logos/amd.png";
import tslaLogo from "@/assets/logos/tsla.png";
import intcLogo from "@/assets/logos/intc.png";
import fLogo from "@/assets/logos/f.png";
import bacLogo from "@/assets/logos/bac.png";
import msftLogo from "@/assets/logos/msft.png";
import googlLogo from "@/assets/logos/googl.png";
import amznLogo from "@/assets/logos/amzn.png";
import metaLogo from "@/assets/logos/meta.png";

const MarketOverview = () => {
  const topGainers = [
    { symbol: "NVDA", name: "NVIDIA Corp", price: 495.20, change: 12.45, changePercent: 2.58, logo: nvdaLogo },
    { symbol: "AMD", name: "Advanced Micro Devices", price: 148.75, change: 5.32, changePercent: 3.71, logo: amdLogo },
    { symbol: "TSLA", name: "Tesla Inc", price: 248.50, change: 8.20, changePercent: 3.41, logo: tslaLogo },
  ];

  const topLosers = [
    { symbol: "INTC", name: "Intel Corp", price: 42.15, change: -2.35, changePercent: -5.28, logo: intcLogo },
    { symbol: "F", name: "Ford Motor Co", price: 11.85, change: -0.45, changePercent: -3.66, logo: fLogo },
    { symbol: "BAC", name: "Bank of America", price: 32.40, change: -0.85, changePercent: -2.56, logo: bacLogo },
  ];

  const watchlist = [
    { symbol: "MSFT", name: "Microsoft Corp", price: 378.85, change: 3.25, changePercent: 0.87, logo: msftLogo },
    { symbol: "GOOGL", name: "Alphabet Inc", price: 141.30, change: 1.85, changePercent: 1.33, logo: googlLogo },
    { symbol: "AMZN", name: "Amazon.com Inc", price: 155.75, change: -0.95, changePercent: -0.61, logo: amznLogo },
    { symbol: "META", name: "Meta Platforms", price: 392.45, change: 5.20, changePercent: 1.34, logo: metaLogo },
  ];

  return (
    <Card className="p-6">
      <Tabs defaultValue="watchlist" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
          <TabsTrigger value="losers">Top Losers</TabsTrigger>
        </TabsList>
        <TabsContent value="watchlist" className="space-y-3 mt-4">
          {watchlist.map((stock) => (
            <StockCard key={stock.symbol} {...stock} />
          ))}
        </TabsContent>
        <TabsContent value="gainers" className="space-y-3 mt-4">
          {topGainers.map((stock) => (
            <StockCard key={stock.symbol} {...stock} />
          ))}
        </TabsContent>
        <TabsContent value="losers" className="space-y-3 mt-4">
          {topLosers.map((stock) => (
            <StockCard key={stock.symbol} {...stock} />
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default MarketOverview;
