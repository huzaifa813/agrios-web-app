"use client";
import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function HeroSection() {
  const features = [
    {
      id: 1,
      feature: "/feature1.png",
      title: "We're using a new technology",
      image: "/container1.png",
    },
    {
      id: 2,
      feature: "/feature2.png",
      title: "Good in smart organic services",
      image: "/container2.png",
    },
    {
      id: 3,
      feature: "/feature3.png",
      title: "Reforming in the systems",
      image: "/container3.png",
    },
  ];

  return (
    <>
      <section
        className="relative w-full h-screen flex items-center bg-cover bg-center px-4 sm:px-6"
        style={{ backgroundImage: "url('/farmer.png')", color: Colors.white }}
      >
        <div className="relative z-10 px-6 md:px-12 ml-6 sm:ml-12 md:ml-20">
          <h5
            className="text-[16px] uppercase tracking-widest"
            style={{ color: Colors.white }}
          >
            Welcome to Adrios Farming
          </h5>

          <div className="mt-4">
            <Image
              src="/hero-element.png"
              alt="Agriculture & Eco Farming"
              width={400}
              height={100}
              priority
              className="w-full max-w-xs sm:max-w-md md:max-w-lg"
            />
          </div>

          <p
            className="max-w-sm sm:max-w-md md:max-w-lg text-[16px]"
            style={{ color: Colors.white }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <button
            className="mt-6 px-6 py-3 font-semibold rounded-lg shadow-md transition-all transform duration-300 hover:scale-105 hover:opacity-90"
            style={{
              backgroundColor: Colors.greenTopBorder1,
              color: Colors.white,
            }}
          >
            Discover More
          </button>
        </div>
      </section>

      <div className="relative w-full flex flex-wrap justify-center gap-6 px-4 sm:px-6 md:px-12 mt-16 ">

        {features.map((feature) => (
          <div
          key={feature.id}
          className="flex flex-col shadow-lg rounded-xl p-6 w-full sm:w-[48%] md:w-[30%] transition-all hover:scale-105 hover:shadow-xl items-center justify-center"
          style={{ backgroundColor: Colors.white }}
        >
        
            <Image
              src={feature.feature}
              alt={`Feature ${feature.id}`}
              width={80}
              height={80}
              className="max-w-[50px] sm:max-w-[60px] md:max-w-[80px]"
            />

            <h2
              className="text-[24px] font-extrabold mt-2 w-full text-center"
              style={{ color: Colors.black1 }}
            >
              {feature.title}
            </h2>

            <div className="mt-4 w-full flex items-center justify-center">
              <Image
                src={feature.image}
                alt={`Feature ${feature.id}`}
                width={120}
                height={120}
                className="rounded-lg max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
