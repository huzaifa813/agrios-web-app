import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/Homebg2.png')", fontFamily: "manrope" }}
    >
      {/* Top Bar */}
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/white-logo.png"
            alt="Agrios Logo"
            width={140}
            height={50}
            className="w-[120px] md:w-[140px]"
          />
        </div>

        {/* Social Icons (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-2 sm:space-x-3">
          {["home2x", "home2fb", "home2pintrest", "home2insta"].map(
            (icon, index) => (
              <Image
                key={index}
                src={`/${icon}.png`}
                alt={icon}
                width={32}
                height={32}
                className="w-[32px] sm:w-[40px] cursor-pointer hover:opacity-80"
              />
            )
          )}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} color="white" /> : <Menu size={32} color="white" />}
          </button>
        </div>

        {/* Navigation Bar (Desktop) */}
        <nav className="hidden lg:flex space-x-4 xl:space-x-6 text-white text-sm font-medium">
          {["Home", "About", "Services", "Projects", "News", "Shop", "Contact"].map(
            (item, index) => (
              <a key={index} href="#" className="flex items-center gap-1">
                {item}
                {!["About", "Contact"].includes(item) && (
                  <Image
                    src="/lightcaretdown.png"
                    alt="Caret Down"
                    width={10}
                    height={6}
                  />
                )}
              </a>
            )
          )}
        </nav>

        {/* Right Section - Search, Cart, Phone */}
        <div className="hidden md:flex items-center space-x-4 border-l border-white pl-4">
          <div className="flex space-x-3">
            <Image src="/whitesearch.png" alt="Search" width={22} height={22} />
            <Image src="/whitecart.png" alt="Cart" width={22} height={22} />
          </div>

          <Image src="/phone2.png" alt="Phone" width={40} height={40} />
          <div className="flex flex-col">
            <span className="text-white text-xs sm:text-sm font-semibold">
              Call Anytime
            </span>
            <span className="text-white text-xs sm:text-sm">+ 98 (000) - 9630</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide Down) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 bg-opacity-90 p-5 flex flex-col items-center space-y-4 text-white text-lg">
          {["Home", "About", "Services", "Projects", "News", "Shop", "Contact"].map(
            (item, index) => (
              <a key={index} href="#" className="block">
                {item}
              </a>
            )
          )}
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center justify-center flex-grow px-6">
        <Image
          src="/NaturalProducts.png"
          alt="Natural Products"
          width={500}
          height={90}
          className="w-[280px] sm:w-[400px] md:w-[500px]"
        />
        <button
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 sm:px-6 rounded-lg text-[14px] sm:text-[16px]"
        >
          Discover More
        </button>
      </div>
    </div>
  );
}
