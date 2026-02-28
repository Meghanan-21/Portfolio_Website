import React, { useState } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "../components/AceternityUI";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "encrypting" | "transmitting" | "done"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("encrypting");
    setTimeout(() => setStatus("transmitting"), 1200);
    setTimeout(() => setStatus("done"), 2800);
    setTimeout(() => setStatus("idle"), 6000);
  };

  const nameValid = formState.name.trim().length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative py-20 lg:py-40 px-6"
    >
      <Spotlight className="opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column — Info */}
          <div className="space-y-10">
            <div>
              <span className="text-neonBlue text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
                Communication
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-6">
                ESTABLISH
                <br />
                <span className="text-white/40">UPLINK.</span>
              </h1>
              <p className="text-white/40 text-lg leading-relaxed max-w-md">
                Ready to build the next generation of digital infrastructure?
                Reach out and let's start a transmission.
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-neonBlue">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">
                  Currently in Los Angeles, CA
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-green-400">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">
                  Available for freelance &amp; remote work
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-electricPurple">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">
                  Working in Pacific Time (PT)
                </span>
              </div>
            </div>

            <p className="text-white/30 text-sm">
              Currently available for new projects and collaborations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-neonBlue hover:border-neonBlue/30 transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column — Form Card */}
          <div className="relative">
            {/* Outer glow border — soft translucent white */}
            <div className="absolute -inset-[1px] rounded-[2rem] bg-transparent  blur-[2px]" />

            <div className="relative rounded-[2rem] p-8 md:p-12 border border-white/[0.06] overflow-hidden bg-transparent backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              {/* Subtle corner shimmer */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/[0.04] rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/[0.03] rounded-full blur-[80px] pointer-events-none" />

              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 ml-1">
                      Name_ID
                    </label>
                    {nameValid && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-white/50 text-sm"
                      >
                        &#10003;
                      </motion.span>
                    )}
                  </div>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Identify yourself"
                    className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-xl py-4 px-5 outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-white font-light text-base placeholder:text-white/15"
                  />
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 ml-1">
                    Email_Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="address@nexus.com"
                    className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-xl py-4 px-5 outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-white font-light text-base placeholder:text-white/15"
                  />
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 ml-1">
                    Data_Packet
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Compose your message here..."
                    className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-xl py-4 px-5 outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-white font-light text-base resize-none placeholder:text-white/15"
                  />
                </div>

                {/* Submit Button */}
                <div className="relative group">
                  <div className="absolute -inset-[1px] rounded-2xl bg-white/[0.1] opacity-70 group-hover:opacity-100 transition-opacity blur-[1px]" />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="relative w-full py-5 rounded-2xl bg-transparent backdrop-blur-1xl border border-white/[0.08] text-white font-display font-bold text-lg tracking-tight hover:bg-white/[0.08] transition-all z-10"
                  >
                    Send Secure Transmission
                  </motion.button>
                </div>

                {/* Status Bar */}
                <div className="pt-2">
                  {/* Progress bar */}
                  <div className="h-[2px] w-full bg-white/[0.05] rounded-full overflow-hidden mb-4">
                    <motion.div
                      className="h-full bg-gradient-to-r from-white/30 via-white/50 to-white/30"
                      initial={{ width: "0%" }}
                      animate={{
                        width:
                          status === "idle"
                            ? "0%"
                            : status === "encrypting"
                              ? "35%"
                              : status === "transmitting"
                                ? "75%"
                                : "100%",
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-4 text-[10px] tracking-widest uppercase">
                    <span
                      className={
                        status === "encrypting"
                          ? "text-white/60"
                          : status !== "idle"
                            ? "text-white/30"
                            : "text-white/15"
                      }
                    >
                      ··· Encrypting...
                    </span>
                    <span className="text-white/10">&mdash;</span>
                    <span
                      className={
                        status === "transmitting"
                          ? "text-white/60"
                          : status === "done"
                            ? "text-white/30"
                            : "text-white/15"
                      }
                    >
                      Transmitting...
                    </span>
                    <span
                      className={`flex items-center gap-1 ${status === "done" ? "text-white/60" : "text-white/15"}`}
                    >
                      &#10003; Connection Established.
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-20 text-center lg:text-left">
          <p className="text-white/30 text-sm">
            Currently available for new projects and collaborations.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
