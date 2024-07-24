// src/Admissions.js
import React from 'react';

function Admissions() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-8">Admissions</h2>

      <section className="flex flex-col sm:flex-row gap-4 text-center">
      <div className="mb-8 bg-blue-100 p-6 rounded-lg shadow-md flex-1">
        <h3 className="text-2xl font-semibold mb-2">Process</h3>
        <p className="text-lg">
          Admission forms are available for download. Submit the completed form along with required documents at the school office.
        </p>
      </div>

      <div className="mb-8 bg-green-100 p-6 rounded-lg shadow-md flex-1">
        <h3 className="text-2xl font-semibold mb-2">Criteria</h3>
        <p className="text-lg">
          Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
        </p>
      </div>
      </section>

      <section className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-semibold mb-4">Important Dates</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </section>
    </div>
  );
}

export default Admissions;
