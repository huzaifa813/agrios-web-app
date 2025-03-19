"use client";

import Image from "next/image";

const projects = [
  {
    title: "Agriculture Farming",
    image: "/proj1.png",
  },
  {
    title: "Ecological Farming",
    image: "/proj2.png",
  },
  {
    title: "Organic Solutions",
    image: "/proj3.png",
  },
  {
    title: "Fresh Products",
    image: "/proj4.png",
  },
];

export default function SimilarProjects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Header */}
      <div className="text-center">
        {/* Centered Image */}
        <div className="flex justify-center">
          <Image
            src="/recently-completed.png"
            alt="Our Introductions"
            width={130}
            height={130}
            className="mb-2"
          />
        </div>

        <h2
          className="text-3xl font-bold mt-2"
          style={{
            fontFamily: "manrope",
            fontWeight: "800",
          }}
        >
          Similar Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />

            {/* Title */}
            <h3
              style={{
                fontFamily: "manrope",
                fontWeight: "800",
              }}
              className="absolute bottom-4 left-4 text-white text-lg font-semibold z-10"
            >
              {project.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
