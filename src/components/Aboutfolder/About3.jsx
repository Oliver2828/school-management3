import React from 'react';

function About3() {
  return (
    <div className="min-h-[120vh] bg-blue-500 pt-[130px] relative" style={{ boxSizing: 'border-box' }}>
      {/* SVG Divider */}
      <div className="custom-shape-divider-top-1731453262">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Content Section */}
      <div className="h-[100vh] flex items-end text-white">
        <div className="grid p-6 sm:p-12 mb-11 items-center w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[50%,50%] gap-6">
            {/* Image Section */}
            <div className="bg-[url('/src/assets/hhm.jpg')] bg-cover bg-center bg-no-repeat rounded-[30px] h-[300px] md:h-auto"></div>

            {/* Text Section */}
            <div className="grid p-4 sm:p-6">
              <div className="text-[18px] sm:text-[20px] md:text-[23px] font-serif leading-relaxed">
                <p>
                  OLAMS is an integrated platform designed to streamline and
                  manage the administrative, academic, and operational tasks of
                  a school or educational institution.
                </p>
                <br />
                <p>
                  By leveraging technology, OLAMS helps simplify the various
                  processes involved in running a school, making them more
                  efficient, accurate, and accessible. It also provides
                  real-time data, improves communication, and enhances overall
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
