import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">
            <Link to="/">Unified Health Care</Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link 
                to="/signup" 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;