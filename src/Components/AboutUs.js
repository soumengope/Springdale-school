// src/AboutUs.js
import React from 'react';

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>

      <section className="flex flex-col sm:flex-row gap-4 text-center">
      <div className="mb-8 bg-blue-100 p-6 rounded-lg shadow-md flex-1">
        <h3 className="text-2xl font-semibold mb-2">History</h3>
        <p className="text-lg">
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
        </p>
      </div>

      <div className="mb-8 bg-green-100 p-6 rounded-lg shadow-md flex-1">
        <h3 className="text-2xl font-semibold mb-2">Vision</h3>
        <p className="text-lg">
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
      </div>
      </section>

      <section className="flex flex-col sm:flex-row gap-4 text-center ">
      <div className="mb-8 bg-yellow-100 p-6 rounded-lg shadow-md flex-1">
        <h3 className="text-2xl font-semibold mb-2">Mission</h3>
        <p className="text-lg">
          To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
        </p>
      </div>

      <div className="mb-8 bg-purple-100 p-6 rounded-lg shadow-md flex-1">
        <h3 className="text-2xl font-semibold mb-2">Principal's Message</h3>
        <p className="text-lg">
          At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
        </p>
      </div>
      </section>

      <section className="bg-pink-100 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-semibold mb-2">Infrastructure and Facilities</h3>
        <ul className="list-disc list-inside text-lg">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
