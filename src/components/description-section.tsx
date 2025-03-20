import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function DescriptionSection() {
  return (
    <div className="container px-4 py-10 w-full md:px-10">
      {/* Description Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: "manrope" }}>
          Description
        </h2>
        <p className="text-sm md:text-base" style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat
          ante sed condimentum viverra. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="mt-4 text-sm md:text-base" style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}>
          Aliquam et facilisis arcu ut molestie augue. Suspendisse sodales
          tortor nunc quis auctor ligula posuere cursus.
        </p>
      </div>

      {/* Review Section */}
      <div className="mt-8 border-b pb-8" style={{ borderColor: Colors.borderGrey }}>
        <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: "manrope", color: Colors.black1 }}>
          1 review for Tomato
        </h3>

        {/* Review Content */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-x-6 gap-y-4">
          {/* Reviewer Image */}
          <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]">
            <Image src="/reviewer.png" alt="Reviewer Image" width={140} height={140} className="rounded-full" />
          </div>

          {/* Review Details */}
          <div className="flex-1 text-center md:text-left">
            <h4 className="font-bold text-base md:text-lg" style={{ fontFamily: "manrope", color: Colors.black1 }}>
              Kevin Martin
            </h4>
            <p className="text-green-600 text-sm" style={{ fontFamily: "manrope", color: Colors.greenTopBorder1 }}>
              July 10, 2022
            </p>
            <p className="text-gray-600 mt-4 text-sm md:text-base" style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}>
              It has survived not only five centuries but also the leap into
              electronic typesetting unchanged.
            </p>
          </div>
        </div>
      </div>

      {/* Add a Review Section */}
      <div className="mt-10 w-full">
        <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: "manrope", color: Colors.black1 }}>
          Add a review
        </h3>

        {/* Save Checkbox */}
        <div className="mt-4 flex items-center gap-2">
          <input type="checkbox" id="save-info" className="w-4 h-4" />
          <label htmlFor="save-info" className="text-sm md:text-base" style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}>
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        {/* Rating Text */}
        <p className="mt-4 text-sm md:text-base" style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}>
          Your rating
        </p>

        {/* Review Text Area */}
        <textarea
          className="mt-2 w-full h-32 md:h-40 p-4 rounded-lg bg-gray-100 focus:outline-none text-sm md:text-base"
          style={{ fontFamily: "manrope", backgroundColor: Colors.iconBg }}
          placeholder="Your Review..."
        />

        {/* Name & Email Fields */}
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="w-full md:w-1/2 p-3 rounded-lg bg-gray-100 focus:outline-none text-sm md:text-base"
            style={{ fontFamily: "manrope", backgroundColor: Colors.iconBg }}
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full md:w-1/2 p-3 rounded-lg bg-gray-100 focus:outline-none text-sm md:text-base"
            placeholder="Email Address"
            style={{ fontFamily: "manrope", backgroundColor: Colors.iconBg }}
          />
        </div>

        {/* Submit Button */}
        <button
          className="mt-6 px-6 md:px-8 py-3 md:py-4 text-white rounded-lg hover:bg-green-700 transition cursor-pointer text-sm md:text-base"
          style={{ fontFamily: "manrope", backgroundColor: Colors.greenTopBorder1 }}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}
