"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/nav-bar";
import { Colors } from "@/utils/Colors";

export default function Home() {
  return (
    <div
      className="border-t-4 w-full bg-white shadow-sm"
      style={{
        borderImage: `linear-gradient(to right, ${Colors.greenTopBorder1} 33%, ${Colors.greenTopBorder2} 33%, ${Colors.greenTopBorder2} 66%, ${Colors.greenTopBorder3} 66%) 1`,
        borderStyle: "solid",
      }}
    >
      <Header />
      <Navbar />
      <HeroSection />
      
    </div>
  );
}
