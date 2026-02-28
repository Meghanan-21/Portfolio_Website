import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Spotlight,
  HoverBorderGradient,
  ScrollIndicator,
} from "../components/AceternityUI";
import MagneticButton from "../components/MagneticButton";
import { Link } from "react-router-dom";

const Home = () => {
  // Use Variants type to ensure proper type checking for Framer Motion properties
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  // Explicitly typing ease as a tuple to avoid "number[]" assignment errors
  const itemVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative w-full overflow-hidden"
    >
      <Spotlight />

      <section className="h-screen w-full flex flex-col items-center justify-center px-4 relative">
        <motion.div variants={itemVariants} className="mb-8">
          <div className="px-4 py-1.5 rounded-full glass border border-white/10 text-white/50 text-[10px] font-bold tracking-[0.5em] uppercase">
            System Online // V3.1.2
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-[10rem] font-display font-bold tracking-tighter leading-none text-center mb-8"
        >
          <span className="block">DIGITAL</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">
            ARCHITECT
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-center text-white/40 text-sm md:text-lg font-light tracking-wide mb-12"
        >
          Building immersive digital experiences where architecture meets code.
          Specializing in high-performance web systems and aesthetic motion
          interfaces.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-6 items-center">
          <Link to="/projects">
            <MagneticButton>
              <HoverBorderGradient className="text-[10px] font-bold tracking-[0.3em] uppercase">
                Explore Core
              </HoverBorderGradient>
            </MagneticButton>
          </Link>
          <Link to="/about">
            <MagneticButton strength={0.2}>
              <button className="text-white/30 hover:text-white transition-colors text-[10px] tracking-[0.3em] uppercase underline underline-offset-8">
                Learn Philosophy
              </button>
            </MagneticButton>
          </Link>
        </motion.div>

        <ScrollIndicator />
      </section>

      <section className="py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-[0.9]">
              ENGINEERING <br />{" "}
              <span className="text-neonBlue">THE FUTURE.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-md">
              A collection of curated experiments and commercial products
              focusing on performance, accessibility, and visual storytelling.
            </p>
            <Link to="/projects" className="inline-block group">
              <span className="text-sm font-bold tracking-widest text-white/80 group-hover:text-neonBlue transition-colors">
                SEE ALL TRANSMISSIONS &rarr;
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video glass rounded-3xl relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-neonBlue text-[10px] font-bold tracking-[0.5em] uppercase mb-2">
                Featured Project
              </p>
              <h3 className="text-2xl font-display font-bold">
                Project_Helios
              </h3>
            </div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-6 py-2 rounded-full border border-white text-xs font-bold tracking-widest">
                VIEW SYSTEM
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
