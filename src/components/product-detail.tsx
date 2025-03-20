import { useState } from "react";
import Image from "next/image";
import { Colors } from "@/utils/Colors";

export default function DetailsOfProduct() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {/* Main Product Container */}
      <div className="container px-4 py-10 flex flex-col md:flex-row gap-10 mx-auto">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/carrot-370x410.jpg.png"
            alt="Tomato"
            width={400}
            height={400}
            className="rounded-lg max-w-full"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1
            className="text-[28px] md:text-[40px] font-bold"
            style={{ fontFamily: "manrope" }}
          >
            Tomato
          </h1>
          <p
            className="text-green-600 font-semibold text-[20px] md:text-[24px] mt-5"
            style={{ fontFamily: "manrope" }}
          >
            $50.00
          </p>

          <p
            className="text-sm mt-1 text-center md:text-left"
            style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}
          >
            (1 Customer Review)
          </p>

          <p
            className="mt-4 text-justify text-sm md:text-base"
            style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
          >
            Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des
            mauris commodo venenatis ligula commodo leez sed blandit convallis
            dignissim onec vel pellentesque neque.
          </p>

          {/* Quantity Selector */}
          <div className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-4">
            <span className="font-semibold" style={{ fontFamily: "manrope" }}>
              Choose Quantity
            </span>

            <div className="flex items-center">
              <div
                className="border px-3 py-3 w-16 text-center text-lg rounded-l-md"
                style={{
                  borderColor: Colors.borderGrey,
                  fontFamily: "manrope",
                }}
              >
                {quantity}
              </div>

              <div className="flex flex-col">
                <button
                  className="w-10 h-6.5 text-lg font-bold border rounded-tr-md cursor-pointer"
                  style={{
                    borderColor: Colors.borderGrey,
                    fontFamily: "manrope",
                  }}
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
                <button
                  className="w-10 h-7 text-lg font-bold border rounded-br-md cursor-pointer"
                  style={{
                    borderColor: Colors.borderGrey,
                    fontFamily: "manrope",
                  }}
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button
              className="w-full md:w-auto text-white px-6 py-3 rounded-md hover:bg-green-700 transition text-[14px] cursor-pointer"
              style={{
                fontFamily: "manrope",
                backgroundColor: Colors.greenTopBorder1,
              }}
            >
              Add to cart
            </button>
            <button
              className="w-full md:w-auto text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition text-[14px] cursor-pointer"
              style={{
                fontFamily: "manrope",
                backgroundColor: Colors.greenTopBorder3,
              }}
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>

      {/* DESCRIPTION SECTION */}
      <div className="container px-4 py-10 mt-10 mx-auto w-full md:w-2/3">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "manrope" }}
        >
          Description
        </h2>
        <p
          className="text-justify text-sm md:text-base"
          style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}
        >
          Lorem ipsum dolor sit amet sectetur adipiscin elit cras feuiat antesed
          ces condimentum viverra duis autue nim convallis id diam vitae duis
          egety dictum erosin dictum sem. Vivamus sed molestie sapien aliquam et
          facilisis arcu dut molestie augue suspendisse sodales tortor nunced
          quis cto ligula posuere cursus keuis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecated cupidatat non proident sunt in culpa qui
          officia deserunt mollit anim id est laborum ivamus sed molestie
          sapien.
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
        {/* Review Section */}
        <div
          className="mt-8 border-b pb-10"
          style={{ borderColor: Colors.borderGrey }}
        >
          <h3
            className="text-xl font-bold"
            style={{ fontFamily: "manrope", color: Colors.black1 }}
          >
            1 review for Tomato
          </h3>

          {/* Review Content */}
          <div className="mt-6 flex flex-col md:flex-row items-center gap-x-6">
            <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]">
              <Image
                src="/reviewer.png"
                alt="Reviewer Image"
                width={140}
                height={140}
                className="rounded-full"
              />
            </div>

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
                className="text-gray-600 mt-4 text-justify text-sm md:text-base"
                style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}
              >
                It has survived not only five centuries, but also the leap into
                electronic typesetting unchanged. It was popularised in the
                sheets containing lorem ipsum is simply free text. sint occaecat
                cupidatat non proident sunt in culpa qui officia deserunt mollit
                anim id est laborum. Vivaus sed delly molestie sapien.
              </p>
            </div>
          </div>
        </div>

        {/* Add a Review */}
        <div className="mt-10">
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
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          {/* Rating Text */}
          <p
            className="mt-4 text-sm"
            style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
          >
            Your rating
          </p>

          {/* Review Text Area */}
          <textarea
            className="mt-2 w-full h-40 p-4 rounded-lg bg-gray-100 focus:outline-none"
            placeholder="Your Review..."
            style={{ fontFamily: "manrope", backgroundColor: Colors.iconBg }}
          />

          {/* Name & Email Fields */}
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              className="w-full md:w-1/2 p-3 rounded-lg bg-gray-100 focus:outline-none"
              placeholder="Your Name"
              style={{ fontFamily: "manrope", backgroundColor: Colors.iconBg }}
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
    </>
  );
}
