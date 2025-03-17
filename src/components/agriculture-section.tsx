"use client";
import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function AgricultureSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-12">
      {/* Left Side - Images */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        {/* Large Background Image */}
        <div className="relative w-full sm:w-3/4 lg:w-[400px]">
          <Image
            src="/dummy2.png"
            alt="Agriculture Scene"
            width={400}
            height={400}
            className="rounded-full shadow-lg object-cover w-full h-auto"
          />
        </div>
        {/* Small Overlay Image */}
        <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40">
          <Image
            src="/dummy1.png"
            alt="Farming Close-up"
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-md object-cover ml-40"
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left">
        {/* Image Title */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/our-introductions.png"
            alt="Our Introductions"
            width={130}
            height={130}
            className="mb-2"
          />
        </div>

        <h2
          className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug"
          style={{ fontFamily: "manrope" }}
        >
          Agriculture & Organic <br className="hidden sm:block" /> Product Farm
        </h2>
        <p
          className="text-lg text-greenTopBorder1 font-semibold my-6"
          style={{
            color: Colors.greenTopBorder1,
            fontFamily: "manrope",
          }}
        >
          Agrios is the largest global organic farm.
        </p>
        <p
          className="text-inactiveGrey mt-4"
          style={{
            color: Colors.inactiveGrey,
            fontFamily: "manrope",
          }}
        >
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </p>

        {/* Features */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-6">
          <div className="flex items-center gap-3">
            <Image src="/cicon1.png" alt="icon" width={30} height={30} />
            <p
              className=" font-semibold"
              style={{ color: Colors.black1, fontFamily: "manrope" }}
            >
              Growing fruits & vegetables
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/cicon2.png" alt="icon" width={30} height={30} />
            <p
              className=" font-semibold"
              style={{ color: Colors.black1, fontFamily: "manrope" }}
            >
              Tips for ripening your fruits
            </p>
          </div>
        </div>

        {/* Checklist */}
        <ul className="font-semibold mt-6 space-y-2 text-inactiveGrey text-[13px]">
          <li
            className="flex items-center gap-2 text-[13px]"
            style={{ color: Colors.black1, fontFamily: "manrope" }}
          >
            <Image
              src="/checked-box.png"
              alt="checkbox"
              width={20}
              height={20}
            />
            Lorem Ipsum is not simply random text.
          </li>
          <li
            className="flex items-center gap-2 text-[13px]"
            style={{ color: Colors.black1, fontFamily: "manrope" }}
          >
            <Image
              src="/checked-box.png"
              alt="checkbox"
              width={20}
              height={20}
            />
            Making this the first true generator on the internet.
          </li>
        </ul>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <button
            className="mt-6 px-6 py-3 text-white text-base font-semibold rounded-lg shadow-md transition-all transform hover:scale-105 hover:bg-green-700 hover:shadow-lg"
            style={{
              backgroundColor: Colors.greenTopBorder1,
              fontFamily: "manrope",
            }}
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
