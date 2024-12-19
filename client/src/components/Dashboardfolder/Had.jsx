import React from "react";

function Had() {
  return (
    <div className="bg-blue-800 text-white flex items-center justify-between px-5 py-3 mb-4">
      {/* Left: Logo and Branding */}
      <div className="flex items-center">
        <div className="bg-white rounded-full p-2">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo URL
            alt="Logo"
            className="w-8 h-8"
          />
        </div>
        <span className="text-xl font-bold ml-3">AKKHOR™</span>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 mx-5">
        <input
          type="text"
          placeholder="Find Something..."
          className="w-full bg-white text-gray-700 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Right: Icons and Profile */}
      <div className="flex items-center space-x-5">
        {/* Notifications */}
        <div className="relative">
          <span className="material-icons text-white cursor-pointer">notifications</span>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            8
          </span>
        </div>

        {/* Messages */}
        <div className="relative">
          <span className="material-icons text-white cursor-pointer">email</span>
          <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            5
          </span>
        </div>

        {/* Language Selector */}
        <select className="bg-transparent text-white outline-none">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>

        {/* Profile */}
        <div className="flex items-center cursor-pointer">
          <img
            src="https://via.placeholder.com/40" // Replace with a user profile image URL
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="ml-2">Steve Zone</span>
        </div>
      </div>
    </div>
  );
}

export default Had;
