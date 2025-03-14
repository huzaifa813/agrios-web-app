"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

export default function AgricultureHero() {
  const [isOpen, setIsOpen] = useState(false); // Toggle state for menu

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-white bg-[url('/agri-projects.png')] bg-cover bg-center px-6 mt-20">
      {/* Green Navigation Bar for Larger Screens */}
      <motion.div
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 md:px-10 py-4 h-[184px] w-[90%] md:w-[1184px] rounded-[10px] hidden md:flex justify-center items-center gap-8 md:gap-16 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
          "Agriculture Products",
          "Projects Completed",
          "Satisfied Clients",
          "Experts Farmers",
        ].map((item, index) => (
          <span
            key={index}
            className="text-[16px] md:text-[18px] font-medium text-white whitespace-nowrap hover:underline cursor-pointer transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Hamburger Menu for Small Devices */}
      <div className="absolute top-4 left-4 md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-green-600 text-white flex flex-col items-center py-4 gap-4 shadow-lg md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            "Agriculture Products",
            "Projects Completed",
            "Satisfied Clients",
            "Experts Farmers",
          ].map((item, index) => (
            <span
              key={index}
              className="text-[18px] font-medium hover:underline cursor-pointer transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </motion.div>
      )}

      {/* Text Content with Play Button */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center w-full gap-4 md:gap-8 mt-10">
        {/* Heading - Left-aligned */}
        <h1 className="text-3xl md:text-5xl font-bold w-full md:w-1/2 text-left">
          Agriculture Matters to the Future of Development
        </h1>

        {/* Play Button */}
        <motion.button
          className="p-4 bg-white rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center w-14 h-14 md:w-16 md:h-16"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src="/play.png"
            alt="Play Button"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </motion.button>
      </div>
    </div>
  );
}
