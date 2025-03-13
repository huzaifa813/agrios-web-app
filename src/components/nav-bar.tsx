import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import Lucide icons
import { Colors } from "@/utils/Colors";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", showCaret: true },
    { name: "About", showCaret: false },
    { name: "Services", showCaret: true },
    { name: "Projects", showCaret: true },
    { name: "News", showCaret: true },
    { name: "Shop", showCaret: true },
    { name: "Contact", showCaret: false },
  ];

  return (
    <nav className="bg-[#F8F7F0] w-full py-4 shadow-sm relative">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-10">
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <ul className="hidden md:flex flex-1 justify-center space-x-10 text-[16px] font-semibold">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-1 cursor-pointer transition-all duration-200 font-semibold"
              style={{ color: Colors.inactiveGrey, fontWeight: 500 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = Colors.black1;
                e.currentTarget.style.fontWeight = "700";
                const img = e.currentTarget.querySelector("img");
                if (img) img.src = "/active-caret-down.png"; // Change caret
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = Colors.inactiveGrey;
                e.currentTarget.style.fontWeight = "500"; // Reset font weight
                const img = e.currentTarget.querySelector("img");
                if (img) img.src = "/inactive-caret-down.png"; // Reset caret
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
            </li>
          ))}
        </ul>

        {/* Right: Search & Cart Icons */}
        <div className="flex items-center space-x-6">
          <div className="pl-4 border-l border-gray-400">
            <Image src="/Search.png" alt="Search" width={20} height={20} className="cursor-pointer" />
          </div>
          <Image src="/Cart.png" alt="Cart" width={22} height={22} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 z-50 transition-all duration-300">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className="text-[16px] font-medium text-gray-800 cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
