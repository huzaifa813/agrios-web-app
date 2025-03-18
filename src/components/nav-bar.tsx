"use client"; // Ensure it's a client component

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import Lucide icons
import { Colors } from "@/utils/Colors";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => {
          setActiveDropdown(null);
        }, 100); // Add slight delay to prevent immediate closing
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

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-1 justify-center space-x-10 text-[16px] font-semibold relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative flex items-center space-x-1 cursor-pointer transition-all duration-200 font-semibold"
              style={{ color: Colors.inactiveGrey, fontWeight: 500 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing when clicking inside
                if (item.dropdown) {
                  setActiveDropdown(
                    activeDropdown === item.name ? null : item.name
                  );
                } else {
                  router.push(item.path);
                }
              }}
            >
              <span>{item.name}</span>
              {item.showCaret && (
                <Image
                  src="/inactive-caret-down.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                />
              )}

              {/* Desktop Dropdown */}
              {item.dropdown && activeDropdown === item.name && (
                <ul
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-200"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex} className="hover:bg-gray-100">
                      <Link
                        href={subItem.path}
                        className="block px-4 py-2 text-gray-800"
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
                className="text-[16px] font-medium text-gray-800 w-full text-center"
              >
                {item.dropdown ? (
                  <div
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent closing when clicking inside
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      );
                    }}
                    className="flex justify-center items-center space-x-2 cursor-pointer py-2"
                  >
                    <span>{item.name}</span>
                    <Image
                      src="/inactive-caret-down.png"
                      alt="Dropdown"
                      width={10}
                      height={10}
                      className={`transform transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                ) : (
                  <span
                    onClick={() => {
                      setMobileMenuOpen(false);
                      router.push(item.path);
                    }}
                    className="block py-2"
                  >
                    {item.name}
                  </span>
                )}

                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <ul
                    ref={dropdownRef}
                    className="bg-gray-100 rounded-md shadow-inner w-full text-center"
                    onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-2 hover:bg-gray-200">
                        <Link
                          href={subItem.path}
                          className="block w-full py-2 cursor-pointer"
                          onClick={(e) => e.stopPropagation()} // Ensure the link doesn't trigger dropdown close
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
        </div>
      )}
    </nav>
  );
}
