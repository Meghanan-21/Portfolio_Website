import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "PROJECTS", path: "/projects" },
  { name: "TECH", path: "/tech" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-6 py-4 flex justify-center`}
      >
        <div
          className={`
          flex items-center justify-between md:justify-start gap-4 md:gap-8 w-full md:w-auto px-6 md:px-8 py-3 rounded-full border border-white/10 transition-all duration-500
          ${scrolled || mobileOpen ? "bg-midnight/60 backdrop-blur-xl shadow-2xl" : "bg-transparent border-transparent"}
        `}
        >
          {/* Brand/Logo */}
          <Link
            to="/"
            className="text-xl font-display font-bold text-white group flex items-center gap-2"
          >
            <span className="text-neonBlue">&lt;</span>
            NEXUS
            <span className="text-electricPurple">/&gt;</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-xs tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors duration-300 group py-1"
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neonBlue rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Action Button */}
          <Link to="/contact" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-white text-midnight text-xs font-bold tracking-wider hover:bg-neonBlue hover:text-white transition-colors duration-500"
            >
              HIRE ME
            </motion.button>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-full"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-white rounded-full origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-[2px] bg-white rounded-full origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-midnight/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-display font-bold tracking-[0.25em] transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-neonBlue"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: NAV_ITEMS.length * 0.07, duration: 0.3 }}
              className="mt-4"
            >
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <button className="px-8 py-3 rounded-full bg-white text-midnight text-sm font-bold tracking-widest hover:bg-neonBlue hover:text-white transition-colors duration-500">
                  HIRE ME
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
