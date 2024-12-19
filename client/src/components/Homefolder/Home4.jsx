import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home4() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="">
      <div className="bg-blue-500 text-white p-8">
        <div className="h-auto md:h-[65vh] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo and Intro */}
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <span className="text-orange-500 mr-2">
                <i className="fas fa-book"></i> {/* Replace with an appropriate icon if available */}
              </span>
              OLAMS
            </h2>
            <p className="mt-4 text-sm md:text-base">
              We have over 20 years of experience providing expert educational services to both businesses and individuals. Our Investment Committee brings the latest industry expertise to drive our investment approach, portfolio construction, and allocation.
            </p>
            <button
              className="mt-4 px-4 py-2 border border-white text-white hover:bg-white hover:text-gray-900 transition text-sm md:text-base"
              onClick={() => navigate('/register')} // Navigate to the Register page
            >
              GET STARTED
            </button>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-semibold">Popular Courses</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center space-x-4">
                <img src="" alt="Mobile Apps Development" className="w-12 h-12 md:w-16 md:h-16" />
                <div>
                  <p className="text-sm md:text-base">Introduction to Mobile Apps Development</p>
                  <p className="text-blue-400 text-sm md:text-base">$99.00</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <img src="" alt="Film Making" className="w-12 h-12 md:w-16 md:h-16" />
                <div>
                  <p className="text-sm md:text-base">Become a Professional Film Maker</p>
                  <p className="text-green-400 text-sm md:text-base">FREE</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <img src="" alt="Swift Programming" className="w-12 h-12 md:w-16 md:h-16" />
                <div>
                  <p className="text-sm md:text-base">Swift Programming For Beginners</p>
                  <p className="text-blue-400 text-sm md:text-base">$75.00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">All Courses</a></li>
                <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Summer Sessions</a></li>
                <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Recent Exams</a></li>
                <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Professional Courses</a></li>
                <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Terms of Use</a></li>
                <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
            <button
              className="text-xl font-semibold"
              onClick={() => navigate('/contact')} // Navigate to the Contact page
            >
              Contact Us
            </button>
              <p className="mt-4 text-sm md:text-base">
                If you want to contact us about any issue, our support is available to help you from 8am-7pm Monday to Saturday.
              </p>
              <p className="mt-4 flex items-center space-x-2 text-sm md:text-base">
                <span className="text-orange-500"><i className="fas fa-map-marker-alt"></i></span>
                <span>Address: 9015 Sunset Boulevard, United Kingdom</span>
              </p>
              <p className="mt-2 flex items-center space-x-2 text-sm md:text-base">
                <span className="text-orange-500"><i className="fas fa-phone-alt"></i></span>
                <span>Call: +215 623 7532</span>
              </p>
              <p className="mt-2 flex items-center space-x-2 text-sm md:text-base">
                <span className="text-orange-500"><i className="fas fa-envelope"></i></span>
                <span>Email: info@OLAMS.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home4;
