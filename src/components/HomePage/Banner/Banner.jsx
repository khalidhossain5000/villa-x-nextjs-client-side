"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import images
import banneri from "../../../assets/Banner/i.jpg";
import bannerii from "../../../assets/Banner/Main-rev-img-2.jpg";
import banneriii from "../../../assets/Banner/location-11.jpg";
import banneriv from "../../../assets/Banner/location-12.jpg";

const slides = [banneri, bannerii, banneriii, banneriv];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full lg:h-[95vh] w-full overflow-hidden">
      {/* Background images stacked */}
      {slides.map((slide, index) => (
        <motion.img
          key={index}
          src={slide.src}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.1,
          }}
          transition={{ duration: 1.5 }}
        />
      ))}

      {/* Optional Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>

      {/* Static Text */}
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <div className="text-center">
           <h2 className="text-text-primary text-7xl font-bold 2xl:font-black font-poppins">
      Villa
      <motion.span
        className="inline-block font-urbanist"
        animate={{
          color: [
            '#ff0000', // red
            '#00ff00', // green
            '#0000ff', // blue
            '#ffff00', // yellow
            '#ff00ff', // magenta
            '#00ffff'  
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}
      >
        X
      </motion.span>
    </h2>
          
          <h1 className="py-6 2xl:text-8xl text-5xl font-bold 2xl:font-extrabold font-poppins">
            Destination For <br /> Luxury & Comfort
          </h1>
          <div className="text-center mt-6">
            <button className="bg-cyan-500 text-white px-9 py-2 rounded-sm">
              Find Your Villa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
