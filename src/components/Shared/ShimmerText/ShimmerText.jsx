'use client'
import { motion } from "framer-motion";
import React from 'react';

const ShimmerText = ({children}) => {
    return (
        <h2 className="font-poppins italic text-4xl md:text-6xl 2xl:text-7xl text-center font-bold ">
                <motion.span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `
        linear-gradient(
          90deg,
          #d97706 0%,
          #fbbf24 35%,
          #ffffff 50%,
          #fbbf24 65%,
          #d97706 100%
        )
      `,
                    backgroundSize: "200% auto",
                  }}
                  animate={{
                    backgroundPosition: ["0% center", "200% center"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {children}
                </motion.span>
              </h2>
    );
};

export default ShimmerText;