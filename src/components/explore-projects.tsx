"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Easy Harvesting", image: "/project1.png" },
  { title: "Agriculture Farming", image: "/project2.png" },
  { title: "Organic Solutions", image: "/project3.png" },
  { title: "Sustainable Growth", image: "/project3.png" },
];

export default function ExploreProjects() {
  return (
    <div className="w-full px-6 py-12 text-center">
      {/* Section Heading with Icon */}
      <motion.div
        className="flex flex-col items-center justify-center mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/recently-completed.png"
          alt="Recently Completed"
          width={130}
          height={30}
          className="w-[130px] h-[30px]"
          priority
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ fontFamily: "manrope" }}
      >
        Explore Projects
      </motion.h2>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={400}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              priority
            />

            {/* Text Overlay */}
            <div
              style={{ fontFamily: "manrope" }}
              className="absolute bottom-4 left-6 text-white text-lg font-semibold w-1/3 text-start"
            >
              {project.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
