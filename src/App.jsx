import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import Aside from "./components/layouts/Aside";
import Home from "./(pages)/Home";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAsideOpen, setIsAsideOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(s => !s);
  const toggleAside = () => setIsAsideOpen(s => !s);
  return (
    <Router>
      <div className="flex w-full dark:bg-[#1c1c1c] min-h-screen">   
        <div className={`flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${isSidebarOpen ? "w-[212px]" : "w-0"}`}>
          <Sidebar collapsed={!isSidebarOpen} />
        </div>
        <div className="flex-1 overflow-y-auto w-full">
          <Header onToggleLeft={toggleSidebar} onToggleRight={toggleAside} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div className={`flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${isAsideOpen ? "w-64" : "w-0"}`}>
          <Aside hidden={!isAsideOpen} />
        </div>
      </div>
    </Router>
  );
}
