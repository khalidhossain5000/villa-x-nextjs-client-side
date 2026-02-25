"use client";

import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo/logohdsg.png";

const HomeLoading = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] z-[999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999]">
      
      {/* 1. Ambient Background Glow */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* 2. The "Reactor" Container (Animations happen here) */}
      <div className="relative flex items-center justify-center w-80 h-80 z-10">
        
        {/* Outer Slow Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-[1px] border-emerald-500/20 rounded-[40%] border-t-emerald-400/60"
        />

        {/* Middle Fast Ring (Counter-Clockwise) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border-[1px] border-emerald-500/10 rounded-full border-b-emerald-400/40"
        />

        {/* Inner Scanning Pulse */}
        <motion.div
          animate={{ 
            scale: [1, 1.4],
            opacity: [0.5, 0] 
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-40 h-40 bg-emerald-500/20 rounded-full blur-xl"
        />

        {/* 3. STATIC LOGO (The Anchor) */}
        <img
          src={logo.src}
          alt="Logo"
          className="w-32 h-32 object-contain relative z-20 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]"
        />
      </div>

      {/* 4. Refined Progress Info */}
      <div className="mt-12 flex flex-col items-center z-10">
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="flex items-center gap-2 mb-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-500/60 font-medium">
            System Integrity
          </span>
          <div className="h-[1px] w-12 bg-emerald-500/20" />
          <span className="text-[10px] text-emerald-400 font-mono">OK</span>
        </motion.div>

        <h2 className="text-white text-xl font-light tracking-[0.2em] uppercase">
          Initializing<span className="text-emerald-400">...</span>
        </h2>

        {/* Slim Progress Bar */}
        <div className="w-48 h-[2px] bg-white/5 mt-6 relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          />
        </div>
      </div>

      {/* Subtle Footer Text */}
      <motion.p
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 font-mono text-[9px] text-white/30 uppercase tracking-[0.5em]"
      >
        Secure Encryption Active
      </motion.p>
    </div>
  );
};

export default HomeLoading;