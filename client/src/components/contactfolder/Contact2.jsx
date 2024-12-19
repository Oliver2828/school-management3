import React, { useState } from 'react'
import { FaTv, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from '../Homefolder/navbar';

function Contact2() {
  const [show, setShow] = useState('-350px');

  const toggleMenu = () => {
    setShow(show === '-350px' ? '0' : '-350px');
  }
  return (
    <div className=" bg-blue-500 ">
      <div className="h-[80px] w-full text-white flex justify-between items-center px-6 md:px-10 ">
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
          <Link to="/landing" className="p-3 text-center hover:bg-blue-500">Login</Link>
          <Link to="/register" className="p-3 text-center hover:bg-blue-500">Register</Link>
        </nav>
      </div>
    </nav>
    <div className="md:hidden flex items-center">
      <button onClick={toggleMenu} className="text-xl focus:outline-none">
        ☰
      </button>
      <Navbar show={show} />
    </div>
  </div>
  <div className="bg-blue-500 h-[87vh] text-white grid items-center justify-center">
    <div className="text-center">
    <h2 className='text-white text-[50px] font-bold'>CONTACT <span className='text-blue-700'>US</span></h2>
    <p className='font-san'>Looking for expert help? Contact us today for personalized solutions tailored to your needs.</p>
    <p>We're here to make things easier for you!</p>
    </div>
  </div>
    
    <div class="custom-shape-divider-bottom-1731021532">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
  </div>
      

    </div>
  )
}

export default Contact2
