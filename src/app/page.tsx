"use client";
import AgricultureProjects from "@/components/agriculture-projects";
import AgricultureSection from "@/components/agriculture-section";
import ExploreProjects from "@/components/explore-projects";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/nav-bar";
import NewsArticles from "@/components/news-articles";
import Reviews from "@/components/reviews";
import ServicesSection from "@/components/services-section";
import WhyChooseAgrios from "@/components/why-choose-agrios";
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
      <AgricultureSection/>
      <ServicesSection/>
      <AgricultureProjects/>
      <ExploreProjects/>
      <Reviews/>
      <WhyChooseAgrios/>
      <NewsArticles/>
      <Footer/>
    </div>
  );
}
