"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function OpenInvitationButton() {
  return (
    <motion.div
      className="relative z-10 pb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.8 } }}
    >
      <button
        onClick={() => alert("Undangan dibuka!")}
        className="inline-flex items-center gap-2 px-6 py-2 text-sm rounded-full bg-dusty-rose text-white hover:bg-[#9c5c67] transition-all shadow-md"
      >
        <Mail className="w-4 h-4" />
        <span>Buka Undangan</span>
      </button>
      <p className="text-xs italic text-[#8c6a63] mt-1">
        *Klik tombol untuk melihat detail acara
      </p>
    </motion.div>
  );
}
