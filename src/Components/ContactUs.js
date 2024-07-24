// src/ContactUs.js
import React from 'react';

function ContactUs() {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Address</h3>
            <p className="text-lg mb-2">Springdale Public School, 123 Education Lane, Bankura, State, ZIP Code</p>
            <p className="text-lg mb-2">Phone: <a href="tel:+11234567890" className="text-blue-500 hover:underline">+1 (123) 456-7890</a></p>
            <p className="text-lg">Email: <a href="mailto:info@springdale.edu" className="text-blue-500 hover:underline">info@springdale.edu</a></p>
          </div>

          {/* Contact Form Section */}
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Form</h3>
            <form className="w-full max-w-sm space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows="4" required className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
            </form>
          </div>

          {/* Map Section */}
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Bankura City Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94633.39693507029!2d87.12490706308305!3d23.233462317183622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f61c8ab8f3ab35%3A0x6cf0c8f46b88b7!2sBankura%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1657871298486!5m2!1sen!2sin"
                className="w-full h-full border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
