import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./CallTrendsChart.css";

const data = [
  { day: "Mon", calls: 50 },
  { day: "Tue", calls: 65 },
  { day: "Wed", calls: 55 },
  { day: "Thu", calls: 75 },
  { day: "Fri", calls: 95 },
  { day: "Sat", calls: 90 },
  { day: "Sun", calls: 42 },
];

const CallTrendsChart = () => {
  return (
    <div className="chart-card">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="chart-title">Call Trends - This Week</h3>
          <p className="chart-subtitle">Total: 472 calls</p>
        </div>

        {/* Dropdown */}
        <div className="chart-select-wrapper">
          <select className="chart-select">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
          <span className="select-arrow">▼</span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="callsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#1E293B" strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            stroke="#90a1b9"
            tick={{ fill: "#90a1b9", fontSize: 12 }}
            tickLine={false}
          />
          <YAxis
            stroke="#90a1b9"
            tick={{ fill: "#90a1b9", fontSize: 12 }}
            tickLine={false}
            ticks={[0, 25, 50, 75, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111b3c",
              border: "1px solid rgba(43,127,255,0.2)",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Area
            type="monotone"
            dataKey="calls"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#callsGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CallTrendsChart;