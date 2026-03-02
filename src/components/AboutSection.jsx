"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const highlights = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      ),
      title: "Education",
      desc: "BSc in Computer Science & Engineering",
      sub: "Daffodil International University",
      extra: "CGPA: 3.81",
      color: "from-blue-500/20 to-cyan-400/20"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
      ),
      title: "Full Stack Mastery",
      desc: "MERN Stack Specialist",
      sub: "Scalable Web Architecture",
      extra: "Performance Optimization",
      color: "from-cyan-500/20 to-blue-600/20"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M12 2v8"/><path d="m4.93 4.93 5.66 5.66"/><path d="M2 12h8"/><path d="m4.93 19.07 5.66-5.66"/><path d="M12 22v-8"/><path d="m19.07 19.07-5.66-5.66"/><path d="M22 12h-8"/><path d="m19.07 4.93-5.66 5.66"/></svg>
      ),
      title: "AI & Intelligence",
      desc: "ML & Deep Learning Enthusiast",
      sub: "Neural Networks & Data Science",
      extra: "Problem Solving Focused",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-transparent">
      {/* গ্লাস-মরফিজম ব্যাকগ্রাউন্ড ব্লোবস */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* সেকশন হেডার */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* বাম পাশ: ডেসক্রিপশন */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
                Driving Innovation through <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Code & Intelligence</span>
              </h3>
              <div className="w-16 h-1 bg-cyan-500/50 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Hello! I am <span className="text-gray-900 dark:text-white font-semibold">Joyassroy Barua</span>, a dedicated Software Engineer with a passion for architecting efficient digital solutions. Currently, I am in my final year at <span className="text-blue-500 font-medium italic underline decoration-blue-500/30">Daffodil International University</span>.
              </p>
              
              <p>
                My core expertise is centered around the <span className="font-semibold text-cyan-600 dark:text-cyan-400">MERN Stack</span>, where I build seamless, high-performance web applications. I am also deeply intrigued by the world of <span className="text-purple-500 font-medium">Machine Learning</span> and <span className="text-purple-500 font-medium">Deep Learning</span>, constantly exploring how neural networks can solve complex real-world problems.
              </p>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-500">
                <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="28" 
      height="28" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-cyan-500 relative z-10 group-hover:rotate-12 transition-transform duration-300"
    >
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                  Goal: Building Intelligent Systems with Scalable Architectures.
                </p>
              </div>

              <p>
                As an active <span className="font-semibold text-gray-900 dark:text-white underline decoration-cyan-500">Competitive Programmer</span>, I enjoy the challenge of optimizing algorithms and writing clean, maintainable code.
              </p>
            </div>
          </motion.div>

          {/* ডান পাশ: প্রিমিয়াম Glassmorphism কার্ডস */}
          <div className="lg:col-span-5 space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* কার্ডের পেছনের গ্লো */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                
                {/* গ্লাস কার্ড */}
                <div className="relative p-6 rounded-2xl bg-white/40 dark:bg-white/[0.03] backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-cyan-500/10 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-white dark:bg-gray-800 shadow-md group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 font-medium text-sm leading-snug">
                        {item.desc}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-1 font-mono uppercase tracking-tighter">
                        {item.sub}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                        {item.extra}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}