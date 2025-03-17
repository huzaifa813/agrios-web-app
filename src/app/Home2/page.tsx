"use client";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/footer";
import Header2 from "@/components/Header2";
import AgricultureHero2 from "@/components/home2-hero";
import MeetOurFarmers from "@/components/meet-our-farmers";
import RecentProjects from "@/components/recent-projects";
import ServicesSection2 from "@/components/services-section2";

export default function Home2() {
  return (
    <>
      <Header2 />
      <AgricultureHero2/>
      <ServicesSection2/>
      <FAQSection/>
      <RecentProjects/>
      <MeetOurFarmers/>
      <Footer/>
    </>
  );
}
