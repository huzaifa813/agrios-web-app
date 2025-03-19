"use client";

import Image from "next/image";

export default function HeroSection2() {
  return (
    <section
      className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] flex items-center bg-cover bg-center px-4 sm:px-6 md:px-12"
      style={{ backgroundImage: "url('/agri-projects.png')" }}
    >

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Left Content (Text) */}
        <div className="w-full md:w-1/2 text-white">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ fontFamily: "manrope" }}
          >
            Agriculture Matters to the Future of Development
          </h1>
        </div>

        {/* Right Content (Play Button & Text) */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <button className="flex flex-col items-center">
            {/* Play Button */}
            <div className="w-14 sm:w-16 h-14 sm:h-16 bg-white flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110">
              <Image src="/play.png" alt="Play" width={28} height={28} />
            </div>
            {/* Watch Video Text */}
            <Image
              src="/watchvideo.png"
              alt="Watch our video"
              width={120}
              height={40}
              className="mt-4 sm:mt-6"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
