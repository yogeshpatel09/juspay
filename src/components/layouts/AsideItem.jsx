
import React from "react";

export default function AsideItem({ image, title, time,icon }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2  dark:hover:bg-gray-800 rounded-lg cursor-pointer">
      {image ? (
      <img
        src={image}
        alt={title}
        className="w-8 h-8 rounded-full object-cover"
      />
    ):(
         <div className="h-8 w-8 bg-[rgba(227,245,255,1)] flex items-center justify-center rounded-lg">
          {icon && <icon size={16} className="text-blue-500" />}
        </div>
    )}

      {/* Text */}
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
          {title.length > 30 ? title.slice(0, 25) + "..." : title}
        </h4>
        {time &&(
        <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
        )}
      </div>
    </div>
  );
}
