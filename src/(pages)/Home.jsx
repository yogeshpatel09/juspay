import React from 'react'
import StatCard from '../components/home-page/StatCard'
import ProjectionChart from '../components/home-page/ProjectionChart'
import RevenueChart from '../components/home-page/RevenueChart'
import TotalSalesChart from '../components/home-page/TotalSalesChart'
import RevenueByLocation from '../components/home-page/RevenueByLocation'
import TopSellingProducts from '../components/home-page/TopSellingProducts'
import { useLocation } from 'react-router-dom'


function Home() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const lastRouteName = pathnames.length > 0 
    ? pathnames[pathnames.length - 1].charAt(0).toUpperCase() + pathnames[pathnames.length - 1].slice(1)
    : "Home";
  return (
    <div className='' >
      <div className="p-7 pb-20 flex flex-col gap-7 h-screen overflow-y-auto scrollbar-hide ">
        <div className="p-1 text-black dark:text-white font-semibold text-sm">
          {lastRouteName === "Default" ?(
            <div className="">
              Ecommerce
            </div>
          ):(
            <div className="">
              {lastRouteName}
            </div>
          )}
        </div>
        <div className="w-full gap-7 flex flex-col xl:flex-row  items-center justify-between">
        <div className="xl:w-1/2 w-full">
           <StatCard />
        </div>
        <div className="xl:w-1/2 w-full">
          <ProjectionChart />
        </div>
      </div>
      <div className="w-full gap-7 flex flex-col lg:flex-row  items-center justify-between">
        <div className="w-full">
          <RevenueChart />
        </div>
        <div className=" h-full w-full lg:w-[252px]">
          <RevenueByLocation />
        </div>
      </div>
      <div className="w-full gap-7 flex flex-col lg:flex-row  items-center justify-between">
        <div className="w-full h-full">
           <TopSellingProducts />
        </div>
        <div className="h-full w-full lg:w-[252px]">
           <TotalSalesChart />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
