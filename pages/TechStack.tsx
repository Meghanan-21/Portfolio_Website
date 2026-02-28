import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "React / Next.js", level: 95, icon: "⚡" },
  { name: "TypeScript", level: 90, icon: "🛡️" },
  { name: "Node.js", level: 85, icon: "🟢" },
  { name: "Framer Motion", level: 95, icon: "💫" },
  { name: "Tailwind CSS", level: 98, icon: "🎨" },
  { name: "PostgreSQL", level: 80, icon: "🐘" },
  { name: "AWS / Cloud", level: 75, icon: "☁️" },
  { name: "Three.js", level: 82, icon: "🕸️" },
];

const SkillCard = ({
  skill,
  index,
}: {
  skill: (typeof SKILLS)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass p-8 rounded-3xl border border-white/5 relative group overflow-hidden"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl">{skill.icon}</div>
        <div className="text-neonBlue font-display font-bold text-xl">
          {skill.level}%
        </div>
      </div>
      <h3 className="text-xl font-display font-bold mb-6 tracking-tight">
        {skill.name}
      </h3>

      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="h-full bg-gradient-to-r from-neonBlue to-electricPurple"
        />
      </div>

      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity"></div>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 py-20 lg:py-40"
    >
      <div className="text-center mb-20">
        <span className="text-neonBlue text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
          The Arsenal
        </span>
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-10">
          TOOLING_OS.
        </h1>
        <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
          The curated selection of technologies I use to build robust, scalable,
          and beautiful digital systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((s, i) => (
          <SkillCard key={s.name} skill={s} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
