"use client";

import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Bonnie Tolbet",
      role: "Customer",
      text: "There are many variations of passages available but the majority have suffered alteration in some form by injected humor or randomized.",
      image: "/avatar-04.webp.png", // Update with correct path
    },
    {
      name: "Sarah Albert",
      role: "Customer",
      text: "There are many variations of passages available but the majority have suffered alteration in some form by injected humor or randomized.",
      image: "/div.avatar.png", // Update with correct path
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center mt-10"
      style={{
        backgroundImage: "url('/testimonalsbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Title Section */}
      <div className="text-center mb-10 sm:mb-12 flex flex-col justify-center items-center">
        <Image
          src="/Our Testimonials.png"
          alt="Our Testimonials"
          width={130}
          height={130}
          className="mb-2"
        />
        <h2
          style={{
            fontFamily: "manrope",
            color: Colors.black1,
            fontWeight: "800",
          }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          What They Say
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-6xl">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 relative"
          >
            {/* User Avatar */}
            <div className="relative w-[100px] h-[120px] sm:w-[120px] sm:h-[143px]">
              <Image
                src={item.image}
                alt={item.name}
                layout="responsive"
                width={120}
                height={143}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-between w-full">
              <p
                style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
                className="text-gray-700 text-sm sm:text-base leading-relaxed text-center sm:text-left"
              >
                {item.text}
              </p>

              {/* Name & Role - Aligned Right on Desktop */}
              <div className="flex flex-col sm:items-end items-center mt-4">
                <p
                  className="font-bold text-black text-center sm:text-right"
                  style={{ color: Colors.black1, fontFamily: "manrope" }}
                >
                  {item.name}
                </p>
                <span
                  className="text-gray-500 text-sm text-center sm:text-right"
                  style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
                >
                  {item.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
