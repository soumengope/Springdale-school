// src/Faculty.js
import React from 'react';

function Faculty() {
  const facultyMembers = [
    {
      name: 'John Doe',
      title: 'Principal',
      qualification: 'M.Ed',
      experience: '20 years of experience in educational administration.',
    },
    {
      name: 'Jane Smith',
      title: 'Vice Principal',
      qualification: 'M.Sc. in Physics',
      experience: '15 years of teaching experience.',
    },
    {
      name: 'Emily Johnson',
      title: 'English Teacher',
      qualification: 'M.A. in English',
      experience: '10 years of teaching experience.',
    },
    {
      name: 'Michael Brown',
      title: 'Mathematics Teacher',
      qualification: 'M.Sc. in Mathematics',
      experience: '8 years of teaching experience.',
    },
    {
      name: 'Sophia Davis',
      title: 'Science Teacher',
      qualification: 'M.Sc. in Chemistry',
      experience: '12 years of teaching experience.',
    },
    {
      name: 'David Wilson',
      title: 'Computer Science Teacher',
      qualification: 'B.Tech in Computer Science',
      experience: '5 years of teaching experience.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-8">Faculty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
            <p className="text-lg font-medium">{member.title}</p>
            <p className="text-md">{member.qualification}</p>
            <p className="text-sm text-gray-600">{member.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
