"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Colors } from "@/utils/Colors";

const testimonials = [
  {
    name: "Bonnie Tolbert",
    text: "There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.",
    rating: 5,
  },
  {
    name: "John Doe",
    text: "This is a fantastic platform! The quality and efficiency are top-notch. Highly recommend to anyone in the industry.",
    rating: 4,
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full py-16 px-6 md:px-16 bg-[#F8F7F3] flex flex-col lg:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* Our Testimonials Image */}
        <Image
          src="/our-testimonials.png"
          alt="Our Testimonials"
          width={150}
          height={40}
          className="w-[120px] md:w-[150px] h-auto mx-auto lg:mx-0 mb-2"
        />

        {/* Heading */}
        <h2
          className="text-2xl md:text-4xl font-bold text-gray-900 mt-2"
          style={{ fontFamily: "manrope" }}
        >
          What They re <br className="hidden md:block" /> Talking About Agrios
        </h2>

        {/* Paragraph */}
        <p
          className="w-full md:w-[80%] text-[14px] md:text-[14px] leading-relaxed mt-4 font-medium"
          style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
        >
          There are many variations of passages of available but the majority
          have suffered alteration in some form by injected humor or random word
          which don’t look even.
        </p>

        {/* View All Button */}

        <button
          style={{ fontFamily: "manrope" }}
          className="mt-6 bg-green-600 text-[14px] md:text-[14px] text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          View All Testimonials
        </button>
      </div>

      {/* Testimonial Section (Card + Arrows) */}
      <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-center justify-center relative gap-6">
        {/* Navigation Arrows (Left Side of Card for Large Screens) */}
        <div className="hidden lg:flex flex-col space-y-3 absolute -left-16">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Image src="/up-arrow.png" alt="Up Arrow" width={24} height={24} />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Image
              src="/down-arrow.png"
              alt="Down Arrow"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Testimonial Card */}
        <motion.div
          key={index}
          className="w-full bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between relative gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Side: Text Content */}
          <div className="w-full md:w-[80%]">
            <p
              className="text-[14px] md:text-[14px] font-medium leading-relaxed"
              style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
            >
              {testimonials[index].text}
            </p>

            {/* Name & Rating (Row Alignment) */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-4">
              <h4
                className="font-bold text-gray-900 text-lg md:text-xl"
                style={{ fontFamily: "manrope" }}
              >
                {testimonials[index].name}
              </h4>

              {/* Star Rating */}
              <div
                className="flex text-yellow-500 text-lg"
                style={{ fontFamily: "manrope" }}
              >
                {"★".repeat(testimonials[index].rating)}
              </div>
            </div>
          </div>

          {/* Profile Placeholder with Inner Padding */}
          <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
            {/* Outer Dotted Circle */}
            <div className="w-full h-full border-2 border-dashed border-yellow-500 rounded-full flex items-center justify-center relative">
              {/* Grey Background (Separate Div) */}
              <div className="w-[85%] h-[85%] bg-gray-100 rounded-full absolute"></div>

              {/* Inner Green Circle */}
              <div className="w-8 h-8 bg-green-600 rounded-full absolute -bottom-4 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Navigation Arrows (Below Card) */}
        <div className="flex lg:hidden space-x-4 mt-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Image src="/up-arrow.png" alt="Up Arrow" width={24} height={24} />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Image
              src="/down-arrow.png"
              alt="Down Arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
