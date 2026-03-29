"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhyHireMe = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-[80%] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Orange Circle with Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Big Orange Circle */}
              <div className="w-[420px] h-[420px] bg-[#FF4D00] rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/id/64/800/800"   // ← Change this to your photo
                  alt="Vansh Jain"
                  className="w-[380px] h-[380px] rounded-full object-cover"
                />
              </div>

              {/* Decorative Black Dots */}
              <div className="absolute -top-8 -right-8 bg-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                <div className="grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-10">
            <h2 className="font-clash text-6xl lg:text-7xl font-semibold leading-none tracking-tighter text-black">
              Why You Hire Me for<br />Your Next Projects?
            </h2>

            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            {/* Stats */}
            <div className="flex gap-16">
              <div>
                <div className="font-clash text-6xl font-semibold text-black">600+</div>
                <div className="text-gray-600 text-lg mt-2">Project Completed</div>
              </div>
              <div>
                <div className="font-clash text-6xl font-semibold text-black">50+</div>
                <div className="text-gray-600 text-lg mt-2">Industry Covered</div>
              </div>
            </div>

            {/* Hire Me Button */}
            <button className="group flex items-center gap-4 px-12 py-5 border-2 border-black rounded-full text-xl font-medium hover:bg-black hover:text-white transition-all duration-300">
              Hire Me
              <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <ArrowRight className="text-white group-hover:text-black transition-colors" size={22} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;