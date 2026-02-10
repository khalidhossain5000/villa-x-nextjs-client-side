"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import banneri from "../../../assets/Banner/i.jpg";
import bannerii from "../../../assets/Banner/Main-rev-img-2.jpg";
import banneriii from "../../../assets/Banner/location-11.jpg";
import banneriv from "../../../assets/Banner/location-12.jpg";

// Slide Data (image + content)
const slides = [
  {
    image: banneri,
    title: "Swiss Luxury Chalet",
    location: "Zermatt, Switzerland",
    description: "Luxury mountain villa with breathtaking alpine views",
  },
  {
    image: bannerii,
    title: "Oceanfront Paradise",
    location: "Maldives",
    description: "Private beachfront villa with infinity pool",
  },
  {
    image: banneriii,
    title: "Modern City Escape",
    location: "Dubai, UAE",
    description: "Premium villa in the heart of the city skyline",
  },
  {
    image: banneriv,
    title: "Nature Retreat",
    location: "Aspen, Colorado",
    description: "Calm, cozy retreat surrounded by pine forests",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/*  Bg images */}
      {slides.map((slide, index) => (
        <motion.img
          key={index}
          src={slide.image.src}
          alt="banner"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.1,
          }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      ))}

      {/*  Overlay */}
      <div className="absolute inset-0 bg-linear-to-l from-black/70 via-black/40 to-transparent" />

      {/* Animated Content  */}
      <AnimatePresence mode="wait" >
        <motion.div
          key={currentIndex}
          className="relative z-10 flex h-full items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl  ml-auto px-6 lg:pr-36">
            {/* Title */}
            <motion.h1
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -120, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold text-white font-poppins text-left"
            >
              {/* {currentSlide.title} */}
              {currentSlide.description}
            </motion.h1>

         
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Left Info Card*/}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute bottom-10 left-10 z-20 max-w-sm bg-white/90 backdrop-blur-md p-6 shadow-xl"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-wide text-gray-500">
            {currentSlide.location}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-gray-900">
            {currentSlide.description}
          </h3>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;
