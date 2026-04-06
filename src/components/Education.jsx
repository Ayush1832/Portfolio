import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="py-24 border-b border-white/[0.05]">
      {/* Section header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="section-label">Academic Background</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          <span className="gradient-text">Education</span>
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/20 flex items-center justify-center">
                <FaGraduationCap className="text-2xl text-purple-400" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-white font-semibold text-lg leading-snug">
                    Veer Surendra Sai University of Technology, Burla
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium w-fit">
                    2024
                  </span>
                </div>

                <p className="text-purple-400 text-sm font-medium mb-1">
                  B.Tech in Electrical Engineering
                </p>

                <p className="text-slate-500 text-sm">
                  Bachelor of Technology, Graduated 2024
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
