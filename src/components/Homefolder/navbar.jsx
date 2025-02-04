import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Landing from '../Landing';

function Navbar({ show, closeMenu }) {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
    const toggleMenu = () => {
      setShow(show === '0' ? '-350px' : '0');
    };
  
    const closeModal = () => {
      setIsLoginModalOpen(false);
    };
  return (
    <div
      className={`fixed top-0 right-0 bg-blue-500 w-[300px] h-[100vh] shadow-lg transform ${
        show === '0' ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={closeMenu}
          aria-label="Close Menu"
          className="text-white text-2xl font-bold hover:text-red-400 focus:outline-none"
        >
          ✕
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col items-center mt-6 space-y-4">
        <Link to="/" onClick={closeMenu} className="text-white hover:text-blue-300">
          Home
        </Link>
        <Link to="/contact" onClick={closeMenu} className="text-white hover:text-blue-300">
          Contact
        </Link>
        <Link to="/about" onClick={closeMenu} className="text-white hover:text-blue-300">
          About
        </Link>
        {/* <Link to="/landing" onClick={closeMenu} className="text-white hover:text-blue-300"> */}
        <button
        className="text-white hover:text-blue-300"
                // className="p-3 text-center hover:bg-blue-500 text-[clamp(12px,2vw,14px)]"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Login
              </button>
               {/* <Navbar show={show} closeMenu={toggleMenu} /> */}
        {/* </Link> */}
        <Link to="/register" onClick={closeMenu} className="text-white hover:text-blue-300">
          Register
        </Link>
      </nav>




       {/* Login Modal */}
       {isLoginModalOpen && <Landing closeModal={closeModal} />}
    </div>
  );
}

export default Navbar;
