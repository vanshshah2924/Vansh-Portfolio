"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import "/src/index.css";

const ServiceCards = () => {
  const services = [
    { 
      title: "Website Maintenance", 
      desc: "I provide ongoing website maintenance to ensure your site stays updated, secure, and running smoothly at all times.", 
      color: "from-violet-500 via-fuchsia-500 to-pink-500" 
    },
    { 
      title: "Web Development", 
      desc: "High-performance websites & web apps that scale beautifully.", 
      color: "from-orange-500 to-amber-500" 
    },
    { 
      title: "Branding", 
      desc: "Complete visual identity that makes your brand unforgettable.", 
      color: "from-cyan-500 to-emerald-500" 
    },
  ];

  return (
    <div className="min-h-screen bg-black py-24 px-6 md:px-12 lg:px-20 mx-auto max-w-[1400px] rounded-[3rem] mt-8 mb-12 overflow-hidden animate-fade-in">
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group relative h-[500px] 
                         bg-zinc-900/70 backdrop-blur-2xl 
                         border border-white/10 
                         rounded-[2.25rem] overflow-hidden 
                         hover:border-orange-500 hover:bg-orange-600
                         transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:shadow-orange-500/30
                         animate-slide-up`}
              style={{ animationDelay: `${i * 150}ms` }}   // Stagger effect
            >
              {/* Top Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${s.color} transition-all duration-500 group-hover:h-2`} />

              {/* Content */}
              <div className="p-10 pt-14 transition-all duration-500 group-hover:pt-12">
                <h3 className="text-4xl font-semibold text-white tracking-tight mb-6 transition-all duration-500 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="text-zinc-400 text-[17px] leading-relaxed transition-all duration-500 group-hover:text-white/90">
                  {s.desc}
                </p>
              </div>

              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 inset-x-0 h-80 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              {/* Circular Arrow Button with better animation */}
              <div className="absolute bottom-12 right-12 z-10">
                <div className="w-20 h-20 rounded-2xl 
                               bg-black/80 backdrop-blur-xl border border-white/20 
                               flex items-center justify-center 
                               transition-all duration-500 
                               group-hover:bg-white group-hover:border-white 
                               group-hover:scale-110 group-hover:rotate-12">
                  <ArrowUpRight 
                    size={38} 
                    className="text-white group-hover:text-black transition-all duration-300 group-hover:-rotate-12" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;