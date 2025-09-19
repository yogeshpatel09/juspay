import React from 'react'
import ThemeToggle from '../ThemeToggle'
import { CiSearch } from 'react-icons/ci'
import { FaClockRotateLeft, FaRegStar } from 'react-icons/fa6'
import { VscBell } from 'react-icons/vsc'
import { MdOutlineViewSidebar } from 'react-icons/md'

function Header({ onToggleLeft, onToggleRight }) {
    return (
        <div>
            <div className="h-16 border-b  border-[rgba(28,28,28,0.1)] dark:border-[rgba(255,255,255,0.1)] px-7 py-5 flex justify-between">
                <div className="flex w-full dark:text-white">

                    <div onClick={() => onToggleLeft && onToggleLeft()} className='px-2 py-1'><MdOutlineViewSidebar /></div>
                    <div className='px-2 py-1'><FaRegStar /></div>
                    <div className='px-2 py-1 dark:text-[rgba(255,255,255,0.4)]'>Dashboards</div>
                    <div className='px-2 py-1 dark:text-[rgba(255,255,255,0.4)]'>/</div>
                    <div className='px-2 py-1 dark:text-white'>Default</div>

                </div>
                <div className="flex items-center dark:text-white">
                    <div className='px-2 py-1 relative mt-6'>
                        <div className="absolute top-2.5 left-4">
                            <CiSearch />
                        </div>
                        <input type="search"
                            placeholder='Search '
                            className='bg-[rgba(255,255,255,0.1)] rounded-full pl-7 h-7 text-xs py-0.5  w-[160px] outline-none '
                        />
                        <div className="relative -top-7  -right-32 dark:text-[rgba(255, 255, 255, 0.2)] w-7">
                            ⌘/
                        </div>
                    </div>
                    <div className='px-2 py-1'>
                        <ThemeToggle />
                    </div>
                    <div className='px-2 py-1'>
                       <FaClockRotateLeft />
                    </div>
                    <div className='px-2 py-1'>
                        <VscBell />
                    </div>
                    <div onClick={() => onToggleRight && onToggleRight()} className='px-2 py-1'>
                        <MdOutlineViewSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
