import { ArrowUp, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  logo?: string;
}

const StockCard = ({ symbol, name, price, change, changePercent, logo }: StockCardProps) => {
  const isPositive = change >= 0;

  return (
    <Card className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-3">
          {logo && (
            <img 
              src={logo} 
              alt={`${name} logo`}
              className="w-10 h-10 rounded-lg object-contain bg-white/5 p-1"
            />
          )}
          <div>
            <h3 className="font-bold text-lg">{symbol}</h3>
            <p className="text-sm text-muted-foreground">{name}</p>
          </div>
        </div>
        {isPositive ? (
          <ArrowUp className="h-5 w-5 text-success" />
        ) : (
          <ArrowDown className="h-5 w-5 text-destructive" />
        )}
      </div>
      <div className="flex justify-between items-end">
        <div className="text-2xl font-bold">${price.toFixed(2)}</div>
        <div className={`text-sm font-semibold ${isPositive ? "text-success" : "text-destructive"}`}>
          {isPositive ? "+" : ""}{change.toFixed(2)} ({isPositive ? "+" : ""}{changePercent.toFixed(2)}%)
        </div>
      </div>
    </Card>
  );
};

export default StockCard;
