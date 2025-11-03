import { Card } from "@/components/ui/card";
import aaplLogo from "@/assets/logos/aapl.png";
import msftLogo from "@/assets/logos/msft.png";
import googLogo from "@/assets/logos/googl.png";
import amznLogo from "@/assets/logos/amzn.png";
import tslaLogo from "@/assets/logos/tsla.png";
import metaLogo from "@/assets/logos/meta.png";
import nvdaLogo from "@/assets/logos/nvda.png";
import amdLogo from "@/assets/logos/amd.png";

const stocks = [
  { symbol: "AAPL", name: "Apple", logo: aaplLogo, price: "$150.25", change: "+2.3%" },
  { symbol: "MSFT", name: "Microsoft", logo: msftLogo, price: "$380.45", change: "+1.8%" },
  { symbol: "GOOGL", name: "Google", logo: googLogo, price: "$138.20", change: "+2.9%" },
  { symbol: "AMZN", name: "Amazon", logo: amznLogo, price: "$175.80", change: "-0.5%" },
  { symbol: "TSLA", name: "Tesla", logo: tslaLogo, price: "$245.60", change: "-2.1%" },
  { symbol: "META", name: "Meta", logo: metaLogo, price: "$485.30", change: "+3.2%" },
  { symbol: "NVDA", name: "NVIDIA", logo: nvdaLogo, price: "$875.50", change: "+5.4%" },
  { symbol: "AMD", name: "AMD", logo: amdLogo, price: "$165.75", change: "+1.2%" },
];

const StockGallery = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Featured Stocks</h2>
      <div className="grid grid-cols-2 gap-3">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className="group relative overflow-hidden rounded-lg border bg-card hover:bg-secondary/50 transition-all cursor-pointer p-3"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-lg bg-white/5 p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img
                  src={stock.logo}
                  alt={`${stock.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm">{stock.symbol}</p>
                <p className="text-xs text-muted-foreground">{stock.name}</p>
                <p className="text-sm font-semibold mt-1">{stock.price}</p>
                <p className={`text-xs font-medium ${stock.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                  {stock.change}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default StockGallery;
