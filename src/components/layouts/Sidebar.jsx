import React from "react";
import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import sidebarData from "../../data/SidebarData";
import { Link, useNavigate } from "react-router-dom";
import { PiChartPieSlice } from "react-icons/pi";

export default function Sidebar({ collapsed = false, onSelect }) {
    const [openMenus, setOpenMenus] = useState({});
    const [activeItem, setActiveItem] = useState("/");
    const navigate = useNavigate();
    const toggleMenu = (title) => {
        setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
    };
    const renderItems = (items, level = 0) => {
        return (
            <ul className={`pl-${level * 2}`}>
                {items.map((item, i) => (
                    <li key={i} className="my-1 relative">
                        <button
                            onClick={() => {
                                if (item.children) {
                                    toggleMenu(item.title);
                                    setActiveItem(item.title);
                                    onSelect?.(item.title);
                                } else {
                                    setActiveItem(item.title);
                                    onSelect?.(item.title);
                                    if (item.path) navigate(item.path);
                                }
                            }}
                            className={`flex items-center gap-1 w-full text-sm text-[#1C1C1C] dark:border-[rgba(28,28,28,0.1)] px-2 py-1 rounded-lg ${activeItem === item.title
                                ? 'bg-[rgba(28,28,28,0.05)] dark:bg-[rgba(255,255,255,0.1)]'
                                : 'hover:bg-[rgba(28,28,28,0.05)] hover:dark:bg-[rgba(255,255,255,0.1)]'
                                }`}
                        >
                            <div className={`left-1 absolute h-5 rounded-full w-1.5 bg-[#1C1C1C] dark:bg-[#C6C7F8] ${activeItem === item.title ? 'block' : 'hidden hover:block'}`}></div>
                            <div className="h-6 w-6 flex justify-center items-center dark:text-white  text-[rgba(28, 28, 28, 0.2)]">
                                {level === 0 && (
                                    <div className="">
                                        {openMenus[item.title] ? <FiChevronDown /> : <FiChevronRight />}
                                    </div>
                                )}
                            </div>
                            <span className="flex items-center gap-2 dark:text-white">
                                {item.icon ? (
                                    // <img src={item.icon} alt="icon" className='dark:bg-white h-5 w-5' />
                                    <item.icon size='16' className='h-4 w-4 text-[#1C1C1C] dark:text-white' />
                                ) :
                                    (
                                        <div className=""></div>
                                    )}

                                {item.title}
                            </span>

                        </button>
                        {openMenus[item.title] && item.children && (
                            <div className="ml-4.5">{renderItems(item.children, level + 1)}</div>
                        )}
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <div className={`w-full h-screen overflow-y-auto border-r border-gray-200 dark:border-[rgba(255,255,255,0.1)] px-4 py-5 ovey scrollbar-hide
  transition-opacity duration-200 ${collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <div className="mb-4 flex gap-2 p-1">

                <img src="/images/user.png" alt="" className="h-6 w-6 rounded-full" />

                <h2 className="text-md  text-[#1c1c1c] dark:text-gray-100">ByeWind</h2>
            </div>
            <nav className="">
                <div className="text-sm  mt-4 mb-2 flex gap-2 items-start">
                    <span className="  text-[rgba(28,28,28,0.4)] dark:text-[rgba(255,255,255,0.4)] cursor-pointer px-2 py-1">Favorites</span>
                    <span className=" text-[rgba(28,28,28,0.2)] dark:hover:text-[rgba(255,255,255,0.4)] dark:text-[rgba(255,255,255,0.2)]  hover:text-[rgba(28,28,28,0.4)]  cursor-pointer px-2 py-1">Recently</span>
                </div>
                <div className="space-y-1 px-2">
                    {sidebarData.favorites.map((item, i) => (
                        <div key={i} className="flex  gap-1 items-center px-2 py-1">
                            <div className="bg-[rgba(28,28,28,0.2)] dark:bg-[rgba(255,255,255,0.2)] h-1.5 w-1.5 rounded-full"></div>
                            <Link
                                to={item.path}
                                className="text-sm text-[#1C1C1C] dark:text-white "
                            >
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
                <h3 className="text-sm font-medium text-[rgba(28,28,28,0.4)] dark:text-[rgba(255,255,255,0.4)]  mt-4 px-3 py-2">Dashboards</h3>
                {renderItems(sidebarData.dashboards)}
                <h3 className="text-sm font-medium text-[rgba(28,28,28,0.4)] dark:text-[rgba(255,255,255,0.4)]   mt-4 px-3 py-2">Pages</h3>
                {renderItems(sidebarData.pages)}
            </nav>

        </div>
    );
}
