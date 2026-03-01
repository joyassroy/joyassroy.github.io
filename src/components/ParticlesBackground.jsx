"use client";

import { motion } from "framer-motion";

export default function ProfessionalBackground() {
  return (
    <div className="fixed inset-0 z-[-10] w-full h-full bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Radial Gradient Mask (Edge gulo te grid ta fade out kore deyar jonno) */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,black_100%)] transition-colors duration-500"></div>

      {/* Animated Glowing Orbs (Halka aalor avaa) */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-400/20 dark:bg-purple-600/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"
      />
    </div>
  );
}