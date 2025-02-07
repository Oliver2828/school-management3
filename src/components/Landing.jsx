import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing({ closeModal }) {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    closeModal(); // Close modal after submission
    navigate('/admin'); // Redirect after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-[400px] rounded-[20px] p-6 grid gap-6">
        <h2 className='font-bold text-2xl lg:text-3xl text-center'>Login</h2>
        <form className='grid gap-4' onSubmit={handleSubmit}>
          <div className='grid gap-2'>
            <label className='text-lg lg:text-xl font-semibold'>Username</label>
            <input
              type="text"
              className="w-full h-[40px] rounded-[20px] p-2 border"
              required
            />
          </div>
          <div className='grid gap-2'>
            <label className='text-lg lg:text-xl font-semibold'>Password</label>
            <input
              type="password"
              className="w-full h-[40px] rounded-[20px] p-2 border"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="h-[45px] bg-blue-500 hover:bg-blue-600 w-full text-white rounded-[20px]"
          >
            Login
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="h-[45px] bg-gray-500 hover:bg-gray-600 w-full text-white rounded-[20px] mt-2"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default Landing;
