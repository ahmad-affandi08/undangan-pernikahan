"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Flower({ className }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <motion.img
      src="/assets/image/flower.png"
      alt="flower"
      className={className}
      initial={{ scale: 0, rotate: 0 }}
      animate={controls}
    />
  );
}
