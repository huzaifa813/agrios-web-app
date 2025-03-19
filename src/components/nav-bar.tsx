"use client"; // Ensure it's a client component

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import Lucide icons
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/Agri-Services" },
    { name: "Projects", path: "/Agri-Projects" },
    { name: "News", path: "/news" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#F8F7F0] w-full py-4 shadow-sm relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-10">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-1 justify-center space-x-10 text-[16px] relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer transition-all duration-200 text-[#878680] hover:text-black"
              onClick={() => router.push(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Right: Search & Cart Icons */}
        <div className="flex items-center space-x-6">
          <div className="pl-4 border-l border-gray-400">
            <Image
              src="/Search.png"
              alt="Search"
              width={22}
              height={22}
              className="cursor-pointer"
            />
          </div>
          <Image
            src="/Cart.png"
            alt="Cart"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 z-50 transition-all duration-300">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-[16px] font-medium text-gray-800 w-full text-center hover:text-black"
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push(item.path);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
