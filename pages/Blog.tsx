import React from "react";
import { motion } from "framer-motion";

const POSTS = [
  {
    id: 1,
    title: "The Future of Motion Design in Web 3.0",
    date: "FEB 12, 2024",
    category: "Design",
    excerpt:
      "Exploring how physics-based animations are changing user expectations.",
  },
  {
    id: 2,
    title: "Optimizing Next.js for Performance",
    date: "JAN 28, 2024",
    category: "Dev",
    excerpt:
      "A deep dive into server components and streaming UI architectures.",
  },
  {
    id: 3,
    title: "Why I Switched to NeoVim for Production",
    date: "JAN 15, 2024",
    category: "Workflow",
    excerpt:
      "Increasing efficiency through terminal-based developer environments.",
  },
  {
    id: 4,
    title: "State Management in Modern Apps",
    date: "DEC 22, 2023",
    category: "Dev",
    excerpt: "Zustand vs Redux Toolkit: What to choose for your next project.",
  },
];

const BlogCard = ({ post }: { post: (typeof POSTS)[number] }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-full group cursor-pointer"
  >
    <div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-neonBlue text-[10px] font-bold tracking-[0.3em] uppercase">
          {post.category}
        </span>
        <span className="text-white/30 text-[10px] tracking-widest">
          {post.date}
        </span>
      </div>
      <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-neonBlue transition-colors tracking-tight">
        {post.title}
      </h3>
      <p className="text-white/40 text-sm leading-relaxed mb-8">
        {post.excerpt}
      </p>
    </div>
    <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
      <span className="text-xs font-bold tracking-widest uppercase">
        Read Article
      </span>
      <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-neonBlue transition-all"></div>
    </div>
  </motion.div>
);

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 py-20 lg:py-40"
    >
      <div className="mb-20">
        <span className="text-neonBlue text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
          Transmissions
        </span>
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none">
          LOGS & THOUGHTS.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {POSTS.map((p) => (
          <BlogCard key={p.id} post={p} />
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
