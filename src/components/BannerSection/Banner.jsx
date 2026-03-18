import React from "react";

import bannerImg1 from "../../assets/hero-leaf1.png";
import bannerImg2 from "../../assets/hero-leaf2.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-y-5">
      <div className="">
        <img src={bannerImg1} alt="leaf1" />
      </div>

      <div className=" flex flex-col justify-center items-center text-center space-y-[clamp(0.75rem,1.5vw,1rem)]">
        <h1 className="font-semibold text-[clamp(1.5rem,2vw,1.875rem)]">Plant a Tree, Grow a Future</h1>
        <p className="font-light text-xs">
          Join our mission to plant 1 million trees and make the Earth greener
          for future generations.
        </p>

        <a
          className="bg-amber-300 text-xs text-green-700 py-1 px-4 rounded-4xl"
          href="/button"
        >
          Get Involved
        </a>
      </div>

      <div className="hidden md:flex">
        <img src={bannerImg2} alt="leaf2" />
      </div>
    </div>
  );
};

export default Banner;
