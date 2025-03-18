"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AgriculturePlay() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center text-white bg-[url('/agri-projects.png')] bg-cover bg-center px-4 sm:px-6 lg:px-12 mt-20">
      {/* Container to Stack Play Button and Text Vertically */}
      <div className="relative flex flex-col items-center justify-center w-full gap-6 text-center px-4 sm:px-8 md:px-12">
        {/* Play Button (Smaller on Large Screens) */}
        <motion.button
          className="p-3 bg-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src="/play.png"
            alt="Play Button"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
          />
        </motion.button>

        {/* Heading - Centered Below the Play Button */}
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
          style={{ fontFamily: "manrope" }}
        >
          ECO-Friendly Products Can Be Made from Scratch
        </h1>
      </div>
    </div>
  );
}
