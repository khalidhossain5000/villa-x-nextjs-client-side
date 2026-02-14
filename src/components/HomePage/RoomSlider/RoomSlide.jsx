/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import { motion } from "framer-motion";

const RoomSlide = ({ room }) => {
    
  return (
    <motion.div
      className="w-full h-full relative cursor-grab"
      drag="x"             //  mouse swipe support
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}   
      
    >
      {/* Background Image */}
      <img
        src={room?.thumbnailImage}
        alt={room?.title}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Text Overlay */}
      <div className="absolute bottom-10 left-10 text-white bg-black/30 p-4 rounded">
        <h2 className="text-2xl font-bold">{room.title}</h2>
        <p className="mt-1">{room.description}</p>
      </div>
    </motion.div>
  );
};

export default RoomSlide;
