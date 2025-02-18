import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Landing from "./Landing"; // adjust the path as needed

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",        // New field for Student role
    studentClass: "",  // New field for Student role
  });
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!role) {
      setError("Please select a role.");
      return;
    }

    setLoading(true);

    try {
      // Include the student-specific fields only if role is Student
      const payload =
        role === "Student"
          ? { ...formData, role }
          : { ...formData, role, gender: undefined, studentClass: undefined };

      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // If the registered user is a student and a studentId is returned,
      // alert the student to save their unique ID.
      if (role === "Student" && data.studentId) {
        alert(
          `Registration successful! Your unique student ID is: ${data.studentId}. Please save this ID as it will be used in the future.`
        );
      } else {
        alert("Registration successful!");
      }

      localStorage.setItem("token", data.token);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
        studentClass: "",
      });
      setRole("");
      setShowLoginModal(true);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      {/* Header */}
      <div className="h-[80px] w-full text-white flex justify-between items-center px-6 md:px-10">
        <div className="text-[24px] md:text-[30px] flex items-center font-bold">
          <span className="text-blue-300">
            <FaHome className="text-white" />
          </span>
          <h1 className="ml-2 uppercase">olams</h1>
        </div>
        <nav className="hidden md:flex gap-[30px] lg:gap-[70px]">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/contact" className="hover:text-blue-300">
            Contact
          </Link>
          <Link to="/about" className="hover:text-blue-300">
            About
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-slate-300 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Role Selection (full width) */}
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Select Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Choose your role</option>
                  <option value="Admin">Admin</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Student">Student</option>
                  <option value="Parent">Parent</option>
                </select>
              </div>

              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                />
              </div>

              {/* Address (full width) */}
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                />
              </div>

              {/* Username (full width) */}
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                />
              </div>
            </div>

            {/* Conditionally render Gender and Class inputs for Students */}
            {role === "Student" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Gender */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Gender
                  </label>
                  <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                {/* Class */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Class
                  </label>
                  <input
                    type="text"
                    name="studentClass"
                    placeholder="Class"
                    value={formData.studentClass}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                  />
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Register"}
            </button>
          </form>
        </div>
      </div>
      {/* Conditionally render the Landing (login) modal */}
      {showLoginModal && (
        <Landing closeModal={() => setShowLoginModal(false)} />
      )}
    </div>
  );
}

export default Register;
