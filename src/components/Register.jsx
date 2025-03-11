import React, { useState } from "react";
import { FaHome, FaEye, FaEyeSlash } from "react-icons/fa";
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
    gender: "Male",         // default for Student/Parent/Teacher
    studentClass: "Class 1", // default for Students
    occupation: "",          // for Parent
    subject: "",             // for Teacher
  });
  const [role, setRole] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // State variables for toggling password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validations
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
      // Create a FormData object to handle file upload + text fields.
      const payload = new FormData();
      payload.append("firstName", formData.firstName);
      payload.append("lastName", formData.lastName);
      payload.append("email", formData.email);
      payload.append("phoneNumber", formData.phoneNumber);
      payload.append("address", formData.address);
      payload.append("username", formData.username);
      payload.append("password", formData.password);
      payload.append("role", role);

      // Role-specific fields
      if (role === "Student") {
        payload.append("gender", formData.gender);
        payload.append("studentClass", formData.studentClass);
        if (profilePic) {
          payload.append("profilePic", profilePic);
        }
      }

      if (role === "Parent") {
        payload.append("gender", formData.gender);
        payload.append("occupation", formData.occupation);
        if (profilePic) {
          payload.append("profilePic", profilePic);
        }
      }

      if (role === "Teacher") {
        payload.append("gender", formData.gender);
        payload.append("subject", formData.subject);
        if (profilePic) {
          payload.append("profilePic", profilePic);
        }
      }

      // Make the registration request
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // If Student, possibly show unique studentId
      if (role === "Student" && data.studentId) {
        alert(
          `Registration successful! Your unique student ID is: ${data.studentId}. Please save this ID as it will be used in the future.`
        );
      } else {
        alert("Registration successful!");
      }

      // Store token and reset form
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
        gender: "Male",
        studentClass: "Class 1",
        occupation: "",
        subject: "",
      });
      setRole("");
      setProfilePic(null);
      setShowLoginModal(true);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      {/* Header */}
      <div className="h-[80px] w-full text-blue-600 flex justify-between items-center px-6 md:px-10">
        <div className="text-[24px] md:text-[30px] flex items-center font-bold">
          <span className="text-blue-300">
            <FaHome className="text-white" />
          </span>
          <h1 className="ml-2 uppercase">olams</h1>
        </div>
        <nav className="hidden md:flex gap-[30px] lg:gap-[70px]">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-slate-300 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Register</h2>
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

              {/* Address */}
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

              {/* Username */}
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
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* Conditionally render role-specific fields */}
            {role === "Student" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Gender Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {/* Class Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Class
                  </label>
                  <select
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                  >
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                  </select>
                </div>
                {/* Profile Picture Upload */}
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            )}

            {role === "Parent" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Gender Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {/* Occupation */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                {/* Profile Picture Upload */}
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            )}

            {role === "Teacher" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Gender Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                {/* Profile Picture Upload */}
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}

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

      {showLoginModal && <Landing closeModal={() => setShowLoginModal(false)} />}
    </div>
  );
}

export default Register;
