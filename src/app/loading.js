"use client";

import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo/logohdsg.png";

const HomePageLoading = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f0f13]">
      {/* Subtle moving dark gradient */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #1a1a22, #0f0f13)",
            "radial-gradient(circle at 80% 80%, #1c1c26, #0f0f13)",
            "radial-gradient(circle at 20% 20%, #1a1a22, #0f0f13)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0"
      />

      {/* Soft Glow Halo */}
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-orange-500/20 to-red-600/20 blur-3xl" />

      {/* Rotating Segmented Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute w-72 h-72 rounded-full border-[6px] border-transparent 
                   border-t-orange-500 border-r-red-600"
      />

      {/* Secondary Slow Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 rounded-full border border-orange-400/30"
      />

      {/* Static Logo */}
      <img
        src={logo.src}
        alt="Logo"
        className="w-40 h-40 z-10 drop-shadow-[0_0_40px_rgba(255,115,0,0.5)]"
      />

      {/* Loading Text */}
      <div className="absolute bottom-24 flex flex-col items-center">
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="text-orange-400 tracking-[0.4em] text-lg font-semibold"
        >
          LOADING
        </motion.h2>

        {/* Animated Dots */}
        <div className="flex gap-2 mt-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,115,0,0.8)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageLoading;
