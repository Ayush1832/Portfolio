import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt, FaChevronDown } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 lg:py-0">

      {/* ── Main content ── */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 w-full">

        {/* Left — text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Status badge */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                       glass-card text-sm font-medium text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            Ayush{" "}
            <span className="gradient-text">Nayak</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="text-xl lg:text-2xl font-light text-slate-500 mb-6 tracking-wide"
          >
            Blockchain Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-slate-400 leading-relaxed max-w-xl mb-10 text-[15px]"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <a
              href="https://drive.google.com/file/d/1yiD3pKjhFgPpSoGtfhLyGoFBJSZa5j9Z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold
                         hover:from-purple-500 hover:to-violet-500 hover:-translate-y-0.5
                         transition-all duration-300 shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60"
            >
              <FaFileAlt className="text-xs" />
              View Resume
            </a>

            <a
              href="https://github.com/Ayush1832"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         glass-card text-slate-300 text-sm font-semibold
                         hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ayushh-nayak/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         glass-card text-slate-300 text-sm font-semibold
                         hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right — profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="relative">
            {/* Outer ambient glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 opacity-20 blur-3xl scale-[1.4] pointer-events-none" />

            {/* Gradient ring */}
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-purple-500 via-violet-500 to-cyan-500 opacity-70 blur-[3px]" />

            {/* Photo */}
            <div className="relative w-60 h-60 lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden border-2 border-white/10">
              <img
                src={profilePic}
                alt="Ayush Nayak"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>

            {/* Slow-rotating orbit ring */}
            <div className="absolute -inset-5 rounded-full border border-dashed border-purple-500/25 animate-spin-slow pointer-events-none" />

            {/* Orbit dots */}
            <div className="absolute top-3 -right-2 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />
            <div className="absolute bottom-5 -left-3 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/60" />
            <div className="absolute -bottom-3 right-8 w-2 h-2 rounded-full bg-violet-300 shadow-md shadow-violet-300/60" />
          </div>
        </motion.div>

      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-700"
      >
        <span className="text-[9px] tracking-[0.22em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown className="text-xs text-slate-600" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
