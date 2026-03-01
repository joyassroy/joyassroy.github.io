"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const roles = ["Full Stack Web Developer", "Software Engineer", "MERN Stack Expert", "Problem Solver"];
  const typingSpeed = isDeleting ? 50 : 100;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let timer = setTimeout(() => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1) 
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, mounted]);

  // --- ব্যাজগুলোর পজিশন আরও ভেতরের দিকে আনা হয়েছে যাতে ঢাকা না পড়ে ---
  const floatingSkills = [
    { name: "React.js", top: "10%", left: "0%", delay: 0 },
    { name: "Next.js", top: "-5%", left: "40%", delay: 0.2 },
    { name: "Express.js", top: "20%", left: "80%", delay: 0.4 }, // পজিশন কমিয়ে ৯০ থেকে ৮০ করা হয়েছে
    { name: "Node.js", top: "70%", left: "85%", delay: 0.6 },
    { name: "Stripe", top: "90%", left: "40%", delay: 0.8 },
    { name: "MongoDB", top: "75%", left: "0%", delay: 1 },
  ];

  if (!mounted) return <div className="min-h-screen" />;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-10 z-10 pt-20">
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- বাম পাশ: তথ্য --- */}
        <div className="space-y-6 text-center lg:text-left z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Hello, I'm
          </motion.h2>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tight py-2">
            Joyassroy Barua
          </motion.h1>
          
          <div className="text-2xl md:text-3xl font-mono font-medium text-gray-700 dark:text-gray-300 h-10">
            <span className="text-cyan-500">{"< "}</span>
            {text}
            <span className="animate-pulse text-cyan-500">_</span>
            <span className="text-cyan-500">{" />"}</span>
          </div>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Building <span className="text-cyan-600 dark:text-cyan-400 font-semibold">innovative</span> digital solutions. Final year student at Daffodil International University.
          </motion.p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
            <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg transition-all shadow-lg hover:-translate-y-1">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </a>
          </div>
        </div>
        
        {/* --- ডান পাশ: প্রোফাইল ছবি (একটু ছোট করা হয়েছে) --- */}
        <div className="relative flex justify-center items-center w-full min-h-[400px] lg:min-h-[500px]">
          
          {/* রিংগুলো ছোট করা হয়েছে */}
          <div className="absolute w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border border-gray-300 dark:border-gray-700/50"></div>
          <div className="absolute w-[310px] h-[310px] md:w-[400px] md:h-[400px] rounded-full border border-gray-200 dark:border-gray-800/50"></div>
          
          {/* ইমেজ কন্টেইনার (Size updated to w-48/h-48 on mobile, w-64/h-64 on desktop) */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-2xl z-10"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-4 border-white dark:border-[#0a0a0a]">
              <img 
                src="https://i.postimg.cc/CxhYnYzC/formalpic.png" 
                alt="Joyassroy Barua" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* ভাসমান ব্যাজসমূহ (এবার পজিশন কন্ট্রোলড) */}
          {floatingSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + skill.delay, duration: 0.5 }}
              className="absolute z-20"
              style={{ top: skill.top, left: skill.left }}
            >
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: skill.delay }}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md text-xs md:text-sm font-semibold text-cyan-600 dark:text-cyan-400 whitespace-nowrap"
              >
                {skill.name}
              </motion.div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}