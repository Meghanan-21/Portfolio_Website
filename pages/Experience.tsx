import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "NEO_CYBERTECH",
    role: "Lead Architect",
    period: "2022 - PRESENT",
    desc: "Directing the engineering team for distributed cloud systems and immersive UI/UX frameworks.",
  },
  {
    company: "QUANTUM_SOLUTIONS",
    role: "Senior Developer",
    period: "2019 - 2022",
    desc: "Developed high-performance React applications and micro-frontend architectures.",
  },
  {
    company: "PIXEL_FOUNDRY",
    role: "Interactive Engineer",
    period: "2017 - 2019",
    desc: "Crafted award-winning marketing sites using Three.js and complex motion systems.",
  },
  {
    company: "VOID_LABS",
    role: "Software Intern",
    period: "2016 - 2017",
    desc: "Explored early-stage experimental web technologies and state management patterns.",
  },
];

const ExperienceItem = ({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCES)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative mb-20 last:mb-0"
    >
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <div className="hidden lg:block w-1/2 text-right">
          {index % 2 === 0 && (
            <div className="space-y-4">
              <span className="text-neonBlue font-display font-bold text-xl">
                {exp.period}
              </span>
              <h3 className="text-3xl font-display font-bold">{exp.company}</h3>
              <p className="text-white/40 max-w-sm ml-auto leading-relaxed">
                {exp.desc}
              </p>
            </div>
          )}
        </div>

        <div className="relative flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-neonBlue shadow-[0_0_15px_rgba(59,130,246,1)] z-10"></div>
          <div className="w-[1px] h-full bg-white/10 absolute top-4"></div>
        </div>

        <div className="w-full lg:w-1/2">
          {(index % 2 !== 0 || window.innerWidth < 1024) && (
            <div className="space-y-4 glass p-8 rounded-3xl border border-white/5">
              <span className="text-neonBlue font-display font-bold text-xl">
                {exp.period}
              </span>
              <h3 className="text-3xl font-display font-bold">{exp.company}</h3>
              <p className="text-neonBlue text-xs font-bold tracking-widest uppercase">
                {exp.role}
              </p>
              <p className="text-white/40 leading-relaxed">{exp.desc}</p>
            </div>
          )}
          {index % 2 === 0 && window.innerWidth >= 1024 && (
            <div className="pt-2">
              <p className="text-neonBlue text-xs font-bold tracking-widest uppercase">
                {exp.role}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 py-20 lg:py-40"
    >
      <div className="text-center mb-40">
        <span className="text-neonBlue text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
          The Journey
        </span>
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-10">
          CHRONO_LOG.
        </h1>
        <p className="text-white/40 max-w-xl mx-auto">
          A progression of growth, technical challenges, and digital evolution
          across various sectors of the tech landscape.
        </p>
      </div>

      <div className="relative">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
