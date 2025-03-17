import { Colors } from "@/utils/Colors";
import Image from "next/image";

const farmers = [
  {
    name: "Kevin Smith",
    role: "Farmer",
    image: "/farmer1.png", // Replace with actual images
  },
  {
    name: "Jessica Brown",
    role: "Farmer",
    image: "/farmer2.png",
  },
  {
    name: "David Martin",
    role: "Farmer",
    image: "/farmer3.png",
  },
];

export default function MeetOurFarmers() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-16">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/team-members.png"
          alt="Our Recent Work"
          width={150}
          height={30}
          className="mx-auto"
        />

        <h2
          style={{ fontFamily: "manrope" }}
          className="text-3xl md:text-4xl font-bold mt-2"
        >
          Meet Our Farmers
        </h2>
      </div>

      {/* Farmers Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {farmers.map((farmer, index) => (
          <div key={index} className="relative">
            {/* Farmer Image */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src={farmer.image}
                alt={farmer.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Name Tag */}
            <div className="absolute bottom-[-20px] right-0 w-[80%] sm:w-[220px] bg-white shadow-md rounded-lg px-4 py-2 flex flex-row-reverse items-center justify-between gap-2">
              {/* Name & Role (Now on Right Side) */}
              <div className="text-right flex-1">
                <h4
                  className="font-semibold mt-2 text-[14px] sm:text-[16px]"
                  style={{ fontFamily: "manrope" }}
                >
                  {farmer.name}
                </h4>
                <p
                  className="text-xs sm:text-sm text-gray-500"
                  style={{ color: Colors.inactiveGrey, fontFamily: "manrope" }}
                >
                  {farmer.role}
                </p>
              </div>

              {/* Social Share Icon (Now on Left Side) */}
              <div className="absolute -left-4 w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-green-500 flex items-center justify-center rounded-[10px]">
                <Image
                  src="/share.png" // Replace with actual share icon
                  alt="Share"
                  width={24}
                  height={24}
                  className="sm:w-[30px] sm:h-[30px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
