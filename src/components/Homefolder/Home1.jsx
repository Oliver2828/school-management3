import React, { useState } from 'react';
import { TfiCup } from "react-icons/tfi";
import { FaTv, FaHome } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Navbar from '../Homefolder/navbar';
import Landing from '../Landing';

function Home1() {
  const [show, setShow] = useState('-350px');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleMenu = () => {
    setShow(show === '0' ? '-350px' : '0');
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="h-screen w-full bg-[url('/src/assets/book.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-end">
      {/* Header */}
      <div className="h-[80px] w-full text-black flex justify-between items-center px-4 sm:px-6 md:px-10">
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
                className="p-3 text-center hover:bg-blue-500 flex justify-center"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Login
              </button>
              <Link to="/Register" className="p-3 text-center hover:bg-blue-500 ">Register</Link>
            </nav>
          </div>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {show === '0' ? '✕' : '☰'}
          </button>
          <Navbar show={show} closeMenu={toggleMenu} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-end justify-center w-full h-full px-4 sm:px-6 md:px-0">
        <div className="w-full md:w-[90%] h-[80vh] grid grid-rows-[70%,30%] gap-4">
          <div className="grid justify-items-center md:justify-items-start text-center md:text-left">
            <h1 className="text-[clamp(24px,6vw,50px)]">Education & Training</h1>
            <h1 className="text-[clamp(24px,6vw,50px)]">Organization</h1>
            <div className="font-medium text-[clamp(14px,3.5vw,22px)] mt-3 text-sky-500">
              <div className="h-auto w-full max-w-[500px]">
                <p>
                  We offer the most complete course package in the country, for the research, design, and development of Education.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-5">
                <button className="h-[50px] sm:h-[60px] w-[140px] sm:w-[160px] bg-blue-500 uppercase text-white text-[clamp(14px,2.5vw,16px)] hover:bg-blue-600 transition">
                  <Link to="/about">About Us</Link>
                </button>
                <button className="h-[50px] sm:h-[60px] w-[140px] sm:w-[160px] bg-black text-white text-[clamp(14px,2.5vw,16px)] uppercase hover:bg-slate-950 transition">
                  <Link to="/contact">Contact Us</Link>
                </button>
              </div>
              <div className="bg-blue-500 w-full grid grid-cols-1 md:grid-cols-3 mt-7 mb-5">
                <div className="hover:bg-blue-700 transition text-black flex gap-5 items-center p-4">
                  <TfiCup className="text-[clamp(24px,5vw,48px)]" />
                  <div>
                    <h1 className="text-[clamp(14px,3vw,25px)] font-bold">World's Best Instructors</h1>
                    <h1 className="uppercase text-[clamp(10px,2.5vw,15px)]">View More</h1>
                  </div>
                </div>
                <div className="hover:bg-blue-700 transition text-black flex gap-6 items-center p-4">
                  <FaTv className="text-[clamp(24px,5vw,48px)]" />
                  <div>
                    <h1 className="text-[clamp(14px,3vw,25px)] font-bold">Learn Courses Online</h1>
                    <h1 className="uppercase text-[clamp(10px,2.5vw,15px)]">View More</h1>
                  </div>
                </div>
                <div className="hover:bg-blue-700 transition text-black flex gap-5 items-center p-4">
                  <IoBookOutline className="text-[clamp(24px,5vw,48px)]" />
                  <div>
                    <h1 className="text-[clamp(14px,3vw,25px)] font-bold">Online Library & Store</h1>
                    <h1 className="uppercase text-[clamp(10px,2.5vw,15px)]">View More</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && <Landing closeModal={closeModal} />}
    </div>
  );
}

export default Home1;
