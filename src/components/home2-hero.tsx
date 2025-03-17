import Image from "next/image";

export default function AgricultureHero2() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero2bg.png')" }}
    >
      {/* Main Content Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="max-w-lg text-center md:text-left">
          {/* Section Title as Image */}
          <Image
            src="/Get to know us.png"
            alt="Get to Know Us"
            width={180}
            height={40}
            className="mx-auto md:mx-0 object-contain mb-2 mt-10"
          />

          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900"
            style={{ fontFamily: "manrope" }}
          >
            Leader in Agriculture Market
          </h1>

          {/* Description */}
          <p
            className="text-gray-600 mt-4 text-[15px] sm:text-[16px]"
            style={{ fontFamily: "manrope" }}
          >
            There are many variations of passages of Lorem Ipsum available. The
            majority have suffered alteration in some form, by injected humour,
            or randomized words which don’t look even slightly believable.
          </p>

          {/* Modern Agriculture Types */}
          <div className="mt-8 flex flex-col sm:flex-row items-center sm:space-x-4">
            <div className="flex flex-col text-center sm:text-left">
              <Image
                src="/Modernagriculturetypes.png"
                alt="Modern Agriculture Types"
                width={250}
                height={40}
                className="object-contain mx-auto sm:mx-0"
              />
              <span
                style={{ fontFamily: "manrope" }}
                className="text-gray-500 text-sm mt-1"
              >
                We’re here for you from start to finish
              </span>
            </div>

            {/* Play Button as Image */}
            <div className="mt-4 sm:mt-0 w-[160px] h-[50px] flex items-center justify-center">
              <Image
                src="/video-image.webp.png"
                alt="Play Button"
                width={160}
                height={50}
                className="object-contain mt-10"
              />
            </div>
          </div>

          {/* Discover More Button */}
          <button
            style={{ fontFamily: "manrope" }}
            className="mt-16 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-[14px]"
          >
            Discover More
          </button>
        </div>

        {/* Right Section - Images */}
        <div className="flex flex-wrap justify-center md:justify-end mt-10 md:mt-0 space-x-0 md:space-x-6">
          {/* Column with Two Images */}
          <div className="flex flex-col space-y-4 md:space-y-6">
            <Image
              src="/image-01-1.webp.png"
              alt="Farmer"
              width={260}
              height={300}
              className="w-full sm:w-auto md:w-[260px] rounded-lg shadow-md"
            />
            <Image
              src="/div.inner.png"
              alt="Tractor"
              width={260}
              height={300}
              className="w-full sm:w-auto md:w-[260px] rounded-lg"
            />
          </div>

          {/* Single Image in Row */}
          <Image
            src="/image-02-1.webp.png"
            alt="Agriculture Scene"
            width={260}
            height={620}
            className="w-full sm:w-auto md:w-[260px] rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
