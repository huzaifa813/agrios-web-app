"use client"; // Ensure it's a client component

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import Lucide icons
import { Colors } from "@/utils/Colors";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const menuItems = [
    {
      name: "Home",
      path: "/",
      showCaret: true,
      dropdown: [{ name: "Natural Home", path: "/Home2" }],
    },
    { name: "About", path: "/about", showCaret: false },
    { name: "Services", path: "/services", showCaret: true },
    { name: "Projects", path: "/projects", showCaret: true },
    { name: "News", path: "/news", showCaret: true },
    { name: "Shop", path: "/shop", showCaret: true },
    { name: "Contact", path: "/contact", showCaret: false },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
        setHomeDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#F8F7F0] w-full py-4 shadow-sm relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-10">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <ul className="hidden md:flex flex-1 justify-center space-x-10 text-[16px] font-semibold relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative flex items-center space-x-1 cursor-pointer transition-all duration-200 font-semibold"
              style={{ color: Colors.inactiveGrey, fontWeight: 500 }}
              onClick={() => {
                if (item.name === "Home") {
                  setHomeDropdownOpen(!homeDropdownOpen);
                } else {
                  router.push(item.path);
                }
              }}
            >
              <span
                style={{
                  color: Colors.inactiveGrey,
                  fontFamily: "manrope",
                  fontWeight: "400",
                }}
              >
                {item.name}
              </span>
              {item.showCaret && (
                <Image
                  src="/inactive-caret-down.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                />
              )}

              {/* Dropdown for Home */}
              {item.name === "Home" && homeDropdownOpen && (
                <ul
                  ref={dropdownRef} // ✅ Correctly assign ref to <ul>
                  className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-200"
                >
                  {item.dropdown?.map((subItem, subIndex) => (
                    <li key={subIndex} className="hover:bg-gray-100">
                      <Link
                        href={subItem.path}
                        className="block px-4 py-2 text-gray-800"
                        onClick={() => setHomeDropdownOpen(false)} // ✅ Close on click
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
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
                className="text-[16px] font-medium text-gray-800 cursor-pointer"
                onClick={() => {
                  router.push(item.path);
                  setMobileMenuOpen(false);
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
