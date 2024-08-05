import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-600">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">For Patients</h3>
            <ul className="space-y-2">
              <li><Link to="/patient-signup" className="hover:text-blue-600">Sign Up</Link></li>
              <li><Link to="/patient-login" className="hover:text-blue-600">Log In</Link></li>
              <li><Link to="/faq" className="hover:text-blue-600">FAQs</Link></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">For Doctors</h3>
            <ul className="space-y-2">
              <li><Link to="/doctor-signup" className="hover:text-blue-600">Join Our Network</Link></li>
              <li><Link to="/doctor-login" className="hover:text-blue-600">Doctor Login</Link></li>
              <li><Link to="/resources" className="hover:text-blue-600">Resources</Link></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: info@unifiedhealthcare.com</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Address: 123 Health St, Medical City, HC 12345</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Unified Health Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;