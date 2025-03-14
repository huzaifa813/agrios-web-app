"use client";
import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Agriculture Products",
      image: "/sevice-image1.png",
      icon: "/service-icon1.png",
    },
    {
      title: "Organic Products",
      image: "/sevice-image2.png",
      icon: "/service-icon2.png",
    },
    {
      title: "Fresh Vegetables",
      image: "/sevice-image4.png",
      icon: "/service-icon3.png",
    },
    {
      title: "Dairy Products",
      image: "/sevice-image5.png",
      icon: "/service-icon4.png",
    },
  ];

  return (
    <>
      {/* Section Header */}
      <section
        className="relative py-16 px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center justify-center"
        style={{ backgroundColor: Colors.iconBg }}
      >
        <div className="relative z-10 flex flex-col items-center mt-10">
          <Image
            src="/our-services.png"
            alt="Our Introductions"
            width={130}
            height={130}
            className="mb-2"
          />
          <h2
            className="mt-2 mb-10 font-extrabold text-2xl sm:text-3xl lg:text-4xl"
            style={{ color: Colors.black1, fontWeight: 800 }}
          >
            What We Offer
          </h2>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-center">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center justify-end w-full max-w-[350px] sm:max-w-[280px] md:max-w-[240px] lg:max-w-[220px] h-[330px]"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Overlay Content Positioned at Bottom */}
              <div className="relative z-10 bg-white px-4 py-6 rounded-lg shadow-md w-10/12 mx-auto mb-[26px] flex flex-col items-center text-center">
                {/* Centered Icon (Half Outside) */}
                <div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-[70px] h-[70px] shadow-md z-10 rounded-[7px]"
                  style={{ backgroundColor: Colors.greenTopBorder2 }}
                >
                  <Image src={service.icon} alt="icon" width={40} height={40} />
                </div>

                {/* Title (Forced Two Lines, Centered) */}
                <p
                  className="font-semibold leading-tight h-[48px] mt-10 text-[20px] w-full text-center px-2"
                  style={{ color: Colors.black1 }}
                >
                  {service.title}
                </p>

                {/* Read More Button (Centered) */}
                <div className="flex justify-center mt-4">
                  <button className="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-lg shadow">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
