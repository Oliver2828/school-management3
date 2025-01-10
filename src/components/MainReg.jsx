import React, { useState } from 'react'
import Navbar from './Homefolder/navbar';
// import Navbar from '../Homefolder/navbar';
// import Landing from '../Landing';
import { TfiCup } from "react-icons/tfi";
import { FaTv, FaHome } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Register from './Register';

function MainReg() {
    const [show, setShow] = useState('-350px');
      const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    
      const toggleMenu = () => {
        setShow(show === '0' ? '-350px' : '0');
      };
    
      const closeModal = () => {
        setIsLoginModalOpen(false);
      };
    
  return (
    <div>
          {/* Header */}
      {/* <div className="h-[80px] w-full text-black flex justify-between items-center px-4 sm:px-6 md:px-10">
        <div className="text-[clamp(20px,5vw,30px)] flex items-center font-bold">
          <span className="text-blue-500">
            <FaHome className="text-black" />
          </span>
          <h1 className="ml-2 uppercase">olams</h1>
        </div>
        <nav className="hidden md:flex gap-[20px] lg:gap-[50px]">
          <Link to="/" className="hover:text-blue-300 text-[clamp(14px,2.5vw,16px)]">Home</Link>
          <Link to="/contact" className="hover:text-blue-300 text-[clamp(14px,2.5vw,16px)]">Contact</Link>
          <Link to="/about" className="hover:text-blue-300 text-[clamp(14px,2.5vw,16px)]">About</Link>
          <div className="relative group">
            <Link className="hover:text-blue-300 text-[clamp(14px,2.5vw,16px)]">Get Started</Link>
            <nav className="hidden group-hover:flex flex-col gap-2 absolute top-full right-0 bg-slate-200 rounded-lg shadow-lg">
              <button
                className="p-3 text-center hover:bg-blue-500 text-[clamp(12px,2vw,14px)]"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Login
              </button>
              <Link to="/Register" className="p-3 text-center hover:bg-blue-500 text-[clamp(12px,2vw,14px)]">Register</Link>
            </nav>
          </div>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {show === '0' ? '✕' : '☰'}
          </button>
          <Navbar show={show} closeMenu={toggleMenu} />
        </div>
      </div> */}

      <Register/>
    </div>
  )
}

export default MainReg
