"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setClicks((prev) => [...prev, newClick]);

      // ০.৭ সেকেন্ড পর ক্লিনআপ
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
      }, 700);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <AnimatePresence>
      {clicks.map((click) => (
        <div
          key={click.id}
          className="fixed pointer-events-none z-[100]"
          style={{ left: click.x, top: click.y }}
        >
          {/* সেন্ট্রাল গ্লোয়িং ফ্ল্যাশ (মাঝখানের আলোর বিস্ফোরণ) */}
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [0, 2, 4], opacity: [1, 0.8, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute -left-3 -top-3 w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] blur-[2px]"
          />

          {/* চারপাশে ছিটকে পড়া ৮টি কসমিক বিন্দু */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const distance = 50; // কণাগুলো কতটা দূরে ছড়াবে
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;

            return (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                // কণাগুলো প্রথমে বড় হবে, তারপর দূরে গিয়ে ছোট হয়ে মিলিয়ে যাবে
                animate={{ x: endX, y: endY, scale: [0, 1.5, 0], opacity: [1, 1, 0] }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,0.9)]"
              />
            );
          })}
        </div>
      ))}
    </AnimatePresence>
  );
}