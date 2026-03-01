"use client";

import { motion } from "framer-motion";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "ICPC 2024 Regionalist",
      organization: "Dhaka Regional Site",
      description: "Ranked among the top teams in the prestigious International Collegiate Programming Contest.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
      ),
      tag: "Top Tier",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Codeforces Specialist",
      organization: "Global Competitive Platform",
      description: "Solved over 2000+ problems with a peak rating that reflects strong algorithmic expertise.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><rect width="20" height="12" x="2" y="6" rx="2"/><path d="M12 12h.01"/><path d="M7 12h.01"/><path d="M17 12h.01"/></svg>
      ),
      tag: "2000+ Solved",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Unlock The Algorithm",
      organization: "DIU Intra-University Contest",
      description: "Secured 3rd Place out of numerous participants in a high-pressure coding environment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
      ),
      tag: "3rd Place",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4 tracking-tight">
            Milestones & Honors
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)]"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            Recognition of my journey in competitive programming and problem-solving.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="relative group p-8 rounded-[2rem] bg-white/40 dark:bg-white/[0.03] backdrop-blur-3xl border border-white/20 dark:border-white/10 shadow-2xl transition-all duration-500"
            >
              {/* Highlight Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`}></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-xl group-hover:rotate-12 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[10px] font-black text-yellow-600 dark:text-yellow-400 uppercase tracking-widest">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-4 uppercase tracking-tighter">
                  {item.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Bottom Line Decoration */}
                <div className="mt-8 w-12 h-1 bg-gray-200 dark:bg-gray-700 group-hover:w-full group-hover:bg-yellow-500 transition-all duration-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}