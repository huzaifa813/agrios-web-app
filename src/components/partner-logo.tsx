"use client";

import Image from "next/image";

export default function PartnerLogos() {
  const logos = [
    { src: "/partner-01-1.webp.png", alt: "Organic Wheat" },
    { src: "/partner-02-1.webp.png", alt: "Agro" },
    { src: "/partner-03-1.webp.png", alt: "The Farm Agriculture" },
    { src: "/partner-04-1.webp.png", alt: "Natural Rices" },
    { src: "/partner-05-1.webp.png", alt: "Agric" },
  ];

  return (
    <div className="w-full py-10 bg-[#F8F7F0] flex justify-center items-center mt-10">
      <div className="flex justify-between items-center gap-6 max-w-6xl w-full px-6">
        {logos.map((logo, index) => (
          <div key={index} className="w-32 h-auto flex justify-center">
            <Image src={logo.src} alt={logo.alt} width={120} height={60} />
          </div>
        ))}
      </div>
    </div>
  );
}
