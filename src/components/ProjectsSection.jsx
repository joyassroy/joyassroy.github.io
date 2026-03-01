"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Globe, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const projects = [
    {
      title: "LoanLink",
      techStack: ["React.js", "Node.js", "MongoDB", "Stripe"],
      description: "A full-stack loan management platform with 3-tier RBAC (User, Manager, Admin). Features secure Stripe payments for installments.",
      demoImage: "/loan-link.png", 
      live: "https://assignment-11-468e1.web.app/",
      client: "https://github.com/joyassroy/Loan-Link-Client",
      server: "https://github.com/joyassroy/Loan-Link-Server",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "CropMate (Team)",
      techStack: ["MERN", "Gemini AI", "Tailwind"],
      description: "A team-based full-stack project integrating Gemini API for smart agricultural predictions and marketplace solutions.",
      demoImage: "crop-mate-team.png", 
      live: "https://cropmate-dipta.netlify.app/", 
      repo: "https://github.com/mukit-blaster/CropMate.git",
      color: "from-emerald-500 to-teal-400"
    },
    
    {
      title: "CropMate (Flask)",
      techStack: ["Python", "Flask", "ML", "Leaflet.js"],
      description: "Smart farming platform using Python for crop disease detection and interactive maps for service center tracking.",
      demoImage: "crop-mate.png",
      live: "https://joyassroy.github.io/crop-mate/index.html",
      repo: "https://github.com/joyassroy/crop-mate-backend.git",
      color: "from-green-600 to-lime-400"
    },
    {
      title: "The Town Munchies",
      techStack: ["React.js", "Node.js", "MongoDB", "Firebase"],
      description: "Food review platform with $regex search, full CRUD, and secure social auth for discovering local favorites.",
      demoImage: "https://i.ibb.co.com/mrgsh0vY/townmunchies.png",
      live: "https://local-food-lovers-networ-7d10e.web.app/",
      client: "https://github.com/joyassroy/Local-Food-Lovers-Network-client-side.git",
      server: "https://github.com/joyassroy/Local-Food-Lovers-Network-server-side.git",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Green Earth",
      techStack: ["JS", "HTML", "Tailwind"],
      description: "A clean and modern environmental awareness website focusing on high-speed performance and minimalist design.",
      demoImage: "green-earth.png",
      live: "https://joyassroy.github.io/green-earth/",
      repo: "https://github.com/joyassroy/green-earth.git",
      color: "from-teal-600 to-emerald-400"
    }
  ];

  // Pagination Logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden bg-transparent">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]"></div>
        </motion.div>

        {/* Projects Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[550px]">
          <AnimatePresence mode="wait">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-[2.5rem] overflow-hidden bg-white/40 dark:bg-white/[0.03] backdrop-blur-3xl border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-500 shadow-xl"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                     <a href={project.live} target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 transition-all"><Globe size={20} /></a>
                     <a href={project.client || project.repo} target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 transition-all"><Github size={20} /></a>
                  </div>
                  <img src={project.demoImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-black px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="mt-auto flex flex-col gap-3">
                    <a href={project.live} target="_blank" className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all active:scale-95">
                      Live Demo <ExternalLink size={14} />
                    </a>
                    
                    <div className="flex gap-2">
                       {project.client ? (
                         <>
                           <a href={project.client} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold hover:bg-cyan-500 hover:text-white transition-all">Client</a>
                           <a href={project.server} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold hover:bg-cyan-500 hover:text-white transition-all">Server</a>
                         </>
                       ) : (
                         <a href={project.repo} target="_blank" className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold hover:bg-cyan-500 hover:text-white transition-all"><Github size={14}/> Repository</a>
                       )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-600 dark:text-gray-300 disabled:opacity-30 hover:bg-cyan-500 hover:text-white transition-all shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === i + 1 ? "bg-cyan-500 w-8" : "bg-gray-400"}`}
                />
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-600 dark:text-gray-300 disabled:opacity-30 hover:bg-cyan-500 hover:text-white transition-all shadow-xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}