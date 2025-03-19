import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function AgricultureMarket() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        {/* Green Background Shape */}
        <div
          className="absolute top-[40%] left-[15%] w-16 h-16 md:w-20 md:h-20"
          style={{ backgroundColor: Colors.greenTopBorder2, borderRadius: 10 }}
        ></div>

        {/* Main Image */}
        <div className="relative z-10">
          <Image
            src="/about-01.webp.png"
            alt="Agriculture Field"
            width={400}
            height={300}
            className="rounded-lg shadow-lg w-[90%] md:w-[80%] lg:w-[400px]"
          />
          {/* Smaller Overlapping Image */}
          <div className="absolute bottom-[0px] left-[-40px] md:left-[-60px] lg:left-[-100px]">
            <Image
              src="/about-02.webp.png"
              alt="Farmer Harvesting"
              width={250}
              height={180}
              className="rounded-lg shadow-lg w-[70%] md:w-[80%] lg:w-[250px]"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        {/* Section Title Image */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/Get to know us.png"
            alt="Our Introductions"
            width={130}
            height={130}
            className="mb-2"
          />
        </div>

        {/* Main Heading */}
        <h2
          style={{
            color: Colors.black1,
            fontFamily: "manrope",
          }}
          className="text-2xl md:text-4xl font-bold leading-tight"
        >
          The Best Agriculture Market
        </h2>

        {/* Green Highlighted Text */}
        <p
          style={{
            color: Colors.greenTopBorder1,
            fontFamily: "manrope",
            fontWeight: "700",
          }}
          className="text-lg md:text-xl"
        >
          There are many variations of passa of lorem available, but the
          majority have suffered alteration.
        </p>

        {/* Paragraph Description */}
        <p
          style={{
            color: Colors.inactiveGrey,
            fontFamily: "manrope",
            fontWeight: "500",
          }}
          className="text-gray-600 text-sm md:text-base leading-relaxed"
        >
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </p>

        {/* Bullet Points */}
        <ul
          className="space-y-3 mt-4 font-semibold"
          style={{
            color: Colors.black1,
            fontFamily: "manrope",
          }}
        >
          <li className="flex items-center justify-center lg:justify-start">
            <Image
              src="/tick.png"
              alt="Check"
              width={20}
              height={20}
              className="mr-2"
            />
            Suspe ndisse suscipit sagittis leo
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <Image
              src="/tick.png"
              alt="Check"
              width={20}
              height={20}
              className="mr-2"
            />
            Entum estibulum dignissim posuere
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <Image
              src="/tick.png"
              alt="Check"
              width={20}
              height={20}
              className="mr-2"
            />
            Lorem Ipsum on the tend to repeat
          </li>
        </ul>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <button
            style={{
              fontFamily: "manrope",
            }}
            className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
