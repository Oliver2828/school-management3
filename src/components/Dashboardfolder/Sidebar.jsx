import React, { useState } from "react";

const Sidebar = () => {
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
  const [isStudentMenuOpen, setIsStudentMenuOpen] = useState(false);
  const [isTeacherMenuOpen, setIsTeacherMenuOpen] = useState(false);
  const [isParentMenuOpen, setIsParentMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const closePopup = () => setPopupContent(null);

  const openPopup = (content) => {
    setPopupContent(content);
  };

  return (
    <div className="flex h-screen">
      {/* Hamburger Button */}
      <button
        className="lg:hidden bg-blue-800 text-white p-4"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block w-64 bg-blue-800 text-white h-screen flex flex-col transition-all duration-300`}
      >
        <div className="p-4 text-2xl font-bold">School Dashboard</div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            {/* Admin Dropdown */}
            <li>
              <div
                onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
                className="hover:bg-blue-700 p-2 rounded cursor-pointer flex justify-between items-center"
              >
                <span>Admin</span>
                <span>{isAdminMenuOpen ? "-" : "+"}</span>
              </div>
              {isAdminMenuOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li
                    onClick={() => openPopup("Dashboard Content")}
                    className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                  >
                    Dashboard
                  </li>
                </ul>
              )}
            </li>

            {/* Students Dropdown */}
            <li>
              <div
                onClick={() => setIsStudentMenuOpen(!isStudentMenuOpen)}
                className="hover:bg-blue-700 p-2 rounded cursor-pointer flex justify-between items-center"
              >
                <span>Students</span>
                <span>{isStudentMenuOpen ? "-" : "+"}</span>
              </div>
              {isStudentMenuOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li
                    onClick={() => openPopup("All Students Content")}
                    className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                  >
                    All Students
                  </li>
                  <li
                    onClick={() => openPopup("Student Details Content")}
                    className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                  >
                    Student Details
                  </li>
                  <li
                    onClick={() => openPopup("Admission Form Content")}
                    className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                  >
                    Admission Form
                  </li>
                  <li
                    onClick={() => openPopup("Student Promotion Content")}
                    className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                  >
                    Student Promotion
                  </li>
                </ul>
              )}
            </li>

            {/* Teachers Dropdown */}
            <li>
              <div
                onClick={() => setIsTeacherMenuOpen(!isTeacherMenuOpen)}
                className="hover:bg-blue-700 p-2 rounded cursor-pointer flex justify-between items-center"
              >
                <span>Teachers</span>
                <span>{isTeacherMenuOpen ? "-" : "+"}</span>
              </div>
              {isTeacherMenuOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li
                    onClick={() => openPopup("All Teachers Content")}
                    className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                  >
                    All Teachers
                  </li>
                  <li
                    onClick={() => openPopup("Teacher Details Content")}
                    className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                  >
                    Teacher Details
                  </li>
                </ul>
              )}
            </li>

            {/* Parents Dropdown */}
            <li>
              <div
                onClick={() => setIsParentMenuOpen(!isParentMenuOpen)}
                className="hover:bg-blue-700 p-2 rounded cursor-pointer flex justify-between items-center"
              >
                <span>Parents</span>
                <span>{isParentMenuOpen ? "-" : "+"}</span>
              </div>
              {isParentMenuOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li
                    onClick={() => openPopup("All Parents Content")}
                    className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                  >
                    All Parents
                  </li>
                  <li
                    onClick={() => openPopup("Parent Details Content")}
                    className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                  >
                    Parent Details
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Popup Modal */}
      {popupContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded shadow-lg w-96">
            <button
              onClick={closePopup}
              className="bg-red-500 text-white px-4 py-2 rounded absolute top-2 right-2"
            >
              Close
            </button>
            <div>{popupContent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
