import React from 'react';
import { FaBriefcase, FaPencilAlt, FaGamepad, FaFilm, FaCamera, FaPaintBrush } from 'react-icons/fa'; 

function Home3() {
  return (
    <div>
      <section className=" text-white min-h-[30vh] mb-3">
          <div className=" p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
            <Card title="Business" icon={<FaBriefcase />} />
            <Card title="Language" icon={<FaPencilAlt />} />
            <Card title="Programming" icon={<FaGamepad />} />
            <Card title="Film & Video" icon={<FaFilm />} />
            <Card title="Photography" icon={<FaCamera />} />
            <Card title="Web Design" icon={<FaPaintBrush />} />
          </div>
      </section>
    </div>
  );
}

function Card({ title, icon }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg text-center shadow-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default Home3;
