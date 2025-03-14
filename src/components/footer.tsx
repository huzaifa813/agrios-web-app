"use client";

import { Colors } from "@/utils/Colors";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#181A13] text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2">
            <Image src="/white-logo.png" alt="Logo" width={100} height={50} />
          </div>
          <p className="mt-4 text-gray-400">
            There are many variations of passages
            <br /> of lorem ipsum available, but the <br />
            majority suffered.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Image src="/lightx.png" alt="Twitter" width={40} height={40} />
            <Image src="/lightfb.png" alt="Facebook" width={40} height={40} />
            <Image src="/lightpintrest.png" alt="Pinterest" width={40} height={40} />
            <Image src="/lightinsta.png" alt="Instagram" width={40} height={40} />
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Explore</h3>
          <div className="flex items-center gap-1 mb-6">
            <div className="h-[4px] w-[45px] bg-[#4BAF47] rounded-[2px]"></div>
            <div className="h-[4px] w-[4px] bg-[#4BAF47] rounded-full"></div>
          </div>

          <ul className="space-y-2">
            {["About", "Services", "Our Projects", "Meet the Farmers", "Latest News", "Contact"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                <Image src="/niccon.png" alt="Icon" width={20} height={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* News Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">News</h3>
          <div className="flex items-center gap-1 mb-6">
            <div className="h-[4px] w-[45px] bg-[#4BAF47] rounded-[2px]"></div>
            <div className="h-[4px] w-[4px] bg-[#4BAF47] rounded-full"></div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-white font-semibold">Bringing Food Production Back To Cities</p>
              <p className="text-green-400 text-sm" style={{ color: Colors.greenTopBorder3 }}>July 5, 2022</p>
            </div>
            <div>
              <p className="text-white font-semibold">The Future of Farming, Smart Irrigation Solutions</p>
              <p className="text-green-400 text-sm" style={{ color: Colors.greenTopBorder3 }}>July 5, 2022</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <div className="flex items-center gap-1 mb-6">
            <div className="h-[4px] w-[45px] bg-[#4BAF47] rounded-[2px]"></div>
            <div className="h-[4px] w-[4px] bg-[#4BAF47] rounded-full"></div>
          </div>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <Image src="/yphone.png" alt="Phone" width={15} height={15} />
              <span>666 888 0000</span>
            </p>
            <p className="flex items-center gap-2">
              <Image src="/ymsg.png" alt="Email" width={15} height={15} />
              <span>needhelp@company.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Image src="/ylocation.png" alt="Location" width={15} height={15} />
              <span>80 Brooklyn Golden Street, New York, USA</span>
            </p>
          </div>

          {/* Email Input */}
          <div className="mt-4 relative">
            <input
              type="email"
              placeholder="Your Email Address"
              style={{ backgroundColor: Colors.white }}
              className="text-black placeholder-gray-500 py-2 px-4 rounded-md w-full focus:outline-none"
            />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 p-2 w-10 h-10 flex items-center justify-center rounded-md">
              <Image src="/send.png" alt="Send" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mx-20 mt-10 border-t border-gray-600 pt-4 text-gray-400 text-sm flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p>© All Copyright 2024 by shawonetc Themes</p>
        <div className="flex gap-4 items-center mt-2 sm:mt-0">
          <p className="hover:text-white cursor-pointer">Terms of Use</p>
          <span className="h-4 w-[1px] bg-gray-500"></span> {/* Divider Line */}
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
