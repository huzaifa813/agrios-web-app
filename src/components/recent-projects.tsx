import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function RecentProjects() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-10">
      {/* Title & Description */}
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <Image
          src="/Our Recent Work.png"
          alt="Our Recent Work"
          width={150}
          height={30}
          className="mx-auto md:mx-0"
        />

        {/* Flexbox Layout for Title & Description */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-2">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "manrope" }}
          >
            Recently Completed Projects
          </h2>
          <p
            className="max-w-2xl md:w-auto text-sm sm:text-base"
            style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit
            penatibsenectus, sem mus etiam pharetra lacus ac tortor vitae, amet
            tincidunt congue fusce ridiculus cubilia ad feugiat fames placerat.
          </p>
        </div>
      </div>

      {/* Project Section */}
      <div
        className="relative mt-10 rounded-lg p-4 sm:p-6 md:p-12 overflow-hidden w-full h-[350px] md:h-[400px]"
        style={{
          backgroundImage: "url('/BG-news.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Inside Background */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 h-full">
          {/* Left Text Block */}
          <div
            style={{ backgroundColor: Colors.greenBg }}
            className="text-white p-4 sm:p-6 md:p-10 max-w-md shadow-lg"
          >
            <h3
              style={{ fontFamily: "manrope" }}
              className="text-lg sm:text-2xl font-bold mb-4"
            >
              Built the best
              <br /> agriculture market
            </h3>
            <p style={{ fontFamily: "manrope" }} className="text-xs sm:text-sm md:text-base mt-2">
              Give lady of they such they sure it. Me contained explained my
              education. Vulgar as hearts by garret. Perceived determine
              departure explained no forfeited be something on.
            </p>
          </div>

          {/* Right Image Block - Fruits at the End */}
          <div className="absolute bottom-[-30px] sm:bottom-[-50px] right-0 w-[250px] sm:w-[300px] md:w-[400px] overflow-visible">
            <Image
              src="/fruit.png"
              alt="Fresh Fruits"
              width={400}
              height={250}
              className="w-full rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
      </div>

      {/* New Section - Single Row Layout */}
      <div className="max-w-6xl mx-auto mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side - Two Grey Round Divs */}
        <div className="flex gap-4">
          <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full bg-gray-300"></div>
          <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full bg-gray-300"></div>
        </div>

        {/* Right Side - Three Images */}
        <div className="flex gap-4 sm:gap-6">
          <Image
            src="/dimg1.png"
            alt="Right Image 1"
            width={150}
            height={150}
            className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-lg object-cover"
          />
          <Image
            src="/dimg2.png"
            alt="Right Image 2"
            width={150}
            height={150}
            className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-lg object-cover"
          />
          <Image
            src="/dimg3.png"
            alt="Right Image 3"
            width={150}
            height={150}
            className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
