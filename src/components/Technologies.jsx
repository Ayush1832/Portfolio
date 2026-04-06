import { RiReactjsLine } from "react-icons/ri";
import {
  SiSolidity,
  SiTypescript,
  SiRust,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiChainlink,
  SiIpfs,
  SiGraphql,
  SiEthereum,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import {
  FaJsSquare,
  FaNodeJs,
  FaHardHat,
  FaShieldAlt,
  FaFlask,
} from "react-icons/fa";
import { motion } from "framer-motion";

const techGroups = [
  {
    label: "Languages",
    cols: 5,
    items: [
      { icon: <SiSolidity />,    name: "Solidity",    color: "text-gray-300" },
      { icon: <FaJsSquare />,    name: "JavaScript",  color: "text-yellow-400" },
      { icon: <SiTypescript />,  name: "TypeScript",  color: "text-blue-400" },
      { icon: <SiRust />,        name: "Rust",        color: "text-orange-500" },
      { icon: <SiPython />,      name: "Python",      color: "text-blue-300" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    cols: 5,
    items: [
      { icon: <RiReactjsLine />, name: "React",       color: "text-cyan-400" },
      { icon: <SiNextdotjs />,   name: "Next.js",     color: "text-white" },
      { icon: <FaNodeJs />,      name: "Node.js",     color: "text-green-400" },
      { icon: <SiEthereum />,    name: "Ethers.js",   color: "text-indigo-400" },
      { icon: <SiTailwindcss />, name: "Tailwind",    color: "text-cyan-500" },
    ],
  },
  {
    label: "Web3 Dev Tools",
    cols: 5,
    items: [
      { icon: <FaHardHat />,     name: "Hardhat",     color: "text-yellow-500" },
      { icon: <FaFlask />,       name: "Foundry",     color: "text-orange-400" },
      { icon: <SiChainlink />,   name: "Chainlink",   color: "text-blue-500" },
      { icon: <FaShieldAlt />,   name: "OpenZeppelin",color: "text-purple-400" },
      { icon: <SiIpfs />,        name: "IPFS",        color: "text-teal-400" },
    ],
  },
  {
    label: "Infra & Tooling",
    cols: 4,
    items: [
      { icon: <SiGraphql />,     name: "The Graph",   color: "text-pink-500" },
      { icon: <SiPostgresql />,  name: "PostgreSQL",  color: "text-sky-400" },
      { icon: <SiDocker />,      name: "Docker",      color: "text-blue-400" },
      { icon: <FaNodeJs />,      name: "REST APIs",   color: "text-green-300" },
    ],
  },
];

/* Map cols count → Tailwind grid class */
const colsClass = {
  4: "grid-cols-2 sm:grid-cols-4",
  5: "grid-cols-3 sm:grid-cols-5",
};

const Technologies = () => (
  <section className="py-24 border-b border-white/[0.05]">
    {/* Heading */}
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="section-label">What I Work With</span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white">
        Tech <span className="gradient-text">Stack</span>
      </h2>
    </motion.div>

    <div className="max-w-3xl mx-auto space-y-12">
      {techGroups.map((group, gi) => (
        <div key={gi}>
          {/* Group label + rule */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-slate-600 text-[11px] font-semibold uppercase tracking-[0.18em] whitespace-nowrap">
              {group.label}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/[0.07] to-transparent" />
          </motion.div>

          {/* Icon grid */}
          <div className={`grid gap-4 ${colsClass[group.cols]}`}>
            {group.items.map((tech, i) => (
              <motion.div
                key={tech.name}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 22 }}
                transition={{ duration: 0.4, delay: i * 0.065 + gi * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -7, scale: 1.06 }}
                className="glass-card rounded-xl p-4 lg:p-5 flex flex-col items-center justify-center gap-3 cursor-default group"
              >
                <span
                  className={`text-[2.4rem] ${tech.color} transition-all duration-300
                              group-hover:drop-shadow-[0_0_16px_currentColor]`}
                >
                  {tech.icon}
                </span>
                <span className="text-slate-500 text-[11px] font-medium text-center leading-tight group-hover:text-slate-200 transition-colors duration-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Technologies;
