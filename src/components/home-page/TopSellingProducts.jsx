import React from "react";

const products = [
  { name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: 6518.18 },
  { name: "Marco Lightweight Shirt", price: 128.5, quantity: 37, amount: 4754.5 },
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

export default function TopSellingProducts() {
  return (
    <div className="p-6 bg-[#F7F9FB] dark:bg-[rgba(255,255,255,0.05)]  rounded-2xl shadow">
      <h2 className="text-lg font-bold mb-4 text-[#1C1C1C] dark:text-white px-4">Top Selling Products</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className=" text-[rgba(28,28,28,0.4)] dark:text-[rgba(255,255,255,0.4)] text-left">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} className=" dark:text-white ">
                <td className="py-2 px-4">{p.name}</td>
                <td className="py-2 px-4">${p.price.toFixed(2)}</td>
                <td className="py-2 px-4">{p.quantity}</td>
                <td className="py-2 px-4">${p.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
