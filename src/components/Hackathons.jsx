import { HACKATHONS } from "../constants";
import { motion } from "framer-motion";
import { FaTrophy, FaGithub } from "react-icons/fa";

const Hackathons = () => (
  <section id="hackathons-section" className="py-24 border-b border-white/[0.05]">
    {/* Heading */}
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="section-label">Recognition</span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white">
        Hackathon <span className="gradient-text">Wins</span>
      </h2>
    </motion.div>

    <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
      {HACKATHONS.map((item, index) => (
        <motion.div
          key={item.event}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center">
                <FaTrophy className="text-amber-300" />
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 text-xs font-semibold">
                {item.result} · {item.prize}
              </span>
            </div>

            <h3 className="text-white font-semibold text-lg leading-snug mb-1">
              {item.event}
            </h3>
            <p className="text-purple-400 text-sm font-medium mb-3">{item.project}</p>
            <p className="text-slate-500 text-sm leading-relaxed flex-1">
              {item.description}
            </p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-slate-400 hover:text-white transition-colors duration-200 w-fit"
            >
              <FaGithub /> View project
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Hackathons;
