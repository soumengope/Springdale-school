// src/Academics.js
import React from 'react';

function Academics() {
  return (
    <div className="container mx-auto px-4 py-6 text-center">
      <h2 className="text-3xl font-bold text-center mb-8">Academics</h2>

      <section className="mb-8 bg-blue-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Curriculum</h3>
        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2">Primary (Grades 1-5)</h4>
          <p className="text-lg">English, Mathematics, Science, Social Studies, Art, Physical Education</p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2">Secondary (Grades 6-10)</h4>
          <p className="text-lg">English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2">Senior Secondary (Grades 11-12)</h4>
          <p className="text-lg">Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
          <p className="text-lg">Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</p>
        </div>
      </section>

      <section className="mb-8 bg-green-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-2">Teaching Methodologies</h3>
        <p className="text-lg">
          We use a blend of traditional and modern teaching techniques to cater to different learning styles.
        </p>
      </section>

      <section className="bg-yellow-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-2">Educational Resources</h3>
        <p className="text-lg">
          Digital classrooms, interactive learning modules, and access to online educational platforms.
        </p>
      </section>
    </div>
  );
}

export default Academics;
