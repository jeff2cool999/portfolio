import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import React from "react";

function home() {
  return (
    <div className=" bg-black">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default home;
