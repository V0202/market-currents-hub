import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface StockChartProps {
  symbol: string;
  name: string;
  basePrice: number;
  change: number;
  changePercent: number;
}

const generateChartData = (basePrice: number) => {
  const data = [];
  let currentPrice = basePrice;
  const times = ["9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00"];
  
  for (let i = 0; i < times.length; i++) {
    currentPrice += (Math.random() - 0.45) * 3;
    data.push({
      time: times[i],
      price: Number(currentPrice.toFixed(2)),
    });
  }
  return data;
};

const StockChart = ({ symbol, name, basePrice, change, changePercent }: StockChartProps) => {
  const data = generateChartData(basePrice);
  const isPositive = change >= 0;

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-1">{symbol} - {name}</h2>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">${data[data.length - 1].price}</span>
          <span className={`font-semibold ${isPositive ? "text-success" : "text-destructive"}`}>
            {isPositive ? "+" : ""}{change.toFixed(2)} ({isPositive ? "+" : ""}{changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            domain={['dataMin - 2', 'dataMax + 2']}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default StockChart;
