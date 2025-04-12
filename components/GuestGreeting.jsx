"use client";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay, duration: 1, ease: "easeInOut" },
  },
});

export default function GuestGreeting({ guest, loading, error }) {
  return (
    <motion.div className="relative z-10 space-y-1 mb-3 mt-20" {...fadeIn(1)}>
      <p className="text-sm text-[#7d5a5a]">Kepada Yth.</p>
      {loading && (
        <p className="text-sm text-dusty-rose">Memuat data tamu...</p>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
      {guest && (
        <motion.p
          className="text-2xl font-medium text-dusty-rose"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 1.2 } }}
        >
          {guest.name}
        </motion.p>
      )}
    </motion.div>
  );
}
