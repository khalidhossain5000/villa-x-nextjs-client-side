'use client'

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const CountUp = ({ to, duration = 2 }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.5,
    once: true // animate only first time in this page load
  });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut"
      });

      return () => controls.stop();
    }
  }, [isInView, to, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default CountUp;
