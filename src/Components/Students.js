// src/Students.js
import React from 'react';

function Students() {
  return (
    <div className="container mx-auto px-4 py-6 bg-gradient-to-r from-blue-200 to-purple-300 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Students</h2>

      <section className="mb-8 bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Life at Springdale</h3>

        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2 text-indigo-600">Extracurricular Activities</h4>
          <p className="text-lg">
            Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2 text-indigo-600">Clubs and Societies</h4>
          <p className="text-lg">
            Literary Society, Environmental Club, Astronomy Club, Coding Club
          </p>
        </div>
      </section>

      <section className="mb-8 bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-green-700">Achievements</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </section>

      <section className="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-700">Student Council</h3>
        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2 text-yellow-600">President</h4>
          <p className="text-lg">Amy Parker, Grade 12</p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2 text-yellow-600">Vice President</h4>
          <p className="text-lg">Rajiv Mehta, Grade 11</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 text-yellow-600">Secretary</h4>
          <p className="text-lg">Lisa Wong, Grade 10</p>
        </div>
      </section>
    </div>
  );
}

export default Students;
