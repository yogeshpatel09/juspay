
import React from "react";
import AsideItem from "./AsideItem";
import { AsideData } from "../../data/AsideData";

export default function Aside({ hidden = false }) {
  return (
    <div
      className={`w-full h-screen px-4 py-5 dark:border-[rgba(255,255,255,0.1)] border-l border-[rgba(28,28,28,0.1)] transition-opacity duration-200 ${
        hidden
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      <nav>
    
        <h3 className="text-sm font-semibold text-[#1c1c1c] dark:text-white px-3 py-2">
          Notifications
        </h3>
        <div className="mt-2 space-y-2">
          {AsideData.notifications.map((item, i) => (
            <AsideItem key={i} {...item} />
          ))}
        </div>

       
        <h3 className="text-sm font-semibold text-[#1c1c1c] dark:text-white px-3 py-2 mt-4">
          Activities
        </h3>
        <div className="mt-2 space-y-2">
          {AsideData.activities.map((item, i) => (
            <AsideItem key={i} {...item} />
          ))}
        </div>

       
        <h3 className="text-sm font-semibold text-[#1c1c1c] dark:text-white px-3 py-2 mt-4">
          Contacts
        </h3>
        <div className="mt-2 space-y-2">
          {AsideData.contacts.map((item, i) => (
            <AsideItem key={i} {...item} />
          ))}
        </div>
      </nav>
    </div>
  );
}
