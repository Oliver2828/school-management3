import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from './Homefolder/navbar';

function Register() {
  const [show, setShow] = useState('-350px');
  const [role, setRole] = useState("");  // Added role state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const toggleMenu = () => {
    setShow(show === '-350px' ? '0' : '-350px');
  };

  const closeMenu = () => {
    setShow('-350px');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., validate and send data to server
  };

  return (
    <div className="bg-gray-300">
      {/* Header */}
      <div className="h-[80px] w-full text-white flex justify-between items-center px-6 md:px-10">
        <div className="text-[24px] md:text-[30px] flex items-center font-bold">
          <span className="text-blue-300"><FaHome className="text-white" /></span>
          <h1 className="ml-2 uppercase">olams</h1>
        </div>
        <nav className="hidden md:flex gap-[30px] lg:gap-[70px]">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <div className="relative group">
            <Link className="hover:text-blue-300">Get Started</Link>
            <nav className="hidden group-hover:flex flex-col gap-2 absolute top-full right-0 bg-slate-200 rounded-lg shadow-lg">
              <Link to="/login" className="p-3 text-center hover:bg-blue-500">Login</Link>
              <Link to="/register" className="p-3 text-center hover:bg-blue-500">Register</Link>
            </nav>
          </div>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-xl focus:outline-none">
            ☰
          </button>
          <Navbar show={show} closeMenu={closeMenu} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md bg-slate-300 rounded-lg shadow-lg p-8 space-y-6">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center text-black">Register</h2>

          {/* Role Selection */}
          {!role && (
            <div>
              <label className="block text-sm font-semibold text-gray-700">Select Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Choose your role</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                {/* <option value="teacher">Teacher</option> */}
                {/* <option value="admin">Admin</option> */}
              </select>
            </div>
          )}

          {/* Conditional Rendering of Form */}
          {role && (
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
              >
                Register as {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
