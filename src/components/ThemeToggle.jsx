import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-md cursor-pointer text-[#1c1c1c] dark:text-white"
    >
      {theme === "dark" ? (
        <FiSun />
      ) : (
        <FiSun />
      )}
    </button>
  );
}
