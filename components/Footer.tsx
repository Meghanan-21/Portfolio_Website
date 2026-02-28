
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full pt-20 pb-10 px-10 border-t border-white/5 bg-midnight/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-display font-bold tracking-tighter">NEXUS_OS <span className="text-white/20">V.3.1</span></h2>
          <p className="text-white/40 text-sm">Crafted with passion by a digital engineer.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-white/40 hover:text-neonBlue transition-colors">GitHub</a>
          <a href="#" className="text-white/40 hover:text-electricPurple transition-colors">LinkedIn</a>
          <a href="#" className="text-white/40 hover:text-softOrange transition-colors">X (Twitter)</a>
        </div>

        <div className="text-right">
            <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Built for the future</p>
            <p className="text-white/40 text-sm">© {new Date().getFullYear()} NEXUS ARCHITECT</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neonBlue/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
