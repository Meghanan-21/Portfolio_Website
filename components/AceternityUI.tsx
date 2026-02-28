
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Spotlight Component
 */
export const Spotlight = ({ className }: { className?: string }) => {
  return (
    <div className={`pointer-events-none absolute -top-40 left-0 w-full h-[150%] ${className}`}>
      <div className="absolute inset-0 bg-transparent animate-spotlight opacity-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]"></div>
    </div>
  );
};

/**
 * Text Reveal Effect Component
 */
export const TextRevealCard = ({ text, revealText, className }: { text: string; revealText: string; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-24 w-full glass rounded-2xl flex items-center justify-center overflow-hidden cursor-default ${className}`}
    >
      <div className="relative z-10 text-xl font-display font-medium text-white/40 tracking-wider transition-opacity duration-500">
        {text}
      </div>
      
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center bg-midnight/80 pointer-events-none"
        animate={{
          clipPath: isHovered 
            ? `circle(120px at ${mousePosition.x}px ${mousePosition.y}px)` 
            : `circle(0px at ${mousePosition.x}px ${mousePosition.y}px)`
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <span className="text-xl font-display font-bold text-neonBlue drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
          {revealText}
        </span>
      </motion.div>
    </div>
  );
};

/**
 * Animated Gradient Button
 */
export const HoverBorderGradient = ({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group p-[2px] rounded-full bg-gradient-to-r from-neonBlue via-electricPurple to-softOrange transition-all duration-500 hover:scale-105 active:scale-95 ${className}`}
    >
      <div className="relative px-6 py-2 rounded-full bg-midnight hover:bg-transparent transition-all duration-500 flex items-center justify-center gap-2">
        {children}
      </div>
    </button>
  );
};

/**
 * Hero Spotlight Background
 */
export const BackgroundGradientAnimation = () => {
    return (
        <div className="absolute inset-0 overflow-hidden z-[-1] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-midnight"></div>
            <motion.div 
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-neonBlue/20 blur-[100px]"
            />
            <motion.div 
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-electricPurple/20 blur-[120px]"
            />
        </div>
    )
}

/**
 * Scroll Indicator component used in landing pages
 */
export const ScrollIndicator = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
  >
    <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 via-neonBlue to-transparent relative overflow-hidden">
      <motion.div 
        animate={{ y: [0, 48, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-4 bg-white"
      />
    </div>
  </motion.div>
);
