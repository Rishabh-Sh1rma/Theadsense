import React from 'react';
import { motion } from 'motion/react';
import { useCalendly } from '../context/CalendlyContext';

export default function Navbar() {
  const { openCalendly } = useCalendly();

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl"
    >
      <nav className="flex items-center justify-between p-1.5 pl-3 rounded-full bg-[#EBEBEB]/60 backdrop-blur-xl border border-white/40 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)]">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <a href="/#" className="flex items-center justify-center font-bold text-lg tracking-tight text-black ml-2 hover:opacity-70 transition-opacity">
            theadsense
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1.5">
          <div className="hidden md:flex items-center gap-6 mr-4 text-[13px] font-medium text-gray-900 tracking-tight">
            <a href="/#services" className="hover:text-gray-500 transition-colors">Services</a>
            <a href="/#casestudies" className="hover:text-gray-500 transition-colors">Our Work</a>
            <a href="/#whyus" className="hover:text-gray-500 transition-colors">Why Us</a>
            <a href="/#process" className="hover:text-gray-500 transition-colors">Process</a>
            <a href="/#faq" className="hover:text-gray-500 transition-colors">FAQ</a>
          </div>
          
          <button onClick={openCalendly} className="bg-[#0a0a0a] text-white px-6 py-2.5 rounded-full text-[13px] font-medium hover:bg-gray-800 transition-colors flex items-center justify-center whitespace-nowrap shadow-sm hover:scale-105 transform duration-200 cursor-pointer">
            Book a call
          </button>
        </div>

      </nav>
    </motion.div>
  );
}
