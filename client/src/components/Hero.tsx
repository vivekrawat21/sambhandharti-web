import React from "react";
import Image from "next/image";
import Tooltip from "./tooltip";

// Later on, can shift this component to https://ui.aceternity.com/components/images-slider

const Hero = ({ className }: any) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between px-4 py-16 md:px-8 lg:px-16 h-[70vh] lg:mx-10 ${className}`}
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
          Transforming
          <span className="text-violet-500 px-2">Lives</span>, One Step at a Time
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Sambharndaharti is a platform dedicated to helping people in need,
          providing resources for education, women empowerment, and child
          safety. Join us on this mission to make the world a better place for
          everyone.
        </p>
        <Tooltip/>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end mt-10">
        <Image
          src="https://pub-96d3131e0e7248bf8295a83f682993ab.r2.dev/Products-Videos/Proposalify-Img.png"
          alt="Helping Hands"
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
