import React from "react";
import bannerImg1 from "../../assets/hero-leaf1.png";
import bannerImg2 from "../../assets/hero-leaf2.png";
import "./Banner.css"


const Banner = () => {
  return (
    <section className="relative overflow-hidden py-19 m px-6 md:py-25 md:px-12  text-white">
      
      {/*  Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br  from-green-500/10 via-transparent to-lime-400/10 blur-3xl"></div>

      {/*  Floating Glow Ball */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-lime-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-[-50px] right-[-50px] w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-50px] left-[-50px] w-72 h-72 bg-lime-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={bannerImg1}
            alt="leaf1"
            className="w-60 md:w-72 drop-shadow-[0_0_25px_rgba(132,204,22,0.7)] animate-[float_3s_ease-in-out_infinite]"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center space-y-4">
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            🌱 Plant a Tree <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400">
              Grow a Future
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-md">
            Join our mission to plant 1 million trees and make the Earth greener
            for future generations.
          </p>

          {/*  Button */}
          <button className="relative px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-lime-400 text-black font-semibold shadow-[0_0_20px_rgba(34,197,94,0.7)] hover:scale-105 transition duration-300">
            Get Involved
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-end">
          <img
            src={bannerImg2}
            alt="leaf2"
            className="w-60 md:w-72 drop-shadow-[0_0_25px_rgba(132,204,22,0.7)] animate-[float_3s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;