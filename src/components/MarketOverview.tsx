import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StockCard from "./StockCard";

const MarketOverview = () => {
  const topGainers = [
    { symbol: "NVDA", name: "NVIDIA Corp", price: 495.20, change: 12.45, changePercent: 2.58 },
    { symbol: "AMD", name: "Advanced Micro Devices", price: 148.75, change: 5.32, changePercent: 3.71 },
    { symbol: "TSLA", name: "Tesla Inc", price: 248.50, change: 8.20, changePercent: 3.41 },
  ];

  const topLosers = [
    { symbol: "INTC", name: "Intel Corp", price: 42.15, change: -2.35, changePercent: -5.28 },
    { symbol: "F", name: "Ford Motor Co", price: 11.85, change: -0.45, changePercent: -3.66 },
    { symbol: "BAC", name: "Bank of America", price: 32.40, change: -0.85, changePercent: -2.56 },
  ];

  const watchlist = [
    { symbol: "MSFT", name: "Microsoft Corp", price: 378.85, change: 3.25, changePercent: 0.87 },
    { symbol: "GOOGL", name: "Alphabet Inc", price: 141.30, change: 1.85, changePercent: 1.33 },
    { symbol: "AMZN", name: "Amazon.com Inc", price: 155.75, change: -0.95, changePercent: -0.61 },
    { symbol: "META", name: "Meta Platforms", price: 392.45, change: 5.20, changePercent: 1.34 },
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
