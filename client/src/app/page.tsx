import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";

import React from "react";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FounderNote from "@/components/FounderNote";

const page = () => {
  return (
    <div className="min-h-screen ">
      <Hero className="relative z-10 min-h-[60vh]" />
      <Carousel className="relative z-0 sm:mt-0 mt-44 overflow-hidden" />
      <Testimonials/>
      <FounderNote/>
      <Footer/>
    </div>
  );
};

export default page;
