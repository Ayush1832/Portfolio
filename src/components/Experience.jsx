import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience-section" className="py-24 border-b border-white/[0.05]">
      {/* Heading */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="section-label">My Journey</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[7px] lg:left-[207px] top-2 bottom-2 w-px
                     bg-gradient-to-b from-transparent via-purple-500/25 to-transparent"
        />

        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="relative flex gap-0 lg:gap-0 mb-12 last:mb-0">

            {/* Date column — desktop */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="hidden lg:flex w-[215px] flex-shrink-0 pt-[22px] pr-10 justify-end"
            >
              <span className="text-purple-400/70 text-xs font-medium text-right leading-relaxed">
                {experience.year}
              </span>
            </motion.div>

            {/* Timeline dot — pulsing */}
            <div className="absolute left-0 lg:left-[207px] top-[22px] -translate-x-1/2 z-10">
              <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 shadow-md shadow-purple-500/50 ring-4 ring-purple-500/15">
                <motion.div
                  className="absolute inset-0 rounded-full bg-purple-400/60"
                  animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.6, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Card */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="ml-8 lg:ml-10 flex-1"
            >
              <div
                className="glass-card rounded-2xl p-6
                           border-l-2 border-l-purple-500/25
                           hover:border-l-purple-400/60
                           transition-colors duration-300"
              >
                {/* Date — mobile */}
                <span className="lg:hidden inline-block text-purple-400/80 text-xs font-medium mb-3">
                  {experience.year}
                </span>

                {/* Role + company */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-white font-semibold text-base lg:text-lg leading-snug">
                    {experience.role}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium w-fit whitespace-nowrap flex-shrink-0">
                    {experience.company}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-wrap mb-4">
                  {experience.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
