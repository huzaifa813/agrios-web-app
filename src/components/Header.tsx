import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function Header() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Agrios Logo" width={140} height={50} />
      </div>

      {/* Center: Icons + Contact Info */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12">
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

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-8 lg:gap-12 text-gray-600 mx-4 md:mx-8 lg:mx-12">
          {[
            {
              icon: "call.png",
              title: "Call anytime",
              value: "+ 98 (000) - 9630",
            },
            {
              icon: "email.png",
              title: "Send email",
              value: "ambed@agrios.com",
            },
            {
              icon: "location.png",
              title: "380 St Kilda Road",
              value: "Melbourne, Australia",
            },
          ].map((item, index, array) => (
            <div
              key={index}
              className={`flex items-center space-x-3 pr-4 ${
                index !== array.length - 1 ? "md:border-r" : ""
              }`}
              style={{
                borderRight:
                  index !== array.length - 1
                    ? `1px solid ${Colors.borderColor}`
                    : "none",
              }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ backgroundColor: Colors.iconBg }}
              >
                <Image
                  src={`/${item.icon}`}
                  alt={item.title}
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[12px] font-manrope"
                  style={{
                    color: Colors.inactiveGrey,
                    fontFamily: "manrope",
                    fontWeight: "400",
                  }}
                >
                  {item.title}
                </span>
                <span
                  className="text-[14px] font-manrope font-semibold"
                  style={{
                    color: Colors.black1,
                    fontFamily: "manrope",
                    fontWeight: "600",
                  }}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
