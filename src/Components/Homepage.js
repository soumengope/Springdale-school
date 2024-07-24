import React, { useState, useEffect } from 'react';
import './homepage.css';

function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    "Annual Sports Day - Celebrating Excellence in Sports",
    "Science Exhibition - Showcasing Student Innovations",
    "Cultural Fest - Embracing Diversity and Creativity"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="max-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <img src="school_logo.png" alt="School Logo" className="h-16 mx-auto" />
          <h1 className="text-center text-3xl font-bold mt-4">Springdale Public School</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 flex-1 mb-0">
        <section className="text-center">
          <p className="text-xl mt-4">
            Welcome to Springdale Public School, where we nurture young minds for a brighter future.
          </p>
        </section>
        <section className="mt-8 flex-1 mb-0">
          <div className="relative w-full h-64 overflow-hidden">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`text-center absolute inset-0 transition-opacity duration-3000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundColor: '#3B82F6'}}
              >
                <div className="h-full w-full text-white text-2xl flex items-center justify-center">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
