import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Project_Hyperion",
    category: "Web",
    year: "2024",
    desc: "A high-speed trading dashboard built with React and WebSockets.",
  },
  {
    id: 2,
    title: "Neural_Nexus",
    category: "AI",
    year: "2023",
    desc: "Interface for complex neural network visualizations.",
  },
  {
    id: 3,
    title: "Vortex_OS",
    category: "OS",
    year: "2024",
    desc: "Conceptual browser-based operating system architecture.",
  },
  {
    id: 4,
    title: "Synth_Studio",
    category: "Web",
    year: "2023",
    desc: "Web-based modular synthesizer using Web Audio API.",
  },
  {
    id: 5,
    title: "Ghost_Net",
    category: "Security",
    year: "2022",
    desc: "Cybersecurity monitoring platform with real-time alerts.",
  },
  {
    id: 6,
    title: "Nova_Market",
    category: "Web",
    year: "2024",
    desc: "Next-gen e-commerce with 3D product integration.",
  },
];

const ProjectCard = ({ project }: { project: (typeof PROJECTS)[number] }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-3xl p-8 border border-white/5 h-[400px] flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
        <span className="text-[4rem] font-display font-bold text-white leading-none">
          0{project.id}
        </span>
      </div>

      <div className="relative z-10">
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/20 text-neonBlue text-[8px] font-bold tracking-widest uppercase">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full glass border border-white/10 text-white/30 text-[8px] font-bold tracking-widest uppercase">
            {project.year}
          </span>
        </div>
        <h3 className="text-3xl font-display font-bold group-hover:text-neonBlue transition-colors">
          {project.title}
        </h3>
      </div>

      <div className="relative z-10">
        <p className="text-white/40 text-sm mb-8 line-clamp-3 leading-relaxed">
          {project.desc}
        </p>
        <div className="flex gap-4">
          <button className="flex-1 py-3 rounded-xl bg-white text-midnight text-xs font-bold tracking-widest hover:bg-neonBlue hover:text-white transition-all">
            VIEW SYSTEM
          </button>
          <button className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", "WEB", "AI", "OS", "SECURITY"];

  const filteredProjects =
    filter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toUpperCase() === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 py-20 lg:py-40"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
        <div>
          <span className="text-neonBlue text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
            Archives
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none">
            CORE TRANSMISSIONS.
          </h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all ${
                filter === cat
                  ? "bg-white text-midnight shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "glass text-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
