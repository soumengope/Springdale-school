// src/Gallery.js
import React from 'react';

function Gallery() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Photos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative">
            <img src="std_p1.avif" alt="Students participating in various sports events" className="w-full h-auto rounded-lg shadow-md" />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">Students participating in various sports events</p>
          </div>
          <div className="relative">
            <img src="std_p2.avif" alt="Students participating in various sports events" className="w-full h-auto rounded-lg shadow-md" />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">Students participating in various sports events</p>
          </div>
          <div className="relative">
            <img src="std_p3.avif" alt="Students presenting their science projects" className="w-full h-auto rounded-lg shadow-md" />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">Students presenting their science projects</p>
          </div>
          <div className="relative">
            <img src="std_p4.avif" alt="Students performing in the cultural fest" className="w-full h-auto rounded-lg shadow-md" />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">Students performing in the cultural fest</p>
          </div>
          <div className="relative">
            <img src="std_p5.avif" alt="A glimpse of our interactive classrooms" className="w-full h-auto rounded-lg shadow-md" />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">A glimpse of our interactive classrooms</p>
          </div>
          <div className="relative">
            <img src="std_p6.avif" alt="Students reading and studying in the school library" className="w-full h-auto rounded-lg shadow-md" />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">Students reading and studying in the school library</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <video controls className="w-full h-auto rounded-lg shadow-md">
              <source src="/videos/school_tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">Virtual tour of Springdale Public School</p>
          </div>
          <div className="relative">
            <video controls className="w-full h-auto rounded-lg shadow-md">
              <source src="/videos/annual_function.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">Highlights from the Annual Function 2023</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
