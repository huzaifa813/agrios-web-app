"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Colors } from "@/utils/Colors";

export default function AboutAgricultureProjects() {

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-white bg-[url('/agri-projects.png')] bg-cover bg-center px-4 mt-20">
      
      {/* Play Button - Responsive Size & Position */}
      <motion.button
        className="absolute top-1/3 transform -translate-y-1/2 bg-white rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center w-12 h-12 md:w-16 md:h-16"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Image
          src="/play.png"
          alt="Play Button"
          width={32}
          height={32}
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </motion.button>

      {/* Heading - Scales for Different Screens */}
      <h1
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mt-12 px-4 leading-snug"
        style={{ fontFamily: "manrope" }}
      >
        ECO-Friendly Products can <br /> be Made from Scratch
      </h1>

      {/* Bottom Navigation Bar - Responsive and Flexible */}
      <motion.div
        className="h-[184px] absolute bottom-0 left-0 w-full bg-black text-white py-4 md:py-6 flex flex-wrap justify-center items-center gap-4 md:gap-10 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
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
            style={{ fontFamily: "manrope", color: Colors.lightGrey }}
            className="text-sm md:text-lg font-medium hover:text-white cursor-pointer transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
