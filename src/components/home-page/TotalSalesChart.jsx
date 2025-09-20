
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
    { name: "Direct", value: 300.56, color: "#000000" },
    { name: "Affiliate", value: 135.18, color: "#A0E7B3" },
    { name: "Sponsored", value: 154.02, color: "#9CA9FF" },
    { name: "E-mail", value: 48.96, color: "#89E0F0" },
];

export default function TotalSalesChart() {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    const percent = ((data[0].value / total) * 100).toFixed(1); // direct ka %

    return (
        <div className="bg-gray-50 rounded-2xl shadow p-6 w-[202px] ">
            <h2 className="text-gray-800 font-medium mb-4">Total Sales</h2>
            <div className="flex flex-col items-center">
                <PieChart width={140} height={140}>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={50}
                        outerRadius={70}
                        stroke="none"
                        paddingAngle={5}   // 👈 yeh add karna hai
                        cornerRadius={8} 
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <div className="absolute mt-[-120px]">
                    <span className="bg-gray-800 text-white text-start text-xs px-2 py-1 rounded">
                        {percent}%
                    </span>
                </div>
            </div>

            <div className="mt-6 space-y-2">
                {data.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="text-gray-600">{item.name}</span>
                        </div>
                        <span className="text-gray-800 font-medium">
                            ${item.value.toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
