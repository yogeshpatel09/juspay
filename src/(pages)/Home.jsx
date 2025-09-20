import React from 'react'
import StatCard from '../components/home-page/StatCard'
import ProjectionChart from '../components/home-page/ProjectionChart'
import RevenueChart from '../components/home-page/RevenueChart'

function Home() {
  return (
    <div>
      <div className="p-7 flex flex-col gap-4 overflow-y-auto scrollbar-hide">
        <div className="p-1 text-black dark:text-white font-semibold text-sm">
          eCommerce
        </div>
        <div className=" w-full h-full flex flex-wrap">
          <div className="w-1/2 flex gap-2">
            <div className="grid grid-cols-2 gap-x-4 w-1/2">
                <StatCard/>
            </div>
          </div>
          <div className="w-1/2 flex gap-2">
           <ProjectionChart />
          </div>
        </div>
        <div className="w-full">
          <div className="w-[60%]">
            <RevenueChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
