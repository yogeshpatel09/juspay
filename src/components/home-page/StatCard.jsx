import React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

function StatCard() {
    return (
        <div className="sm:flex gap-7">
            <div className="flex flex-wrap  gap-7">
                <div className="p-6 flex flex-col rounded-xl gap-2 w-full h-[112px] transition-colors xl:max-w-[202px] bg-[rgba(227,245,255,1)]  text-[#1c1c1c] dark:bg-[#E3F5FF] dark:text-[#1C1C1C]">
                    <div className="text-sm font-medium">Customers</div>
                    <div className="flex justify-between items-end">
                        <div className="text-xl font-bold">3,781</div>
                        <div className="text-sm font-semibold flex gap-1"><span>+11.01% </span><span><FaArrowTrendUp size={16} /></span></div>
                    </div>
                </div>


                <div className="p-6 mb-4 lg:mb-0 flex flex-col rounded-xl gap-2 w-full h-[112px]  transition-colors xl:max-w-[202px] bg-[rgba(247,249,251,1)]  text-[#1c1c1c] dark:bg-[rgba(255,255,255,0.05)] dark:text-[#FFFFFF]">
                    <div className="text-sm font-medium">Revenue</div>
                    <div className="flex justify-between items-end">
                        <div className="text-xl font-bold">$695</div>
                        <div className="text-sm font-semibold flex gap-1"><span>+15.03% </span><span><FaArrowTrendUp size={16} /></span></div>
                    </div>
                </div>

            </div>
            <div className="flex flex-wrap  gap-4">
                <div className="p-6 flex flex-col rounded-xl gap-2 w-full h-[112px]  transition-colors xl:max-w-[202px] bg-[rgba(247,249,251,1)]  text-[#1c1c1c] dark:bg-[rgba(255,255,255,0.05)] dark:text-[#FFFFFF]">
                    <div className="text-sm font-medium">Orders</div>
                    <div className="flex justify-between items-end">
                        <div className="text-xl font-bold">1,219</div>
                        <div className="text-sm font-semibold flex gap-1"><span>-0.03% </span><span><FaArrowTrendDown size={16} /></span></div>
                    </div>
                </div>


               <div className="p-6 flex flex-col rounded-xl gap-2 w-full h-[112px]  transition-colors xl:max-w-[202px] bg-[rgba(229,236,246,1)] text-[#1c1c1c] dark:bg-[rgba(229,236,246,1)] dark:text-[#1C1C1C]">
                <div className="text-sm font-medium">Growth</div>
                <div className="flex justify-between items-end">
                    <div className="text-xl font-bold">30.1%</div>
                    <div className="text-sm font-semibold flex gap-1"><span>+6.08% </span><span><FaArrowTrendUp size={16} /></span></div>
                </div>
            </div>

            </div>
        </div>
    );
}

export default StatCard;
