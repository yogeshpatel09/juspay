import React, { useState, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight, FaUser } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { LuCalendar } from "react-icons/lu";
import { PiArrowsDownUpBold, PiFunnelSimple } from "react-icons/pi";
import active5 from "../../assets/users/active3.png";

const statusColors = {
  "In Progress": { light: "#8A8CD9", dark: "#8A8CD9" },
  "Complete": { light: "#4AA785", dark: "#4AA785" },
  "Pending": { light: "#59A8D4", dark: "#59A8D4" },
  "Approved": { light: "#FFC555", dark: "#FFC555" },
  "Rejected": { light: "rgba(28,28,28,0.4)", dark: "rgba(255,255,255,0.4)" },
};

const Table = ({ columns, data }) => {
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortKey, setSortKey] = useState(null);


  // Search filter
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  // Sorting
  const sortedData = useMemo(() => {
    let sortableData = [...filteredData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);


  // Pagination
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [sortedData, currentPage]);

  const pageCount = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  return (
    <div className="w-full dark:bg-[#1c1c1c] flex flex-col h-[80vh]">
      {/* Search */}
      <div className="flex justify-between items-center w-full mb-4 bg-[rgba(247,249,251,1)] dark:bg-[rgba(255,255,255,0.05)] h-11 p-2 rounded-md">
        <div className="text-[rgba(28,28,28,1)] dark:text-[rgba(255,255,255,1)] flex justify-center items-center gap-2">
          <div className="p-1 cursor-pointer">
            <IoMdAdd />
          </div>
          <div className="p-1 cursor-pointer">
            <PiFunnelSimple />
          </div>
          <div className="relative">
            <div
              className="p-1 cursor-pointer"
              onClick={() => setShowSortMenu(!showSortMenu)}
            >
              <PiArrowsDownUpBold />
            </div>

            {showSortMenu && (
              <div className="absolute z-30 top-full mt-1 -right-28 w-32 bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg ">
                {["user", "orderId", "date"].map((key) => (
                  <div
                    key={key}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
                    onClick={() => {
                      handleSort(key); // sort by selected key
                      setSortKey(key); // save selected key
                      setShowSortMenu(false); // close menu
                    }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
        <div className="relative flex items-center px-2 py-1 text-[rgba(28,28,28,0.2)] dark:text-[rgba(255,255,255,0.2)]">
          <CiSearch className="absolute left-5 text-sm" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(255,255,255,0.1)] rounded-full pl-9 h-7 text-xs w-[160px] outline-none border border-[rgba(28,28,28,0.1)] dark:border-[rgba(255,255,255,0.1)]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute right-4 text-[rgba(255,255,255,0.2)] text-xs">⌘/</div>
        </div>
      </div>

      {/* Table Scrollable */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-[850px]">
          <thead className="sticky z-20 top-0 bg-white dark:bg-[#1c1c1c] dark:text-[rgba(255,255,255,0.4)] text-[rgba(28,28,28,0.4)] dark:border-[rgba(255,255,255,0.2)] border-[rgba(28,28,28,0.2)] border-b">
            <tr>
              <td className="py-3 px-4">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setSelectAll(isChecked);
                    setSelectedRows(isChecked ? paginatedData.map((_, idx) => idx) : []);
                  }}
                  className="appearance-none w-4 h-4 rounded-md border border-[rgba(28,28,28,0.4)] dark:border-[rgba(255,255,255,0.4)] cursor-pointer checked:bg-[rgba(28,28,28,1)] dark:checked:bg-[rgba(198,199,248,1)] relative checked:before:content-['✔'] checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:text-white dark:checked:before:text-black checked:before:justify-center checked:before:text-[11px]"
                />
              </td>
              {columns.map((col) => (
                <th key={col.key} onClick={() => handleSort(col.key)} className="py-3 px-4 font-normal">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, i) => (
              <tr
                key={i}
                className="border-b border-[rgba(28,28,28,0.05)] dark:border-[rgba(255,255,255,0.1)] text-[rgba(28,28,28,1)] dark:text-[rgba(255,255,255,1)] hover:bg-[rgba(247,249,251,1)] dark:hover:bg-[rgba(255,255,255,0.05)] group text-xs"
              >
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(i)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRows([...selectedRows, i]);
                      } else {
                        setSelectedRows(selectedRows.filter((id) => id !== i));
                        setSelectAll(false);
                      }
                    }}
                    className={`appearance-none ${selectedRows.includes(i) ? "opacity-100" : "opacity-0 group-hover:opacity-100"} w-4 h-4 rounded-md border border-[rgba(28,28,28,0.4)] dark:border-[rgba(255,255,255,0.4)] cursor-pointer checked:bg-[rgba(28,28,28,1)] dark:checked:bg-[rgba(198,199,248,1)] relative checked:before:content-['✔'] checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-white checked:before:text-[11px]`}
                  />
                </td>

                {columns.map((col) => (
                  <td key={col.key} className="py-3 px-4">
                    {col.key === "status" ? (
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 dark:hidden rounded-full"
                          style={{
                            backgroundColor: statusColors[row[col.key]].light,
                            color: statusColors[row[col.key]].light,
                          }}
                        ></span>
                        <span
                          className="hidden dark:block w-2 h-2 rounded-full"
                          style={{ backgroundColor: statusColors[row[col.key]].dark }}
                        ></span>
                        <span className="dark:hidden" style={{ color: statusColors[row[col.key]].light }}>
                          {row[col.key]}
                        </span>
                        <span className="hidden dark:block" style={{ color: statusColors[row[col.key]].dark }}>
                          {row[col.key]}
                        </span>
                      </div>
                    ) : col.key === "user" ? (
                      <div className="flex items-center gap-2">
                        <img
                          src={row.avatar || active5}
                          alt={row.user}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        {row[col.key]}
                      </div>
                    ) : col.key === "date" ? (
                      <div className="flex items-center gap-2">
                        <LuCalendar className="text-[rgba(28,28,28,0.6)] dark:text-[rgba(255,255,255,0.6)]" />
                        {row[col.key]}
                      </div>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-2 py-1"
        >
          <FaAngleLeft className="dark:text-white cursor-pointer" />
        </button>
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 cursor-pointer rounded-md ${currentPage === i + 1
              ? "dark:bg-[rgba(255,255,255,0.1)] bg-[rgba(28,28,28,0.05)] text-black"
              : "dark:text-white text-[rgba(28,28,28,1)]"
              }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount))}
          className="px-2 py-1"
        >
          <FaAngleRight className="dark:text-white cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Table;
