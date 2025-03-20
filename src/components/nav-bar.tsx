"use client"; // Ensure it's a client component

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // Import Lucide icons

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null); // Ref for menu

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setNewsDropdownOpen(false);
      }
    };

    if (mobileMenuOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 100);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/About",
    },
    {
      name: "Services",
      path: "/Agri-Services",
    },
    {
      name: "Projects",
      path: "/Agri-Projects",
    },
    {
      name: "News",
      path: "/Agri-News",
      isDropdown: true,
      dropdownItems: [
        {
          name: "News Blog",
          path: "/Agri-News",
        },
        {
          name: "News Grid",
          path: "/Agri-News-Grid",
        },
      ],
    },
    {
      name: "Shop",
      path: "/Agri-Shop",
    },
    {
      name: "Contact",
      path: "/Contact-Us",
    },
  ];

  return (
    <nav className="bg-[#F8F7F0] w-full py-4 shadow-sm relative z-50">
      <div
        ref={menuRef}
        className="container mx-auto flex justify-between items-center px-4 lg:px-10"
      >
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen((prev) => !prev);
            }}
          >
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
                <ul className="absolute left-0 w-48 bg-white shadow-md rounded-md overflow-hidden">
                  {item.dropdownItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-gray-200 transition"
                    >
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

      {/* Mobile Menu (No Dropdown) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 z-50 transition-all duration-300">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-[16px] font-medium text-gray-800 w-full text-center hover:text-black"
              >
                {item.isDropdown ? (
                  <>
                    {item.dropdownItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="w-full text-center mb-4">
                        <Link
                          href={subItem.path}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </div>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
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
