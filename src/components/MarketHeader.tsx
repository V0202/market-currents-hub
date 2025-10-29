import { TrendingUp } from "lucide-react";

const MarketHeader = () => {
  const indices = [
    { name: "S&P 500", value: "4,783.45", change: "+0.89%", isPositive: true },
    { name: "DOW", value: "37,545.33", change: "+0.45%", isPositive: true },
    { name: "NASDAQ", value: "15,074.57", change: "+1.23%", isPositive: true },
  ];

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">MarketWatch</h1>
          </div>
          <div className="hidden md:flex gap-6">
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
        </div>
      </div>
    </header>
  );
};

export default MarketHeader;
