"use client";
import AboutHeader from "@/components/about-header";
import AgricultureCards from "@/components/agriculture-card";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import HealthyFoodSection from "@/components/healthy-food-section";
import HeroSection2 from "@/components/hero-section2";
import Navbar from "@/components/nav-bar";
import PartnerLogos from "@/components/partner-logo";
import ServicesSection from "@/components/services-section";
import { Colors } from "@/utils/Colors";

export default function AgriServices() {
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
      <AboutHeader text1="Services" text2="Services" />
      <ServicesSection />
      <PartnerLogos/>
      <HeroSection2/>
      <AgricultureCards/>
      <HealthyFoodSection/>
      <Footer />
    </div>
  );
}
