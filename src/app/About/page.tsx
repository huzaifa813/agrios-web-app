"use client";
import AboutAgricultureProjects from "@/components/about-agriProjects";
import AboutHeader from "@/components/about-header";
import AgricultureMarket from "@/components/agriculture-market";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import MeetOurFarmers from "@/components/meet-our-farmers";
import Navbar from "@/components/nav-bar";
import Testimonials from "@/components/what-they-say";
import { Colors } from "@/utils/Colors";

export default function About() {
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
      <AboutHeader text1="About" text2="About"/>
      <AgricultureMarket/>
      <AboutAgricultureProjects/>
      <Testimonials/>
      <MeetOurFarmers/>
      <Footer/>
    </div>
  );
}
