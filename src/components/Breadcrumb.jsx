import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center gap-1">
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={routeTo}>
            <span
              className={`px-2 py-1 ${isLast ? "dark:text-white font-semibold" : "dark:text-[rgba(255,255,255,0.4)]"}`}
            >
              {isLast
                ? name.charAt(0).toUpperCase() + name.slice(1)
                : <span to={routeTo}>{name.charAt(0).toUpperCase() + name.slice(1)}</span>}
            </span>

            {/* Show '/' only if not last element */}
            {!isLast && (
              <span className="px-2 py-1 dark:text-[rgba(255,255,255,0.4)]">/</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
