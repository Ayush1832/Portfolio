import { RiReactjsLine } from "react-icons/ri";
import { SiSolidity } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiEthers } from "react-icons/si";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y:[15, -15],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-200}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {/* Solidity */}
        <motion.div
        variants={iconVariants(2.5)}
        initial= "initial"
        animate= "animate"
        className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <SiSolidity className="text-7xl text-gray-500" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Solidity
          </span>
        </motion.div>

        {/* JavaScript */}
        <motion.div 
        variants={iconVariants(3)}
        initial= "initial"
        animate= "animate"
        className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <FaJsSquare className="text-7xl text-yellow-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            JavaScript
          </span>
        </motion.div>

        {/* React */}
        <motion.div 
        variants={iconVariants(5)}
        initial= "initial"
        animate= "animate"
        className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            React.js
          </span>
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial= "initial"
        animate= "animate"
        className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <SiEthers className="text-7xl text-gray-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Ethers.js
          </span>
        </motion.div>

        {/* Node.js */}
        <motion.div
        variants={iconVariants(2.5)}
        initial= "initial"
        animate= "animate"
        className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Node.js
          </span>
        </motion.div>

        {/* MongoDB */}
        <motion.div
        variants={iconVariants(6)}
        initial= "initial"
        animate= "animate"
        className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            MongoDB
          </span>
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default Technologies;
