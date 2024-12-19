import React from 'react';

function Home2() {
  return (
    <div className='h-auto md:h-[50vh] bg-white grid p-6 md:p-14 mt-5'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="bg-[url('./assets/pexels1.jpg')] bg-cover bg-center grid grid-rows-[80%,20%] h-[200px] md:h-[230px]">
          <div className=''></div>
          <div className='bg-gray-700 flex justify-center text-center items-center text-white'>
            <p className='text-[18px] md:text-[15px] font-semibold'>Best Photography Lessons</p>
          </div>
        </div>
        <div className="bg-[url('./assets/pexels2.jpg')] bg-cover bg-bottom grid grid-rows-[80%,20%] h-[200px] md:h-[230px]">
          <div className=''></div>
          <div className='bg-gray-700 flex items-center justify-center text-center text-white'>
            <p className='text-[18px] md:text-[15px] font-semibold'>Tutorial Codes For Startup</p>
          </div>
        </div>
        <div className="bg-[url('./assets/pexels3.jpg')] bg-cover bg-center grid grid-rows-[80%,20%] h-[200px] md:h-[230px]">
          <div className=''></div>
          <div className='bg-gray-700 flex items-center justify-center text-center text-white'>
            <p className='text-[18px] md:text-[15px] font-semibold'>Wordpress Secret Tips</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
