import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import Navbar from '../Homefolder/navbar';
function Header() {
  var [disp,setDisp] = useState('none')

  window.onscroll = ()=>{
    if(window.scrollY>300) {
      setDisp('block')
    }else {
      setDisp('none')
    }
  }
  const [show, setShow] = useState('-350px');

  const toggleMenu = () => {
    setShow(show === '-350px' ? '0' : '-350px');
  };


  return (
    <div className=''  style={{ display: disp }}>
      <div className='h-[80px] w-full bg-blue-500 text-white flex justify-between items-center px-6 md:px-10 fixed top-0 z-10'>
        <div className="text-[24px] md:text-[30px] flex items-center font-bold">
          <span className='text-blue-500'><FaHome className='text-white' /></span>
          <h1 className='ml-2 uppercase'>olams</h1>
        </div>

        <nav className="hidden md:flex gap-[30px] lg:gap-[70px]">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <div className="relative group">
            <Link className="hover:text-blue-300">Get Started</Link>
            <nav className="hidden group-hover:flex flex-col gap-2 absolute top-full right-0 bg-slate-200 rounded-lg shadow-lg">
              <Link to="/landing" className="p-3 text-center hover:bg-blue-500">Login</Link>
              <Link to="/register" className="p-3 text-center hover:bg-blue-500">Register</Link>
            </nav>
          </div>
        </nav>
        {/* Responsive Menu Icon for Mobile */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-xl focus:outline-none'>
            {/* Replace with an icon, such as a hamburger icon for a mobile menu */}
            ☰
          </button>
          <Navbar show={show} />
        </div>
      </div>
    </div>
  );
}

export default Header;
