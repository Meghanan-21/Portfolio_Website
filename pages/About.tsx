import React from "react";
import { motion } from "framer-motion";
import { TextRevealCard } from "../components/AceternityUI";

const StatCard = ({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="p-8 glass rounded-3xl border border-white/5 text-center"
  >
    <div className="text-4xl md:text-5xl font-display font-bold text-neonBlue mb-2">
      {value}
    </div>
    <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
      {label}
    </div>
  </motion.div>
);

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 py-20 lg:py-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-40">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-neonBlue text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
              The Bio
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-10">
              CRAFTING <br /> THE VOID.
            </h1>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light">
              <p>
                I am a Senior Creative Developer with over 8 years of experience
                in architecting high-end digital solutions. My work sits at the
                intersection of performance engineering and artistic expression.
              </p>
              <p>
                I believe that code is the structural steel of the 21st century.
                My mission is to build digital environments that don't just
                solve problems, but inspire the people who use them.
              </p>
            </div>
          </motion.div>

          <TextRevealCard
            text="Hover to see the motive"
            revealText="IMAGINE. BUILD. BREATHE."
          />
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] glass rounded-3xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/20 to-electricPurple/20 animate-pulse-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/2 h-1/2 border border-white/10 rounded-full animate-spin transition-all duration-[10s]"></div>
              <div className="absolute w-1/3 h-1/3 border-2 border-neonBlue rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard label="Years Experience" value="08+" delay={0.1} />
        <StatCard label="Core Projects" value="45" delay={0.2} />
        <StatCard label="Coffee Units" value="2.4k" delay={0.3} />
        <StatCard label="Lines Optimized" value="1M+" delay={0.4} />
      </div>
    </motion.div>
  );
};

export default About;
