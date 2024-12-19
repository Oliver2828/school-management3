
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [role, setRole] = useState('');
  const navigate = useNavigate(); // React Router's hook for navigation


  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin');

    // Handle registration submission here
    console.log(`Registration form submitted for role: ${role}`);
  };

  // Common Registration Form
  const RegistrationForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            name='firstname'
            value=''
            className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700">Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <button
      onClick={()=>{

      }}
      className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
        Register as {role.charAt(0).toUpperCase() + role.slice(1)}
      </button>
    </form>
  );

  return (
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
        {role && <RegistrationForm />}
      </div>
    </div>
  );
}

export default Register;
