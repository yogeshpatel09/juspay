import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid,
    Tooltip,
} from "recharts";

const data = [
    { name: "Jan", actual: 14, max: 22 },
    { name: "Feb", actual: 18, max: 25 },
    { name: "Mar", actual: 16, max: 23 },
    { name: "Apr", actual: 22, max: 28 },
    { name: "May", actual: 11, max: 19 },
    { name: "Jun", actual: 21, max: 27 },
];

export default function ProjectionChart() {
    
    const chartBgLight = "rgba(247,249,251,1)";          
    const chartBgDark = "rgba(255,255,255,0.05)";        
    const barFill = "rgba(168,197,218,1)";               
    const barBackground = "rgba(168,197,218,0.18)";      
    const gridStroke = document.documentElement.classList.contains("dark")
        ? "rgba(255,255,255,0.06)"   
        : "#dbdbdb";                      

    return (
        <div
            className="w-full h-[252px] px-8 pb-10 pt-6 rounded-xl bg-[rgba(247,249,251,1)] dark:bg-[rgba(255,255,255,0.05)] shadow-sm"

        >
           
            <h2 className="text-sm font-semibold mb-4">Projections vs Actuals</h2>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barSize={20}>
                    <CartesianGrid vertical={false} stroke={gridStroke} />


                   
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis
                        ticks={[0, 10, 20, 30]}
                        domain={[0, 30]}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => `${value}m`}
                    />

                    <Tooltip cursor={false} formatter={(val) => `${val}m`} />


                 
                    <Bar
                        dataKey="actual"
                        fill={barFill}
                        radius={[6, 6, 0, 0]}
                        background={{ fill: barBackground, radius: [6, 6, 0, 0] }}
                    />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
