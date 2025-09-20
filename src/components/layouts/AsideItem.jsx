
import React from "react";

export default function AsideItem({ image, title, time, icon }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2  dark:hover:bg-gray-800 rounded-lg cursor-pointer">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <div className="h-7 w-7 bg-[rgba(227,245,255,1)] flex items-center justify-center rounded-lg">
          {icon && React.createElement(icon, { size: 16, className: "z-10" })}
        </div>
      )}
      {/* Text */}
      <div className="flex-1">
        <h4 className="text-sm font-medium dark:text-white">
          {title.length > 30 ? title.slice(0, 25) + "..." : title}
        </h4>
        {time && (
          <p className="text-xs text-[rgba(28,28,28,0.4)] dark:text-[rgba(255,255,255,0.4)]">{time}</p>
        )}
      </div>
    </div>
  );
}
