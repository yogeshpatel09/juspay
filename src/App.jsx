import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import Aside from "./components/layouts/Aside";
import Home from "./(pages)/Home";
import Default from "./(pages)/dashboard/Default";
import Project from "./(pages)/dashboard/Project";
import OnlineCourses from "./(pages)/dashboard/OnlineCourses";
import Account from "./(pages)/page/Account";
import Corporate from "./(pages)/page/Corporate";
import Profile from "./(pages)/page/Profile";
import Social from "./(pages)/page/Social";
import Blog from "./(pages)/page/Blog";
import Documents from "./(pages)/page/profile/Documents";
import Followers from "./(pages)/page/profile/Followers";
import Overview from "./(pages)/page/profile/Overview";
import ProjectProfile from "./(pages)/page/profile/Project";
import Campaigns from "./(pages)/page/profile/Campaigns";
import Ecommerce from "./(pages)/dashboard/Ecommerce";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(s => !s);
  const toggleAside = () => setIsAsideOpen(s => !s);
  const [currentPageTitle, setCurrentPageTitle] = useState("Default");
  return (
    <Router>
      <div className="flex w-full dark:bg-[#1c1c1c] h-screen scrollbar-hide">   
        <div className={`flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${isSidebarOpen ? "w-[212px]" : "w-0"}`}>
          <Sidebar collapsed={!isSidebarOpen} onSelect={(title) => setCurrentPageTitle(title)}/>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide w-full">
          <Header onToggleLeft={toggleSidebar} onToggleRight={toggleAside} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/default" element={<Default/>} />
            <Route path="/dashboard/ecommerce" element={<Ecommerce/>} />
            <Route path="/dashboard/online-courses" element={<OnlineCourses/>} />
            <Route path="/dashboard/project" element={<Project/>} />
            <Route path="/page/Account" element={<Account/>} />
            <Route path="/page/blog" element={<Blog/>} />
            <Route path="/page/corporate" element={<Corporate/>} />
            <Route path="/page/profile" element={<Profile/>} />
            <Route path="/page/social" element={<Social/>} />
            <Route path="/profile/compaings" element={<Campaigns/>} />
            <Route path="/profile/documents" element={<Documents/>} />
            <Route path="/profile/followers" element={<Followers/>} />
            <Route path="/profile/Overview" element={<Overview/>} />
            <Route path="/profile/project" element={<ProjectProfile/>} />
            
          </Routes>
        </div>
        <div className={`flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${isAsideOpen ? "w-64" : "w-0"}`}>
          <Aside hidden={!isAsideOpen} />
        </div>
      </div>
    </Router>
  );
}
