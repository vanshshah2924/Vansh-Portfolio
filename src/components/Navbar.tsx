// src/components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Much Longer & Slim Pill Navbar */}
        <div className="bg-black rounded-full h-14 flex items-center px-12 shadow-2xl">
          <div className="flex items-center justify-between w-full">
            
            {/* Left Menu */}
            <div className="flex items-center gap-12 text-sm font-medium text-white">
              <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">Home</a>
              <a href="#" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Service</a>
            </div>

            {/* Center Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                V
              </div>
              <span className="text-2xl font-semibold tracking-tight text-white">Vansh</span>
            </div>

            {/* Right Menu */}
            <div className="flex items-center gap-12 text-sm font-medium text-white">
              <a href="#" className="hover:text-gray-300 transition-colors">Resume</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Project</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;