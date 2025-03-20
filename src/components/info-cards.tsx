import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function InfoCards() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap justify-center gap-6">
        {/* About Card */}
        <div
          className="text-white rounded-lg w-full sm:w-[90%] md:w-[30%] p-8 flex flex-col items-start"
          style={{ backgroundColor: Colors.greenTopBorder1 }}
        >
          <Image
            src="/About.png"
            alt="Our Introductions"
            width={60}
            height={60}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed" style={{ fontFamily: "manrope" }}>
            Lorem ipsum is simply free text used by copytyping refreshing. Neque
            porro est qui.
          </p>
        </div>

        {/* Contact Card */}
        <div
          style={{ backgroundColor: Colors.greenTopBorder2 }}
          className="text-white rounded-lg w-full sm:w-[90%] md:w-[30%] p-8 flex flex-col items-start"
        >
          <Image
            src="/Contact.png"
            alt="Our Introductions"
            width={70}
            height={70}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed" style={{ fontFamily: "manrope" }}>
            +1- (246) 333-0079 <br />
            support@agrios.com <br />
            Mon - Fri: 7:00 am - 6:00 pm
          </p>
        </div>

        {/* Address Card */}
        <div
          style={{ backgroundColor: Colors.greenTopBorder3 }}
          className="text-white rounded-lg w-full sm:w-[90%] md:w-[30%] p-8 flex flex-col items-start"
        >
          <Image
            src="/Address.png"
            alt="Our Introductions"
            width={70}
            height={70}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed" style={{ fontFamily: "manrope" }}>
            66 Broklun Road Golden Street, <br />
            New York, United States of America
          </p>
        </div>
      </div>
    </div>
  );
}
