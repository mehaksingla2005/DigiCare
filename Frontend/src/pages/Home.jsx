import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Unified Health Care</h1>
        <p className="text-lg">Your centralized health information portal</p>
      </header>

      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Centralized Health Records</h3>
            <p>Access all your medical reports and history in one place</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Secure and Private</h3>
            <p>Your health data is protected with state-of-the-art security</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Easy Doctor Communication</h3>
            <p>Seamless information sharing between you and your healthcare providers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Medication Tracking</h3>
            <p>Keep track of your current and past medications</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get Started Today</h2>
        <div className="flex justify-center gap-4">
          <Link to="/signup" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">Sign Up</Link>
          <Link to="/login" className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition">Log In</Link>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">For Healthcare Providers</h2>
        <p className="text-lg mb-6">Unified Health Care offers a comprehensive solution for managing patient information and improving care coordination.</p>
        <Link to="/doctor-signup" className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">Join as a Healthcare Provider</Link>
      </section>

      <section className="bg-gray-200 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">"Unified Health Care has revolutionized how I manage my health information. It's so convenient!"</p>
            <p className="font-semibold">- Sarah J., Patient</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">"As a doctor, this platform has greatly improved my ability to provide informed care to my patients."</p>
            <p className="font-semibold">- Dr. Michael R., Cardiologist</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
