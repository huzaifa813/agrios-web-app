import { useState } from "react";
import Image from "next/image";
import { Colors } from "@/utils/Colors";

export default function DetailsOfProduct() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container px-4 py-10 flex flex-col md:flex-row gap-10">
      {/* Product Image */}
      <div className="">
        <Image
          src="/carrot-370x410.jpg.png" // Update with correct path
          alt="Tomato"
          width={400}
          height={400}
          className="rounded-lg max-w-full"
        />
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        {/* Name and Price */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-8">
          <h1
            className="text-[32px] md:text-[45px] font-bold"
            style={{ fontFamily: "manrope" }}
          >
            Tomato
          </h1>
          <p
            className="text-green-600 font-semibold text-[22px] md:text-[24px] mt-5"
            style={{ fontFamily: "manrope" }}
          >
            $50.00
          </p>
        </div>

        {/* Review */}
        <p
          className="text-sm mt-1 text-center md:text-left"
          style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}
        >
          (1 Customer Review)
        </p>

        {/* Description */}
        <p
          className="mt-4 text-center md:text-left"
          style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
        >
          Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des
          mauris commodo venenatis ligula commodo leez sed blandit convallis
          dignissim onec vel pellentesque neque.
        </p>

        {/* Quantity Selector */}
        <div className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-4">
          <span className="font-semibold " style={{ fontFamily: "manrope" }}>
            Choose Quantity
          </span>

          <div className="flex items-center">
            {/* Quantity Box */}
            <div
              className="border px-3 py-3 w-16 text-center text-lg"
              style={{
                borderColor: Colors.borderGrey,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                fontFamily: "manrope",
              }}
            >
              {quantity}
            </div>

            {/* Buttons in Column */}
            <div className="flex flex-col">
              <button
                className="w-10 h-7 text-lg font-bold border cursor-pointer"
                style={{
                  borderColor: Colors.borderGrey,
                  fontFamily: "manrope",
                  borderTopRightRadius: 10,
                }}
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
              <button
                className="w-10 h-6.5 text-lg font-bold border cursor-pointer"
                style={{
                  borderColor: Colors.borderGrey,
                  borderBottomRightRadius: 10,
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
            className="w-full md:w-auto text-white px-10 py-3 rounded-md hover:bg-green-700 transition text-[14px] cursor-pointer"
            style={{
              fontFamily: "manrope",
              backgroundColor: Colors.greenTopBorder1,
            }}
          >
            Add to cart
          </button>
          <button
            className="w-full md:w-auto text-white px-10 py-3 rounded-md hover:bg-yellow-600 transition text-[14px] cursor-pointer"
            style={{
              fontFamily: "manrope",
              backgroundColor: Colors.greenTopBorder3,
            }}
          >
            Add to wishlist
          </button>
        </div>

        {/* Share Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <span
            className="font-semibold text-lg"
            style={{ fontFamily: "manrope" }}
          >
            Share with Friends
          </span>

          {/* Social Icons */}
          <div className="flex space-x-3">
            {["x.png", "fb.png", "pintrest.png", "insta.png"].map(
              (icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: Colors.iconBg }}
                >
                  <Image
                    src={`/${icon}`}
                    alt={icon.split(".")[0]}
                    width={16}
                    height={16}
                    className="cursor-pointer hover:opacity-80"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}
