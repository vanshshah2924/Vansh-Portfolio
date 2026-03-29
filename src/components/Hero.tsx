"use client";
import { motion } from "framer-motion";

export default function HeroTop() {
  return (
    <div className="relative w-full min-h-screen bg-[#f3f3f3] flex flex-col items-center pt-28 font-['Clash_Display'] overflow-hidden">
      {/* ===== HELLO BADGE ===== */}
      <div className="relative inline-block">
        {/* SVG Spark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute -top-3 -right-4"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              d="M12 2L13.5 9L21 10.5L13.5 12L12 19L10.5 12L3 10.5L10.5 9L12 2Z"
              fill="#9ca3af"
            />
          </svg>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border border-gray-300 px-6 py-2 rounded-full bg-white text-[16px] shadow-sm"
        >
          Hello!
        </motion.div>
      </div>

      {/* ===== HEADING ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-[95px] font-semibold leading-[1.05] tracking-tight text-[#111] text-center font-['Clash_Display']"
      >
        I’m <span className="text-[#ff5a1f]">Vansh,</span>
        <br />
        Full-Stack Web Developer
      </motion.h1>

      {/* ===== IMAGE ===== */}
      <motion.img
        src="./IMG_3961.PNG"
        alt="profile"
        className="absolute bottom-[-120px] left-.1/2 -translate-x-[45%] w-[600px] z-10 object-contain"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* ===== HALF ORANGE CIRCLE ===== */}
      <div className="absolute bottom-[-45%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff5a1f] rounded-full border-[2px] border-black"></div>

      {/* ===== BUTTONS ===== */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex items-center gap-5 z-20">
        {/* Portfolio Button */}
        <button className="relative flex items-center gap-2 bg-[#ff5a1f] text-white px-8 py-3 rounded-full text-sm font-medium shadow-[0_10px_30px_rgba(255,90,31,0.4)] hover:scale-105 transition">
          Portfolio
          <span className="text-lg">↗</span>
        </button>

        {/* Hire Me Button */}
        <button className="flex items-center gap-2 bg-white border border-black px-8 py-3 rounded-full text-sm font-medium shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:bg-black hover:text-white transition">
          <span className="text-lg">⤴</span>
          Hire Me
        </button>
      </div>

      {/* ===== LEFT SIDE CONTENT ===== */}
      <div className="absolute left-[8%] top-[50%] max-w-[320px] z-20">
        {/* Big Quote */}
        <div className="text-[80px] leading-none text-[#111] font-['Clash_Display']">
          “
        </div>

        {/* Description */}
        <p className="mt-[-12px] text-[15px] text-gray-600 leading-relaxed">
          I design and develop modern, high-performing websites that turn ideas
          into impactful digital experiences.
        </p>

        {/* Clients Served */}
        <div className="mt-6">
          <h2 className="text-[28px] font-semibold text-[#111]">450+</h2>
          <p className="text-sm text-gray-500">Clients Served</p>
        </div>
      </div>

      {/* ===== RIGHT SIDE CONTENT ===== */}
      <div className="absolute right-[8%] top-[65%] -translate-y-1/2 text-right z-20">
        {/* Stars (orange) */}
        <div className="text-[40px] text-[#ff5a1f]">★★★★★</div>

        {/* Experience */}
        <h2 className="mt-1 text-[28px] font-semibold text-[#111]">2+ Years</h2>

        {/* Line text */}
        <p className="text-sm text-black-500">Experience</p>

        {/* LINE */}
        <div className="mt-3 w-[125px] h-[2px] bg-black ml-auto"></div>
      </div>
    </div>
  );
}
