"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" }, // এখানে নতুন সেকশনটি যোগ করা হয়েছে
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/60 dark:bg-[#0a0a0a]/60 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* লোগো অ্যানিমেশনসহ */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            <a href="#home">JB</a>
          </motion.div>
          
          {/* ডেস্কটপ মেনু */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all group"
              >
                {link.name}
                {/* হোভার আন্ডারলাইন অ্যানিমেশন */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* থিম টগল এবং ছোট ডিভাইডার */}
            <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-800">
              <ThemeToggle />
            </div>
          </div>

          {/* মোবাইল মেনু বাটন (অপশনাল - আপনি চাইলে পরে হ্যামবার্গার মেনু যোগ করতে পারেন) */}
          <div className="md:hidden flex items-center gap-4">
             <ThemeToggle />
             {/* এখানে একটি মেনু আইকন যোগ করা যেতে পারে */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}