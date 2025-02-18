import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeacherDetails from "../DashboardPages/TeacherDetails";
import StudentAll from "../DashboardPages/StudentAll";
import StudentDetails from "../DashboardPages/StudentDetails";
import StudentAdmission from "../DashboardPages/StudentAdmission";
import AllTeacher from "../DashboardPages/AllTeacher";
import ParentDetails from "../DashboardPages/ParentDetails";
import ParentAll from "../DashboardPages/ParentAll";
import AdminDashboard from "../DashboardPages/AdminDashboard";
import { FaBars, FaTimes } from "react-icons/fa";

function Testadmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
  const [isStudentMenuOpen, setIsStudentMenuOpen] = useState(false);
  const [isTeacherMenuOpen, setIsTeacherMenuOpen] = useState(false);
  const [isParentMenuOpen, setIsParentMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  // When the component mounts, read the role from localStorage and set default active section
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role) {
      navigate("/");
    } else {
      setUserRole(role);
      if (!activeSection) {
        if (role === "Admin") {
          setActiveSection("Admin");
        } else if (role === "Teacher") {
          setActiveSection("TeacherDetails");
        } else if (role === "Student") {
          setActiveSection("StudentDetails");
        } else if (role === "Parent") {
          setActiveSection("ParentDetails");
        }
      }
    }
  }, [navigate, activeSection]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="bg-[olive] min-h-screen grid grid-cols-1 lg:grid-cols-12">
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="block lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-800 text-white rounded"
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 bg-blue-800 text-white z-40
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:col-span-2
        `}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-end lg:hidden p-2">
          <button onClick={() => setSidebarOpen(false)} className="p-2">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="p-4 text-2xl font-bold border-b border-blue-600">
          School Dashboard
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            {/* ADMIN Dropdown – Only Admin sees full options */}
            {userRole === "Admin" && (
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
                      onClick={() => {
                        setActiveSection("Admin");
                        setSidebarOpen(false);
                      }}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                    >
                      Dashboard
                    </li>
                  </ul>
                )}
              </li>
            )}

            {/* STUDENTS Dropdown */}
            {userRole === "Admin" ? (
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
                      onClick={() => {
                        setActiveSection("StudentAll");
                        setSidebarOpen(false);
                      }}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                    >
                      All Students
                    </li>
                    <li
                      onClick={() => {
                        setActiveSection("StudentDetails");
                        setSidebarOpen(false);
                      }}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                    >
                      Student Details
                    </li>
                    <li
                      onClick={() => {
                        setActiveSection("StudentAdmission");
                        setSidebarOpen(false);
                      }}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                    >
                      Admission Form
                    </li>
                  </ul>
                )}
              </li>
            ) : userRole === "Student" ? (
              <li>
                <div
                  onClick={() => {
                    // For non-admin student, show only their details (or adjust as needed)
                    setActiveSection("StudentDetails");
                    setSidebarOpen(false);
                  }}
                  className="hover:bg-blue-700 p-2 rounded cursor-pointer"
                >
                  Students
                </div>
              </li>
            ) : null}

            {/* TEACHERS Dropdown */}
            {userRole === "Admin" ? (
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
                      onClick={() => {
                        setActiveSection("AllTeacher");
                        setSidebarOpen(false);
                      }}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                    >
                      All Teachers
                    </li>
                    <li
                      onClick={() => {
                        setActiveSection("TeacherDetails");
                        setSidebarOpen(false);
                      }}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                    >
                      Teacher Details
                    </li>
                  </ul>
                )}
              </li>
            ) : userRole === "Teacher" ? (
              <li>
                <div
                  onClick={() => {
                    setActiveSection("TeacherDetails");
                    setSidebarOpen(false);
                  }}
                  className="hover:bg-blue-700 p-2 rounded cursor-pointer"
                >
                  Teachers
                </div>
              </li>
            ) : null}

            {/* PARENTS Dropdown */}
            {userRole === "Admin" ? (
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
                      onClick={() => {
                        setActiveSection("ParentDetails");
                        setSidebarOpen(false);
                      }}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                    >
                      Parent Details
                    </li>
                    <li
                      onClick={() => {
                        setActiveSection("ParentAll");
                        setSidebarOpen(false);
                      }}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer"
                    >
                      All Parents
                    </li>
                  </ul>
                )}
              </li>
            ) : userRole === "Parent" ? (
              <li>
                <div
                  onClick={() => {
                    setActiveSection("ParentDetails");
                    setSidebarOpen(false);
                  }}
                  className="hover:bg-blue-700 p-2 rounded cursor-pointer"
                >
                  Parents
                </div>
              </li>
            ) : null}
          </ul>
        </nav>
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="bg-blue-600 text-white p-2 rounded w-full"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white lg:col-span-10 p-6 mt-16 lg:mt-0">
        {activeSection === "TeacherDetails" && <TeacherDetails />}
        {activeSection === "Admin" && <AdminDashboard />}
        {activeSection === "StudentAll" && <StudentAll />}
        {activeSection === "ParentAll" && <ParentAll />}
        {activeSection === "StudentDetails" && <StudentDetails />}
        {activeSection === "StudentAdmission" && <StudentAdmission />}
        {activeSection === "AllTeacher" && <AllTeacher />}
        {activeSection === "ParentDetails" && <ParentDetails />}
        {activeSection === "" && <AdminDashboard />}
      </div>
    </div>
  );
}

export default Testadmin;
