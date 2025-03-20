"use client"; // Ensure it's a client component

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // Import Lucide icons

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [mobileNewsDropdownOpen, setMobileNewsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside (Mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".menu-container")) {
        setMobileMenuOpen(false);
        setNewsDropdownOpen(false);
        setMobileNewsDropdownOpen(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/Agri-Services" },
    { name: "Projects", path: "/Agri-Projects" },
    {
      name: "News",
      path: "/Agri-News",
      isDropdown: true,
      dropdownItems: [
        { name: "News Blog", path: "/Agri-News" },
        { name: "News Grid", path: "/Agri-News-Grid" },
      ],
    },
    { name: "Shop", path: "/Agri-Shop" },
    { name: "Contact", path: "/Contact-Us" },
  ];

  return (
    <nav className="bg-[#F8F7F0] w-full py-4 shadow-sm relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-10 menu-container">
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
              className="relative cursor-pointer transition-all duration-200 text-[#878680] hover:text-black"
              onMouseEnter={() => item.isDropdown && setNewsDropdownOpen(true)}
              onMouseLeave={() => item.isDropdown && setNewsDropdownOpen(false)}
            >
              {item.isDropdown ? (
                <div className="flex items-center space-x-1">
                  <span>{item.name}</span>
                  <ChevronDown size={16} />
                </div>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}

              {/* Dropdown Menu for News (Desktop) */}
              {item.isDropdown && newsDropdownOpen && (
                <ul
                  className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden"
                >
                  {item.dropdownItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-200 transition">
                      <Link href={subItem.path}>{subItem.name}</Link>
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
            <Image src="/Search.png" alt="Search" width={22} height={22} className="cursor-pointer" />
          </div>
          <Image src="/Cart.png" alt="Cart" width={22} height={22} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 z-50 transition-all duration-300">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className="text-[16px] font-medium text-gray-800 w-full text-center hover:text-black">
                {item.isDropdown ? (
                  <>
                    {/* Toggle News Dropdown on Mobile */}
                    <div
                      className="flex items-center justify-center space-x-1"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent closing parent menu
                        setMobileNewsDropdownOpen(!mobileNewsDropdownOpen);
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`${mobileNewsDropdownOpen ? "rotate-180" : ""}`} />
                    </div>

                    {/* Mobile Dropdown for News */}
                    {mobileNewsDropdownOpen && (
                      <ul className="bg-gray-100 mt-2 rounded-md overflow-hidden">
                        {item.dropdownItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="px-4 py-2 hover:bg-gray-200 transition">
                            <Link href={subItem.path} onClick={() => setMobileMenuOpen(false)}>
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.path} onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
