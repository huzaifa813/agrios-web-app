"use client";

import Image from "next/image";

const cardData = [
  {
    title: "Quality Standards",
    image: "/service-08.webp.png", // Replace with actual image path
  },
  {
    title: "Organic Farming",
    image: "/service-09.webp.png", // Replace with actual image path
  },
  {
    title: "Agriculture Products",
    image: "/service-10.webp.png", // Replace with actual image path
  },
];

export default function AgricultureCards() {
  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Title */}
            <div className="p-5 text-center bg-[#F8F7F0]">
              <h3 className="text-lg font-semibold text-gray-800" style={{ fontFamily: "manrope" }}>{card.title}</h3>
            </div>
            {/* Image */}
            <div className="w-full h-[250px] sm:h-[220px] relative">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-b-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
