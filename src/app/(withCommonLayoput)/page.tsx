"use client"
import LostItems from "@/components/UI/HomePage/LostItems/LostItems";
import dynamic from "next/dynamic";
import React from "react";

const HeroSection = dynamic(() => import("@/components/UI/HomePage/HeroSection/HeroSection"), { ssr: false });
const AboutSection = dynamic(() => import("@/components/UI/HomePage/AboutSection/AboutSection"), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <LostItems></LostItems>
    </div>
  );
};

// export default HomePage;
export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
