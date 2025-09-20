
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
    { name: "Direct", value: 300.56, color: "#1c1c1c" },
    { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
    { name: "Sponsored", value: 154.02, color: "#95A4FC" },
    { name: "E-mail", value: 48.96, color: "#B1E3FF" },
];

export default function TotalSalesChart() {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    const percent = ((data[0].value / total) * 100).toFixed(1); // direct ka %

    return (
        <div className="bg-[rgba(247,249,251,1)] dark:bg-[rgba(255,255,255,0.05)] rounded-2xl shadow p-6 w-[202px] ">
            <h2 className="dark:text-white font-semibold mb-4">Total Sales</h2>
            <div className="flex flex-col items-center">
                <PieChart width={140} height={140}>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={50}
                        outerRadius={70}
                        stroke="none"
                        paddingAngle={5}
                        cornerRadius={9}
                        
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>

            </div>

            <div className="mt-6 space-y-2">
                {data.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="dark:text-white">{item.name}</span>
                        </div>
                        <span className="dark:text-white">
                            ${item.value.toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-[rgba(28,28,28,0.8)] dark:bg-[rgba(28,28,28,0.8)] rounded-lg p-2 shadow-lg text-xs">
                <div className="text-white ">${data.value.toFixed(2)}</div>
            </div>
        );
    }
    return null;
};




