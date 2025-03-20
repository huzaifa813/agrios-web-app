import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function DescriptionSection() {
  return (
    <div className="container px-4 py-10">
      {/* Description Section */}
      <div className="md:w-2/3 w-full ml-16 md:ml-40">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "manrope" }}
        >
          Description
        </h2>
        <p style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat
          ante sed condimentum viverra. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Exceptetur sint occaecat cupidatat non proident sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <p
          className="mt-4"
          style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}
        >
          Aliquam et facilisis arcu ut molestie augue. Suspendisse sodales
          tortor nunc quis auctor ligula posuere cursus. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      {/* Review Section */}
      <div
        className="mt-8 md:w-2/3 w-full ml-16 md:ml-40 border-b"
        style={{
          borderBottomWidth: 1,
          borderColor: Colors.borderGrey,
          paddingBottom: 50,
        }}
      >
        <h3
          className="text-xl font-bold"
          style={{ fontFamily: "manrope", color: Colors.black1 }}
        >
          1 review for Tomato
        </h3>

        {/* Review Section in a Row */}
        <div className="mt-6 flex flex-row items-center gap-x-6">
          {/* Reviewer Image */}
          <div className="w-[140px] h-[140px]">
            <Image
              src="/reviewer.png"
              alt="Reviewer Image"
              width={140}
              height={140}
              className="rounded-full"
            />
          </div>

          {/* Review Content */}
          <div className="flex-1">
            <h4
              className="font-bold"
              style={{ fontFamily: "manrope", color: Colors.black1 }}
            >
              Kevin Martin
            </h4>
            <p
              className="text-green-600 text-sm"
              style={{ fontFamily: "manrope", color: Colors.greenTopBorder1 }}
            >
              July 10, 2022
            </p>
            <p
              className="text-gray-600 mt-4"
              style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}
            >
              It has survived not only five centuries but also the leap into
              electronic typesetting unchanged. It was popularized in the sheets
              containing Lorem Ipsum as simply free text. Sint occaecat
              cupidatat non proident sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* Add a Review Section */}
      <div className="mt-10 md:w-2/3 w-full ml-16 md:ml-40">
        <h3
          className="text-xl font-bold"
          style={{ fontFamily: "manrope", color: Colors.black1 }}
        >
          Add a review
        </h3>

        {/* Save Checkbox */}
        <div className="mt-4 flex items-center gap-2">
          <input type="checkbox" id="save-info" className="w-4 h-4" />
          <label
            htmlFor="save-info"
            style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        {/* Rating Text */}
        <p
          className="mt-4 "
          style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
        >
          Your rating
        </p>

        {/* Review Text Area */}
        <textarea
          style={{ fontFamily: "manrope", backgroundColor: Colors.iconBg }}
          className="mt-2 w-full h-40 p-4 rounded-lg bg-gray-100 focus:outline-none"
          placeholder="Your Review..."
        />

        {/* Name & Email Fields */}
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <input
            style={{ fontFamily: "manrope", backgroundColor: Colors.iconBg }}
            type="text"
            className="w-full md:w-1/2 p-3 rounded-lg bg-gray-100 focus:outline-none"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full md:w-1/2 p-3 rounded-lg bg-gray-100 focus:outline-none"
            placeholder="Email Address"
            style={{ fontFamily: "manrope", backgroundColor: Colors.iconBg }}
          />
        </div>

        {/* Submit Button */}
        <button
          className="mt-6 px-8 py-4 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
          style={{
            fontFamily: "manrope",
            backgroundColor: Colors.greenTopBorder1,
          }}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}
