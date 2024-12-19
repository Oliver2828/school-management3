import React from 'react';

function About4() {
  return (
    <div className="min-h-[75vh] p-6 sm:p-8 md:p-11 grid items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Section */}
        <div className="grid text-center md:text-end justify-center md:justify-end p-4 sm:p-8 md:p-14">
          <div>
            <div className="text-blue-700 text-[32px] sm:text-[36px] md:text-[45px] font-bold mb-3 leading-tight">
              <h2>Expertise you</h2>
              <h2>can count on</h2>
            </div>
            <div className="h-[50px] w-full flex justify-center md:justify-end">
              <a
                href="#about-us"
                aria-label="Learn more about us"
                className="bg-black text-white text-[16px] sm:text-[18px] md:text-[20px] capitalize px-8 py-2 rounded-[20px] flex items-center justify-center"
              >
                Learn more about us
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid p-4 sm:p-6">
          <div className="space-y-6">
            {/* Student Information Management */}
            <div>
              <p className="text-blue-700 text-[18px] sm:text-[20px] font-bold">
                Student Information Management
              </p>
              <p className="text-gray-700 text-[14px] sm:text-[16px] ml-4">
                Centralized storage of student data (personal details,
                attendance, grades, health records, etc.). Quick access to
                student profiles and history. Integration with enrollment and
                admission processes.
              </p>
            </div>

            {/* Attendance Management */}
            <div>
              <p className="text-blue-700 text-[18px] sm:text-[20px] font-bold">
                Attendance Management
              </p>
              <p className="text-gray-700 text-[14px] sm:text-[16px] ml-4">
                Automated tracking of student and teacher attendance. Alerts for
                absenteeism, tardiness, or irregular attendance. Reports and
                analysis to identify trends or areas of concern.
              </p>
            </div>

            {/* Timetable Management */}
            <div>
              <p className="text-blue-700 text-[18px] sm:text-[20px] font-bold">
                Timetable Management
              </p>
              <p className="text-gray-700 text-[14px] sm:text-[16px] ml-4">
                Easy creation and management of class schedules. Real-time
                updates on timetable changes. Ability to track room assignments,
                teacher availability, and subject allocation.
              </p>
            </div>

            {/* Grade and Examination Management */}
            <div>
              <p className="text-blue-700 text-[18px] sm:text-[20px] font-bold">
                Grade and Examination Management
              </p>
              <p className="text-gray-700 text-[14px] sm:text-[16px] ml-4">
                Recording and storing grades, marks, and exam results.
                Generation of report cards and progress reports. Tools for
                creating and scheduling exams, assignments, and quizzes.
                Analysis tools to identify performance patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About4;
