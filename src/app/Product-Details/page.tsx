"use client";
import AboutHeader from "@/components/about-header";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Navbar from "@/components/nav-bar";
import DetailsOfProduct from "@/components/product-detail";
import { Colors } from "@/utils/Colors";

export default function ProductDetails() {
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
      <AboutHeader text1="SHOP / AGRICULTURE / TOMATO" text2="Our Shop" />
      <DetailsOfProduct />
      <Footer />
    </div>
  );
}
