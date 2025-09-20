import React from "react";
import data from "../data/OrderListData";
import Table from "../components/ui/Table";

const OrdersPage = () => {
  const columns = [
    { key: "orderId", label: "Order ID" },
    { key: "user", label: "User" },
    { key: "project", label: "Project" },
    { key: "address", label: "Address" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status" },
    { key: "", label: "" },
  ];

  return (
    <div className="p-8 dark:bg-[#1c1c1c] h-screen overflow-y-auto scrollbar-hide">
        <h1 className="text-sm font-semibold  text-black mb-4 dark:text-white ">Orders List</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default OrdersPage;
