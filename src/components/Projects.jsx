import { PROJECTS } from "../constants";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* ─── Spotlight card ──────────────────────────────────────────── */
function SpotlightCard({ project, index, featured = false, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = featured ? "420px" : "300px";
  const spotlight = useMotionTemplate`radial-gradient(${radius} circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.12), transparent 80%)`;

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 36 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.07, 0.42) }}
      viewport={{ once: true }}
      className={`relative group rounded-2xl overflow-hidden flex flex-col
                  border border-white/[0.07] bg-[#070411]
                  hover:border-purple-500/30
                  transition-colors duration-500 ${className}`}
    >
      {/* Mouse-following spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: spotlight }}
      />

      {/* ── Image ── */}
      <div
        className={`relative flex-shrink-0 overflow-hidden ${
          featured ? "h-60 lg:h-72" : "h-44"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        />
        {/* bottom fade into card bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070411] via-[#070411]/20 to-transparent" />

        {/* Index badge */}
        <span className="absolute top-3 left-3 z-20 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-purple-400 text-[10px] font-bold tracking-wide">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* ── Quick-action icons — fly down from top on hover ── */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              className="w-8 h-8 rounded-lg bg-purple-600/90 backdrop-blur-sm border border-purple-400/20
                         flex items-center justify-center text-white
                         opacity-0 -translate-y-3
                         group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-300
                         hover:bg-purple-500 hover:scale-110"
            >
              <FaExternalLinkAlt size={9} />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-8 h-8 rounded-lg bg-black/70 backdrop-blur-sm border border-white/[0.12]
                         flex items-center justify-center text-slate-300
                         opacity-0 -translate-y-3
                         group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-300 delay-[60ms]
                         hover:bg-white/10 hover:text-white hover:scale-110"
            >
              <FaGithub size={10} />
            </a>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="relative z-20 flex flex-col flex-1 p-5 lg:p-6">
        <h3
          className={`font-semibold text-white group-hover:text-purple-300
                      transition-colors duration-300 mb-2 leading-snug
                      ${featured ? "text-xl lg:text-2xl" : "text-base"}`}
        >
          {project.title}
        </h3>

        <p
          className={`text-slate-500 text-sm leading-relaxed mb-4 flex-1
                      ${featured ? "" : "line-clamp-3"}`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {(featured
            ? project.technologies
            : project.technologies.slice(0, 4)
          ).map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
          {!featured && project.technologies.length > 4 && (
            <span className="tech-tag">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────────────── */
const Projects = () => (
  <section id="projects-section" className="py-24 border-b border-white/[0.05]">
    {/* Heading */}
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="section-label">What I've Built</span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white">
        Featured <span className="gradient-text">Projects</span>
      </h2>
    </motion.div>

    {/*
      Bento-style 3-col grid:
        Row 1 → [Featured — 2 cols] [Card 2 — 1 col]
        Row 2 → [Card 3] [Card 4] [Card 5]
        Row 3 → [Card 6] [Card 7] [Card 8]
    */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* Featured */}
      <SpotlightCard
        project={PROJECTS[0]}
        index={0}
        featured
        className="sm:col-span-2 lg:col-span-2"
      />

      {/* Card 2 */}
      <SpotlightCard project={PROJECTS[1]} index={1} />

      {/* Cards 3–8 */}
      {PROJECTS.slice(2).map((project, i) => (
        <SpotlightCard key={i + 2} project={project} index={i + 2} />
      ))}
    </div>
  </section>
);

export default Projects;
