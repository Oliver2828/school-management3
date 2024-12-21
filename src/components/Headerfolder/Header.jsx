import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import Navbar from '../Homefolder/navbar';

function Header() {
  const [disp, setDisp] = useState('none');
  const [show, setShow] = useState('-350px');
  const [popupVisible, setPopupVisible] = useState(false);

  // Handle scroll to toggle header visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setDisp('block');
      } else {
        setDisp('none');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShow(show === '-350px' ? '0' : '-350px');
  };

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  const closeMenu = () => {
    setShow('-350px');
  };

  return (
    <div className='' style={{ display: disp }}>
      <div className='h-[80px] w-full bg-blue-500 text-white flex justify-between items-center px-6 md:px-10 fixed top-0 z-10'>
        {/* Logo Section */}
        <div className="text-[24px] md:text-[30px] flex items-center font-bold">
          <span className='text-blue-500'>
            <FaHome className='text-white' />
          </span>
          <h1 className='ml-2 uppercase'>olams</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-[30px] lg:gap-[70px]">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>

          {/* Dropdown Menu for Get Started */}
          <div className="relative group">
            <button onClick={togglePopup} className="hover:text-blue-300">Get Started</button>
            <nav className={`absolute top-full right-0 bg-slate-200 rounded-lg shadow-lg ${popupVisible ? 'block' : 'hidden'}`}>
              <Link to="/landing" className="p-3 text-center hover:bg-blue-500" onClick={closeMenu}>
                Login
              </Link>
              <Link to="/register" className="p-3 text-center hover:bg-blue-500" onClick={closeMenu}>
                Register
              </Link>
            </nav>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-xl focus:outline-none'>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Navbar show={show} closeMenu={closeMenu} />
    </div>
  );
}

export default Header;
