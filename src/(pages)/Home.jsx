import React from 'react'
import StatCard from '../components/home-page/StatCard'
import ProjectionChart from '../components/home-page/ProjectionChart'
import RevenueChart from '../components/home-page/RevenueChart'
import TotalSalesChart from '../components/home-page/TotalSalesChart'
import RevenueByLocation from '../components/home-page/RevenueByLocation'
import TopSellingProducts from '../components/home-page/TopSellingProducts'

function Home() {
  return (
    <div>
      <div className="p-7 flex flex-col gap-7 overflow-y-auto scrollbar-hide">
        <div className="p-1 text-black dark:text-white font-semibold text-sm">
          eCommerce
        </div>
        <div className="w-full gap-7 flex  items-center justify-between">
        <div className="w-1/2">
           <StatCard />
        </div>
        <div className="w-1/2">
          <ProjectionChart />
        </div>
      </div>
      <div className="w-full flex gap-7 items-center justify-between">
        <div className="w-full">
          <RevenueChart />
        </div>
        <div className="">
          <RevenueByLocation />
        </div>
      </div>
      <div className="w-full flex items-center gap-7 justify-between">
        <div className="w-full">
           <TopSellingProducts />
        </div>
        <div className="">
           <TotalSalesChart />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
