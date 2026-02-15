'use client'


import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const CountUp = ({ to, duration = 2 }) => {
  const count = useMotionValue(0); 
  const rounded = useTransform(count, (latest) => Math.round(latest)); 

  useEffect(() => {

    const controls = animate(count, to, { duration: duration });

    return () => controls.stop()
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
};

export default CountUp;