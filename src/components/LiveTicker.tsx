import { useEffect, useState } from "react";

const LiveTicker = () => {
  const [offset, setOffset] = useState(0);

  const stocks = [
    { symbol: "AAPL", price: 178.45, change: 1.25 },
    { symbol: "MSFT", price: 378.85, change: 0.87 },
    { symbol: "GOOGL", price: 141.30, change: 1.33 },
    { symbol: "AMZN", price: 155.75, change: -0.61 },
    { symbol: "TSLA", price: 248.50, change: 3.41 },
    { symbol: "NVDA", price: 495.20, change: 2.58 },
    { symbol: "META", price: 392.45, change: 1.34 },
    { symbol: "AMD", price: 148.75, change: 3.71 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev - 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary/50 border-y border-border overflow-hidden py-3">
      <div 
        className="flex gap-8 whitespace-nowrap"
        style={{ transform: `translateX(${offset}%)` }}
      >
        {[...stocks, ...stocks, ...stocks].map((stock, index) => {
          const isPositive = stock.change >= 0;
          return (
            <div key={index} className="flex items-center gap-3 text-sm">
              <span className="font-bold">{stock.symbol}</span>
              <span>${stock.price.toFixed(2)}</span>
              <span className={isPositive ? "text-success" : "text-destructive"}>
                {isPositive ? "+" : ""}{stock.change.toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveTicker;
