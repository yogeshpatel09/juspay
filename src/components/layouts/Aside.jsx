import React from "react";
export default function Aside({ hidden = false }) {
    return (
        <div className={`w-full h-screen px-4 py-5 border-l border-[rgba(28,28,28,0.1)] transition-opacity duration-200 ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <nav className="">
                <h3 className="text-sm font-semibold text-[#1c1c1c] dark:text-[rgba(255,255,255,1)]  mt-4 px-3 py-2">Notifications</h3>
                <h3 className="text-sm font-medium text-[#1c1c1c] dark:text-[rgba(255,255,255,1)] mt-4 px-3 py-2">Activities</h3>
                <h3 className="text-sm font-medium text-[#1c1c1c] dark:text-[rgba(255,255,255,1)] mt-4 px-3 py-2">Contacts</h3>
            </nav>

        </div>
    );
}
