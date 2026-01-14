import { RiReactjsLine } from "react-icons/ri";
import {
  SiSolidity,
  SiTypescript,
  SiRust,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";
import { FaJsSquare, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [15, -15],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Solidity */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSolidity className="text-7xl text-gray-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Solidity
          </span>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJsSquare className="text-7xl text-yellow-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            JavaScript
          </span>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-500" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            TypeScript
          </span>
        </motion.div>

        {/* Rust */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRust className="text-7xl text-orange-500" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Rust
          </span>
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-blue-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Python
          </span>
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            React.js
          </span>
        </motion.div>

        {/* Next.js */}
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNextdotjs className="text-7xl text-white" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Next.js
          </span>
        </motion.div>

        {/* Tailwind */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-cyan-500" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Tailwind CSS
          </span>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Node.js
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
