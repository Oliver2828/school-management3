import React from 'react';
import { FaHandHoldingHeart, FaHandsHelping } from 'react-icons/fa';
import { PiFlowerLotusFill } from 'react-icons/pi';

function About5() {
  return (
    <div className="min-h-[120vh] grid grid-rows-[20%,80%] bg-gray-50">
      {/* Title Section */}
      <div className="text-center text-[30px] md:text-[36px] font-bold uppercase grid items-center">
        <p>Our Core Values</p>
      </div>

      {/* Values Section */}
      <div className="p-6 md:p-14 grid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Integrity */}
          <div className="bg-[url(./assets/hands-together.jpg)] bg-cover bg-center min-h-[370px] grid rounded-[20px] overflow-hidden relative">
            <div className="bg-[#6361eb52] absolute inset-0 grid p-6 rounded-[20px]">
              <div className="flex justify-center items-center mb-4">
                <div className="h-[70px] w-[70px] rounded-full bg-white flex justify-center items-center">
                  <FaHandHoldingHeart className="text-[30px] text-blue-600" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-[20px] font-bold uppercase mb-2">Integrity</h3>
                <p className="text-[16px] font-serif mb-2">
                  We ensure honesty, transparency, and accountability in all actions and decisions.
                </p>
                <p className="text-[16px] font-serif mb-2">
                  School leaders, staff, and students demonstrate trustworthiness, fairness, and accountability.
                </p>
                <p className="text-[16px] font-semibold">
                  Integrity builds a culture of respect and trust.
                </p>
              </div>
            </div>
          </div>

          {/* Respect */}
          <div className="bg-[url(./assets/handshake.jpg)] bg-cover bg-center min-h-[370px] grid rounded-[20px] overflow-hidden relative">
            <div className="bg-[#6361eb52] absolute inset-0 grid p-6 rounded-[20px]">
              <div className="flex justify-center items-center mb-4">
                <div className="h-[70px] w-[70px] rounded-full bg-white flex justify-center items-center">
                  <FaHandsHelping className="text-[30px] text-blue-600" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-[20px] font-bold uppercase mb-2">Respect</h3>
                <p className="text-[16px] font-serif mb-2">
                  Fostering a culture of mutual respect among students, staff, and the community.
                </p>
                <p className="text-[16px] font-serif mb-2">
                  We create a respectful environment where everyone’s ideas, contributions, and differences are celebrated.
                </p>
                <p className="text-[16px] font-semibold">
                  Encouraging open communication is key to maintaining respectful interactions.
                </p>
              </div>
            </div>
          </div>

          {/* Excellence */}
          <div className="bg-[url(./assets/thumbs-up.jpg)] bg-cover bg-center min-h-[370px] grid rounded-[20px] overflow-hidden relative">
            <div className="bg-[#6361eb52] absolute inset-0 grid p-6 rounded-[20px]">
              <div className="flex justify-center items-center mb-4">
                <div className="h-[70px] w-[70px] rounded-full bg-white flex justify-center items-center">
                  <PiFlowerLotusFill className="text-[30px] text-blue-600" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-[20px] font-bold uppercase mb-2">Excellence</h3>
                <p className="text-[16px] font-serif mb-2">
                  Striving for high standards in teaching, learning, and overall school performance.
                </p>
                <p className="text-[16px] font-serif mb-2">
                  We focus on continuous improvement in academic achievements, staff development, and resources.
                </p>
                <p className="text-[16px] font-semibold">
                  Excellence encourages a culture of high expectations and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About5;
