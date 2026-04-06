import Lottie from "lottie-react";
import blockchainAnimation from "../assets/animation.json";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years of\nExperience" },
  { value: "4", label: "Companies\nWorked At" },
  { value: `15+`, label: "Projects\nShipped" },
];

/* Render each paragraph of ABOUT_TEXT as its own <p> */
const AboutParagraphs = () =>
  ABOUT_TEXT.split("\n\n").map((para, i) => (
    <p key={i} className="text-slate-400 leading-relaxed text-[15px]">
      {para}
    </p>
  ));

const About = () => (
  <section id="about-section" className="py-24 border-b border-white/[0.05]">
    {/* Heading */}
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="section-label">Who I Am</span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white">
        About <span className="gradient-text">Me</span>
      </h2>
    </motion.div>

    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
      {/* Lottie animation */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center lg:sticky lg:top-28"
      >
        <div className="relative w-full max-w-sm">
          <div className="absolute inset-0 bg-purple-600/10 rounded-full blur-3xl scale-75 pointer-events-none" />
          <Lottie animationData={blockchainAnimation} loop className="relative w-full" />
        </div>
      </motion.div>

      {/* Content column */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 60 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex flex-col gap-5"
      >
        {/* Multi-paragraph text card */}
        <div className="glass-card rounded-2xl p-7 lg:p-8">
          <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6" />
          <div className="flex flex-col gap-4">
            <AboutParagraphs />
          </div>

          {/* Specialisation chips */}
          <div className="flex flex-wrap gap-2 mt-7 pt-6 border-t border-white/[0.06]">
            {[
              "DeFi Protocols",
              "Account Abstraction",
              "Smart Contract Security",
              "Cross-chain",
              "Gas Optimization",
              "Web3 Full-stack",
            ].map((item) => (
              <span key={item} className="tech-tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <div className="text-2xl lg:text-3xl font-bold gradient-text leading-none mb-1.5">
                {stat.value}
              </div>
              <div className="text-slate-600 text-[11px] leading-tight whitespace-pre-line">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
