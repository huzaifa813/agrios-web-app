"use client";

import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function WhyChooseAgrios() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-10 min-h-screen">
      {/* Left Side (Image with Speech Bubble) */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src="/whychooseagrios.png"
          alt="Farm Image"
          width={700}
          height={700}
          className="max-w-[700px] w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Right Side (Text Content) */}
      <div className="w-full flex flex-col justify-center text-center lg:text-left">
        {/* Background Image for Title */}
        <div className="relative inline-block mb-4">
          <Image
            src="/our-farm-benefits.png"
            alt="Background"
            width={200}
            height={50}
            className="absolute -top-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-[150px] h-auto opacity-70"
          />
        </div>

        <h2
          style={{ fontFamily: "manrope" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
        >
          Why Choose Agrios Market
        </h2>

        <p
          className="text-[14px] sm:text-[14px] w-full sm:w-[80%] mx-auto lg:mx-0 leading-relaxed mt-4"
          style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
        >
          There are many variations of passages available, but the majority have
          suffered alteration in some form by injected humor or random words
          which don’t look even.
        </p>

        {/* Benefits List */}
        <div className="mt-6 space-y-6">
          {/* Benefit 1 */}
          <div className="flex items-center gap-4 text-center lg:text-left justify-center lg:justify-start">
            <Image
              src="/greenCheckbox.png"
              alt="Checkmark"
              width={30}
              height={30}
              className="w-6 h-6 flex-shrink-0"
            />
            <div>
              <h4
                className="text-lg font-semibold text-gray-900"
                style={{ fontFamily: "manrope" }}
              >
                Quality Organic Food
              </h4>
              <p
                className="text-[14px] sm:text-[14px]"
                style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
              >
                There are variations. You need to be sure there is anything
                hidden in the middle of the text.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-center gap-4 text-center lg:text-left justify-center lg:justify-start">
            <Image
              src="/checked-box.png"
              alt="Checkmark"
              width={30}
              height={30}
              className="w-6 h-6 flex-shrink-0"
            />
            <div>
              <h4
                className="text-lg font-semibold text-gray-900"
                style={{ fontFamily: "manrope" }}
              >
                Professional Farmers
              </h4>
              <p
                className="text-[14px] sm:text-[14px]"
                style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
              >
                There are variations. You need to be sure there is anything
                hidden in the middle of the text.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-center gap-4 text-center lg:text-left justify-center lg:justify-start">
            <Image
              src="/lightyellowCheckbox.png"
              alt="Checkmark"
              width={30}
              height={30}
              className="w-6 h-6 flex-shrink-0"
            />
            <div>
              <h4
                className="text-lg font-semibold text-gray-900"
                style={{ fontFamily: "manrope" }}
              >
                Quality Products
              </h4>
              <p
                className="text-[14px] sm:text-[14px]"
                style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
              >
                There are variations. You need to be sure there is anything
                hidden in the middle of the text.
              </p>
            </div>
          </div>
        </div>

        {/* Discover More Button */}
        <button
          style={{ fontFamily: "manrope" }}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition w-[40%] mx-auto sm:mx-0"
        >
          Discover More
        </button>
      </div>
    </div>
  );
}
