import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", current: 12, previous: 8 },
  { name: "Feb", current: 9, previous: 15 },
  { name: "Mar", current: 11, previous: 12 },
  { name: "Apr", current: 14, previous: 10 },
  { name: "May", current: 18, previous: 15 },
  { name: "Jun", current: 17, previous: 22 },
];

export default function RevenueChart() {
    
  return (
    <div className="w-full h-[318px]  pb-10 pt-6 pr-7 rounded-xl bg-[rgba(247,249,251,1)] dark:bg-[rgba(255,255,255,0.05)] shadow-sm">
      

      {/* Custom Legend */}
      <div className="flex items-center gap-4 mb-2 pl-7  text-sm">
        <h2 className="text-sm font-semibold ">Revenue</h2>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-black"></span>
          Current Week <span className="font-semibold">$58,211</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-300"></span>
          Previous Week <span className="font-semibold">$68,768</span>
        </span>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid vertical={false} stroke="#e5e5e5" />

          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            ticks={[0, 10, 20, 30]}
            domain={[0, 30]}
            axisLine={false}
            tickLine={false}
            tickFormatter={(val) => `${val}M`}
          />

          <Tooltip
            cursor={false}
            formatter={(val) => `${val}M`}
          />

          {/* Previous Week Line (blue) */}
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#9EC9EB"
            strokeWidth={2}
            dot={false}
          />

          {/* Current Week Line (black with dotted projection after Apr) */}
          <Line
            type="monotone"
            dataKey="current"
            stroke="#000"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
