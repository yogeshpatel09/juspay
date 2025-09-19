import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import Aside from "./components/layouts/Aside";
import Home from "./(pages)/Home";

export default function App() {
  return (
    <Router>
      <div className="flex w-full dark:bg-[#1c1c1c]">
        <div className="w-[212px]">
          <Sidebar />
        </div>
        <div className="flex-1  overflow-y-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div className="w-64">
          <Aside />
        </div>
      </div>
    </Router>
  );
}
