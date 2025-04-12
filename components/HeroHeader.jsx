"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay, duration: 1, ease: "easeInOut" },
  },
});

export default function HeroHeader() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center gap-2 mt-12">
      <motion.h3
        className="text-sm uppercase tracking-widest text-dusty-rose font-semibold"
        {...fadeIn(0.6)}
      >
        The Wedding Of
      </motion.h3>

      <motion.h1
        className="text-5xl sm:text-6xl font-vibes text-[#593b32] drop-shadow-md"
        {...fadeInUp}
      >
        Ricky & Susi
      </motion.h1>

      <motion.p
        className="text-base font-light italic text-[#7d5a5a]"
        {...fadeIn(0.8)}
      >
        Sabtu, 12 April 2025
      </motion.p>
    </div>
  );
}
