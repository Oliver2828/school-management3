import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing({ closeModal }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const credentials = [
    { email: 'lexy', password: 'lexy123' },
    { email: 'oliver', password: 'oliver123' },
    { email: 'school', password: 'school123' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFound = credentials.find(
      (cred) => cred.email === username && cred.password === password
    );
    if (userFound) {
      setError('');
      closeModal(); // Close modal after successful login
      navigate('/admin');
    } else {
      setError('Incorrect username or password.');
    }
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
              className='w-full h-[40px] rounded-[20px] p-2 border'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='grid gap-2'>
            <label className='text-lg lg:text-xl font-semibold'>Password</label>
            <input
              type="password"
              className='w-full h-[40px] rounded-[20px] p-2 border'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className='text-red-500'>{error}</p>}
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
