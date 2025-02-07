import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMenu = (menu) => setActiveMenu(activeMenu === menu ? null : menu);

  return (
    <div className="flex h-screen">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-white bg-blue-800 p-3 rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-800 text-white transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full"
        } lg:translate-x-0 lg:w-64 z-40`}
      >
        <div className="p-4 text-2xl font-bold border-b border-blue-600">
          School Dashboard
        </div>
        <nav className="p-4 space-y-4">
          {[
            { name: "Admin", subItems: ["Dashboard"] },
            { name: "Students", subItems: ["All Students", "Student Details", "Admission Form", "Student Promotion"] },
            { name: "Teachers", subItems: ["All Teachers", "Teacher Details"] },
            { name: "Parents", subItems: ["All Parents", "Parent Details"] },
          ].map((menu, index) => (
            <div key={index}>
              <div
                className="hover:bg-blue-700 p-3 rounded cursor-pointer flex justify-between"
                onClick={() => toggleMenu(menu.name)}
              >
                <span>{menu.name}</span>
                <span>{activeMenu === menu.name ? "-" : "+"}</span>
              </div>
              {activeMenu === menu.name && (
                <ul className="ml-4 space-y-2">
                  {menu.subItems.map((item, subIndex) => (
                    <li key={subIndex} className="hover:bg-blue-600 p-3 rounded cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-0" : "ml-0"} lg:ml-64 p-6`}>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {[
            { label: "Students", value: "150,000" },
            { label: "Teachers", value: "2,250" },
            { label: "Parents", value: "5,690" },
            { label: "Earnings", value: "$193,000" },
          ].map((item, index) => (
            <div key={index} className="bg-white text-black p-6 rounded shadow-md">
              <h2 className="text-lg font-bold">{item.label}</h2>
              <p className="text-2xl">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
