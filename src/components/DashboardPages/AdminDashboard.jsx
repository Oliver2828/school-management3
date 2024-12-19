import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", earnings: 4000, expenses: 2400 },
  { name: "Feb", earnings: 3000, expenses: 1398 },
  { name: "Mar", earnings: 2000, expenses: 9800 },
  { name: "Apr", earnings: 2780, expenses: 3908 },
];

const AdminDashboard = () => {
  return (
    <div className="h-auto px-4 lg:px-8 py-6">
      <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">Admin Dashboard</h1>
      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-bold">Students</h2>
          <p className="text-2xl">150,000</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-bold">Teachers</h2>
          <p className="text-2xl">2,250</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-bold">Parents</h2>
          <p className="text-2xl">5,690</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-bold">Earnings</h2>
          <p className="text-2xl">$193,000</p>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-bold mb-4 text-center lg:text-left">Earnings vs Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#8884d8" />
            <Bar dataKey="expenses" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
