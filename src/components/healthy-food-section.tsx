"use client";

import { Colors } from "@/utils/Colors";
import Image from "next/image";

const features = [
  {
    title: "Harvesting",
    icon: "/Vector (4).png",
    bgColor: Colors.greenTopBorder1,
  },
  {
    title: "Maintenance",
    icon: "/Vector (5).png",
    bgColor: Colors.greenTopBorder2,
  },
  {
    title: "Fencing",
    icon: "/Vector (6).png",
    bgColor: Colors.greenTopBorder3,
  },
];

export default function HealthyFoodSection() {
  return (
    <>
      {/* Section 1 - Healthy Food */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/fancy-image-03.webp.png"
              alt="Farmer with vegetables"
              width={500}
              height={500}
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute -z-10 w-48 h-48 bg-white rounded-full left-[-30px] top-[50px] hidden lg:block"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
          <Image
            src="/What We Do.png"
            alt="Our Introductions"
            width={130}
            height={130}
            className="mb-2"
          />
          <h2
            style={{ fontFamily: "manrope" }}
            className="text-3xl md:text-4xl font-bold text-black leading-snug mt-2"
          >
            Healthy Food for Good Growth
          </h2>
          <p
            style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}
            className="mt-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            suscipit sagittis leo sit amet dignissim posuere cubilia curae.
          </p>
          <p
            style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}
            className="mt-4"
          >
            Nulla placerat posuere dui. Pellentesque venenatis sem non lacus ac
            auctor.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                style={{ backgroundColor: feature.bgColor }}
                className="flex flex-col items-center p-4 w-28 md:w-32 rounded-lg text-white shadow-md"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                />
                <p
                  className="mt-2 text-sm font-semibold"
                  style={{ fontFamily: "manrope" }}
                >
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Agriculture Market Leaders */}
      <section
        className="w-full h-full py-12 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between"
        style={{
          backgroundColor: "#4CAF50",
          backgroundImage: "url('/greenfarmbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        {/* Left Section: Image + Text */}
        <div className="w-full md:w-3/4 flex flex-col items-start text-white">
          <Image
            src="/Agriculture Market Leaders.png"
            alt="Our Introductions"
            width={180}
            height={180}
            className="mb-4"
          />
          <h2
            style={{ fontFamily: "manrope" }}
            className="text-2xl md:text-3xl font-bold leading-tight"
          >
            We’re popular in agriculture market globally
          </h2>
        </div>

        {/* Right Section: Button */}
        <div className="w-full md:w-auto mt-6 md:mt-0 flex justify-center md:justify-end">
          <button
            style={{ fontFamily: "manrope" }}
            className="bg-yellow-400 text-white px-6 py-3 rounded-lg  shadow-lg hover:bg-yellow-500 transition-all"
          >
            Discover More
          </button>
        </div>
      </section>
    </>
  );
}
