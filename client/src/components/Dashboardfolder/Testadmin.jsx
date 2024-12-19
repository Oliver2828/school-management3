import React, { useState } from "react";
import TeacherDetails from "../DashboardPages/TeacherDetails";
import StudentAll from "../DashboardPages/StudentAll"; // Replace with your actual component
import StudentDetails from "../DashboardPages/StudentDetails"; // Replace with your actual component
import StudentAdmission from "../DashboardPages/StudentAdmission"; // Replace with your actual component
import AllTeacher from "../DashboardPages/AllTeacher"; // Replace with your actual component
import ParentDetails from "../DashboardPages/ParentDetails"; // Replace with your actual component
import ParentAll from "../DashboardPages/ParentAll";
import AdminDashboard from '../DashboardPages/AdminDashboard'

function Testadmin() {
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
  const [isStudentMenuOpen, setIsStudentMenuOpen] = useState(false);
  const [isTeacherMenuOpen, setIsTeacherMenuOpen] = useState(false);
  const [isParentMenuOpen, setIsParentMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section

  return (
    <>
      <div className="bg-[olive] min-h-[100vh] grid grid-cols-12">
        {/* Sidebar */}
        <div className="bg-blue-800 col-span-2">
          <div className="p-4 text-2xl font-bold text-white">School Dashboard</div>
          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              {/* Admin Dropdown */}
              <li>
                <div
                  onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
                  className="hover:bg-blue-700 p-2 rounded cursor-pointer flex justify-between items-center text-white"
                >
                  <span>Admin</span>
                  <span>{isAdminMenuOpen ? "-" : "+"}</span>
                </div>
                {isAdminMenuOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li
                      onClick={() => setActiveSection("Admin")}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer text-white"
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
                  className="hover:bg-blue-700 p-2 rounded cursor-pointer flex justify-between items-center text-white"
                >
                  <span>Students</span>
                  <span>{isStudentMenuOpen ? "-" : "+"}</span>
                </div>
                {isStudentMenuOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li
                      onClick={() => setActiveSection("StudentAll")}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer text-white"
                    >
                      All Students
                    </li>
                    <li
                      onClick={() => setActiveSection("StudentDetails")}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer text-white"
                    >
                      Student Details
                    </li>
                    <li
                      onClick={() => setActiveSection("StudentAdmission")}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer text-white"
                    >
                      Admission Form
                    </li>
                  </ul>
                )}
              </li>

              {/* Teachers Dropdown */}
              <li>
                <div
                  onClick={() => setIsTeacherMenuOpen(!isTeacherMenuOpen)}
                  className="hover:bg-blue-700 p-2 rounded cursor-pointer flex justify-between items-center text-white"
                >
                  <span>Teachers</span>
                  <span>{isTeacherMenuOpen ? "-" : "+"}</span>
                </div>
                {isTeacherMenuOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li
                      onClick={() => setActiveSection("AllTeacher")}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer text-white"
                    >
                      All Teachers
                    </li>
                    <li
                      onClick={() => setActiveSection("TeacherDetails")}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer text-white"
                    >
                      Teachers Details
                    </li>
                  </ul>
                )}
              </li>

              {/* Parents Dropdown */}
              <li>
                <div
                  onClick={() => setIsParentMenuOpen(!isParentMenuOpen)}
                  className="hover:bg-blue-700 p-2 rounded cursor-pointer flex justify-between items-center text-white"
                >
                  <span>Parents</span>
                  <span>{isParentMenuOpen ? "-" : "+"}</span>
                </div>
                {isParentMenuOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li
                      onClick={() => setActiveSection("ParentDetails")}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer text-white"
                    >
                      Parent Details
                    </li>
                    <li
                      onClick={() => setActiveSection("ParentAll")}
                      className="hover:bg-blue-600 p-2 rounded cursor-pointer text-white"
                    >
                      All Parents
                    </li>
                  </ul>
                  
                  
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="bg-[white] col-span-10 p-6">
          {/* Render Content Based on Active Section */}
          {activeSection === "TeacherDetails" && <TeacherDetails />}
          {activeSection === "Admin" && <AdminDashboard />}
          {activeSection === "StudentAll" && <StudentAll />}
          {activeSection === "ParentAll" && <ParentAll />}
          {activeSection === "StudentDetails" && <StudentDetails />}
          {activeSection === "StudentAdmission" && <StudentAdmission />}
          {activeSection === "AllTeacher" && <AllTeacher />}
          {activeSection === "ParentDetails" && <ParentDetails />}
          {activeSection === "" &&  <AdminDashboard/>}
        </div>
      </div>
    </>
  );
}

export default Testadmin;
